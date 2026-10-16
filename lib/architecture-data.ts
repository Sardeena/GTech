export interface ServiceVertical {
  id: string;
  number: string;
  title: string;
  titleAr: string;
  tagline: string;
  category: string;
  description: string;
  keyDeliverables: string[];
  techStack: string[];
  pricingEgp: string;
  pricingUsd: string;
}

export interface EcosystemSurface {
  id: string;
  name: string;
  audience: string;
  primaryPurpose: string;
  authRequirement: string;
  routes: string[];
  capabilities: string[];
}

export interface DatabaseEntityCluster {
  id: string;
  domainNumber: string;
  name: string;
  description: string;
  tables: {
    tableName: string;
    description: string;
    keyFields: { name: string; type: string; isPk?: boolean; isFk?: boolean; notes?: string }[];
  }[];
  rlsPolicySummary: string;
}

export const DESIGN_TOKENS = {
  palette: {
    graphite: '#101310',
    signalLime: '#C8FF47',
    warmOffWhite: '#EDEDE7',
    technicalMuted: '#7E8B7B',
    technicalDark: '#161B16',
    technicalBorder: '#242D25',
    technicalSurface: '#182019',
  },
  typography: {
    displayHeadline: 'clamp(2.25rem, 4.5vw, 4rem)',
    sectionHeadline: '1.75rem to 2.25rem',
    bodyText: '1rem (16px), 1.6 line-height',
    metadata: '0.8125rem (13px), tracking-wide',
    monospace: 'Tabular numerals with system mono fallback',
  },
  rhythm: {
    containerDesktop: '1360px',
    hairlineDivider: '1px solid #242D25',
    radiusScale: '4px sharp to 8px structural',
  },
};

export const SERVICES_CATALOGUE: ServiceVertical[] = [
  {
    id: 'custom-web-ecommerce',
    number: '01',
    title: 'Custom Websites & Online Stores',
    titleAr: 'مواقع الويب المخصصة والمتاجر الإلكترونية',
    tagline: 'Fast, modern websites and online shops built to convert visitors into customers.',
    category: 'Web Development',
    description: 'We build custom websites and online stores that load quickly, look great on phones, and accept payments easily in Egypt and worldwide.',
    keyDeliverables: [
      'Fast page speeds built on modern Next.js 15 for a smooth visitor experience',
      'Local payments with Paymob (cards, Meeza, mobile wallets) and Stripe for global buyers',
      'Simple content management so your team can update pages whenever you want',
      'Clean layouts designed to show up properly on Google search'
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Paymob', 'Stripe'],
    pricingEgp: 'From 45,000 EGP / project',
    pricingUsd: 'From $1,800 USD / project',
  },
  {
    id: 'crm-cms-rentals',
    number: '02',
    title: 'CRM & CMS Software Rentals',
    titleAr: 'إيجار برامج إدارة العملاء والمحتوى',
    tagline: 'Ready-to-use business software without huge upfront development costs.',
    category: 'Software Rentals',
    description: 'Rent ready-made customer management (CRM) and publishing (CMS) tools on monthly plans. We take care of server setups, automatic backups, security updates, and your custom web domain.',
    keyDeliverables: [
      'Private, separate database space so your customer records stay safe and confidential',
      'Your own web address (like portal.yourcompany.com) with secure SSL certificates',
      'Clear sales pipelines, customer history notes, and team task tracking',
      'Permission controls so team members only see what they need to'
    ],
    techStack: ['Multi-Tenant PostgreSQL', 'Node.js', 'Redis', 'Docker', 'REST / GraphQL'],
    pricingEgp: 'From 1,750 EGP / month',
    pricingUsd: 'From $65 USD / month',
  },
  {
    id: 'custom-apps-automation',
    number: '03',
    title: 'Custom Business Apps & Automation',
    titleAr: 'تطبيقات الأعمال المخصصة والأتمتة',
    tagline: 'Custom tools and automated workflows that eliminate hours of manual work.',
    category: 'Process Automation',
    description: 'We build internal company tools and connect your daily software together—saving your team time on manual data entry, order matching, inventory tracking, and billing tasks.',
    keyDeliverables: [
      'Clean company dashboards tailored to your daily operations',
      'Automatic sync between your sales channels, spreadsheets, and warehouses',
      'Ready for Egyptian Tax Authority (ETA) electronic invoice guidelines',
      'Helpful automated alerts and notifications for important company events'
    ],
    techStack: ['TypeScript', 'Next.js Server Actions', 'RabbitMQ / Redis', 'Supabase'],
    pricingEgp: 'From 55,000 EGP / project',
    pricingUsd: 'From $2,200 USD / project',
  },
  {
    id: 'domain-management',
    number: '04',
    title: 'Domain Registration & Management',
    titleAr: 'تسجيل النطاقات وإدارتها',
    tagline: 'Domain names (.com, .eg, and more) with reliable renewals and fast setup.',
    category: 'Domains & DNS',
    description: 'Register and look after your company web addresses (.com, .net, .eg, .com.eg) with protection against accidental expiry, unauthorized transfers, and website downtime.',
    keyDeliverables: [
      'Security locks to protect against unauthorized domain hijacking or transfers',
      'Fast, dependable DNS servers so your website loads quickly everywhere',
      'Privacy settings to keep your personal contact details off public spam lists',
      'Help with official paperwork for local Egyptian (.eg) domains'
    ],
    techStack: ['Global Anycast DNS', 'DNSSEC', 'ICANN Accredited Protocols', 'REST API'],
    pricingEgp: 'From 450 EGP / year',
    pricingUsd: 'From $18 USD / year',
  },
  {
    id: 'hosting-vps',
    number: '05',
    title: 'Web Hosting & Cloud VPS Servers',
    titleAr: 'استضافة المواقع وخوادم السحابة',
    tagline: 'High-speed cloud servers and hosting with reliable uptime.',
    category: 'Hosting & Servers',
    description: 'Fast cloud servers (VPS) and managed website hosting. Your files and databases run on dedicated fast storage with quick response times for Egyptian and international visitors.',
    keyDeliverables: [
      'Fast solid-state storage and dedicated CPU resources with no overcrowding',
      'DDoS protection and dedicated IP addresses',
      'Your choice of full server control or let our team handle everything',
      'Automatic daily backup copies saved safely off-site'
    ],
    techStack: ['KVM Hypervisors', 'Linux (Ubuntu/Debian/AlmaLinux)', 'NVMe RAID-10', 'BGP Routing'],
    pricingEgp: 'From 650 EGP / month',
    pricingUsd: 'From $25 USD / month',
  },
  {
    id: 'maintenance-managed-sla',
    number: '06',
    title: 'Maintenance, Security & Tech Support',
    titleAr: 'الصيانة والأمان والدعم الفني',
    tagline: 'Reliable engineering support and updates so you never have to worry.',
    category: 'Managed Support',
    description: 'We keep your website and servers running smoothly with routine security updates, 24/7 uptime monitoring, database checkups, and fast help when an issue occurs.',
    keyDeliverables: [
      '24/7 uptime checks with immediate alerts if anything stops working',
      'Guaranteed 1-hour response time for critical technical emergencies',
      'Regular software updates and monthly security reviews',
      'Routine backup drills to ensure your company never loses data'
    ],
    techStack: ['Prometheus', 'Grafana', 'Security Vulnerability Scanners', 'SLA Orchestrator'],
    pricingEgp: 'From 3,200 EGP / month',
    pricingUsd: 'From $120 USD / month',
  },
];

export const ECOSYSTEM_SURFACES: EcosystemSurface[] = [
  {
    id: 'surface-a',
    name: '1. Public Marketing Website',
    audience: 'Prospective clients, business owners, and new visitors',
    primaryPurpose: 'Explain our services clearly, share real work, and make it easy to start a project',
    authRequirement: 'Publicly open to everyone; fast page loads and search-engine friendly',
    routes: [
      '/',
      '/services',
      '/services/[slug]',
      '/pricing',
      '/case-studies',
      '/about',
      '/contact',
      '/legal/terms',
      '/legal/privacy',
      '/legal/sla',
    ],
    capabilities: [
      'Available in both English and Arabic with natural right-to-left reading flow',
      'Clear prices shown in either Egyptian Pounds (EGP) or US Dollars (USD)',
      'Simple project inquiry form with instant check for required fields',
      'Structured pages so search engines like Google can index content accurately',
    ],
  },
  {
    id: 'surface-b',
    name: '2. Client Portal',
    audience: 'Current customers, company managers, and technical leads',
    primaryPurpose: 'A private dashboard to manage active servers, check domains, download invoices, and get support',
    authRequirement: 'Secure login with email verification and password protection',
    routes: [
      '/portal',
      '/portal/organization',
      '/portal/services',
      '/portal/services/[instanceId]',
      '/portal/domains',
      '/portal/domains/[domainId]/dns',
      '/portal/vps/[vpsId]',
      '/portal/billing/invoices',
      '/portal/billing/subscriptions',
      '/portal/support',
      '/portal/support/new',
      '/portal/support/[ticketId]',
    ],
    capabilities: [
      'Easy company switcher with permissions for owners, billing staff, and tech leads',
      'Simple DNS editor to connect web addresses to your servers',
      'Server health monitors (CPU, memory, storage, and power controls)',
      'Manage software rentals, add team seats, and trigger manual backups',
      'View bills, download PDF receipts, and pay online via Paymob or Stripe',
      'Open support tickets with live response countdowns based on your agreement',
    ],
  },
  {
    id: 'surface-c',
    name: '3. Team Operations Console',
    audience: 'Gonnsen Tech engineers, support staff, and managers',
    primaryPurpose: 'A back-office dashboard to review inquiries, prepare quotes, and keep servers running',
    authRequirement: 'Restricted staff login with two-factor authentication',
    routes: [
      '/ops',
      '/ops/inquiries',
      '/ops/quotes/new',
      '/ops/customers',
      '/ops/provisioning-queue',
      '/ops/infrastructure/nodes',
      '/ops/billing/reconciliation',
      '/ops/support-queue',
      '/ops/audit-logs',
      '/ops/system-settings',
    ],
    capabilities: [
      'Review new client requests and generate clear project proposals',
      'Automated setup tools to create new cloud servers and configure domains',
      'Financial summaries and 14% Egyptian VAT compliance records',
      'Security audit logs recording every important administrative change',
      'Server network health monitors with automatic alerts for our engineers',
    ],
  },
];

export const DATABASE_CLUSTERS: DatabaseEntityCluster[] = [
  {
    id: 'identity-rbac',
    domainNumber: '01',
    name: 'Accounts, Companies & User Roles',
    description: 'Keeps track of users, registered companies, and who has permission to view or change things.',
    tables: [
      {
        tableName: 'users',
        description: 'User profile with name, email, and preferred language',
        keyFields: [
          { name: 'id', type: 'UUID', isPk: true },
          { name: 'auth_user_id', type: 'UUID', notes: 'Link to secure login system' },
          { name: 'email', type: 'VARCHAR(255)' },
          { name: 'full_name', type: 'VARCHAR(255)' },
          { name: 'preferred_locale', type: "VARCHAR(10) DEFAULT 'en'" },
        ],
      },
      {
        tableName: 'organizations',
        description: 'Company account details, tax card info, and billing address',
        keyFields: [
          { name: 'id', type: 'UUID', isPk: true },
          { name: 'name', type: 'VARCHAR(255)' },
          { name: 'tax_identifier', type: 'VARCHAR(100)', notes: 'Egyptian Tax Card / International VAT' },
          { name: 'commercial_register_number', type: 'VARCHAR(100)', notes: 'Commercial Register (Sijil Togari)' },
          { name: 'preferred_currency', type: "VARCHAR(3) DEFAULT 'EGP'" },
        ],
      },
      {
        tableName: 'organization_memberships',
        description: 'Connects team members to companies with specific roles',
        keyFields: [
          { name: 'id', type: 'UUID', isPk: true },
          { name: 'organization_id', type: 'UUID', isFk: true },
          { name: 'user_id', type: 'UUID', isFk: true },
          { name: 'role', type: 'ENUM', notes: 'owner, admin, billing_manager, technical_contact, viewer' },
        ],
      },
    ],
    rlsPolicySummary: 'Users can only see organizations they belong to. They can never see another company’s data.',
  },
  {
    id: 'service-catalog',
    domainNumber: '02',
    name: 'Services, Plans & Prices',
    description: 'Our list of available services, monthly subscription tiers, and prices in EGP and USD.',
    tables: [
      {
        tableName: 'services',
        description: 'Main service categories (websites, software rentals, cloud servers, etc.)',
        keyFields: [
          { name: 'id', type: 'UUID', isPk: true },
          { name: 'slug', type: 'VARCHAR(100)' },
          { name: 'vertical', type: 'ENUM', notes: 'web_ecommerce, crm_rentals, vps, domains, etc.' },
          { name: 'title_en / title_ar', type: 'VARCHAR(255)' },
        ],
      },
      {
        tableName: 'service_plans',
        description: 'Specific plan options with features and prices in both currencies',
        keyFields: [
          { name: 'id', type: 'UUID', isPk: true },
          { name: 'service_id', type: 'UUID', isFk: true },
          { name: 'price_egp_piastres', type: 'BIGINT', notes: 'Base price in Egyptian piastres' },
          { name: 'price_usd_cents', type: 'BIGINT', notes: 'Base price in US cents' },
          { name: 'features_json', type: 'JSONB', notes: 'List of features included in the plan' },
        ],
      },
    ],
    rlsPolicySummary: 'Anyone can view active service plans; only authorized staff can modify pricing.',
  },
  {
    id: 'instances-infrastructure',
    domainNumber: '03',
    name: 'Client Services, Domains & Cloud Servers',
    description: 'Tracks what each client has active: registered domains, live cloud servers, and rented software.',
    tables: [
      {
        tableName: 'service_instances',
        description: 'An active service belonging to a customer',
        keyFields: [
          { name: 'id', type: 'UUID', isPk: true },
          { name: 'organization_id', type: 'UUID', isFk: true },
          { name: 'instance_identifier', type: 'VARCHAR(100)', notes: 'Unique ID (e.g. server-cairo-01)' },
          { name: 'status', type: 'ENUM', notes: 'setting_up, active, paused, ended' },
          { name: 'datacenter_region', type: 'VARCHAR(100)', notes: 'cairo-metro-1, frankfurt-1' },
        ],
      },
      {
        tableName: 'vps_instances',
        description: 'Cloud server specifications like processor cores, RAM, and disk storage',
        keyFields: [
          { name: 'id', type: 'UUID', isPk: true },
          { name: 'service_instance_id', type: 'UUID', isFk: true },
          { name: 'vcpus / ram_mb / storage_gb', type: 'INT' },
          { name: 'primary_ipv4', type: 'INET' },
          { name: 'operating_system', type: 'VARCHAR(100)' },
        ],
      },
      {
        tableName: 'domain_records',
        description: 'Domain names, expiration dates, and auto-renewal settings',
        keyFields: [
          { name: 'id', type: 'UUID', isPk: true },
          { name: 'service_instance_id', type: 'UUID', isFk: true },
          { name: 'domain_name', type: 'VARCHAR(255)' },
          { name: 'tld', type: 'VARCHAR(50)', notes: 'com.eg, eg, com, tech, etc.' },
          { name: 'expires_at', type: 'TIMESTAMPTZ' },
        ],
      },
    ],
    rlsPolicySummary: 'Clients can only view and manage their own servers and domains. Requests pass through server verification before changes apply.',
  },
  {
    id: 'billing-invoicing',
    domainNumber: '04',
    name: 'Bills, Invoices & Payment Records',
    description: 'Handles transparent billing, invoices with 14% Egyptian VAT, and confirmed payment receipts.',
    tables: [
      {
        tableName: 'invoices',
        description: 'Official invoices with tax details and payment status',
        keyFields: [
          { name: 'id', type: 'UUID', isPk: true },
          { name: 'invoice_number', type: 'VARCHAR(50)', notes: 'Sequential bill number' },
          { name: 'organization_id', type: 'UUID', isFk: true },
          { name: 'subtotal_cents', type: 'BIGINT' },
          { name: 'tax_rate_percent', type: 'NUMERIC(5,2)', notes: '14.00% Egyptian VAT' },
          { name: 'status', type: 'ENUM', notes: 'issued, paid, overdue, canceled' },
        ],
      },
      {
        tableName: 'payments',
        description: 'Record of confirmed online payments from Paymob or Stripe',
        keyFields: [
          { name: 'id', type: 'UUID', isPk: true },
          { name: 'invoice_id', type: 'UUID', isFk: true },
          { name: 'gateway', type: 'ENUM', notes: 'paymob_egypt, stripe_global, bank_wire' },
          { name: 'gateway_transaction_id', type: 'VARCHAR(255)', notes: 'Provider payment reference' },
          { name: 'raw_webhook_payload', type: 'JSONB' },
        ],
      },
    ],
    rlsPolicySummary: 'Only company owners and billing managers can see financial bills and payment histories.',
  },
  {
    id: 'support-slas',
    domainNumber: '05',
    name: 'Support Requests & Response Times',
    description: 'Helps clients submit questions or report issues, with response time commitments.',
    tables: [
      {
        tableName: 'support_tickets',
        description: 'Client help ticket with priority level and target reply time',
        keyFields: [
          { name: 'id', type: 'UUID', isPk: true },
          { name: 'ticket_reference', type: 'VARCHAR(50)', notes: 'Short ticket code (e.g. HELP-402)' },
          { name: 'organization_id', type: 'UUID', isFk: true },
          { name: 'priority', type: 'ENUM', notes: 'low, normal, urgent, emergency' },
          { name: 'sla_due_at', type: 'TIMESTAMPTZ' },
        ],
      },
    ],
    rlsPolicySummary: 'Clients can only read tickets created by their company. Internal staff notes remain hidden.',
  },
];

export const UNRESOLVED_DEPENDENCIES = [
  {
    code: 'STEP-01',
    title: 'Egyptian Payment Gateway Account',
    detail: 'Finalizing our merchant account with Paymob so clients in Egypt can pay smoothly using local bank cards, Meeza, and mobile wallets (Vodafone Cash, InstaPay).',
    urgency: 'Needed for Phase 3 automated checkout',
    alternative: 'In the meantime, clients can pay easily via direct bank wire transfers with clear invoice receipts.',
  },
  {
    code: 'STEP-02',
    title: 'Official Egyptian (.eg) Domain Partnership',
    detail: 'Completing our direct setup to register .eg and .com.eg domain names smoothly without paperwork delays.',
    urgency: 'Underway',
    alternative: 'Global domains (.com, .net, .tech) register instantly, while our team assists with .eg registrations manually.',
  },
  {
    code: 'STEP-03',
    title: 'Server Location in Cairo',
    detail: 'Selecting between local servers hosted directly in Cairo or fast European servers connected via undersea high-speed fiber cables.',
    urgency: 'Being evaluated',
    alternative: 'European servers deliver fast speeds to Egypt (around 45 milliseconds), working great for everyday needs.',
  },
  {
    code: 'STEP-04',
    title: 'Egyptian Electronic Invoicing (Al-Manzoma)',
    detail: 'Connecting our billing system with the Egyptian Tax Authority for direct electronic tax receipts.',
    urgency: 'Planned for Phase 3',
    alternative: 'All current invoices are provided as compliant PDF bills with our registered tax card and commercial details.',
  },
];
