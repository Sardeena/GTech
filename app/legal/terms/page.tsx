'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRtl } from '@/hooks/useRtl';
import { TopNavigation } from '@/components/TopNavigation';
import { FooterSection } from '@/components/FooterSection';

export default function TermsPage() {
  const [currency, setCurrency] = useState<'EGP' | 'USD'>('EGP');
  const [locale, setLocale] = useState<'en' | 'ar'>('en');
  const { direction, isRtl } = useRtl(locale);

  return (
    <div dir={direction} className={`min-h-screen bg-[#101310] text-[#EDEDE7] ${isRtl ? 'font-sans' : ''}`}>
      <TopNavigation
        onInquiryClick={() => {}}
        currency={currency}
        onCurrencyToggle={() => setCurrency((p) => (p === 'EGP' ? 'USD' : 'EGP'))}
        locale={locale}
        onLocaleToggle={() => setLocale((p) => (p === 'en' ? 'ar' : 'en'))}
      />

      <main className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-xs font-mono tracking-widest text-[#7E8B7B] uppercase mb-3">
            <Link href="/" className="hover:text-[#C8FF47] transition-colors">Home</Link> / Legal / Terms of Service
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EDEDE7] mb-6">
            Terms of Service
          </h1>
          <p className="text-xs font-mono text-[#7E8B7B] mb-10 pb-4 border-b border-[#242D25]">
            Last updated: October 2026 · Gonnsen Tech, Cairo, Egypt
          </p>

          <div className="space-y-8 text-sm text-[#EDEDE7]/85 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#EDEDE7]">1. Engagement & Commercial Scope</h2>
              <p>
                Gonnsen Tech provides website design, custom software development, software rental licenses (CRM/CMS), workflow automation consulting, and managed web hosting. Every project is governed by a mutually approved written proposal or commercial service order detailing deliverables, milestones, and payment terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#EDEDE7]">2. Intellectual Property & Code Ownership</h2>
              <p>
                For custom one-time website and application builds, 100% of the custom design assets, frontend code, and client-supplied content become the client’s sole property upon full settlement of project fees.
              </p>
              <p>
                For software rental offerings (such as our monthly CRM subscriptions), Gonnsen Tech grants the client a non-exclusive, revocable, monthly license to use the hosted software. The underlying proprietary platform remains the intellectual property of Gonnsen Tech, while the client retains complete and unencumbered ownership of all customer records and data stored within their tenant instance.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#EDEDE7]">3. Billing, Currency & Invoicing</h2>
              <p>
                Clients situated in Egypt are billed and settled directly in Egyptian Pounds (EGP). International clients are billed in US Dollars (USD). Prices stated in proposals are binding for the agreed scope. Any scope expansions or out-of-scope feature requests are quoted in writing before implementation.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#EDEDE7]">4. Client Data & Confidentiality</h2>
              <p>
                Gonnsen Tech maintains strict confidentiality regarding all client proprietary information, customer leads, and business operations. We never sell, lease, or share client data with third parties.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#EDEDE7]">5. Governing Law</h2>
              <p>
                These terms are governed by and construed in accordance with the laws of the Arab Republic of Egypt for domestic contracts, or international commercial arbitration standards where specified in custom agreements.
              </p>
            </section>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
