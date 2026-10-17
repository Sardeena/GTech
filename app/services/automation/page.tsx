'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { useRtl } from '@/hooks/useRtl';
import { TopNavigation } from '@/components/TopNavigation';
import { InquiryForm } from '@/components/InquiryForm';
import { FooterSection } from '@/components/FooterSection';
import { COMMERCIAL_SERVICES } from '@/lib/commercial-data';
import { EASE_CURVE } from '@/lib/motion';

const serviceData = COMMERCIAL_SERVICES.find((s) => s.slug === 'automation')!;

export default function AutomationServicePage() {
  const [currency, setCurrency] = useState<'EGP' | 'USD'>('EGP');
  const [locale, setLocale] = useState<'en' | 'ar'>('en');
  const { direction, isRtl } = useRtl(locale);
  const isAr = locale === 'ar';
  const shouldReduceMotion = useReducedMotion();

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
        <section className="relative border-b border-[#242D25] py-16 lg:py-20 bg-[#161B16] overflow-hidden">
          <div
            className="ambient-lime-radial absolute -top-24 -left-24 w-80 h-80 rounded-full blur-3xl z-0 opacity-40"
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: EASE_CURVE }}
              className="text-xs font-mono tracking-widest text-[#7E8B7B] uppercase mb-3"
            >
              <Link href="/" className="hover:text-[#C8FF47] transition-colors focus-visible:outline-2 focus-visible:outline-[#C8FF47] rounded">Home</Link> / Services / 03
            </motion.div>
            <motion.h1
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : 0.08, ease: EASE_CURVE }}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-[#EDEDE7] mb-4"
            >
              {isAr ? serviceData.titleAr : serviceData.title}
            </motion.h1>
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : 0.16, ease: EASE_CURVE }}
              className="text-lg text-[#C8FF47] font-medium max-w-2xl mb-6"
            >
              {isAr ? serviceData.taglineAr : serviceData.tagline}
            </motion.p>
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : 0.24, ease: EASE_CURVE }}
              className="text-sm sm:text-base text-[#EDEDE7]/85 max-w-3xl leading-relaxed mb-8"
            >
              {isAr ? serviceData.summaryAr : serviceData.summary}
            </motion.p>
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.32, ease: EASE_CURVE }}
              className="flex flex-wrap items-center gap-4"
            >
              <motion.button
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02, y: -1 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                transition={{ duration: 0.15, ease: EASE_CURVE }}
                onClick={scrollToContact}
                type="button"
                className="px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#101310] bg-[#C8FF47] rounded hover:bg-[#b5ee35] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C8FF47] shadow-sm"
              >
                {isAr ? 'طلب استشارة أتمتة الأعمال' : 'Consult on Automation'}
              </motion.button>
              <span className="text-xs font-mono text-[#7E8B7B] tabular-nums">
                {currency === 'EGP' ? serviceData.pricingSummaryEgp : serviceData.pricingSummaryUsd}
              </span>
            </motion.div>
          </div>
        </section>

        {/* Benefits & Deliverables */}
        <section className="py-16 border-b border-[#242D25] bg-[#101310]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: EASE_CURVE }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-[#EDEDE7] mb-6">
                  {isAr ? 'كيف نوفر وقت فريقك عبر أتمتة n8n؟' : 'Automate Repetitive Work With n8n'}
                </h2>
                <div className="space-y-6">
                  {serviceData.benefits.map((b, idx) => (
                    <div key={idx} className="border-b border-[#242D25] pb-4 last:border-0 transition-colors hover:border-[#7E8B7B]/50">
                      <h3 className="text-base font-bold text-[#C8FF47] mb-1">
                        {b.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#7E8B7B] leading-relaxed">
                        {b.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1, ease: EASE_CURVE }}
                whileHover={shouldReduceMotion ? undefined : { y: -3, borderColor: '#7E8B7B' }}
                className="border border-[#242D25] bg-[#161B16] p-8 rounded space-y-6 transition-[background-color,border-color,box-shadow] duration-200 hover:shadow-xl"
              >
                <h3 className="text-xl font-bold text-[#EDEDE7]">
                  {isAr ? 'عناصر مسار العمل الآلي:' : 'What We Build & Deliver:'}
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-[#EDEDE7]/90">
                  {serviceData.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2">
                      <span className="text-[#C8FF47] font-bold">✓</span>
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* FAQs */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: EASE_CURVE }}
              className="border-t border-[#242D25] pt-12"
            >
              <h3 className="text-xl font-bold text-[#EDEDE7] mb-6">
                {isAr ? 'الأسئلة الشائعة حول أتمتة الأعمال' : 'Business Automation FAQs'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceData.faqs.map((faq, fIdx) => (
                  <div key={fIdx} className="bg-[#161B16] border border-[#242D25] p-6 rounded space-y-2 transition-colors hover:border-[#7E8B7B]/50">
                    <h4 className="text-sm font-bold text-[#EDEDE7]">{faq.question}</h4>
                    <p className="text-xs text-[#7E8B7B] leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Inquiry Form */}
        <InquiryForm selectedServiceId="automation" currency={currency} />
      </main>

      <FooterSection />
    </div>
  );
}
