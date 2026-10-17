'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { useRtl } from '@/hooks/useRtl';
import { TopNavigation } from '@/components/TopNavigation';
import { PricingCatalogueSection } from '@/components/PricingCatalogueSection';
import { InquiryForm } from '@/components/InquiryForm';
import { FooterSection } from '@/components/FooterSection';
import { EASE_CURVE } from '@/lib/motion';

export default function PricingPage() {
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

  const handleSelectService = (slug: string) => {
    setSelectedService(slug);
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
              <Link href="/" className="hover:text-[#C8FF47] transition-colors focus-visible:outline-2 focus-visible:outline-[#C8FF47] rounded">Home</Link> / Pricing & Plans
            </motion.div>
            <motion.h1
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : 0.08, ease: EASE_CURVE }}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-[#EDEDE7] mb-4"
            >
              {isAr ? 'خطط أسعار واضحة وشفافة' : 'Simple, Transparent Pricing'}
            </motion.h1>
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : 0.16, ease: EASE_CURVE }}
              className="text-base sm:text-lg text-[#EDEDE7]/85 max-w-2xl leading-relaxed mb-6"
            >
              {isAr
                ? 'قارن بين باقات الشراء لمرة واحدة والإيجار الشهري المريح للبرمجيات. لا توجد أي رسوم خفية أو مفاجآت في أسعار الصرف.'
                : 'Compare one-time build packages with flexible monthly software rentals. No hidden setup costs, no unexpected exchange rate fees.'}
            </motion.p>
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.24, ease: EASE_CURVE }}
              className="flex items-center gap-3 text-xs font-mono text-[#7E8B7B]"
            >
              <span>Active Billing Currency:</span>
              <motion.button
                whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                onClick={() => setCurrency((p) => (p === 'EGP' ? 'USD' : 'EGP'))}
                type="button"
                className="px-2.5 py-1 rounded bg-[#101310] border border-[#242D25] text-[#C8FF47] font-bold cursor-pointer hover:border-[#7E8B7B] transition-colors focus-visible:outline-2 focus-visible:outline-[#C8FF47]"
              >
                {currency} (Click to switch)
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Pricing Explorer Component */}
        <PricingCatalogueSection
          currency={currency}
          locale={locale}
          onSelectService={handleSelectService}
        />

        {/* Direct RFP Form */}
        <InquiryForm selectedServiceId={selectedService} currency={currency} />
      </main>

      <FooterSection />
    </div>
  );
}
