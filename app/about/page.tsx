'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { useRtl } from '@/hooks/useRtl';
import { TopNavigation } from '@/components/TopNavigation';
import { AboutCompanySection } from '@/components/AboutCompanySection';
import { InquiryForm } from '@/components/InquiryForm';
import { FooterSection } from '@/components/FooterSection';
import { EASE_CURVE } from '@/lib/motion';

export default function AboutPage() {
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
              <Link href="/" className="hover:text-[#C8FF47] transition-colors focus-visible:outline-2 focus-visible:outline-[#C8FF47] rounded">Home</Link> / About Gonnsen Tech
            </motion.div>
            <motion.h1
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : 0.08, ease: EASE_CURVE }}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-[#EDEDE7] mb-4"
            >
              {isAr ? 'عن جونزن تك' : 'About Gonnsen Tech'}
            </motion.h1>
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : 0.16, ease: EASE_CURVE }}
              className="text-base sm:text-lg text-[#EDEDE7]/85 max-w-2xl leading-relaxed"
            >
              {isAr
                ? 'فريق تقني متخصص في بناء المواقع والأنظمة البرمجية والأتمتة السحابية للشركات الناشئة والمؤسسات في مصر وحول العالم.'
                : 'A dedicated engineering and design company building high-converting websites, CRM software, and business workflow automations for growing businesses.'}
            </motion.p>
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
