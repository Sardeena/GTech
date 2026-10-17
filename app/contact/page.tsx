'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { useRtl } from '@/hooks/useRtl';
import { TopNavigation } from '@/components/TopNavigation';
import { InquiryForm } from '@/components/InquiryForm';
import { FooterSection } from '@/components/FooterSection';
import { EASE_CURVE } from '@/lib/motion';

export default function ContactPage() {
  const [currency, setCurrency] = useState<'EGP' | 'USD'>('EGP');
  const [locale, setLocale] = useState<'en' | 'ar'>('en');
  const { direction, isRtl } = useRtl(locale);
  const isAr = locale === 'ar';
  const shouldReduceMotion = useReducedMotion();

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
              <Link href="/" className="hover:text-[#C8FF47] transition-colors focus-visible:outline-2 focus-visible:outline-[#C8FF47] rounded">Home</Link> / Contact & Consultation
            </motion.div>
            <motion.h1
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : 0.08, ease: EASE_CURVE }}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-[#EDEDE7] mb-4"
            >
              {isAr ? 'ابدأ مشروعك معنا اليوم' : 'Start Your Project Conversation'}
            </motion.h1>
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : 0.16, ease: EASE_CURVE }}
              className="text-base sm:text-lg text-[#EDEDE7]/85 max-w-2xl leading-relaxed mb-6"
            >
              {isAr
                ? 'شاركنا أهدافك ومتطلباتك وسيقوم أحد مهندسينا بمراجعتها والتواصل معك بعرض عمل متكامل ودقيق خلال 24–48 ساعة.'
                : 'Share your requirements and expected timeline. An engineer will review your project and reply with a tailored proposal within 24–48 hours.'}
            </motion.p>
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.24, ease: EASE_CURVE }}
              className="flex flex-wrap items-center gap-6 text-xs font-mono text-[#7E8B7B]"
            >
              <div>Location: Cairo, Egypt</div>
              <div>Billing: EGP (Egypt) & USD (International)</div>
              <div className="text-[#C8FF47]">Direct Engineering Review</div>
            </motion.div>
          </div>
        </section>

        {/* Real Form with Verified Persistence */}
        <InquiryForm selectedServiceId="web-design" currency={currency} />
      </main>

      <FooterSection />
    </div>
  );
}
