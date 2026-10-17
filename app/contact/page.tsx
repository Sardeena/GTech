'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRtl } from '@/hooks/useRtl';
import { TopNavigation } from '@/components/TopNavigation';
import { InquiryForm } from '@/components/InquiryForm';
import { FooterSection } from '@/components/FooterSection';

export default function ContactPage() {
  const [currency, setCurrency] = useState<'EGP' | 'USD'>('EGP');
  const [locale, setLocale] = useState<'en' | 'ar'>('en');
  const { direction, isRtl } = useRtl(locale);
  const isAr = locale === 'ar';

  const scrollToForm = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div dir={direction} className={`min-h-screen bg-[#101310] text-[#EDEDE7] ${isRtl ? 'font-sans' : ''}`}>
      <TopNavigation
        onInquiryClick={scrollToForm}
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
              <Link href="/" className="hover:text-[#C8FF47] transition-colors">Home</Link> / Contact & Consultation
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#EDEDE7] mb-4">
              {isAr ? 'ابدأ مشروعك معنا اليوم' : 'Start Your Project Conversation'}
            </h1>
            <p className="text-base sm:text-lg text-[#EDEDE7]/85 max-w-2xl leading-relaxed mb-6">
              {isAr
                ? 'شاركنا أهدافك ومتطلباتك وسيقوم أحد مهندسينا بمراجعتها والتواصل معك بعرض عمل متكامل ودقيق خلال 24–48 ساعة.'
                : 'Share your requirements and expected timeline. An engineer will review your project and reply with a tailored proposal within 24–48 hours.'}
            </p>
            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-[#7E8B7B]">
              <div>Location: Cairo, Egypt</div>
              <div>Billing: EGP (Egypt) & USD (International)</div>
              <div className="text-[#C8FF47]">Direct Engineering Review</div>
            </div>
          </div>
        </section>

        {/* Real Form with Verified Persistence */}
        <InquiryForm selectedServiceId="web-design" currency={currency} />
      </main>

      <FooterSection />
    </div>
  );
}
