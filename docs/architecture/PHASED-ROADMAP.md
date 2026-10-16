# Phased Implementation Roadmap & Acceptance Criteria
## Gonnsen Tech Engineering Program Plan

---

### Phase 0: Project Foundation & Architecture (Current Milestone)
**Goal:** Define system topology, relational schema, security boundaries, design-token system, and establish the foundational Next.js codebase.

- [x] Architecture Decision Record (ADR-001) defining 3 connected surfaces.
- [x] Complete 12-domain PostgreSQL conceptual relational schema.
- [x] Zero-trust security boundary plan, RLS policies, and webhook HMAC specifications.
- [x] Custom design tokens (Graphite `#101310`, Signal Lime `#C8FF47`, Warm Off-White `#EDEDE7`, Technical Gray-Green `#7E8B7B`).
- [x] Anti-AI slop visual standards established (zero-pill metadata, single-line controls, Top Bar Contract).
- [x] Bilingual (EN/AR) layout architecture and dual-currency strategy (EGP/USD).
- [x] Interactive Architecture & Foundation Portal deployed and verified in Next.js 15.

---

### Phase 1: Public Web Surface & Lead Qualification Engine
**Goal:** Deliver the complete, production-grade marketing website with full SEO, service deep-dives, case studies, and validated lead capture.

#### Acceptance Criteria:
1. **Public Route Inventory:**
   - `/`: Editorial home with hero, service taxonomy, infrastructure diagram, and conversion trigger.
   - `/services`: Full service catalogue detailing all 6 business verticals.
   - `/services/[slug]`: 6 dedicated service pages with technical specifications, architecture diagrams, and service tiers.
   - `/pricing`: Dual-currency transparent rate card (EGP for Egypt, USD for international).
   - `/case-studies`: Rigorous, evidence-backed project profiles with quantified outcomes.
   - `/about`: Company philosophy, infrastructure principles, and leadership.
   - `/contact`: Multi-step interactive Project Inquiry & RFP engine with budget ranges and vertical selection.
   - `/legal/terms`, `/legal/privacy`, `/legal/sla`: Real contractual and SLA terms.
2. **SEO & Performance:**
   - Unique OpenGraph, Twitter, and canonical meta tags on all routes.
   - Schema.org structured data (`Organization`, `Service`, `FAQPage`, `BreadcrumbList`).
   - Sitemaps (`/sitemap.xml`) and crawler directives (`/robots.txt`).
   - Lighthouse score $\ge 95$ across Performance, Accessibility, and Best Practices.
3. **Form Integrity:**
   - Server-side validation via Zod; rate limiting via IP hash; honeypot spam traps.
   - Real email notification dispatch to `inquiries@gonnsen.com`.

---

### Phase 2: Client Portal & Service Instance Management
**Goal:** Provide authenticated customers with self-service infrastructure controls, instance tracking, and support ticketing.

#### Acceptance Criteria:
1. **Authentication & Multi-Tenancy:**
   - Supabase Auth / passwordless magic link and TOTP MFA.
   - Organization switching and invite flows with role assignment (`owner`, `admin`, `billing_manager`, `technical_contact`).
2. **Infrastructure Views:**
   - Dedicated dashboard listing all active `service_instances`.
   - Domain management: DNS zone editor (A, AAAA, CNAME, MX, TXT) with TTL validation.
   - VPS controls: Power status, resource usage monitors (CPU/RAM/Disk), OS details, IP allocations.
   - CRM/CMS software rental tenant access: Custom subdomain configuration and seat allocation counters.
3. **Support Ticket Center:**
   - Ticket submission with priority levels, SLA timers, and internal/external message threads.

---

### Phase 3: Automated Provisioning & Billing Operations
**Goal:** Connect payment gateways, automated invoicing with Egyptian tax compliance, and automated infrastructure provisioning hooks.

#### Acceptance Criteria:
1. **Payment Orchestration:**
   - Paymob checkout for Egyptian customers (Cards, Meeza, Mobile Wallets).
   - Stripe checkout for international credit cards.
   - Webhook listeners with strict HMAC SHA-512 verification.
2. **Tax & Legal Compliance:**
   - Automated 14% Egypt VAT computation for domestic transactions.
   - Invoices formatted for Egypt Tax Authority (ETA) e-Invoicing guidelines.
3. **Internal Ops Console:**
   - Role-protected back-office for Gonnsen engineers to review queued provisioning jobs, monitor server nodes, and manage customer accounts.

---

### Unresolved Business Decisions & External Dependencies

| ID | Topic | Description & Impact | Owner / Status |
| :--- | :--- | :--- | :--- |
| **DEP-01** | **Egypt Payment Gateway Partner** | Finalize contract with Paymob or alternative (e.g. Fawry, CBE direct). Requires commercial merchant account and corporate tax registration. | Finance / Pending |
| **DEP-02** | **Egyptian ccTLD (.eg) Accreditation** | Domain registration for `.eg` and `.com.eg` requires registration through accredited Egyptian bodies or upstream registrar partners with local presence. | Legal & Tech / Pending |
| **DEP-03** | **Datacenter Node Selection** | Decide between hosting local workloads in Cairo (e.g. Telecom Egypt Regional Data Hub / Raya Telecom) vs routing North African traffic to Frankfurt/Milan edge nodes. | Infrastructure / In Review |
| **DEP-04** | **Foreign Exchange Settlement Policy** | Egyptian regulations on foreign currency repatriation and dual pricing require clear corporate terms on exchange rate pegs for recurring contracts. | Finance / Pending |
| **DEP-05** | **e-Invoicing Integration (Al-Manzoma)** | Direct integration requirement with the Egyptian Tax Authority (ETA) e-Invoicing SDK for B2B electronic receipts. | Compliance / Planned for Phase 3 |

---

### Verification Plan for Phase 1 Implementation

1. **Compilation & Type Safety:** Run Next.js production build (`npm run build`) ensuring zero TypeScript and ESLint errors.
2. **Responsive Layouts:** Verify on 360px mobile, 768px tablet, 1024px laptop, and 1440px desktop viewports.
3. **Top Bar Contract:** Validate single-line wordmark, 4-5 single-line links, and 1 primary action.
4. **Zero-Pill Audit:** Ensure no pill badges or floating capsules exist on cards or metadata.
5. **Form Validation:** Test valid inputs, malformed email addresses, empty fields, and verify clean submission states.
6. **Accessibility Check:** Keyboard tab navigation through all interactive elements; visible Signal Lime focus rings; contrast $\ge 4.5:1$ across all text.
