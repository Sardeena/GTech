'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRtl } from '@/hooks/useRtl';
import { TopNavigation } from '@/components/TopNavigation';
import { InquiryForm } from '@/components/InquiryForm';
import { FooterSection } from '@/components/FooterSection';
import { COMMERCIAL_SERVICES } from '@/lib/commercial-data';

const serviceData = COMMERCIAL_SERVICES.find((s) => s.slug === 'crm')!;

export default function CrmServicePage() {
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
              <Link href="/" className="hover:text-[#C8FF47] transition-colors">Home</Link> / Services / 02
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
                {isAr ? 'ابدأ تجربة أو شراء CRM' : 'Rent or Buy CRM'}
              </button>
              <span className="text-xs font-mono text-[#7E8B7B]">
                {currency === 'EGP' ? serviceData.pricingSummaryEgp : serviceData.pricingSummaryUsd}
              </span>
            </div>
          </div>
        </section>

        {/* Rent vs. Buy Explainer */}
        <section className="py-16 border-b border-[#242D25] bg-[#101310]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              
              <div className="border border-[#C8FF47] bg-[#182019] p-8 rounded space-y-4">
                <div className="text-xs font-mono text-[#C8FF47] uppercase font-bold">
                  OPTION A · MONTHLY RENTAL
                </div>
                <h3 className="text-2xl font-bold text-[#EDEDE7]">
                  {isAr ? 'إيجار شهري بدون مخاطرة' : 'Low-Cost Monthly Rental'}
                </h3>
                <p className="text-xs sm:text-sm text-[#EDEDE7]/85 leading-relaxed">
                  {isAr
                    ? 'ابدأ فوراً باشتراك شهري اقتصادي. يشمل الاستضافة السحابية الآمنة، والنسخ الاحتياطي اليومي، والدعم الفني، والتحديثات المستمرة دون أي تكاليف تأسيس ضخمة.'
                    : 'Get started immediately on a predictable monthly subscription. Cloud hosting, security, daily backups, and ongoing updates are completely included.'}
                </p>
                <div className="pt-2 text-sm font-mono font-bold text-[#C8FF47]">
                  {currency === 'EGP' ? 'From 1,750 EGP / mo' : 'From $65 USD / mo'}
                </div>
              </div>

              <div className="border border-[#242D25] bg-[#161B16] p-8 rounded space-y-4">
                <div className="text-xs font-mono text-[#7E8B7B] uppercase font-bold">
                  OPTION B · PERPETUAL PURCHASE & CUSTOMIZATION
                </div>
                <h3 className="text-2xl font-bold text-[#EDEDE7]">
                  {isAr ? 'شراء وتخصيص كامل' : 'Full Purchase & Ownership'}
                </h3>
                <p className="text-xs sm:text-sm text-[#EDEDE7]/85 leading-relaxed">
                  {isAr
                    ? 'امتلك النظام بالكامل مع تخصيص مسارات العمل ومراحل المبيعات لتطابق شركتك تماماً، ونشره على خوادمك الخاصة مع تدريب فريق العمل.'
                    : 'Acquire 100% software ownership. We customize pipelines, custom fields, and reports to fit your exact internal sales operations.'}
                </p>
                <div className="pt-2 text-sm font-mono font-bold text-[#EDEDE7]">
                  {currency === 'EGP' ? 'From 65,000 EGP (One-time)' : 'From $2,500 USD (One-time)'}
                </div>
              </div>

            </div>

            {/* Features */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#EDEDE7] mb-6">
                  {isAr ? 'إمكانيات نظام CRM' : 'Key CRM Capabilities'}
                </h2>
                <div className="space-y-4">
                  {serviceData.benefits.map((b, idx) => (
                    <div key={idx} className="border-b border-[#242D25] pb-3 last:border-0">
                      <h4 className="text-base font-bold text-[#C8FF47] mb-1">{b.title}</h4>
                      <p className="text-xs sm:text-sm text-[#7E8B7B]">{b.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-[#242D25] bg-[#161B16] p-8 rounded space-y-4">
                <h3 className="text-xl font-bold text-[#EDEDE7]">
                  {isAr ? 'الميزات المضمنة:' : 'Included Features:'}
                </h3>
                <div className="space-y-2.5 text-xs sm:text-sm text-[#EDEDE7]/90">
                  {serviceData.deliverables.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2">
                      <span className="text-[#C8FF47] font-bold">✓</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="border-t border-[#242D25] pt-12">
              <h3 className="text-xl font-bold text-[#EDEDE7] mb-6">
                {isAr ? 'الأسئلة الشائعة حول أنظمة CRM' : 'CRM Systems FAQs'}
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
        <InquiryForm selectedServiceId="crm" currency={currency} />
      </main>

      <FooterSection />
    </div>
  );
}
