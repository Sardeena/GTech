'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  ECOSYSTEM_SURFACES,
  DATABASE_CLUSTERS,
  UNRESOLVED_DEPENDENCIES,
  DESIGN_TOKENS,
} from '@/lib/architecture-data';

interface ArchitectureExplorerProps {
  initialTab?: 'ecosystem' | 'data-model' | 'security' | 'i18n' | 'roadmap';
  currency: 'EGP' | 'USD';
  onInquiryTrigger: () => void;
}

export function ArchitectureExplorer({
  initialTab = 'ecosystem',
  currency,
  onInquiryTrigger,
}: ArchitectureExplorerProps) {
  const [activeTab, setActiveTab] = useState<'ecosystem' | 'data-model' | 'security' | 'i18n' | 'roadmap'>(initialTab);
  const [selectedClusterIndex, setSelectedClusterIndex] = useState(0);
  const [selectedSurfaceIndex, setSelectedSurfaceIndex] = useState(0);

  return (
    <section id="ecosystem" className="w-full border-b border-[#242D25] py-16 lg:py-24 bg-[#101310]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-mono tracking-widest text-[#7E8B7B] uppercase mb-2">
            Phase 0 Architectural Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EDEDE7]">
            Technical Blueprint & System Topology
          </h2>
          <p className="mt-2 text-sm text-[#7E8B7B] max-w-3xl">
            A real, maintainable business platform. Below is the complete interactive specification for the three connected surfaces, PostgreSQL data model, security perimeter, and rollout roadmap.
          </p>
        </div>

        {/* Interactive Tab Bar (Clean segmented control, zero pills) */}
        <div className="flex items-center gap-2 overflow-x-auto border-b border-[#242D25] pb-4 mb-8">
          <button
            onClick={() => setActiveTab('ecosystem')}
            type="button"
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'ecosystem'
                ? 'bg-[#C8FF47] text-[#101310] font-semibold'
                : 'text-[#7E8B7B] bg-[#161B16] border border-[#242D25] hover:text-[#EDEDE7]'
            }`}
          >
            1. Three-Surface Topology
          </button>
          
          <button
            onClick={() => setActiveTab('data-model')}
            type="button"
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'data-model'
                ? 'bg-[#C8FF47] text-[#101310] font-semibold'
                : 'text-[#7E8B7B] bg-[#161B16] border border-[#242D25] hover:text-[#EDEDE7]'
            }`}
          >
            2. Relational Schema (12 Clusters)
          </button>

          <button
            onClick={() => setActiveTab('security')}
            type="button"
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'security'
                ? 'bg-[#C8FF47] text-[#101310] font-semibold'
                : 'text-[#7E8B7B] bg-[#161B16] border border-[#242D25] hover:text-[#EDEDE7]'
            }`}
          >
            3. Zero-Trust Security & RLS
          </button>

          <button
            onClick={() => setActiveTab('i18n')}
            type="button"
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'i18n'
                ? 'bg-[#C8FF47] text-[#101310] font-semibold'
                : 'text-[#7E8B7B] bg-[#161B16] border border-[#242D25] hover:text-[#EDEDE7]'
            }`}
          >
            4. Egypt & Global I18n Engine
          </button>

          <button
            onClick={() => setActiveTab('roadmap')}
            type="button"
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'roadmap'
                ? 'bg-[#C8FF47] text-[#101310] font-semibold'
                : 'text-[#7E8B7B] bg-[#161B16] border border-[#242D25] hover:text-[#EDEDE7]'
            }`}
          >
            5. Roadmap & Dependencies
          </button>
        </div>

        {/* TAB 1: THREE-SURFACE ECOSYSTEM */}
        {activeTab === 'ecosystem' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {ECOSYSTEM_SURFACES.map((surface, idx) => (
                <button
                  key={surface.id}
                  onClick={() => setSelectedSurfaceIndex(idx)}
                  type="button"
                  className={`text-left p-6 rounded border transition-all ${
                    selectedSurfaceIndex === idx
                      ? 'border-[#C8FF47] bg-[#182019]'
                      : 'border-[#242D25] bg-[#161B16] hover:border-[#7E8B7B]'
                  }`}
                >
                  <div className="text-xs font-mono text-[#7E8B7B] uppercase mb-2">
                    Surface 0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#EDEDE7] mb-2">
                    {surface.name}
                  </h3>
                  <p className="text-xs text-[#7E8B7B] mb-4">
                    {surface.primaryPurpose}
                  </p>
                  <div className="text-[11px] font-mono text-[#C8FF47]">
                    Auth: {surface.authRequirement.split(';')[0]}
                  </div>
                </button>
              ))}
            </div>

            {/* Detailed view of currently selected surface */}
            <div className="border border-[#242D25] bg-[#161B16] p-7 rounded">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#242D25] pb-5 mb-6">
                <div>
                  <div className="text-xs font-mono text-[#C8FF47] uppercase">
                    Surface Detail Specification
                  </div>
                  <h4 className="text-2xl font-bold text-[#EDEDE7]">
                    {ECOSYSTEM_SURFACES[selectedSurfaceIndex].name}
                  </h4>
                </div>
                <div className="text-xs text-[#7E8B7B] font-mono">
                  Target Audience: {ECOSYSTEM_SURFACES[selectedSurfaceIndex].audience}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Route Inventory */}
                <div>
                  <div className="text-xs font-mono text-[#7E8B7B] uppercase mb-3">
                    Route Inventory (Next.js 15 App Router):
                  </div>
                  <div className="bg-[#101310] border border-[#242D25] rounded p-4 space-y-2 font-mono text-xs text-[#EDEDE7]">
                    {ECOSYSTEM_SURFACES[selectedSurfaceIndex].routes.map((route, rIdx) => (
                      <div key={rIdx} className="flex items-center gap-2">
                        <span className="text-[#C8FF47]">GET</span>
                        <span>{route}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architectural Capabilities */}
                <div>
                  <div className="text-xs font-mono text-[#7E8B7B] uppercase mb-3">
                    Architectural Invariants & Capabilities:
                  </div>
                  <div className="space-y-3">
                    {ECOSYSTEM_SURFACES[selectedSurfaceIndex].capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-[#EDEDE7]/90 leading-relaxed">
                        <span className="text-[#C8FF47] font-mono shrink-0">✓</span>
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Network Topology Graphic */}
            <div className="relative rounded border border-[#242D25] bg-[#161B16] overflow-hidden p-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-5">
                  <div className="text-xs font-mono text-[#7E8B7B] uppercase mb-1">
                    Backbone Architecture
                  </div>
                  <h4 className="text-xl font-bold text-[#EDEDE7] mb-3">
                    North Africa & Europe Low-Latency Mesh
                  </h4>
                  <p className="text-xs text-[#EDEDE7]/80 leading-relaxed mb-4">
                    Gonnsen Tech links local Cairo fiber backbones with European cloud transit via Mediterranean subsea cables. Traffic from Egyptian enterprises reaches compute clusters in sub-45ms round-trips.
                  </p>
                  <div className="text-xs font-mono text-[#C8FF47]">
                    Transit Nodes: Cairo RDH · Alexandria · Marseille · Frankfurt
                  </div>
                </div>

                <div className="lg:col-span-7 relative h-64 rounded border border-[#242D25] overflow-hidden">
                  <Image
                    src="/src/assets/images/gonnsen_network_topology_1792191987452.jpg"
                    alt="Network transit diagram between North Africa and Europe"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101310] via-transparent to-transparent opacity-60" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: RELATIONAL DATA MODEL */}
        {activeTab === 'data-model' && (
          <div className="space-y-6" id="data-model">
            {/* Cluster Selector Tabs */}
            <div className="flex flex-wrap gap-2 border-b border-[#242D25] pb-4">
              {DATABASE_CLUSTERS.map((cluster, cIdx) => (
                <button
                  key={cluster.id}
                  onClick={() => setSelectedClusterIndex(cIdx)}
                  type="button"
                  className={`px-3 py-1.5 text-xs font-mono rounded transition-colors whitespace-nowrap ${
                    selectedClusterIndex === cIdx
                      ? 'bg-[#C8FF47] text-[#101310] font-bold'
                      : 'bg-[#161B16] text-[#7E8B7B] border border-[#242D25] hover:text-[#EDEDE7]'
                  }`}
                >
                  Cluster 0{cIdx + 1}: {cluster.name}
                </button>
              ))}
            </div>

            {/* Selected Cluster Details */}
            <div className="border border-[#242D25] bg-[#161B16] p-7 rounded">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#242D25] pb-4 mb-6">
                <div>
                  <div className="text-xs font-mono text-[#C8FF47] uppercase">
                    Cluster {DATABASE_CLUSTERS[selectedClusterIndex].domainNumber}
                  </div>
                  <h4 className="text-2xl font-bold text-[#EDEDE7]">
                    {DATABASE_CLUSTERS[selectedClusterIndex].name}
                  </h4>
                  <p className="text-xs text-[#7E8B7B] mt-1">
                    {DATABASE_CLUSTERS[selectedClusterIndex].description}
                  </p>
                </div>
                <div className="text-xs font-mono text-[#7E8B7B] bg-[#101310] px-3 py-2 border border-[#242D25] rounded">
                  PostgreSQL / Supabase Schema
                </div>
              </div>

              {/* Table Schemas */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {DATABASE_CLUSTERS[selectedClusterIndex].tables.map((tbl, tIdx) => (
                  <div key={tIdx} className="border border-[#242D25] bg-[#101310] p-5 rounded">
                    <div className="flex items-center justify-between border-b border-[#242D25] pb-3 mb-3">
                      <span className="font-mono text-sm font-bold text-[#C8FF47]">
                        {tbl.tableName}
                      </span>
                      <span className="text-[11px] text-[#7E8B7B]">
                        {tbl.description}
                      </span>
                    </div>

                    <div className="space-y-1.5 text-xs font-mono">
                      {tbl.keyFields.map((field, fIdx) => (
                        <div key={fIdx} className="flex items-center justify-between py-1 border-b border-[#242D25]/40 last:border-0">
                          <span className="text-[#EDEDE7] flex items-center gap-1.5">
                            {field.isPk && <span className="text-[#C8FF47] text-[10px]">PK</span>}
                            {field.isFk && <span className="text-[#7E8B7B] text-[10px]">FK</span>}
                            {field.name}
                          </span>
                          <span className="text-[#7E8B7B] text-[11px]">
                            {field.type}
                            {field.notes ? ` (${field.notes})` : ''}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* RLS Policy Rule */}
              <div className="bg-[#101310] border border-[#242D25] p-4 rounded text-xs">
                <span className="font-mono text-[#C8FF47] uppercase font-semibold mr-2">
                  Database RLS Policy:
                </span>
                <span className="text-[#EDEDE7]/90 font-mono">
                  {DATABASE_CLUSTERS[selectedClusterIndex].rlsPolicySummary}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SECURITY & RLS */}
        {activeTab === 'security' && (
          <div className="space-y-8" id="security">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              <div className="border border-[#242D25] bg-[#161B16] p-6 rounded">
                <div className="text-xs font-mono text-[#C8FF47] uppercase mb-2">
                  Boundary 01
                </div>
                <h4 className="text-lg font-bold text-[#EDEDE7] mb-3">
                  Least-Privilege RBAC Matrix
                </h4>
                <p className="text-xs text-[#EDEDE7]/80 leading-relaxed mb-4">
                  Organization-level hierarchy: <strong className="text-[#EDEDE7]">Owner</strong>, <strong className="text-[#EDEDE7]">Admin</strong>, <strong className="text-[#EDEDE7]">Billing Manager</strong>, and <strong className="text-[#EDEDE7]">Technical Contact</strong>.
                </p>
                <div className="text-xs text-[#7E8B7B] space-y-1 font-mono">
                  <div>• Billing cannot alter DNS / VPS</div>
                  <div>• Technical contact cannot view invoices</div>
                  <div>• Staff actions strictly audit-logged</div>
                </div>
              </div>

              <div className="border border-[#242D25] bg-[#161B16] p-6 rounded">
                <div className="text-xs font-mono text-[#C8FF47] uppercase mb-2">
                  Boundary 02
                </div>
                <h4 className="text-lg font-bold text-[#EDEDE7] mb-3">
                  Database-Enforced RLS
                </h4>
                <p className="text-xs text-[#EDEDE7]/80 leading-relaxed mb-4">
                  Zero client trust. PostgreSQL Row-Level Security validates every query against <code className="text-[#C8FF47]">auth.uid()</code> and verified <code className="text-[#C8FF47]">organization_memberships</code>.
                </p>
                <div className="text-xs text-[#7E8B7B] space-y-1 font-mono">
                  <div>• Cross-tenant leakage impossible</div>
                  <div>• Multi-tenant schema isolation</div>
                  <div>• Automatic query filtration</div>
                </div>
              </div>

              <div className="border border-[#242D25] bg-[#161B16] p-6 rounded">
                <div className="text-xs font-mono text-[#C8FF47] uppercase mb-2">
                  Boundary 03
                </div>
                <h4 className="text-lg font-bold text-[#EDEDE7] mb-3">
                  Cryptographic HMAC Webhooks
                </h4>
                <p className="text-xs text-[#EDEDE7]/80 leading-relaxed mb-4">
                  All payment and infrastructure webhooks (Paymob, Stripe, Registrar APIs) are validated with SHA-512 HMAC signatures before processing.
                </p>
                <div className="text-xs text-[#7E8B7B] space-y-1 font-mono">
                  <div>• Idempotent transaction keys</div>
                  <div>• Replay attack prevention</div>
                  <div>• Raw payload audit storage</div>
                </div>
              </div>

            </div>

            {/* Secret Management Matrix */}
            <div className="border border-[#242D25] bg-[#161B16] p-7 rounded">
              <h4 className="text-lg font-bold text-[#EDEDE7] mb-4">
                Secret Isolation Policy (Environment Boundaries)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-mono">
                <div className="bg-[#101310] border border-[#242D25] p-4 rounded">
                  <div className="text-[#C8FF47] font-semibold mb-2">
                    CLIENT BUNDLE (NEXT_PUBLIC_*)
                  </div>
                  <div className="space-y-1.5 text-[#7E8B7B]">
                    <div>NEXT_PUBLIC_APP_URL</div>
                    <div>NEXT_PUBLIC_SUPABASE_URL</div>
                    <div>NEXT_PUBLIC_SUPABASE_ANON_KEY</div>
                    <div className="text-amber-400/80 pt-2 font-sans">
                      ⚠️ Zero elevated privileges; strictly public identifiers.
                    </div>
                  </div>
                </div>

                <div className="bg-[#101310] border border-[#242D25] p-4 rounded">
                  <div className="text-[#C8FF47] font-semibold mb-2">
                    SERVER-ONLY RUNTIME SECRETS (SECURE)
                  </div>
                  <div className="space-y-1.5 text-[#7E8B7B]">
                    <div>SUPABASE_SERVICE_ROLE_KEY</div>
                    <div>PAYMOB_API_KEY & PAYMOB_HMAC_SECRET</div>
                    <div>STRIPE_SECRET_KEY & STRIPE_WEBHOOK_SECRET</div>
                    <div>REGISTRAR_API_SECRET</div>
                    <div>INFRASTRUCTURE_PROVISIONER_TOKEN</div>
                    <div className="text-emerald-400/80 pt-2 font-sans">
                      🔒 Never bundled in client JS; executed only in server actions.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: I18N & DUAL-CURRENCY */}
        {activeTab === 'i18n' && (
          <div className="space-y-8">
            <div className="border border-[#242D25] bg-[#161B16] p-7 rounded">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#242D25] pb-5 mb-6">
                <div>
                  <div className="text-xs font-mono text-[#C8FF47] uppercase">
                    Localization & Financial Architecture
                  </div>
                  <h4 className="text-2xl font-bold text-[#EDEDE7]">
                    Egypt (EGP) & Global (USD) Dual-Currency Engine
                  </h4>
                </div>
                <div className="text-xs font-mono text-[#7E8B7B]">
                  Distinguishing Display Currency vs Transaction Currency
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm">
                <div>
                  <h5 className="font-bold text-[#EDEDE7] mb-2">
                    Critical Currency Policy:
                  </h5>
                  <p className="text-xs text-[#EDEDE7]/80 leading-relaxed mb-4">
                    Gonnsen Tech does not assume that a displayed exchange-rate conversion is the amount a payment provider will charge.
                  </p>
                  <div className="space-y-2 text-xs text-[#7E8B7B]">
                    <div className="p-3 bg-[#101310] border border-[#242D25] rounded">
                      <strong className="text-[#EDEDE7]">Domestic Egypt Settlement:</strong> Invoiced and charged natively in Egyptian Pounds (EGP). Fully compliant with Central Bank of Egypt regulations and domestic debit/credit processing.
                    </div>
                    <div className="p-3 bg-[#101310] border border-[#242D25] rounded">
                      <strong className="text-[#EDEDE7]">International Settlement:</strong> Invoiced and settled in United States Dollars (USD) via Stripe Global.
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-bold text-[#EDEDE7] mb-2">
                    Arabic (ar_EG) First-Class RTL Strategy:
                  </h5>
                  <p className="text-xs text-[#EDEDE7]/80 leading-relaxed mb-4">
                    Arabic is a first-class language, not an afterthought. Layouts respect bidirectional text direction (&apos;dir=&quot;rtl&quot;&apos;), typographic balance, and culturally accurate financial formatting.
                  </p>
                  <div className="bg-[#101310] border border-[#242D25] p-4 rounded font-mono text-xs text-[#EDEDE7] space-y-1.5">
                    <div>HTML dir: rtl</div>
                    <div>Locale Tag: ar-EG</div>
                    <div>Number Format: Intl.NumberFormat(&apos;ar-EG&apos;, &#123; currency: &apos;EGP&apos; &#125;)</div>
                    <div>Font Stack: Cairo / IBM Plex Sans Arabic fallback</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: ROADMAP & DEPENDENCIES */}
        {activeTab === 'roadmap' && (
          <div className="space-y-8" id="roadmap">
            {/* Phased Roadmap Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              
              <div className="border border-[#C8FF47] bg-[#182019] p-6 rounded">
                <div className="flex items-center justify-between text-xs font-mono text-[#C8FF47] mb-2">
                  <span>PHASE 0</span>
                  <span className="font-bold">CURRENT</span>
                </div>
                <h4 className="text-base font-bold text-[#EDEDE7] mb-2">
                  Foundation & Architecture
                </h4>
                <div className="text-xs text-[#7E8B7B] space-y-1">
                  <div>✓ System topology</div>
                  <div>✓ 12-domain data model</div>
                  <div>✓ Custom design tokens</div>
                  <div>✓ Zero-pill visual rules</div>
                </div>
              </div>

              <div className="border border-[#242D25] bg-[#161B16] p-6 rounded">
                <div className="text-xs font-mono text-[#7E8B7B] mb-2">
                  PHASE 1
                </div>
                <h4 className="text-base font-bold text-[#EDEDE7] mb-2">
                  Public Platform & SEO
                </h4>
                <div className="text-xs text-[#7E8B7B] space-y-1">
                  <div>• 6 dedicated service pages</div>
                  <div>• Real case study profiles</div>
                  <div>• Interactive RFP engine</div>
                  <div>• Schema.org JSON-LD</div>
                </div>
              </div>

              <div className="border border-[#242D25] bg-[#161B16] p-6 rounded">
                <div className="text-xs font-mono text-[#7E8B7B] mb-2">
                  PHASE 2
                </div>
                <h4 className="text-base font-bold text-[#EDEDE7] mb-2">
                  Client Portal
                </h4>
                <div className="text-xs text-[#7E8B7B] space-y-1">
                  <div>• Supabase authentication</div>
                  <div>• DNS editor & VPS telemetry</div>
                  <div>• Support ticket SLAs</div>
                  <div>• Tenant configuration</div>
                </div>
              </div>

              <div className="border border-[#242D25] bg-[#161B16] p-6 rounded">
                <div className="text-xs font-mono text-[#7E8B7B] mb-2">
                  PHASE 3
                </div>
                <h4 className="text-base font-bold text-[#EDEDE7] mb-2">
                  Billing & Internal Ops
                </h4>
                <div className="text-xs text-[#7E8B7B] space-y-1">
                  <div>• Paymob & Stripe webhooks</div>
                  <div>• 14% Egypt VAT invoicing</div>
                  <div>• Provisioning queues</div>
                  <div>• Internal staff console</div>
                </div>
              </div>

            </div>

            {/* Unresolved Business Decisions Table */}
            <div className="border border-[#242D25] bg-[#161B16] p-7 rounded">
              <h4 className="text-lg font-bold text-[#EDEDE7] mb-4">
                Unresolved External Dependencies & Business Decisions
              </h4>
              <div className="space-y-4">
                {UNRESOLVED_DEPENDENCIES.map((dep) => (
                  <div key={dep.code} className="border-b border-[#242D25] pb-4 last:border-0 last:pb-0">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                      <div className="text-sm font-bold text-[#EDEDE7] flex items-center gap-2">
                        <span className="font-mono text-xs text-[#C8FF47]">{dep.code}:</span>
                        <span>{dep.title}</span>
                      </div>
                      <div className="text-xs font-mono text-[#7E8B7B]">
                        {dep.urgency}
                      </div>
                    </div>
                    <p className="text-xs text-[#EDEDE7]/80 mb-2">
                      {dep.detail}
                    </p>
                    <div className="text-xs text-[#7E8B7B] font-mono">
                      Phase 0/1 Mitigation: {dep.alternative}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
