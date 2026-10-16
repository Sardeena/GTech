# Relational Data Architecture & Entity Relationship Model
## Gonnsen Tech Unified Data Schema Specification (PostgreSQL / Supabase)

### Architectural Principles
1. **Decoupling Customers from Provisioned Instances:** A customer organization can provision multiple instances across disparate service verticals (e.g., custom web application, 3 VPS servers, 2 CRM tenant rentals, 8 domains).
2. **Billing Separated from Provisioning:** A subscription or quote controls financial contracts; a service instance represents the live technical infrastructure state.
3. **Multi-Tenant Row-Level Security (RLS):** Every customer-accessible table enforces tenant filtering via `organization_id` tied to authenticated user memberships.
4. **Dual-Currency Integrity:** Every financial record (quotes, plans, invoices, payments) stores explicit `currency_code` (e.g., `'EGP'`, `'USD'`, `'EUR'`) with base amounts in integer cents/piastres to avoid floating-point drift.

---

### Domain 1: Identity, Organizations & Role-Based Access Control (RBAC)

```sql
-- Core users (linked to Supabase auth.users or PostgreSQL auth)
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    auth_user_id UUID UNIQUE NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    full_name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(50),
    preferred_locale VARCHAR(10) DEFAULT 'en', -- 'en' or 'ar'
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Customer organizations / companies
CREATE TABLE organizations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    billing_email VARCHAR(255) NOT NULL,
    tax_identifier VARCHAR(100), -- Tax card / VAT registration in Egypt or international
    commercial_register_number VARCHAR(100), -- Sijil Togari (Egypt)
    country_code VARCHAR(2) NOT NULL DEFAULT 'EG', -- ISO-3166-1 alpha-2
    city VARCHAR(100) NOT NULL,
    address_line_1 TEXT NOT NULL,
    address_line_2 TEXT,
    preferred_currency VARCHAR(3) NOT NULL DEFAULT 'EGP', -- 'EGP', 'USD', 'EUR'
    status VARCHAR(50) NOT NULL DEFAULT 'active', -- 'active', 'suspended', 'archived'
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Organization memberships with explicit roles
CREATE TYPE org_role AS ENUM ('owner', 'admin', 'billing_manager', 'technical_contact', 'viewer');

CREATE TABLE organization_memberships (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    role org_role NOT NULL DEFAULT 'technical_contact',
    is_primary_contact BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(organization_id, user_id)
);

-- Internal Gonnsen Tech staff accounts & elevated capabilities
CREATE TYPE staff_role AS ENUM ('super_admin', 'infrastructure_engineer', 'support_agent', 'account_executive', 'billing_auditor');

CREATE TABLE staff_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    role staff_role NOT NULL,
    department VARCHAR(100) NOT NULL,
    can_provision_infrastructure BOOLEAN NOT NULL DEFAULT false,
    can_override_billing BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

---

### Domain 2: Customer Profiles & CRM Contacts

```sql
CREATE TABLE customer_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID UNIQUE NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    industry VARCHAR(100),
    company_size VARCHAR(50),
    primary_language VARCHAR(10) DEFAULT 'en',
    account_tier VARCHAR(50) DEFAULT 'standard', -- 'standard', 'growth', 'enterprise'
    assigned_account_manager_id UUID REFERENCES staff_profiles(id),
    internal_notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

---

### Domain 3: Service Catalog, Plans, Features & Pricing Matrix

```sql
CREATE TYPE service_vertical AS ENUM (
    'custom_web_ecommerce',
    'crm_software_rental',
    'cms_software_rental',
    'custom_automation_app',
    'domain_management',
    'web_hosting',
    'vps_infrastructure',
    'maintenance_security_sla'
);

CREATE TABLE services (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug VARCHAR(100) UNIQUE NOT NULL,
    vertical service_vertical NOT NULL,
    title_en VARCHAR(255) NOT NULL,
    title_ar VARCHAR(255) NOT NULL,
    tagline_en TEXT NOT NULL,
    tagline_ar TEXT NOT NULL,
    description_en TEXT NOT NULL,
    description_ar TEXT NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE service_plans (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    service_id UUID NOT NULL REFERENCES services(id) ON DELETE CASCADE,
    slug VARCHAR(100) NOT NULL,
    name_en VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255) NOT NULL,
    billing_interval VARCHAR(50) NOT NULL, -- 'one_off', 'monthly', 'quarterly', 'annual'
    
    -- Dual currency base pricing (stored in integer piastres/cents)
    price_egp_piastres BIGINT NOT NULL,
    price_usd_cents BIGINT NOT NULL,
    price_eur_cents BIGINT NOT NULL,
    
    setup_fee_egp_piastres BIGINT DEFAULT 0,
    setup_fee_usd_cents BIGINT DEFAULT 0,
    
    features_json JSONB NOT NULL DEFAULT '[]', -- Array of feature flags & quotas
    specifications_json JSONB NOT NULL DEFAULT '{}', -- Technical limits (RAM, vCPU, storage, tenants)
    is_public BOOLEAN NOT NULL DEFAULT true,
    is_active BOOLEAN NOT NULL DEFAULT true,
    UNIQUE(service_id, slug)
);
```

---

### Domain 4: Inquiries, Quotes, Projects & Master Service Agreements

```sql
CREATE TYPE inquiry_status AS ENUM ('new', 'qualified', 'quote_drafted', 'in_discussion', 'won', 'lost', 'spam');

CREATE TABLE inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID REFERENCES organizations(id) ON DELETE SET NULL,
    contact_name VARCHAR(255) NOT NULL,
    contact_email VARCHAR(255) NOT NULL,
    contact_phone VARCHAR(50),
    company_name VARCHAR(255),
    country_code VARCHAR(2) DEFAULT 'EG',
    service_vertical service_vertical,
    estimated_budget_range VARCHAR(100),
    currency_code VARCHAR(3) DEFAULT 'EGP',
    requirements_summary TEXT NOT NULL,
    status inquiry_status NOT NULL DEFAULT 'new',
    source_locale VARCHAR(10) DEFAULT 'en',
    ip_hash VARCHAR(64),
    assigned_staff_id UUID REFERENCES staff_profiles(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TYPE quote_status AS ENUM ('draft', 'sent', 'accepted', 'declined', 'expired');

CREATE TABLE quotes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    quote_number VARCHAR(50) UNIQUE NOT NULL, -- E.g. 'GT-Q-2026-0042'
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    inquiry_id UUID REFERENCES inquiries(id),
    currency_code VARCHAR(3) NOT NULL, -- 'EGP' or 'USD'
    subtotal_cents BIGINT NOT NULL,
    tax_rate_percent NUMERIC(5,2) DEFAULT 14.00, -- Egypt VAT 14%
    tax_amount_cents BIGINT NOT NULL,
    total_amount_cents BIGINT NOT NULL,
    valid_until TIMESTAMPTZ NOT NULL,
    terms_conditions TEXT NOT NULL,
    status quote_status NOT NULL DEFAULT 'draft',
    created_by_staff_id UUID NOT NULL REFERENCES staff_profiles(id),
    accepted_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE service_agreements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    agreement_number VARCHAR(50) UNIQUE NOT NULL,
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    quote_id UUID REFERENCES quotes(id),
    title VARCHAR(255) NOT NULL,
    agreement_type VARCHAR(100) NOT NULL, -- 'sla', 'custom_development', 'recurring_maintenance'
    start_date DATE NOT NULL,
    renewal_date DATE,
    sla_response_time_hours INT DEFAULT 4,
    sla_uptime_commitment NUMERIC(5,2) DEFAULT 99.90,
    status VARCHAR(50) NOT NULL DEFAULT 'active',
    contract_document_url TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

---

### Domain 5: Customer Service Instances (The Operating Fleet)

```sql
CREATE TYPE instance_status AS ENUM ('provisioning', 'active', 'suspended', 'maintenance', 'terminated');

CREATE TABLE service_instances (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    service_id UUID NOT NULL REFERENCES services(id),
    plan_id UUID REFERENCES service_plans(id),
    instance_identifier VARCHAR(100) UNIQUE NOT NULL, -- E.g. 'inst_crm_eg_0019'
    nickname VARCHAR(255) NOT NULL,
    vertical service_vertical NOT NULL,
    status instance_status NOT NULL DEFAULT 'provisioning',
    datacenter_region VARCHAR(100) NOT NULL, -- E.g. 'cairo-metro-1', 'frankfurt-1'
    primary_hostname VARCHAR(255),
    metadata JSONB NOT NULL DEFAULT '{}',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

---

### Domain 6: Domains & DNS Management

```sql
CREATE TYPE domain_status AS ENUM ('pending_registration', 'active', 'expired', 'redemption', 'transferred_out');

CREATE TABLE domain_records (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    service_instance_id UUID UNIQUE NOT NULL REFERENCES service_instances(id) ON DELETE CASCADE,
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    domain_name VARCHAR(255) UNIQUE NOT NULL,
    tld VARCHAR(50) NOT NULL, -- E.g. 'com.eg', 'eg', 'com', 'tech'
    registrar_partner VARCHAR(100) NOT NULL, -- Backend provider abstraction (e.g. OpenSRS, Enom, Egyptian ICANN Registrar)
    registered_at TIMESTAMPTZ NOT NULL,
    expires_at TIMESTAMPTZ NOT NULL,
    auto_renew BOOLEAN NOT NULL DEFAULT true,
    whois_privacy BOOLEAN NOT NULL DEFAULT true,
    auth_code_encrypted TEXT,
    status domain_status NOT NULL DEFAULT 'active',
    nameservers JSONB NOT NULL DEFAULT '["ns1.gonnsen.com", "ns2.gonnsen.com"]',
    dnssec_enabled BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE dns_zone_records (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    domain_id UUID NOT NULL REFERENCES domain_records(id) ON DELETE CASCADE,
    record_type VARCHAR(10) NOT NULL, -- 'A', 'AAAA', 'CNAME', 'MX', 'TXT', 'SRV'
    record_name VARCHAR(255) NOT NULL, -- '@', 'www', 'mail'
    record_value TEXT NOT NULL,
    ttl INT NOT NULL DEFAULT 3600,
    priority INT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

---

### Domain 7: Web Hosting & Virtual Private Server (VPS) Fleet

```sql
CREATE TABLE hosting_accounts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    service_instance_id UUID UNIQUE NOT NULL REFERENCES service_instances(id) ON DELETE CASCADE,
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    control_panel_type VARCHAR(50) NOT NULL DEFAULT 'cpanel', -- 'cpanel', 'plesk', 'directadmin'
    server_cluster_node VARCHAR(100) NOT NULL,
    allocated_disk_mb INT NOT NULL,
    allocated_bandwidth_mb INT NOT NULL,
    php_version VARCHAR(20) DEFAULT '8.3',
    ssl_active BOOLEAN NOT NULL DEFAULT true,
    backup_retention_days INT NOT NULL DEFAULT 30,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE vps_instances (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    service_instance_id UUID UNIQUE NOT NULL REFERENCES service_instances(id) ON DELETE CASCADE,
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    hypervisor_node VARCHAR(100) NOT NULL,
    vcpus INT NOT NULL,
    ram_mb INT NOT NULL,
    nvme_storage_gb INT NOT NULL,
    primary_ipv4 INET NOT NULL,
    primary_ipv6 INET,
    operating_system VARCHAR(100) NOT NULL, -- E.g. 'Ubuntu 24.04 LTS', 'Debian 12', 'AlmaLinux 9'
    root_access_enabled BOOLEAN NOT NULL DEFAULT false,
    managed_support_tier VARCHAR(50) NOT NULL DEFAULT 'fully_managed',
    snapshot_quota INT NOT NULL DEFAULT 3,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

---

### Domain 8: CRM & CMS Software Rental Tenants

```sql
CREATE TABLE software_rental_tenants (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    service_instance_id UUID UNIQUE NOT NULL REFERENCES service_instances(id) ON DELETE CASCADE,
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    software_type VARCHAR(50) NOT NULL, -- 'crm_rental', 'cms_rental'
    tenant_subdomain VARCHAR(100) UNIQUE NOT NULL, -- E.g. 'clientbrand.crm.gonnsen.com'
    custom_domain VARCHAR(255),
    seat_license_limit INT NOT NULL DEFAULT 10,
    storage_allocated_mb INT NOT NULL DEFAULT 25000,
    database_cluster_name VARCHAR(100) NOT NULL,
    isolated_schema_name VARCHAR(100) NOT NULL, -- Schema-per-tenant isolation
    software_version VARCHAR(50) NOT NULL,
    last_backup_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

---

### Domain 9: Subscriptions, Invoices, Payments & Refunds

```sql
CREATE TYPE subscription_status AS ENUM ('trialing', 'active', 'past_due', 'canceled', 'unpaid');

CREATE TABLE subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    plan_id UUID NOT NULL REFERENCES service_plans(id),
    service_instance_id UUID REFERENCES service_instances(id),
    status subscription_status NOT NULL DEFAULT 'active',
    billing_interval VARCHAR(50) NOT NULL, -- 'monthly', 'annual'
    currency_code VARCHAR(3) NOT NULL, -- 'EGP', 'USD'
    current_period_start TIMESTAMPTZ NOT NULL,
    current_period_end TIMESTAMPTZ NOT NULL,
    canceled_at TIMESTAMPTZ,
    payment_method_token VARCHAR(255),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TYPE invoice_status AS ENUM ('draft', 'issued', 'paid', 'void', 'overdue');

CREATE TABLE invoices (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    invoice_number VARCHAR(50) UNIQUE NOT NULL, -- E.g. 'INV-2026-EG-0104'
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    subscription_id UUID REFERENCES subscriptions(id),
    currency_code VARCHAR(3) NOT NULL,
    subtotal_cents BIGINT NOT NULL,
    tax_rate_percent NUMERIC(5,2) DEFAULT 14.00,
    tax_amount_cents BIGINT NOT NULL,
    total_amount_cents BIGINT NOT NULL,
    status invoice_status NOT NULL DEFAULT 'issued',
    issued_date DATE NOT NULL,
    due_date DATE NOT NULL,
    paid_at TIMESTAMPTZ,
    invoice_pdf_url TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE invoice_line_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    invoice_id UUID NOT NULL REFERENCES invoices(id) ON DELETE CASCADE,
    service_instance_id UUID REFERENCES service_instances(id),
    description VARCHAR(255) NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    unit_price_cents BIGINT NOT NULL,
    amount_cents BIGINT NOT NULL
);

CREATE TYPE payment_gateway AS ENUM ('paymob_egypt', 'stripe_global', 'fawry', 'bank_transfer_cbe');
CREATE TYPE payment_status AS ENUM ('pending', 'succeeded', 'failed', 'refunded');

CREATE TABLE payments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    invoice_id UUID NOT NULL REFERENCES invoices(id) ON DELETE CASCADE,
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    gateway payment_gateway NOT NULL,
    gateway_transaction_id VARCHAR(255) UNIQUE NOT NULL,
    amount_cents BIGINT NOT NULL,
    currency_code VARCHAR(3) NOT NULL,
    status payment_status NOT NULL DEFAULT 'pending',
    raw_webhook_payload JSONB,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

---

### Domain 10: Technical Support Tickets & SLA Tracking

```sql
CREATE TYPE ticket_priority AS ENUM ('low', 'medium', 'high', 'critical_sla');
CREATE TYPE ticket_status AS ENUM ('open', 'in_progress', 'awaiting_client', 'resolved', 'closed');

CREATE TABLE support_tickets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    ticket_reference VARCHAR(50) UNIQUE NOT NULL, -- E.g. 'TICK-8492'
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    created_by_user_id UUID NOT NULL REFERENCES users(id),
    service_instance_id UUID REFERENCES service_instances(id),
    title VARCHAR(255) NOT NULL,
    priority ticket_priority NOT NULL DEFAULT 'medium',
    status ticket_status NOT NULL DEFAULT 'open',
    assigned_staff_id UUID REFERENCES staff_profiles(id),
    sla_due_at TIMESTAMPTZ,
    resolved_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE support_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    ticket_id UUID NOT NULL REFERENCES support_tickets(id) ON DELETE CASCADE,
    sender_user_id UUID NOT NULL REFERENCES users(id),
    is_internal_staff_note BOOLEAN NOT NULL DEFAULT false,
    content TEXT NOT NULL,
    attachments_json JSONB DEFAULT '[]',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

---

### Domain 11: Content Management, Case Studies & SEO Metadata

```sql
CREATE TABLE case_studies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug VARCHAR(150) UNIQUE NOT NULL,
    client_name VARCHAR(255) NOT NULL,
    industry VARCHAR(100) NOT NULL,
    title_en VARCHAR(255) NOT NULL,
    title_ar VARCHAR(255) NOT NULL,
    summary_en TEXT NOT NULL,
    summary_ar TEXT NOT NULL,
    challenge_en TEXT NOT NULL,
    solution_en TEXT NOT NULL,
    outcomes_en JSONB NOT NULL, -- E.g. [{"metric": "+180% Transaction Velocity", "timeframe": "4 Months"}]
    services_rendered service_vertical[] NOT NULL,
    featured_image_url TEXT,
    canonical_url VARCHAR(255) NOT NULL,
    is_published BOOLEAN NOT NULL DEFAULT false,
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

---

### Domain 12: Infrastructure Provisioning Jobs & Security Audit Events

```sql
CREATE TYPE provisioning_step_status AS ENUM ('queued', 'running', 'completed', 'failed', 'rolled_back');

CREATE TABLE provisioning_jobs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    service_instance_id UUID NOT NULL REFERENCES service_instances(id) ON DELETE CASCADE,
    job_type VARCHAR(100) NOT NULL, -- 'vps_create', 'domain_register', 'crm_tenant_seed', 'ssl_issue'
    status provisioning_step_status NOT NULL DEFAULT 'queued',
    step_history JSONB NOT NULL DEFAULT '[]',
    error_log TEXT,
    retry_count INT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE security_audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID REFERENCES organizations(id),
    actor_user_id UUID REFERENCES users(id),
    actor_ip_address INET,
    user_agent TEXT,
    action VARCHAR(100) NOT NULL, -- 'auth.login', 'dns.record_modified', 'vps.reboot', 'billing.payment_received'
    resource_type VARCHAR(100) NOT NULL,
    resource_id VARCHAR(100),
    changes_delta JSONB,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```
