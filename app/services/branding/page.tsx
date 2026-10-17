'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRtl } from '@/hooks/useRtl';
import { TopNavigation } from '@/components/TopNavigation';
import { InquiryForm } from '@/components/InquiryForm';
import { FooterSection } from '@/components/FooterSection';
import { COMMERCIAL_SERVICES } from '@/lib/commercial-data';

const serviceData = COMMERCIAL_SERVICES.find((s) => s.slug === 'branding')!;

export default function BrandingServicePage() {
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
        {/* Service Hero */}
        <section className="border-b border-[#242D25] py-16 lg:py-20 bg-[#161B16]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-xs font-mono tracking-widest text-[#7E8B7B] uppercase mb-3">
              <Link href="/" className="hover:text-[#C8FF47] transition-colors">Home</Link> / Services / 04
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#EDEDE7] mb-4">
              {isAr ? serviceData.titleAr : serviceData.title}
            </h1>
            <p className="text-lg text-[#C8FF47] font-medium max-w-2xl mb-6">
              {isAr ? serviceData.taglineAr : serviceData.tagline}
            </p>
            <p className="text-sm sm:text-base text-[#EDEDE7]/85 max-w-3xl leading-relaxed mb-8">
              {isAr ? serviceData.summaryAr : serviceData.summary}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToContact}
                type="button"
                className="px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#101310] bg-[#C8FF47] rounded hover:bg-[#b5ee35] transition-colors cursor-pointer"
              >
                {isAr ? 'طلب هوية بصرية لشركتك' : 'Request Brand Identity'}
              </button>
              <span className="text-xs font-mono text-[#7E8B7B]">
                {currency === 'EGP' ? serviceData.pricingSummaryEgp : serviceData.pricingSummaryUsd}
              </span>
            </div>
          </div>
        </section>

        {/* Benefits & Deliverables */}
        <section className="py-16 border-b border-[#242D25] bg-[#101310]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#EDEDE7] mb-6">
                  {isAr ? 'تصميم يصنع الثقة والمكانة' : 'Design That Commands Respect'}
                </h2>
                <div className="space-y-6">
                  {serviceData.benefits.map((b, idx) => (
                    <div key={idx} className="border-b border-[#242D25] pb-4 last:border-0">
                      <h3 className="text-base font-bold text-[#C8FF47] mb-1">{b.title}</h3>
                      <p className="text-xs sm:text-sm text-[#7E8B7B] leading-relaxed">{b.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-[#242D25] bg-[#161B16] p-8 rounded space-y-6">
                <h3 className="text-xl font-bold text-[#EDEDE7]">
                  {isAr ? 'حزمة الأصول التي ستستلمها:' : 'Complete Brand Assets Delivered:'}
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-[#EDEDE7]/90">
                  {serviceData.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2">
                      <span className="text-[#C8FF47] font-bold">✓</span>
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-[#242D25] text-xs font-mono text-[#7E8B7B]">
                  Formats provided: AI vector, EPS, SVG, transparent PNG, print PDF, and font specs.
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="border-t border-[#242D25] pt-12">
              <h3 className="text-xl font-bold text-[#EDEDE7] mb-6">
                {isAr ? 'الأسئلة الشائعة حول الهوية البصرية' : 'Branding FAQs'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceData.faqs.map((faq, fIdx) => (
                  <div key={fIdx} className="bg-[#161B16] border border-[#242D25] p-6 rounded space-y-2">
                    <h4 className="text-sm font-bold text-[#EDEDE7]">{faq.question}</h4>
                    <p className="text-xs text-[#7E8B7B] leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Inquiry Form */}
        <InquiryForm selectedServiceId="branding" currency={currency} />
      </main>

      <FooterSection />
    </div>
  );
}
