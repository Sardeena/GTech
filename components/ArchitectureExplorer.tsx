'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import {
  ECOSYSTEM_SURFACES,
  DATABASE_CLUSTERS,
  UNRESOLVED_DEPENDENCIES,
} from '@/lib/architecture-data';

interface ArchitectureExplorerProps {
  initialTab?: 'ecosystem' | 'data-model' | 'security' | 'i18n' | 'roadmap';
  currency: 'EGP' | 'USD';
  onInquiryTrigger: () => void;
}

const easeCurve = [0.16, 1, 0.3, 1] as const;

export function ArchitectureExplorer({
  initialTab = 'ecosystem',
  currency,
  onInquiryTrigger,
}: ArchitectureExplorerProps) {
  const [activeTab, setActiveTab] = useState<'ecosystem' | 'data-model' | 'security' | 'i18n' | 'roadmap'>(initialTab);
  const [selectedClusterIndex, setSelectedClusterIndex] = useState(0);
  const [selectedSurfaceIndex, setSelectedSurfaceIndex] = useState(0);

  return (
    <section id="ecosystem" className="w-full border-b border-[#242D25] py-16 lg:py-24 bg-[#101310] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: easeCurve }}
          className="mb-10"
        >
          <div className="text-xs font-mono tracking-widest text-[#7E8B7B] uppercase mb-2">
            System Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EDEDE7]">
            How the System Works Behind the Scenes
          </h2>
          <p className="mt-2 text-sm text-[#7E8B7B] max-w-3xl">
            Everything is designed to be clear, secure, and easy to maintain. Explore how our public website, client portal, databases, and safety rules work together.
          </p>
        </motion.div>

        {/* Interactive Tab Bar */}
        <div className="flex items-center gap-2 overflow-x-auto border-b border-[#242D25] pb-4 mb-8">
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setActiveTab('ecosystem')}
            type="button"
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'ecosystem'
                ? 'bg-[#C8FF47] text-[#101310] font-semibold'
                : 'text-[#7E8B7B] bg-[#161B16] border border-[#242D25] hover:text-[#EDEDE7]'
            }`}
          >
            1. Three Connected Areas
          </motion.button>
          
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setActiveTab('data-model')}
            type="button"
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'data-model'
                ? 'bg-[#C8FF47] text-[#101310] font-semibold'
                : 'text-[#7E8B7B] bg-[#161B16] border border-[#242D25] hover:text-[#EDEDE7]'
            }`}
          >
            2. How Data is Stored
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setActiveTab('security')}
            type="button"
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'security'
                ? 'bg-[#C8FF47] text-[#101310] font-semibold'
                : 'text-[#7E8B7B] bg-[#161B16] border border-[#242D25] hover:text-[#EDEDE7]'
            }`}
          >
            3. How We Protect Data
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setActiveTab('i18n')}
            type="button"
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'i18n'
                ? 'bg-[#C8FF47] text-[#101310] font-semibold'
                : 'text-[#7E8B7B] bg-[#161B16] border border-[#242D25] hover:text-[#EDEDE7]'
            }`}
          >
            4. Pricing & Arabic Support
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setActiveTab('roadmap')}
            type="button"
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'roadmap'
                ? 'bg-[#C8FF47] text-[#101310] font-semibold'
                : 'text-[#7E8B7B] bg-[#161B16] border border-[#242D25] hover:text-[#EDEDE7]'
            }`}
          >
            5. Roadmap & Next Steps
          </motion.button>
        </div>

        {/* Animated Tab Switcher Container */}
        <AnimatePresence mode="wait">
          {activeTab === 'ecosystem' && (
            <motion.div
              key="ecosystem"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: easeCurve }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {ECOSYSTEM_SURFACES.map((surface, idx) => (
                  <motion.button
                    key={surface.id}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => setSelectedSurfaceIndex(idx)}
                    type="button"
                    className={`text-left p-6 rounded border transition-all ${
                      selectedSurfaceIndex === idx
                        ? 'border-[#C8FF47] bg-[#182019]'
                        : 'border-[#242D25] bg-[#161B16] hover:border-[#7E8B7B]'
                    }`}
                  >
                    <div className="text-xs font-mono text-[#7E8B7B] uppercase mb-2">
                      Section 0{idx + 1}
                    </div>
                    <h3 className="text-lg font-bold text-[#EDEDE7] mb-2">
                      {surface.name}
                    </h3>
                    <p className="text-xs text-[#7E8B7B] mb-4">
                      {surface.primaryPurpose}
                    </p>
                    <div className="text-[11px] font-mono text-[#C8FF47]">
                      Access: {surface.authRequirement.split(';')[0]}
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Detailed view of currently selected surface */}
              <motion.div
                key={selectedSurfaceIndex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="border border-[#242D25] bg-[#161B16] p-7 rounded"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#242D25] pb-5 mb-6">
                  <div>
                    <div className="text-xs font-mono text-[#C8FF47] uppercase">
                      Platform Details
                    </div>
                    <h4 className="text-2xl font-bold text-[#EDEDE7]">
                      {ECOSYSTEM_SURFACES[selectedSurfaceIndex].name}
                    </h4>
                  </div>
                  <div className="text-xs text-[#7E8B7B] font-mono">
                    Who uses this: {ECOSYSTEM_SURFACES[selectedSurfaceIndex].audience}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Route Inventory */}
                  <div>
                    <div className="text-xs font-mono text-[#7E8B7B] uppercase mb-3">
                      Page Links (Next.js 15):
                    </div>
                    <div className="bg-[#101310] border border-[#242D25] rounded p-4 space-y-2 font-mono text-xs text-[#EDEDE7]">
                      {ECOSYSTEM_SURFACES[selectedSurfaceIndex].routes.map((route, rIdx) => (
                        <div key={rIdx} className="flex items-center gap-2">
                          <span className="text-[#C8FF47]">URL</span>
                          <span>{route}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Architectural Capabilities */}
                  <div>
                    <div className="text-xs font-mono text-[#7E8B7B] uppercase mb-3">
                      What this platform provides:
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
              </motion.div>

              {/* Network Topology Graphic */}
              <div className="relative rounded border border-[#242D25] bg-[#161B16] overflow-hidden p-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-5">
                    <div className="text-xs font-mono text-[#7E8B7B] uppercase mb-1">
                      Network Routing
                    </div>
                    <h4 className="text-xl font-bold text-[#EDEDE7] mb-3">
                      Fast Link Between North Africa & Europe
                    </h4>
                    <p className="text-xs text-[#EDEDE7]/85 leading-relaxed mb-4">
                      Gonnsen Tech connects local servers in Cairo with fast European cloud transit via Mediterranean fiber cables. Your websites and apps load quickly whether your customers are in Egypt or overseas.
                    </p>
                    <div className="text-xs font-mono text-[#C8FF47]">
                      Connection Points: Cairo · Alexandria · Marseille · Frankfurt
                    </div>
                  </div>

                  <div className="lg:col-span-7 relative h-64 rounded border border-[#242D25] overflow-hidden">
                    <Image
                      src="/src/assets/images/gonnsen_network_topology_1792191987452.jpg"
                      alt="Network connection map between North Africa and Europe"
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101310] via-transparent to-transparent opacity-60" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'data-model' && (
            <motion.div
              key="data-model"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: easeCurve }}
              className="space-y-6"
              id="data-model"
            >
              {/* Cluster Selector Tabs */}
              <div className="flex flex-wrap gap-2 border-b border-[#242D25] pb-4">
                {DATABASE_CLUSTERS.map((cluster, cIdx) => (
                  <motion.button
                    key={cluster.id}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelectedClusterIndex(cIdx)}
                    type="button"
                    className={`px-3 py-1.5 text-xs font-mono rounded transition-colors whitespace-nowrap ${
                      selectedClusterIndex === cIdx
                        ? 'bg-[#C8FF47] text-[#101310] font-bold'
                        : 'bg-[#161B16] text-[#7E8B7B] border border-[#242D25] hover:text-[#EDEDE7]'
                    }`}
                  >
                    Section 0{cIdx + 1}: {cluster.name}
                  </motion.button>
                ))}
              </div>

              {/* Selected Cluster Details */}
              <motion.div
                key={selectedClusterIndex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="border border-[#242D25] bg-[#161B16] p-7 rounded"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#242D25] pb-4 mb-6">
                  <div>
                    <div className="text-xs font-mono text-[#C8FF47] uppercase">
                      Database Group {DATABASE_CLUSTERS[selectedClusterIndex].domainNumber}
                    </div>
                    <h4 className="text-2xl font-bold text-[#EDEDE7]">
                      {DATABASE_CLUSTERS[selectedClusterIndex].name}
                    </h4>
                    <p className="text-xs text-[#7E8B7B] mt-1">
                      {DATABASE_CLUSTERS[selectedClusterIndex].description}
                    </p>
                  </div>
                  <div className="text-xs font-mono text-[#7E8B7B] bg-[#101310] px-3 py-2 border border-[#242D25] rounded">
                    PostgreSQL Database
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
                              {field.isPk && <span className="text-[#C8FF47] text-[10px]">KEY</span>}
                              {field.isFk && <span className="text-[#7E8B7B] text-[10px]">LINK</span>}
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

                {/* Security Policy Rule */}
                <div className="bg-[#101310] border border-[#242D25] p-4 rounded text-xs">
                  <span className="font-mono text-[#C8FF47] uppercase font-semibold mr-2">
                    Access Rule:
                  </span>
                  <span className="text-[#EDEDE7]/90 font-mono">
                    {DATABASE_CLUSTERS[selectedClusterIndex].rlsPolicySummary}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'security' && (
            <motion.div
              key="security"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: easeCurve }}
              className="space-y-8"
              id="security"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                <div className="border border-[#242D25] bg-[#161B16] p-6 rounded">
                  <div className="text-xs font-mono text-[#C8FF47] uppercase mb-2">
                    Protection 01
                  </div>
                  <h4 className="text-lg font-bold text-[#EDEDE7] mb-3">
                    Clear Team Permissions
                  </h4>
                  <p className="text-xs text-[#EDEDE7]/85 leading-relaxed mb-4">
                    Team members only see what they need to. You can assign roles like Owner, Admin, Billing Manager, or Technical Contact.
                  </p>
                  <div className="text-xs text-[#7E8B7B] space-y-1 font-mono">
                    <div>• Billing staff cannot alter server settings</div>
                    <div>• Tech staff cannot view bank receipts</div>
                    <div>• Important changes are safely logged</div>
                  </div>
                </div>

                <div className="border border-[#242D25] bg-[#161B16] p-6 rounded">
                  <div className="text-xs font-mono text-[#C8FF47] uppercase mb-2">
                    Protection 02
                  </div>
                  <h4 className="text-lg font-bold text-[#EDEDE7] mb-3">
                    Strict Customer Separation
                  </h4>
                  <p className="text-xs text-[#EDEDE7]/85 leading-relaxed mb-4">
                    The database checks who is logged in on every request. It is impossible for one customer to view another customer’s data.
                  </p>
                  <div className="text-xs text-[#7E8B7B] space-y-1 font-mono">
                    <div>• Complete privacy for your business</div>
                    <div>• Separate spaces for rented software</div>
                    <div>• Verified user sessions on every click</div>
                  </div>
                </div>

                <div className="border border-[#242D25] bg-[#161B16] p-6 rounded">
                  <div className="text-xs font-mono text-[#C8FF47] uppercase mb-2">
                    Protection 03
                  </div>
                  <h4 className="text-lg font-bold text-[#EDEDE7] mb-3">
                    Verified Payment Webhooks
                  </h4>
                  <p className="text-xs text-[#EDEDE7]/85 leading-relaxed mb-4">
                    All payment confirmations from Paymob or Stripe are digitally verified with a private secret key before marking any invoice as paid.
                  </p>
                  <div className="text-xs text-[#7E8B7B] space-y-1 font-mono">
                    <div>• Protects against fake payment attempts</div>
                    <div>• Prevents duplicate payment processing</div>
                    <div>• Complete receipt records for accounting</div>
                  </div>
                </div>

              </div>

              {/* Secret Management Matrix */}
              <div className="border border-[#242D25] bg-[#161B16] p-7 rounded">
                <h4 className="text-lg font-bold text-[#EDEDE7] mb-4">
                  How We Keep Passwords & Keys Safe
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-mono">
                  <div className="bg-[#101310] border border-[#242D25] p-4 rounded">
                    <div className="text-[#C8FF47] font-semibold mb-2">
                      SAFE PUBLIC WEBSITE KEYS
                    </div>
                    <div className="space-y-1.5 text-[#7E8B7B]">
                      <div>Website address (NEXT_PUBLIC_APP_URL)</div>
                      <div>Public database address (read-only)</div>
                      <div className="text-emerald-400/90 pt-2 font-sans">
                        ✓ Only safe, non-sensitive public details are sent to web browsers.
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#101310] border border-[#242D25] p-4 rounded">
                    <div className="text-[#C8FF47] font-semibold mb-2">
                      PRIVATE SERVER SECRETS (NEVER SHARED)
                    </div>
                    <div className="space-y-1.5 text-[#7E8B7B]">
                      <div>Paymob merchant keys & signature passwords</div>
                      <div>Stripe payment secret keys</div>
                      <div>Domain registrar administrative keys</div>
                      <div>Server hypervisor root tokens</div>
                      <div className="text-emerald-400/90 pt-2 font-sans">
                        🔒 Strictly stored on our secure servers; never sent to the browser.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'i18n' && (
            <motion.div
              key="i18n"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: easeCurve }}
              className="space-y-8"
            >
              <div className="border border-[#242D25] bg-[#161B16] p-7 rounded">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#242D25] pb-5 mb-6">
                  <div>
                    <div className="text-xs font-mono text-[#C8FF47] uppercase">
                      Localization & Currency
                    </div>
                    <h4 className="text-2xl font-bold text-[#EDEDE7]">
                      Egypt (EGP) & Global (USD) Dual Pricing
                    </h4>
                  </div>
                  <div className="text-xs font-mono text-[#7E8B7B]">
                    No hidden exchange rate surprises
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm">
                  <div>
                    <h5 className="font-bold text-[#EDEDE7] mb-2">
                      Honest, Clear Pricing Policy:
                    </h5>
                    <p className="text-xs text-[#EDEDE7]/85 leading-relaxed mb-4">
                      We keep billing simple and transparent. We never use confusing exchange rates that leave you paying more at checkout.
                    </p>
                    <div className="space-y-2 text-xs text-[#7E8B7B]">
                      <div className="p-3 bg-[#101310] border border-[#242D25] rounded">
                        <strong className="text-[#EDEDE7]">Domestic Egyptian Clients:</strong> Billed directly in Egyptian Pounds (EGP). Pay easily using local debit cards, credit cards, Meeza, or mobile wallets (like Vodafone Cash and InstaPay).
                      </div>
                      <div className="p-3 bg-[#101310] border border-[#242D25] rounded">
                        <strong className="text-[#EDEDE7]">International Clients:</strong> Invoiced and settled in US Dollars (USD) via Stripe.
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-bold text-[#EDEDE7] mb-2">
                      Arabic as a First-Class Language:
                    </h5>
                    <p className="text-xs text-[#EDEDE7]/85 leading-relaxed mb-4">
                      Arabic is fully supported throughout the system. The layout naturally mirrors from right to left, with comfortable spacing and clear Arabic fonts.
                    </p>
                    <div className="bg-[#101310] border border-[#242D25] p-4 rounded font-mono text-xs text-[#EDEDE7] space-y-1.5">
                      <div>Text Flow: Right to Left (RTL)</div>
                      <div>Country Code: Egypt (ar-EG)</div>
                      <div>Number Format: Local Egyptian format (e.g. 45,000 ج.م)</div>
                      <div>Clean Arabic typography designed for easy reading</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'roadmap' && (
            <motion.div
              key="roadmap"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: easeCurve }}
              className="space-y-8"
              id="roadmap"
            >
              {/* Phased Roadmap Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                
                <div className="border border-[#C8FF47] bg-[#182019] p-6 rounded">
                  <div className="flex items-center justify-between text-xs font-mono text-[#C8FF47] mb-2">
                    <span>PHASE 0</span>
                    <span className="font-bold">CURRENT</span>
                  </div>
                  <h4 className="text-base font-bold text-[#EDEDE7] mb-2">
                    Foundation & Planning
                  </h4>
                  <div className="text-xs text-[#7E8B7B] space-y-1">
                    <div>✓ System design</div>
                    <div>✓ Database structure</div>
                    <div>✓ Clean design tokens</div>
                    <div>✓ Bilingual layout setup</div>
                  </div>
                </div>

                <div className="border border-[#242D25] bg-[#161B16] p-6 rounded">
                  <div className="text-xs font-mono text-[#7E8B7B] mb-2">
                    PHASE 1
                  </div>
                  <h4 className="text-base font-bold text-[#EDEDE7] mb-2">
                    Public Website & Services
                  </h4>
                  <div className="text-xs text-[#7E8B7B] space-y-1">
                    <div>• 6 dedicated service pages</div>
                    <div>• Real project case studies</div>
                    <div>• Project cost estimator</div>
                    <div>• Search engine optimization</div>
                  </div>
                </div>

                <div className="border border-[#242D25] bg-[#161B16] p-6 rounded">
                  <div className="text-xs font-mono text-[#7E8B7B] mb-2">
                    PHASE 2
                  </div>
                  <h4 className="text-base font-bold text-[#EDEDE7] mb-2">
                    Client Dashboard
                  </h4>
                  <div className="text-xs text-[#7E8B7B] space-y-1">
                    <div>• Secure client login</div>
                    <div>• Domain & server controls</div>
                    <div>• Fast support tickets</div>
                    <div>• Manage software rentals</div>
                  </div>
                </div>

                <div className="border border-[#242D25] bg-[#161B16] p-6 rounded">
                  <div className="text-xs font-mono text-[#7E8B7B] mb-2">
                    PHASE 3
                  </div>
                  <h4 className="text-base font-bold text-[#EDEDE7] mb-2">
                    Billing & Internal Tools
                  </h4>
                  <div className="text-xs text-[#7E8B7B] space-y-1">
                    <div>• Paymob & Stripe checkouts</div>
                    <div>• Official 14% Egypt VAT receipts</div>
                    <div>• Automatic server setup</div>
                    <div>• Internal staff console</div>
                  </div>
                </div>

              </div>

              {/* Unresolved Business Decisions Table */}
              <div className="border border-[#242D25] bg-[#161B16] p-7 rounded">
                <h4 className="text-lg font-bold text-[#EDEDE7] mb-4">
                  What We Are Finalizing Next
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
                      <p className="text-xs text-[#EDEDE7]/85 mb-2">
                        {dep.detail}
                      </p>
                      <div className="text-xs text-[#7E8B7B] font-mono">
                        Current Solution: {dep.alternative}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
