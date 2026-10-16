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
    title: 'Custom Websites & E-Commerce',
    titleAr: 'مواقع الويب المخصصة والتجارة الإلكترونية',
    tagline: 'High-performance digital flagship platforms engineered for conversion velocity.',
    category: 'Engineering & Development',
    description: 'Bespoke Next.js web applications, headless commerce systems, high-concurrency payment integrations, and localization for domestic Egyptian and international shoppers.',
    keyDeliverables: [
      'Next.js 15 App Router architecture with static + dynamic hybrid caching',
      'Dual payment gateways: Paymob (Egypt cards/Meeza) and Stripe (Global)',
      'Sub-second page loads with zero-layout-shift core web vitals',
      'Headless CMS content modeling and automated SEO schema'
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Paymob', 'Stripe'],
    pricingEgp: 'From 45,000 EGP / project',
    pricingUsd: 'From $1,800 USD / project',
  },
  {
    id: 'crm-cms-rentals',
    number: '02',
    title: 'CRM & CMS Software Rentals',
    titleAr: 'إيجار أنظمة إدارة علاقات العملاء والمحتوى',
    tagline: 'Fully provisioned SaaS enterprise engines without heavy upfront licensing costs.',
    category: 'Software-as-a-Service',
    description: 'Turnkey enterprise CRM and headless CMS deployments operated on dedicated, isolated schemas. Includes automated daily backups, version upgrades, and custom domain mapping.',
    keyDeliverables: [
      'Schema-per-tenant isolation on high-availability PostgreSQL clusters',
      'Custom vanity domains (e.g., portal.clientbrand.com) with automated TLS',
      'Pre-configured sales pipelines, lead routing, and customer history logs',
      'Granular role-based permissions with audit trail recording'
    ],
    techStack: ['Multi-Tenant PostgreSQL', 'Node.js', 'Redis', 'Docker', 'REST / GraphQL'],
    pricingEgp: 'From 1,750 EGP / month',
    pricingUsd: 'From $65 USD / month',
  },
  {
    id: 'custom-apps-automation',
    number: '03',
    title: 'Custom Business Applications & Automation',
    titleAr: 'تطبيقات الأعمال المخصصة والأتمتة',
    tagline: 'Internal tools, ERP connectors, and programmatic event pipelines.',
    category: 'Process Automation',
    description: 'We eliminate manual operational bottlenecks by designing tailored internal portals, automated invoice reconciliation tools, and two-way synchronization between legacy systems and modern cloud APIs.',
    keyDeliverables: [
      'Bespoke administrative dashboards with high-density data grids',
      'Event-driven webhook orchestrators and scheduled reconciliation cron jobs',
      'Integration with Egyptian Tax Authority (ETA) e-Invoicing protocols',
      'Third-party ERP, inventory, and logistics courier API adapters'
    ],
    techStack: ['TypeScript', 'Next.js Server Actions', 'RabbitMQ / Redis', 'Supabase'],
    pricingEgp: 'From 55,000 EGP / contract',
    pricingUsd: 'From $2,200 USD / contract',
  },
  {
    id: 'domain-management',
    number: '04',
    title: 'Domain Registration & DNS Management',
    titleAr: 'تسجيل النطاقات وإدارة خوادم الأسماء',
    tagline: 'Institutional registrar access and low-latency Anycast DNS architecture.',
    category: 'Network & Identity',
    description: 'Complete lifecycle domain ownership for international TLDs (.com, .net, .tech) and Egyptian country-code TLDs (.eg, .com.eg) with DNSSEC hardening and automated renewal guarantees.',
    keyDeliverables: [
      'Registrar-level security locks preventing unauthorized domain transfers',
      'Anycast DNS management with automated propagation and health monitoring',
      'WHOIS identity masking and corporate domain inventory consolidation',
      'ccTLD compliance management with Egyptian regulatory institutions'
    ],
    techStack: ['Global Anycast DNS', 'DNSSEC', 'ICANN Accredited Protocols', 'REST API'],
    pricingEgp: 'From 450 EGP / year',
    pricingUsd: 'From $18 USD / year',
  },
  {
    id: 'hosting-vps',
    number: '05',
    title: 'Web Hosting & VPS Infrastructure',
    titleAr: 'استضافة الويب والبنية التحتية للخوادم الافتراضية',
    tagline: 'High-compute NVMe compute nodes with dedicated bandwidth.',
    category: 'Compute & Cloud',
    description: 'Enterprise virtual private servers and managed web hosting deployed across enterprise-grade hypervisors. Low-latency routing to North Africa and European transit backbones.',
    keyDeliverables: [
      'Dedicated vCPU and NVMe Gen4 storage partitions with zero resource oversubscription',
      'Dual-stack IPv4 and native IPv6 routing with Anti-DDoS mitigation filters',
      'Root SSH privilege or fully managed system administration options',
      'Automated nightly disaster recovery snapshots stored in isolated datacenters'
    ],
    techStack: ['KVM Hypervisors', 'Linux (Ubuntu/Debian/AlmaLinux)', 'NVMe RAID-10', 'BGP Routing'],
    pricingEgp: 'From 650 EGP / month',
    pricingUsd: 'From $25 USD / month',
  },
  {
    id: 'maintenance-managed-sla',
    number: '06',
    title: 'Maintenance, Security & Managed Agreements',
    titleAr: 'الصيانة والأمان واتفاقيات الدعم المدارة',
    tagline: 'Dedicated engineering staff maintaining continuous uptime and security compliance.',
    category: 'Managed Services',
    description: 'Proactive vulnerability patching, dependency upgrades, continuous uptime monitoring, database optimization, and guaranteed SLA response times for mission-critical operations.',
    keyDeliverables: [
      '24/7/365 synthetic ping and application endpoint telemetry probing',
      'Guaranteed 1-hour critical response SLA with assigned lead engineers',
      'Bi-weekly security audits, dependency patches, and penetration testing',
      'Off-site encrypted backups tested with automated restoration drills'
    ],
    techStack: ['Prometheus', 'Grafana', 'Security Vulnerability Scanners', 'SLA Orchestrator'],
    pricingEgp: 'From 3,200 EGP / month',
    pricingUsd: 'From $120 USD / month',
  },
];

export const ECOSYSTEM_SURFACES: EcosystemSurface[] = [
  {
    id: 'surface-a',
    name: 'Surface A: Public Marketing Platform',
    audience: 'Prospective clients, enterprise decision-makers, search engines',
    primaryPurpose: 'Brand discovery, service education, portfolio verification, and lead qualification',
    authRequirement: 'Publicly accessible; static rendering (SSG) with ISR for high SEO authority',
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
      'Localized content delivery in English and Arabic with strict RTL support',
      'Dual-currency display calculator (EGP for domestic clients, USD for international)',
      'Interactive Project Inquiry & RFP scoping engine with server-side validation',
      'Automated Schema.org structured data, sitemap generation, and OpenGraph cards',
    ],
  },
  {
    id: 'surface-b',
    name: 'Surface B: Client Infrastructure Portal',
    audience: 'Authenticated customer organizations, CTOs, technical leads, billing managers',
    primaryPurpose: 'Self-service management of provisioned services, domains, VPS nodes, invoices, and support',
    authRequirement: 'Authenticated via session cookie (Supabase Auth / Next.js Server Components with RLS)',
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
      'Multi-tenant organization switcher with role-based permission boundaries (RBAC)',
      'Live DNS zone record editor (A, AAAA, CNAME, MX, TXT) with syntax linting',
      'VPS telemetry monitoring (CPU, RAM, bandwidth, disk space) and power controls',
      'Software rental tenant management (subdomains, user seats, database backup triggers)',
      'Invoice viewing, PDF download, and online payment settlement (Paymob / Stripe)',
      'Cryptographically signed ticket communications with SLA response countdowns',
    ],
  },
  {
    id: 'surface-c',
    name: 'Surface C: Internal Operations & Control Platform',
    audience: 'Gonnsen Tech staff, infrastructure engineers, support specialists, executive leadership',
    primaryPurpose: 'Customer onboarding, quote generation, automated provisioning pipelines, infrastructure fleet oversight',
    authRequirement: 'Restricted staff authentication; MFA required; internal VPN / IP-restricted session handling',
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
      'Lead qualification dashboard with status pipelines and quote builder',
      'Automated hypervisor and registrar provisioning orchestrator with rollback handling',
      'Revenue analytics, tax compliance reports (14% Egypt VAT reconciliation)',
      'Centralized audit event inspector tracking every administrative state mutation',
      'Fleet health telemetry with cluster-wide node monitoring and threshold alerts',
    ],
  },
];

export const DATABASE_CLUSTERS: DatabaseEntityCluster[] = [
  {
    id: 'identity-rbac',
    domainNumber: '01',
    name: 'Identity, Organizations & RBAC',
    description: 'Manages user accounts, corporate client organizations, and granular role assignments.',
    tables: [
      {
        tableName: 'users',
        description: 'Global user identity record linked to auth credentials',
        keyFields: [
          { name: 'id', type: 'UUID', isPk: true },
          { name: 'auth_user_id', type: 'UUID', notes: 'Unique link to authentication engine' },
          { name: 'email', type: 'VARCHAR(255)' },
          { name: 'full_name', type: 'VARCHAR(255)' },
          { name: 'preferred_locale', type: "VARCHAR(10) DEFAULT 'en'" },
        ],
      },
      {
        tableName: 'organizations',
        description: 'Corporate customer account and legal tax entity in Egypt or abroad',
        keyFields: [
          { name: 'id', type: 'UUID', isPk: true },
          { name: 'name', type: 'VARCHAR(255)' },
          { name: 'tax_identifier', type: 'VARCHAR(100)', notes: 'Egyptian Tax Card / International VAT' },
          { name: 'commercial_register_number', type: 'VARCHAR(100)', notes: 'Sijil Togari' },
          { name: 'preferred_currency', type: "VARCHAR(3) DEFAULT 'EGP'" },
        ],
      },
      {
        tableName: 'organization_memberships',
        description: 'Associates users with organizations under strict RBAC roles',
        keyFields: [
          { name: 'id', type: 'UUID', isPk: true },
          { name: 'organization_id', type: 'UUID', isFk: true },
          { name: 'user_id', type: 'UUID', isFk: true },
          { name: 'role', type: 'ENUM', notes: 'owner, admin, billing_manager, technical_contact, viewer' },
        ],
      },
    ],
    rlsPolicySummary: 'Users can only query organizations where an organization_membership row exists linking user_id to auth.uid().',
  },
  {
    id: 'service-catalog',
    domainNumber: '02',
    name: 'Services, Plans & Dual-Currency Pricing',
    description: 'Catalog definitions, feature flags, technical limits, and dual currency price points.',
    tables: [
      {
        tableName: 'services',
        description: 'High-level business service definitions across the 6 core verticals',
        keyFields: [
          { name: 'id', type: 'UUID', isPk: true },
          { name: 'slug', type: 'VARCHAR(100)' },
          { name: 'vertical', type: 'ENUM', notes: 'web_ecom, crm_rent, vps, domain, etc.' },
          { name: 'title_en / title_ar', type: 'VARCHAR(255)' },
        ],
      },
      {
        tableName: 'service_plans',
        description: 'Concrete subscription tiers and hardware capacity specifications',
        keyFields: [
          { name: 'id', type: 'UUID', isPk: true },
          { name: 'service_id', type: 'UUID', isFk: true },
          { name: 'price_egp_piastres', type: 'BIGINT', notes: 'Base domestic price in piastres' },
          { name: 'price_usd_cents', type: 'BIGINT', notes: 'Base international price in cents' },
          { name: 'features_json', type: 'JSONB', notes: 'Structured capabilities and quota limits' },
        ],
      },
    ],
    rlsPolicySummary: 'Public read-only access for active plans; mutation restricted to staff with billing_auditor or super_admin roles.',
  },
  {
    id: 'instances-infrastructure',
    domainNumber: '03',
    name: 'Customer Service Instances & Compute Fleet',
    description: 'Decoupled operational assets: domains, DNS zones, VPS nodes, and software rental tenants.',
    tables: [
      {
        tableName: 'service_instances',
        description: 'Represents a provisioned, billable customer operational service instance',
        keyFields: [
          { name: 'id', type: 'UUID', isPk: true },
          { name: 'organization_id', type: 'UUID', isFk: true },
          { name: 'instance_identifier', type: 'VARCHAR(100)', notes: 'E.g. inst_vps_cairo_0042' },
          { name: 'status', type: 'ENUM', notes: 'provisioning, active, suspended, terminated' },
          { name: 'datacenter_region', type: 'VARCHAR(100)', notes: 'cairo-metro-1, frankfurt-1' },
        ],
      },
      {
        tableName: 'vps_instances',
        description: 'Virtual private server hardware capacity, hypervisor bindings, and networking',
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
        description: 'Domain registrations, TLD rules, registrar partner links, and renewal flags',
        keyFields: [
          { name: 'id', type: 'UUID', isPk: true },
          { name: 'service_instance_id', type: 'UUID', isFk: true },
          { name: 'domain_name', type: 'VARCHAR(255)' },
          { name: 'tld', type: 'VARCHAR(50)', notes: 'com.eg, eg, com, tech, etc.' },
          { name: 'expires_at', type: 'TIMESTAMPTZ' },
        ],
      },
    ],
    rlsPolicySummary: 'Organizations can query and operate only instances where organization_id matches membership. No direct mutations bypass server action gates.',
  },
  {
    id: 'billing-invoicing',
    domainNumber: '04',
    name: 'Subscriptions, Invoices & Payment Gateways',
    description: 'Financial contracts, tax invoices complying with Egypt VAT (14%), and gateway webhook audits.',
    tables: [
      {
        tableName: 'invoices',
        description: 'Legal accounting document with tax line items and payment state',
        keyFields: [
          { name: 'id', type: 'UUID', isPk: true },
          { name: 'invoice_number', type: 'VARCHAR(50)', notes: 'Sequential legal invoice number' },
          { name: 'organization_id', type: 'UUID', isFk: true },
          { name: 'subtotal_cents', type: 'BIGINT' },
          { name: 'tax_rate_percent', type: 'NUMERIC(5,2)', notes: 'Default 14.00% Egypt VAT' },
          { name: 'status', type: 'ENUM', notes: 'issued, paid, overdue, void' },
        ],
      },
      {
        tableName: 'payments',
        description: 'Reconciliation log of gateway transactions with cryptographic webhook payloads',
        keyFields: [
          { name: 'id', type: 'UUID', isPk: true },
          { name: 'invoice_id', type: 'UUID', isFk: true },
          { name: 'gateway', type: 'ENUM', notes: 'paymob_egypt, stripe_global, fawry' },
          { name: 'gateway_transaction_id', type: 'VARCHAR(255)', notes: 'Unique provider reference' },
          { name: 'raw_webhook_payload', type: 'JSONB' },
        ],
      },
    ],
    rlsPolicySummary: 'Invoices restricted to organization members with owner, admin, or billing_manager roles.',
  },
  {
    id: 'support-slas',
    domainNumber: '05',
    name: 'Support Tickets & Engineering SLAs',
    description: 'Cryptographically signed ticket communications, SLA countdown clocks, and internal staff notes.',
    tables: [
      {
        tableName: 'support_tickets',
        description: 'Client inquiry with severity classification and target resolution SLA',
        keyFields: [
          { name: 'id', type: 'UUID', isPk: true },
          { name: 'ticket_reference', type: 'VARCHAR(50)', notes: 'Public reference ID (e.g. TICK-8492)' },
          { name: 'organization_id', type: 'UUID', isFk: true },
          { name: 'priority', type: 'ENUM', notes: 'low, medium, high, critical_sla' },
          { name: 'sla_due_at', type: 'TIMESTAMPTZ' },
        ],
      },
    ],
    rlsPolicySummary: 'Clients can only read their organization tickets. Internal staff notes (is_internal_staff_note = true) are hidden by RLS from client sessions.',
  },
];

export const UNRESOLVED_DEPENDENCIES = [
  {
    code: 'DEP-01',
    title: 'Domestic Egypt Payment Gateway Merchant Account',
    detail: 'Execution of commercial merchant agreement with Paymob (or Fawry) to support domestic credit cards, Meeza network, and mobile wallets (Vodafone Cash, InstaPay). Requires legal commercial registration.',
    urgency: 'High (Required for Phase 3 automated checkout)',
    alternative: 'Phase 1-2 will utilize manual bank wire transfer (CBE wire invoice instructions) with manual staff reconciliation.',
  },
  {
    code: 'DEP-02',
    title: 'Egyptian ccTLD (.eg / .com.eg) Registrar Channel',
    detail: 'Accreditation with Supreme Council of Universities / local registrar registry to register and automate DNS delegated records for .eg domains.',
    urgency: 'Medium',
    alternative: 'Pre-configure international TLDs (.com, .net, .tech, .io) through standard ICANN wholesale registrar API while processing .eg applications via offline concierge.',
  },
  {
    code: 'DEP-03',
    title: 'Cairo Edge Datacenter Node Feasibility',
    detail: 'Evaluating local colocation or private cloud hosting in Cairo (e.g. Telecom Egypt Regional Data Hub / Raya) versus European primary nodes (Frankfurt / Milan) with Cloudflare edge caching.',
    urgency: 'Medium',
    alternative: 'Frankfurt primary cluster with Mediterranean subsea fiber routes provides ~45ms round-trip latency to Cairo, acceptable for initial VPS fleet.',
  },
  {
    code: 'DEP-04',
    title: 'Egyptian Tax Authority e-Invoicing (Al-Manzoma)',
    detail: 'Legal requirement for B2B electronic receipts with digital certificates (Egypt Trust / Misr Clearing) submitted via the ETA e-Invoicing REST API.',
    urgency: 'High for Phase 3 billing',
    alternative: 'Issued PDF invoices compliant with standard corporate tax card and VAT registration format until programmatic API certificate integration is finalized.',
  },
];
