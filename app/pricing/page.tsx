'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRtl } from '@/hooks/useRtl';
import { TopNavigation } from '@/components/TopNavigation';
import { PricingCatalogueSection } from '@/components/PricingCatalogueSection';
import { InquiryForm } from '@/components/InquiryForm';
import { FooterSection } from '@/components/FooterSection';

export default function PricingPage() {
  const [currency, setCurrency] = useState<'EGP' | 'USD'>('EGP');
  const [locale, setLocale] = useState<'en' | 'ar'>('en');
  const [selectedService, setSelectedService] = useState<string>('web-design');
  const { direction, isRtl } = useRtl(locale);
  const isAr = locale === 'ar';

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectService = (slug: string) => {
    setSelectedService(slug);
    scrollToContact();
  };

  return (
    <div dir={direction} className={`min-h-screen bg-[#101310] text-[#EDEDE7] ${isRtl ? 'font-sans' : ''}`}>
      <TopNavigation
        onInquiryClick={scrollToContact}
        currency={currency}
        onCurrencyToggle={() => setCurrency((p) => (p === 'EGP' ? 'USD' : 'EGP'))}
        locale={locale}
        onLocaleToggle={() => setLocale((p) => (p === 'en' ? 'ar' : 'en'))}
      />

      <main>
        {/* Page Header */}
        <section className="border-b border-[#242D25] py-16 lg:py-20 bg-[#161B16]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-xs font-mono tracking-widest text-[#7E8B7B] uppercase mb-3">
              <Link href="/" className="hover:text-[#C8FF47] transition-colors">Home</Link> / Pricing & Plans
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#EDEDE7] mb-4">
              {isAr ? 'خطط أسعار واضحة وشفافة' : 'Simple, Transparent Pricing'}
            </h1>
            <p className="text-base sm:text-lg text-[#EDEDE7]/85 max-w-2xl leading-relaxed mb-6">
              {isAr
                ? 'قارن بين باقات الشراء لمرة واحدة والإيجار الشهري المريح للبرمجيات. لا توجد أي رسوم خفية أو مفاجآت في أسعار الصرف.'
                : 'Compare one-time build packages with flexible monthly software rentals. No hidden setup costs, no unexpected exchange rate fees.'}
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-[#7E8B7B]">
              <span>Active Billing Currency:</span>
              <button
                onClick={() => setCurrency((p) => (p === 'EGP' ? 'USD' : 'EGP'))}
                type="button"
                className="px-2.5 py-1 rounded bg-[#101310] border border-[#242D25] text-[#C8FF47] font-bold cursor-pointer"
              >
                {currency} (Click to switch)
              </button>
            </div>
          </div>
        </section>

        {/* Pricing Explorer Component */}
        <PricingCatalogueSection
          currency={currency}
          locale={locale}
          onSelectService={handleSelectService}
        />

        {/* Direct RFP Form */}
        <InquiryForm selectedServiceId={selectedService} currency={currency} />
      </main>

      <FooterSection />
    </div>
  );
}
