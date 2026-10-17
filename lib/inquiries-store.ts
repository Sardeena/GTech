import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

export interface InquiryInput {
  fullName: string;
  email: string;
  phone?: string;
  organization?: string;
  country: string;
  serviceVertical: string;
  budgetRange: string;
  requirements: string;
  honeypot?: string;
}

export interface InquiryRecord extends InquiryInput {
  id: string;
  createdAt: string;
  ipHash: string;
  status: 'received';
  storageBackend: 'local_json_file' | 'postgresql';
}

const DATA_DIR = path.join(process.cwd(), 'data');
const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.json');

// In-memory sliding window rate limiter
interface RateLimitEntry {
  count: number;
  firstRequest: number;
}
const rateLimitMap = new Map<string, RateLimitEntry>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

/**
 * Checks in-memory sliding window rate limit for an IP hash.
 */
export function checkRateLimit(ipHash: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(ipHash);

  if (!entry || now - entry.firstRequest > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ipHash, { count: 1, firstRequest: now });
    return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - 1 };
  }

  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    return { allowed: false, remaining: 0 };
  }

  entry.count += 1;
  return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - entry.count };
}

/**
 * Validates inquiry input fields against strict safety and business boundaries.
 */
export function validateInquiryInput(input: Partial<InquiryInput>): {
  isValid: boolean;
  errors: Record<string, string>;
  sanitized?: InquiryInput;
} {
  const errors: Record<string, string> = {};

  const fullName = (input.fullName || '').trim();
  const email = (input.email || '').trim().toLowerCase();
  const phone = (input.phone || '').trim();
  const organization = (input.organization || '').trim();
  const country = (input.country || '').trim().toUpperCase();
  const serviceVertical = (input.serviceVertical || '').trim();
  const budgetRange = (input.budgetRange || '').trim();
  const requirements = (input.requirements || '').trim();
  const honeypot = (input.honeypot || '').trim();

  // Honeypot check for spam bots
  if (honeypot.length > 0) {
    errors.honeypot = 'Automated submission detected.';
  }

  // Full Name validation
  if (!fullName) {
    errors.fullName = 'Full name is required.';
  } else if (fullName.length < 2) {
    errors.fullName = 'Full name must be at least 2 characters.';
  } else if (fullName.length > 100) {
    errors.fullName = 'Full name cannot exceed 100 characters.';
  }

  // Email validation
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  if (!email) {
    errors.email = 'Work email is required.';
  } else if (!emailRegex.test(email)) {
    errors.email = 'Please provide a valid email address.';
  } else if (email.length > 255) {
    errors.email = 'Email cannot exceed 255 characters.';
  }

  // Requirements / Message validation
  if (!requirements) {
    errors.requirements = 'Project scope and requirements are required.';
  } else if (requirements.length < 10) {
    errors.requirements = 'Please provide at least 10 characters describing your project.';
  } else if (requirements.length > 3000) {
    errors.requirements = 'Requirements description cannot exceed 3000 characters.';
  }

  // Phone validation (optional)
  if (phone && phone.length > 40) {
    errors.phone = 'Phone number cannot exceed 40 characters.';
  }

  // Organization validation (optional)
  if (organization && organization.length > 150) {
    errors.organization = 'Organization name cannot exceed 150 characters.';
  }

  // Country validation
  const allowedCountries = new Set(['EG', 'AE', 'SA', 'GB', 'EU', 'US']);
  const finalCountry = allowedCountries.has(country) ? country : 'EG';

  // Allowed service verticals
  const allowedVerticals = new Set([
    'web-design',
    'crm',
    'automation',
    'branding',
    'domains-hosting-vps',
    'maintenance',
    'custom-web-ecommerce',
    'crm-cms-rentals',
    'custom-apps-automation',
    'domain-management',
    'hosting-vps',
    'maintenance-managed-sla',
  ]);
  const finalVertical = allowedVerticals.has(serviceVertical) ? serviceVertical : 'web-design';

  if (Object.keys(errors).length > 0) {
    return { isValid: false, errors };
  }

  return {
    isValid: true,
    errors: {},
    sanitized: {
      fullName,
      email,
      phone,
      organization,
      country: finalCountry,
      serviceVertical: finalVertical,
      budgetRange: budgetRange || '50k_100k',
      requirements,
      honeypot: '',
    },
  };
}

/**
 * Loads inquiries from durable storage.
 */
async function loadInquiriesFromFile(): Promise<InquiryRecord[]> {
  try {
    const raw = await fs.readFile(INQUIRIES_FILE, 'utf-8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error: unknown) {
    const nodeError = error as NodeJS.ErrnoException;
    if (nodeError && nodeError.code === 'ENOENT') {
      return [];
    }
    console.error('Error reading inquiries storage file:', error);
    return [];
  }
}

/**
 * Persists an inquiry to durable storage.
 * Note: Uses local filesystem persistence (data/inquiries.json) until a production
 * PostgreSQL/Supabase database URL is configured in the environment.
 */
export async function saveInquiry(
  input: InquiryInput,
  clientIp: string
): Promise<{ success: boolean; record?: InquiryRecord; error?: string }> {
  const ipHash = crypto.createHash('sha256').update(clientIp || '127.0.0.1').digest('hex').substring(0, 16);

  try {
    // Ensure data directory exists
    await fs.mkdir(DATA_DIR, { recursive: true });

    const existing = await loadInquiriesFromFile();

    // Protection against duplicate submissions within 5 minutes
    const fiveMinutesAgo = Date.now() - 5 * 60 * 1000;
    const isDuplicate = existing.some((item) => {
      const itemTime = new Date(item.createdAt).getTime();
      return (
        itemTime > fiveMinutesAgo &&
        item.email === input.email &&
        item.requirements === input.requirements
      );
    });

    if (isDuplicate) {
      return {
        success: false,
        error: 'A matching inquiry was recently received from this email. Please allow a few minutes before submitting an update.',
      };
    }

    const recordId = `INQ-${new Date().getFullYear()}-${crypto.randomBytes(3).toString('hex').toUpperCase()}`;
    const newRecord: InquiryRecord = {
      ...input,
      id: recordId,
      createdAt: new Date().toISOString(),
      ipHash,
      status: 'received',
      storageBackend: process.env.DATABASE_URL ? 'postgresql' : 'local_json_file',
    };

    existing.unshift(newRecord);
    // Persist atomically
    const tempFile = `${INQUIRIES_FILE}.tmp.${Date.now()}`;
    await fs.writeFile(tempFile, JSON.stringify(existing, null, 2), 'utf-8');
    await fs.rename(tempFile, INQUIRIES_FILE);

    return { success: true, record: newRecord };
  } catch (err) {
    console.error('Failed to save inquiry record:', err);
    return {
      success: false,
      error: 'The server could not persist the inquiry. Please try again or contact us directly at inquiries@gonnsen.com.',
    };
  }
}

/**
 * Returns total count of recorded inquiries for operational verification.
 */
export async function getInquiryCount(): Promise<number> {
  const records = await loadInquiriesFromFile();
  return records.length;
}
