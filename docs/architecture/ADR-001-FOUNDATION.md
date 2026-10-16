# Architecture Decision Record (ADR-001)
## Project Foundation & Core Architectural Framework for Gonnsen Tech

- **Status:** Approved
- **Date:** 2026-10-16
- **Authors:** Gonnsen Tech Architecture Group
- **Brand Line:** *Your business. Our infrastructure.*
- **Scope:** Egypt & International Enterprise Markets

---

### 1. Context & Business Problem
Gonnsen Tech provides mission-critical digital infrastructure, custom software engineering, CRM/CMS software rentals, managed cloud/VPS hosting, domain lifecycle management, and recurring service agreements for businesses in Egypt and international clients.

The technology ecosystem cannot be a disposable marketing landing page; it must operate as a unified, enterprise-grade business platform supporting three distinct operational surfaces:
1. **Public Marketing Website** (Discovery, SEO, Service catalog, Lead qualification, Direct conversion)
2. **Client Portal** (Authenticated client environment, Organization management, Service instances, Domain/VPS controls, Billing & Invoices, Support tickets)
3. **Internal Operations Platform** (Staff console, CRM/CMS management, Quotes, Provisioning pipelines, Infrastructure monitoring, Audit logs, Financial operations)

---

### 2. Architectural Decisions & Rationales

#### Decision 1: Next.js 15+ App Router & TypeScript Baseline
- **Choice:** Next.js 15 (React 19) App Router with strict TypeScript (`strict: true`).
- **Rationale:**
  - Provides first-class hybrid rendering: Static Site Generation (SSG) and Incremental Static Regeneration (ISR) for high-traffic, SEO-critical public service pages.
  - Dynamic Server Components and Server Actions / API Route Handlers for the authenticated Client Portal and Operations surfaces.
  - Strict server-side secret isolation: API keys and elevated infrastructure credentials never leak to the client bundle.
  - Native support for internationalized routing (`/en`, `/ar`) and localized metadata.

#### Decision 2: Distinct Three-Surface Topology with Shared Core Libraries
- **Choice:** Monorepo-ready logical segmentation into:
  - Surface A: `/app/(marketing)` — Public SEO-optimized web surface.
  - Surface B: `/app/(portal)` — Authenticated multi-tenant client workspace.
  - Surface C: `/app/(ops)` — Role-protected internal administration engine.
- **Rationale:** Keeps business logic, layouts, and access boundaries cleanly segregated while sharing UI tokens, database schemas, utility functions, and validation models (`/lib/schema/*`, `/lib/tokens/*`).

#### Decision 3: Relational PostgreSQL Schema with Multi-Tenant Separation
- **Choice:** PostgreSQL as the single source of truth (via Supabase or Google Cloud SQL) utilizing Row Level Security (RLS) and schema-enforced tenant boundaries.
- **Rationale:**
  - Complex entity relationships (Customer -> Organization -> Service Instances -> Subscriptions -> Invoices -> Provisioning Jobs) require relational integrity with ACID guarantees.
  - A customer can own multiple distinct service instances (e.g. 1 Custom E-commerce build, 2 CMS rentals, 4 VPS nodes, 10 domain registrations). Decoupling customers from service instances and billing agreements prevents schema lock-in.

#### Decision 4: Custom Editorial Design System (Anti-AI Slop, Zero-Pill Discipline)
- **Choice:** Bespoke token palette:
  - Primary Canvas: Graphite `#101310`
  - Focal Accent: Signal Lime `#C8FF47`
  - Typography Base: Warm Off-White `#EDEDE7`
  - Structural Surface & Border: Muted Technical Gray-Green `#7E8B7B` and `#242D25`
- **Discipline Enforced:**
  - Zero-pill metadata: unboxed inline text with typographic separators (`·` or `/`).
  - Top Bar Contract: 1-line wordmark, 4-5 single-line navigation links, 1 primary action.
  - Single-elevation depth: hairline borders (`1px solid #242D25`) without nested cards within cards.
  - Tabular numerals (`tabular-nums`) for all technical metrics, dates, and pricing.
  - Strict compliance with `prefers-reduced-motion` and WCAG AA contrast standards.

#### Decision 5: Internationalization Architecture (Egypt & Global)
- **Choice:** English as primary language with Arabic (`ar_EG`) as a first-class citizen.
- **Rationale:**
  - Complete layout mirroring (`dir="rtl"`) with proper Arabic typography and optical spacing.
  - Decoupling currency display from payment transaction currency: Egyptian clients see EGP formatted via `Intl.NumberFormat('ar-EG', { currency: 'EGP' })` or `en-EG`, while international clients view USD/EUR.
  - Critical rule: Display currency conversions are estimates; the settlement currency is explicitly enforced at checkout through localized gateways (e.g., Paymob for Egyptian cards/Meeza/Vodafone Cash, Stripe for global cards).

#### Decision 6: Zero-Trust Security & Webhook Signature Verification
- **Choice:** Server-side authorization gates, database-enforced RLS, and cryptographic HMAC signature validation on all incoming webhooks (payments, registrar events, cloud provisioners).
- **Rationale:** Client-side tokens or roles are never trusted for authorization decisions. Sensitive billing and provisioning actions run exclusively inside authenticated server actions or API routes protected by cryptographically verified session cookies.

---

### 3. Consequences & Trade-offs
- **Positive:**
  - Predictable scaling across marketing, portal, and operations.
  - Complete data isolation and auditability.
  - Clean SEO performance without client-side hydration delays.
  - Distinctive visual identity that projects high-end technical competence and reliability.
- **Negative / Constraints:**
  - Higher initial specification rigor required before implementing database mutations.
  - Dual-currency and bilingual requirements require strict localization keys across all forms and transactional templates.

---

### 4. Phase 0 Readiness Verdict
The foundation architecture is complete, verified against runtime capabilities, and ready for Phase 1 implementation.
