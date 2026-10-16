# Security Boundaries, Access Control & Integration Architecture
## Gonnsen Tech Zero-Trust Security Specification

### 1. Principle of Least Privilege (RBAC Matrix)

| Role | Scope | Privileges | Prohibited Actions |
| :--- | :--- | :--- | :--- |
| **Org Owner** | Organization | Full management of org, billing, contracts, member invites, service deletions | Cannot access other organizations or Gonnsen staff consoles |
| **Org Admin** | Organization | Provision new services, modify DNS, manage VPS, file support tickets | Cannot delete organization or transfer primary ownership |
| **Billing Manager** | Organization | View/pay invoices, update tax IDs, manage payment methods, download receipts | Cannot view SSH keys, alter DNS records, or reboot VPS servers |
| **Technical Contact** | Organization | Access server credentials, update DNS zones, view telemetry, file support tickets | Cannot access payment methods, invoices, or billing contracts |
| **Org Viewer** | Organization | Read-only visibility into service status and invoices | Cannot modify infrastructure, issue orders, or manage members |
| **Staff: Super Admin** | Internal Ops | Global system configuration, audit logs, staff role assignments | Monitored by immutable security audit log |
| **Staff: Infra Engineer**| Internal Ops | Provision VPS nodes, manage cloud clusters, inspect provisioning errors | Cannot modify customer invoices or view card details |
| **Staff: Support Agent** | Internal Ops | Read customer tickets, post replies, view instance health indicators | Cannot execute root commands or access raw databases |
| **Staff: Billing Auditor**| Internal Ops | View invoice reconciliation, tax compliance reports (Egypt ETA/VAT) | No infrastructure mutation access |

---

### 2. PostgreSQL Row-Level Security (RLS) Enforcement

RLS policies are enforced directly in the database engine, ensuring that even if an application bug occurs, client queries cannot leak cross-tenant records:

```sql
-- Enable RLS on core tables
ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_instances ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE support_tickets ENABLE ROW LEVEL SECURITY;

-- Helper function: Get organizations the current authenticated user belongs to
CREATE OR REPLACE FUNCTION get_user_organization_ids()
RETURNS SETOF UUID AS $$
  SELECT organization_id
  FROM organization_memberships
  WHERE user_id = (SELECT id FROM users WHERE auth_user_id = auth.uid())
$$ LANGUAGE sql SECURITY DEFINER STABLE;

-- RLS Policy: Organization read access
CREATE POLICY org_tenant_isolation_select ON organizations
FOR SELECT USING (
  id IN (SELECT get_user_organization_ids())
  OR EXISTS (SELECT 1 FROM staff_profiles WHERE user_id = (SELECT id FROM users WHERE auth_user_id = auth.uid()))
);

-- RLS Policy: Service instances read access
CREATE POLICY service_instances_isolation_select ON service_instances
FOR SELECT USING (
  organization_id IN (SELECT get_user_organization_ids())
  OR EXISTS (SELECT 1 FROM staff_profiles WHERE user_id = (SELECT id FROM users WHERE auth_user_id = auth.uid()))
);

-- RLS Policy: Invoice access restricted to owners and billing managers
CREATE POLICY invoices_isolation_select ON invoices
FOR SELECT USING (
  organization_id IN (
    SELECT om.organization_id 
    FROM organization_memberships om
    JOIN users u ON om.user_id = u.id
    WHERE u.auth_user_id = auth.uid()
      AND om.role IN ('owner', 'admin', 'billing_manager')
  )
  OR EXISTS (SELECT 1 FROM staff_profiles WHERE user_id = (SELECT id FROM users WHERE auth_user_id = auth.uid()))
);
```

---

### 3. Server-Side Authorization Gates

1. **No Direct Client Mutations on Infrastructure:**
   - Client applications never issue direct `INSERT`/`UPDATE` calls to `domain_records`, `dns_zone_records`, or `vps_instances`.
   - All mutations flow through validated Next.js Server Actions or authenticated Route Handlers (`/api/portal/dns/*`, `/api/portal/vps/*`).
2. **Double Verification for Destructive Actions:**
   - VPS rebuilds, domain transfers, and tenant deletion require confirmation with re-authenticated password or time-based one-time password (TOTP).

---

### 4. Webhook Security & Signature Verification

- **Paymob (Egypt Payment Gateway):**
  - All callbacks verified using the secret HMAC key via SHA-512 calculation over concatenated payload attributes in exact lexicographical key order as specified by Egyptian banking compliance.
- **Stripe (International Gateway):**
  - Raw request buffer validated via `stripe.webhooks.constructEvent(buf, sig, STRIPE_WEBHOOK_SECRET)` before parsing JSON.
- **Idempotency Guarantee:**
  - Inbound webhook transactions store the `gateway_transaction_id` under a database `UNIQUE` constraint. Duplicate webhook deliveries are acknowledged with HTTP 200 without re-crediting accounts.

---

### 5. Multi-Tenant CRM/CMS Software Rental Isolation

For the software rental products, Gonnsen Tech employs **Schema-per-Tenant Isolation**:
- Shared PostgreSQL physical cluster running partitioned PostgreSQL schemas (`tenant_acme_corp`, `tenant_nile_logistics`).
- The application runtime sets the search path on connection checkout: `SET search_path TO tenant_slug, public;`.
- Cross-tenant data leakage is physically blocked at the database engine level.

---

### 6. Secrets Management & Environment Boundary

- **Client Bundle Rule:**
  - Only variables prefixed with `NEXT_PUBLIC_` are bundled into browser JavaScript (e.g. `NEXT_PUBLIC_APP_URL`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`).
- **Server-Only Secrets:**
  - `SUPABASE_SERVICE_ROLE_KEY`
  - `PAYMOB_API_KEY`, `PAYMOB_HMAC_SECRET`
  - `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`
  - `REGISTRAR_API_KEY`, `REGISTRAR_API_SECRET`
  - `INFRASTRUCTURE_PROVISIONER_TOKEN`
  - `GEMINI_API_KEY`
- Never log raw payloads containing passwords, bearer tokens, or credit card numbers.
