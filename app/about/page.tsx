'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRtl } from '@/hooks/useRtl';
import { TopNavigation } from '@/components/TopNavigation';
import { AboutCompanySection } from '@/components/AboutCompanySection';
import { InquiryForm } from '@/components/InquiryForm';
import { FooterSection } from '@/components/FooterSection';

export default function AboutPage() {
  const [currency, setCurrency] = useState<'EGP' | 'USD'>('EGP');
  const [locale, setLocale] = useState<'en' | 'ar'>('en');
  const { direction, isRtl } = useRtl(locale);
  const isAr = locale === 'ar';

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
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
              <Link href="/" className="hover:text-[#C8FF47] transition-colors">Home</Link> / About Gonnsen Tech
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#EDEDE7] mb-4">
              {isAr ? 'عن جونزن تك' : 'About Gonnsen Tech'}
            </h1>
            <p className="text-base sm:text-lg text-[#EDEDE7]/85 max-w-2xl leading-relaxed">
              {isAr
                ? 'فريق تقني متخصص في بناء المواقع والأنظمة البرمجية والأتمتة السحابية للشركات الناشئة والمؤسسات في مصر وحول العالم.'
                : 'A dedicated engineering and design company building high-converting websites, CRM software, and business workflow automations for growing businesses.'}
            </p>
          </div>
        </section>

        {/* Company Overview & Principles */}
        <AboutCompanySection locale={locale} />

        {/* Direct Inquiry Form */}
        <InquiryForm selectedServiceId="web-design" currency={currency} />
      </main>

      <FooterSection />
    </div>
  );
}
