'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { useRtl } from '@/hooks/useRtl';
import { TopNavigation } from '@/components/TopNavigation';
import { PortfolioShowcaseSection } from '@/components/PortfolioShowcaseSection';
import { InquiryForm } from '@/components/InquiryForm';
import { FooterSection } from '@/components/FooterSection';
import { EASE_CURVE } from '@/lib/motion';

export default function WorkPage() {
  const [currency, setCurrency] = useState<'EGP' | 'USD'>('EGP');
  const [locale, setLocale] = useState<'en' | 'ar'>('en');
  const [selectedService, setSelectedService] = useState<string>('web-design');
  const { direction, isRtl } = useRtl(locale);
  const isAr = locale === 'ar';
  const shouldReduceMotion = useReducedMotion();

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
              <Link href="/" className="hover:text-[#C8FF47] transition-colors focus-visible:outline-2 focus-visible:outline-[#C8FF47] rounded">Home</Link> / Work & Proof
            </motion.div>
            <motion.h1
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : 0.08, ease: EASE_CURVE }}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-[#EDEDE7] mb-4"
            >
              {isAr ? 'نماذج أعمال وتطبيقات مثبتة' : 'Work & Product Demonstrations'}
            </motion.h1>
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : 0.16, ease: EASE_CURVE }}
              className="text-base sm:text-lg text-[#EDEDE7]/85 max-w-2xl leading-relaxed mb-6"
            >
              {isAr
                ? 'استكشف نماذج حقيقية لمتاجر إلكترونية، وأنظمة CRM، ومسارات عمل مؤتمتة عبر n8n تم تنفيذها وفق أعلى معايير الجودة والسرعة والأمان.'
                : 'Explore real, verified demonstrations of custom e-commerce stores, CRM rental platforms, and n8n workflow automations built for real-world reliability.'}
            </motion.p>
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
