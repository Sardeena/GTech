import { NextRequest, NextResponse } from 'next/server';
import crypto from 'node:crypto';
import {
  checkRateLimit,
  validateInquiryInput,
  saveInquiry,
  getInquiryCount,
} from '@/lib/inquiries-store';

export async function POST(req: NextRequest) {
  try {
    const rawIp =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      req.headers.get('x-real-ip') ||
      '127.0.0.1';

    const ipHash = crypto.createHash('sha256').update(rawIp).digest('hex').substring(0, 16);

    // Rate limiting check
    const rateCheck = checkRateLimit(ipHash);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many submissions received. Please wait a few minutes before submitting again.',
        },
        { status: 429 }
      );
    }

    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, error: 'Malformed JSON payload.' },
        { status: 400 }
      );
    }

    // Input validation
    const validation = validateInquiryInput(body);
    if (!validation.isValid || !validation.sanitized) {
      return NextResponse.json(
        {
          success: false,
          error: 'Please correct the highlighted fields.',
          fields: validation.errors,
        },
        { status: 400 }
      );
    }

    // Persist inquiry
    const persistResult = await saveInquiry(validation.sanitized, rawIp);

    if (!persistResult.success || !persistResult.record) {
      return NextResponse.json(
        {
          success: false,
          error: persistResult.error || 'Unable to store inquiry.',
        },
        { status: persistResult.error?.includes('matching inquiry was recently') ? 409 : 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        inquiryId: persistResult.record.id,
        receivedAt: persistResult.record.createdAt,
        message: 'Your inquiry has been received and stored in our engineering review queue.',
        storageBackend: persistResult.record.storageBackend,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error('Unhandled error in /api/inquiries:', err);
    return NextResponse.json(
      {
        success: false,
        error: 'An internal server error occurred while processing your inquiry.',
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const count = await getInquiryCount();
    return NextResponse.json({
      status: 'active',
      endpoint: '/api/inquiries',
      persistence: process.env.DATABASE_URL ? 'postgresql' : 'local_json_file',
      recordedCount: count,
    });
  } catch {
    return NextResponse.json({ status: 'error' }, { status: 500 });
  }
}
