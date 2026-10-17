'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRtl } from '@/hooks/useRtl';
import { TopNavigation } from '@/components/TopNavigation';
import { PortfolioShowcaseSection } from '@/components/PortfolioShowcaseSection';
import { InquiryForm } from '@/components/InquiryForm';
import { FooterSection } from '@/components/FooterSection';

export default function WorkPage() {
  const [currency, setCurrency] = useState<'EGP' | 'USD'>('EGP');
  const [locale, setLocale] = useState<'en' | 'ar'>('en');
  const [selectedService, setSelectedService] = useState<string>('web-design');
  const { direction, isRtl } = useRtl(locale);
  const isAr = locale === 'ar';

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectService = (slug?: string) => {
    if (slug) setSelectedService(slug);
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
              <Link href="/" className="hover:text-[#C8FF47] transition-colors">Home</Link> / Work & Proof
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#EDEDE7] mb-4">
              {isAr ? 'نماذج أعمال وتطبيقات مثبتة' : 'Work & Product Demonstrations'}
            </h1>
            <p className="text-base sm:text-lg text-[#EDEDE7]/85 max-w-2xl leading-relaxed mb-6">
              {isAr
                ? 'استكشف نماذج حقيقية لمتاجر إلكترونية، وأنظمة CRM، ومسارات عمل مؤتمتة عبر n8n تم تنفيذها وفق أعلى معايير الجودة والسرعة والأمان.'
                : 'Explore real, verified demonstrations of custom e-commerce stores, CRM rental platforms, and n8n workflow automations built for real-world reliability.'}
            </p>
          </div>
        </section>

        {/* Portfolio Showcase Component */}
        <PortfolioShowcaseSection locale={locale} onInquiryClick={handleSelectService} />

        {/* Direct Inquiry Form */}
        <InquiryForm selectedServiceId={selectedService} currency={currency} />
      </main>

      <FooterSection />
    </div>
  );
}
