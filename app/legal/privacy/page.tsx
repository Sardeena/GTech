'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRtl } from '@/hooks/useRtl';
import { TopNavigation } from '@/components/TopNavigation';
import { FooterSection } from '@/components/FooterSection';

export default function PrivacyPage() {
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
            <Link href="/" className="hover:text-[#C8FF47] transition-colors">Home</Link> / Legal / Privacy Policy
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EDEDE7] mb-6">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-[#7E8B7B] mb-10 pb-4 border-b border-[#242D25]">
            Last updated: October 2026 · Gonnsen Tech, Cairo, Egypt
          </p>

          <div className="space-y-8 text-sm text-[#EDEDE7]/85 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#EDEDE7]">1. Information We Collect</h2>
              <p>
                When you submit a project inquiry or contact us through our website, we collect your name, email address, phone number (optional), organization name, country/jurisdiction, and project requirements. We use this information solely to review your inquiry, formulate a proposal, and communicate with you regarding your project.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#EDEDE7]">2. How We Store & Protect Data</h2>
              <p>
                Inquiries are transmitted via secure HTTPS encryption and persisted to secure servers. We employ industry-standard access controls, network rate limits, and server firewalls to prevent unauthorized access.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#EDEDE7]">3. No Sale of Personal Information</h2>
              <p>
                We do not sell, rent, trade, or distribute your personal information or business details to third-party advertisers or data brokers.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#EDEDE7]">4. Cookies & Analytics</h2>
              <p>
                We use minimal functional cookies to maintain your selected currency (EGP/USD) and language preferences (EN/AR). We do not deploy invasive third-party cross-site tracking pixels.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#EDEDE7]">5. Your Rights & Contact</h2>
              <p>
                You may request a copy of the personal details we hold about you or request deletion of your inquiry record at any time by contacting us directly at <span className="font-mono text-[#C8FF47]">contact@gonnsen.com</span>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
