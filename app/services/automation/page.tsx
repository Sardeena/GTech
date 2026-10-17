'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRtl } from '@/hooks/useRtl';
import { TopNavigation } from '@/components/TopNavigation';
import { InquiryForm } from '@/components/InquiryForm';
import { FooterSection } from '@/components/FooterSection';
import { COMMERCIAL_SERVICES } from '@/lib/commercial-data';

const serviceData = COMMERCIAL_SERVICES.find((s) => s.slug === 'automation')!;

export default function AutomationServicePage() {
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
              <Link href="/" className="hover:text-[#C8FF47] transition-colors">Home</Link> / Services / 03
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
                {isAr ? 'طلب استشارة أتمتة الأعمال' : 'Consult on Automation'}
              </button>
              <span className="text-xs font-mono text-[#7E8B7B]">
                {currency === 'EGP' ? serviceData.pricingSummaryEgp : serviceData.pricingSummaryUsd}
              </span>
            </div>
          </div>
        </section>

        {/* What We Automate */}
        <section className="py-16 border-b border-[#242D25] bg-[#101310]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#EDEDE7] mb-3">
                {isAr ? 'أمثلة عملية لمسارات العمل التي نبنيها' : 'Workflows We Build for Growing Companies'}
              </h2>
              <p className="text-sm text-[#7E8B7B] max-w-2xl">
                {isAr
                  ? 'نوفر خدمات استشارية وهندسية لربط تطبيقاتك وأتمتة المهام اليومية باستخدام منصة n8n والـ Webhooks المباشرة.'
                  : 'We consult, configure, and maintain automated workflows linking your tools using n8n and API webhooks.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="border border-[#242D25] bg-[#161B16] p-6 rounded space-y-3">
                <span className="font-mono text-xs text-[#C8FF47] font-bold">WORKFLOW 01</span>
                <h3 className="text-lg font-bold text-[#EDEDE7]">
                  {isAr ? 'استقبال العملاء وتنبيهات المبيعات' : 'Lead Capture & Sales Alerts'}
                </h3>
                <p className="text-xs text-[#7E8B7B] leading-relaxed">
                  {isAr
                    ? 'تسجيل العملاء القادمين من الموقع أو الحملات الإعلانية فوراً في نظام CRM وإرسال تنبيه واتساب فوري لمسؤول المبيعات.'
                    : 'Website form submissions instantly create CRM records and ping sales reps via WhatsApp or Slack with zero manual delay.'}
                </p>
              </div>

              <div className="border border-[#242D25] bg-[#161B16] p-6 rounded space-y-3">
                <span className="font-mono text-xs text-[#C8FF47] font-bold">WORKFLOW 02</span>
                <h3 className="text-lg font-bold text-[#EDEDE7]">
                  {isAr ? 'الفواتير وإشعارات السداد' : 'Invoice & Payment Sync'}
                </h3>
                <p className="text-xs text-[#7E8B7B] leading-relaxed">
                  {isAr
                    ? 'عند تأكيد السداد عبر Paymob أو Stripe، يتم تحديث حالة الفاتورة تلقائياً وإرسال إيصال فوري للعميل عبر البريد الإلكتروني.'
                    : 'Verified payment webhooks automatically update invoices, trigger receipt emails, and log revenue in accounting spreadsheets.'}
                </p>
              </div>

              <div className="border border-[#242D25] bg-[#161B16] p-6 rounded space-y-3">
                <span className="font-mono text-xs text-[#C8FF47] font-bold">WORKFLOW 03</span>
                <h3 className="text-lg font-bold text-[#EDEDE7]">
                  {isAr ? 'مزامنة البيانات والتقارير' : 'Spreadsheet & Data Sync'}
                </h3>
                <p className="text-xs text-[#7E8B7B] leading-relaxed">
                  {isAr
                    ? 'مزامنة قواعد البيانات مع Google Sheets أو Excel لتقديم تقارير دورية للإدارة دون الحاجة لإدخال يدوي.'
                    : 'Automated data extraction and formatting for executive dashboards and daily operational reports.'}
                </p>
              </div>
            </div>

            {/* Deliverables */}
            <div className="border border-[#242D25] bg-[#161B16] p-8 rounded space-y-4 mb-16">
              <h3 className="text-xl font-bold text-[#EDEDE7]">
                {isAr ? 'ما يتضمنه مشروع الأتمتة:' : 'Included In Our Automation Engagements:'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#EDEDE7]/90">
                {serviceData.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2">
                    <span className="text-[#C8FF47] font-bold">✓</span>
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="border-t border-[#242D25] pt-12">
              <h3 className="text-xl font-bold text-[#EDEDE7] mb-6">
                {isAr ? 'الأسئلة الشائعة حول الأتمتة' : 'Automation FAQs'}
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
        <InquiryForm selectedServiceId="automation" currency={currency} />
      </main>

      <FooterSection />
    </div>
  );
}
