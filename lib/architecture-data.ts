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
    description: 'We design and develop custom websites and online stores planned for fast loading, clean mobile rendering, and seamless checkout for Egypt and global markets.',
    keyDeliverables: [
      'Architected with Next.js 15 App Router for sub-second page performance',
      'Designed for dual payment integration: Paymob (Egypt domestic) and Stripe (Global)',
      'Flexible headless CMS modeling for team content management',
      'Structured metadata designed for Google search engine visibility'
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Paymob', 'Stripe'],
    pricingEgp: 'From 45,000 EGP (Proposed)',
    pricingUsd: 'From $1,800 USD (Proposed)',
  },
  {
    id: 'crm-cms-rentals',
    number: '02',
    title: 'CRM & CMS Software Rentals',
    titleAr: 'إيجار برامج إدارة العملاء والمحتوى',
    tagline: 'Ready-to-use business software without huge upfront development costs.',
    category: 'Software Rentals',
    description: 'Planned turnkey customer management (CRM) and publishing (CMS) tools on monthly rental plans. Designed with isolated database schemas, automated backups, and custom domains.',
    keyDeliverables: [
      'Schema-per-tenant isolation model keeping company databases separate',
      'Custom subdomain routing (e.g. portal.clientbrand.com) with automated SSL',
      'Modular sales pipeline, customer records, and task tracking',
      'Role-based access controls for team security'
    ],
    techStack: ['Multi-Tenant PostgreSQL', 'Node.js', 'Redis', 'Docker', 'REST / GraphQL'],
    pricingEgp: 'From 1,750 EGP / mo (Proposed)',
    pricingUsd: 'From $65 USD / mo (Proposed)',
  },
  {
    id: 'custom-apps-automation',
    number: '03',
    title: 'Custom Business Apps & Automation',
    titleAr: 'تطبيقات الأعمال المخصصة والأتمتة',
    tagline: 'Custom tools and automated workflows that eliminate hours of manual work.',
    category: 'Process Automation',
    description: 'We architect internal business tools and system connectors—designed to reduce manual overhead in order tracking, warehouse updates, and billing preparation.',
    keyDeliverables: [
      'Custom company dashboards tailored to day-to-day operations',
      'Event-driven data sync between spreadsheets, inventory, and orders',
      'Designed to align with Egyptian Tax Authority (ETA) e-Invoicing guidelines',
      'Automated email and webhook alerts for critical operational events'
    ],
    techStack: ['TypeScript', 'Next.js Server Actions', 'RabbitMQ / Redis', 'Supabase'],
    pricingEgp: 'From 55,000 EGP (Proposed)',
    pricingUsd: 'From $2,200 USD (Proposed)',
  },
  {
    id: 'domain-management',
    number: '04',
    title: 'Domain Registration & Management',
    titleAr: 'تسجيل النطاقات وإدارتها',
    tagline: 'Domain names (.com, .eg, and more) with reliable renewals and fast setup.',
    category: 'Domains & DNS',
    description: 'Planned domain registration and DNS management for international TLDs (.com, .net, .tech) and Egyptian domains (.eg, .com.eg) with registrar locks and DNSSEC security.',
    keyDeliverables: [
      'Registrar security lock integration to guard against unauthorized transfers',
      'Anycast DNS infrastructure for fast worldwide resolution',
      'WHOIS privacy configuration to protect administrative contact information',
      'Assistance with documentation requirements for local Egyptian (.eg) domains'
    ],
    techStack: ['Global Anycast DNS', 'DNSSEC', 'ICANN Accredited Protocols', 'REST API'],
    pricingEgp: 'From 450 EGP / yr (Proposed)',
    pricingUsd: 'From $18 USD / yr (Proposed)',
  },
  {
    id: 'hosting-vps',
    number: '05',
    title: 'Web Hosting & Cloud VPS Servers',
    titleAr: 'استضافة المواقع وخوادم السحابة',
    tagline: 'High-speed cloud servers and hosting with reliable uptime.',
    category: 'Hosting & Servers',
    description: 'High-performance cloud compute (VPS) and managed hosting architecture. Target server nodes deployed with NVMe Gen4 storage and low-latency routing to North Africa and Europe.',
    keyDeliverables: [
      'Dedicated vCPU and NVMe Gen4 storage partitions without overcrowding',
      'Target dual-stack IPv4 and native IPv6 routing with DDoS filtering',
      'Flexible administration options: root SSH privilege or fully managed support',
      'Planned automated off-site snapshot backups'
    ],
    techStack: ['KVM Hypervisors', 'Linux (Ubuntu/Debian/AlmaLinux)', 'NVMe RAID-10', 'BGP Routing'],
    pricingEgp: 'From 650 EGP / mo (Proposed)',
    pricingUsd: 'From $25 USD / mo (Proposed)',
  },
  {
    id: 'maintenance-managed-sla',
    number: '06',
    title: 'Maintenance, Security & Tech Support',
    titleAr: 'الصيانة والأمان والدعم الفني',
    tagline: 'Reliable engineering support and updates so you never have to worry.',
    category: 'Managed Support',
    description: 'Proposed service-level agreements (SLAs) for continuous system maintenance, proactive security patch deployment, regular database health checks, and priority technical support.',
    keyDeliverables: [
      'Planned 24/7 uptime monitoring with rapid incident alerting',
      'Target 1-hour response commitment for critical severity issues',
      'Scheduled monthly dependency upgrades and vulnerability checks',
      'Routine backup recovery testing to verify disaster preparedness'
    ],
    techStack: ['Prometheus', 'Grafana', 'Security Vulnerability Scanners', 'SLA Orchestrator'],
    pricingEgp: 'From 3,200 EGP / mo (Proposed)',
    pricingUsd: 'From $120 USD / mo (Proposed)',
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
