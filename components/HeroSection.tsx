'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import { EASE_CURVE, HERO_WORD_CONTAINER, HERO_WORD_ITEM } from '@/lib/motion';

interface HeroSectionProps {
  onExploreClick: () => void;
  onInquiryClick: () => void;
  locale: 'en' | 'ar';
}

export function HeroSection({ onExploreClick, onInquiryClick, locale }: HeroSectionProps) {
  const isAr = locale === 'ar';
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full border-b border-[#242D25] pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden bg-[#101310]">
      {/* Restrained subtle ambient glow behind the hero */}
      <div
        className="ambient-lime-radial absolute -top-32 -left-32 w-96 h-96 lg:w-[32rem] lg:h-[32rem] rounded-full blur-3xl z-0"
        aria-hidden="true"
      />
      <div
        className="ambient-lime-radial absolute top-1/2 -right-32 w-80 h-80 rounded-full blur-3xl z-0 opacity-40"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Editorial Top Kicker */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: EASE_CURVE }}
          className="flex flex-wrap items-center gap-2 text-xs font-mono tracking-wider text-[#7E8B7B] uppercase mb-6"
        >
          <span>{isAr ? 'خدمات برمجية ورقمية' : 'Digital Services & Software'}</span>
          <span aria-hidden="true">·</span>
          <span>{isAr ? 'مصر والأسواق العالمية' : 'Egypt & International'}</span>
          <span aria-hidden="true">·</span>
          <span className="text-[#C8FF47] font-semibold">{isAr ? 'إيجار أو شراء' : 'Rent or Buy Options'}</span>
        </motion.div>

        {/* 2-Column Split: Editorial Headline + High-Impact Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch mb-14">
          
          {/* Column 1: Customer-First Headline & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-between pr-0 lg:pr-4">
            <div>
              {/* Word/Line Group Entrance Sequence */}
              <motion.h1
                variants={shouldReduceMotion ? undefined : HERO_WORD_CONTAINER}
                initial={shouldReduceMotion ? false : 'hidden'}
                animate="visible"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#EDEDE7] leading-[1.08] mb-6 text-balance"
              >
                {isAr ? (
                  <>
                    <motion.span
                      variants={shouldReduceMotion ? undefined : HERO_WORD_ITEM}
                      className="inline-block"
                    >
                      أفكارك.
                    </motion.span>{' '}
                    <br />
                    <motion.span
                      variants={shouldReduceMotion ? undefined : HERO_WORD_ITEM}
                      className="inline-block text-[#C8FF47]"
                    >
                      مبنية لتعمل بنجاح.
                    </motion.span>
                  </>
                ) : (
                  <>
                    <motion.span
                      variants={shouldReduceMotion ? undefined : HERO_WORD_ITEM}
                      className="inline-block"
                    >
                      Your ideas.
                    </motion.span>{' '}
                    <br />
                    <motion.span
                      variants={shouldReduceMotion ? undefined : HERO_WORD_ITEM}
                      className="inline-block text-[#C8FF47]"
                    >
                      Built to work.
                    </motion.span>
                  </>
                )}
              </motion.h1>

              {/* Supporting Copy Reveal */}
              <motion.p
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : 0.22, ease: EASE_CURVE }}
                className="text-base sm:text-lg text-[#EDEDE7]/85 leading-relaxed max-w-2xl mb-8"
              >
                {isAr
                  ? 'نصمم مواقع عصرية، ونبني أنظمة إدارة العملاء والمبيعات (CRM)، ونؤتمت الأعمال الروتينية التي تستهلك وقت فريقك، مع خيارات مرنة للشراء أو الإيجار الشهري.'
                  : 'We design websites, build business systems, and automate the work that slows you down. Choose between flexible monthly software rentals or bespoke one-time builds tailored to your business.'}
              </motion.p>
            </div>

            {/* Direct Action Triggers with Staggered Entrance */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.3, ease: EASE_CURVE }}
              className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#242D25]"
            >
              <motion.button
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02, y: -1 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                transition={{ duration: 0.15, ease: EASE_CURVE }}
                onClick={onExploreClick}
                type="button"
                className="group inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#101310] bg-[#C8FF47] rounded hover:bg-[#b5ee35] transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#C8FF47] focus-visible:outline-offset-2 cursor-pointer shadow-sm"
              >
                <span>{isAr ? 'استكشف الخدمات' : 'Explore Services'}</span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
                >
                  {isAr ? '←' : '→'}
                </span>
              </motion.button>

              <motion.button
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02, y: -1, borderColor: '#7E8B7B' }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                transition={{ duration: 0.15, ease: EASE_CURVE }}
                onClick={onInquiryClick}
                type="button"
                className="px-6 py-3 text-xs sm:text-sm font-medium text-[#EDEDE7] border border-[#242D25] bg-[#161B16] rounded hover:border-[#7E8B7B] transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#C8FF47] focus-visible:outline-offset-2 cursor-pointer"
              >
                {isAr ? 'ابدأ مشروعك الآن' : 'Start a Project'}
              </motion.button>
            </motion.div>
          </div>

          {/* Column 2: Visual Anchor with Restrained Entrance & Hover */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.24, ease: EASE_CURVE }}
            className="group lg:col-span-5 relative min-h-[300px] sm:min-h-[380px] rounded border border-[#242D25] overflow-hidden bg-[#161B16]"
          >
            <Image
              src="/images/datacenter.jpg"
              alt="Gonnsen Tech digital systems and high-availability cloud infrastructure"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              referrerPolicy="no-referrer"
            />

            {/* Measured contrast scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#101310] via-transparent to-transparent opacity-85 pointer-events-none" />

            {/* Customer-Oriented Caption Badge with entrance */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.4, ease: EASE_CURVE }}
              className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-[#EDEDE7]/90 bg-[#101310]/85 backdrop-blur-md border border-[#242D25] px-3.5 py-2.5 rounded transition-colors group-hover:border-[#7E8B7B]/50"
            >
              <span className="text-[#C8FF47] font-semibold">{isAr ? 'منصة الأعمال:' : 'BUSINESS PLATFORM:'}</span>
              <span className="truncate">{isAr ? 'مواقع · برامج CRM · أتمتة n8n · سيرفرات' : 'Websites · CRM · Automation · Hosting'}</span>
            </motion.div>
          </motion.div>
        </div>

        {/* 4-Column Customer Value Strip (Grounded, Verified Commitments) */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : 0.36, ease: EASE_CURVE }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#242D25] border border-[#242D25] rounded overflow-hidden"
        >
          <div className="bg-[#161B16] p-5 sm:p-6 transition-all duration-200 hover:bg-[#182019]">
            <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-[#C8FF47] mb-1">
              06
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#EDEDE7] mb-1">
              {isAr ? 'خدمات متكاملة' : 'Core Services'}
            </div>
            <div className="text-xs text-[#7E8B7B]">
              {isAr ? 'مواقع، أنظمة CRM، أتمتة، هوية بصرية، استضافة ودعم' : 'Web design, CRM, n8n automation, branding & hosting'}
            </div>
          </div>

          <div className="bg-[#161B16] p-5 sm:p-6 transition-all duration-200 hover:bg-[#182019]">
            <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-[#EDEDE7] mb-1">
              {isAr ? 'إيجار / شراء' : 'Rent or Buy'}
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#EDEDE7] mb-1">
              {isAr ? 'مرونة تجارية' : 'Commercial Flexibility'}
            </div>
            <div className="text-xs text-[#7E8B7B]">
              {isAr ? 'إيجار شهري اقتصادي أو شراء وتخصيص دائم' : 'Low monthly rentals or owned custom solutions'}
            </div>
          </div>

          <div className="bg-[#161B16] p-5 sm:p-6 transition-all duration-200 hover:bg-[#182019]">
            <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-[#EDEDE7] mb-1">
              EGP / USD
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#EDEDE7] mb-1">
              {isAr ? 'تسعير شفاف' : 'Dual Pricing'}
            </div>
            <div className="text-xs text-[#7E8B7B]">
              {isAr ? 'دفع بالجنيه المصري للمحلي والدولار للعالمي' : 'Direct EGP for Egypt clients, USD for international'}
            </div>
          </div>

          <div className="bg-[#161B16] p-5 sm:p-6 transition-all duration-200 hover:bg-[#182019]">
            <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-[#C8FF47] mb-1">
              AR / EN
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#EDEDE7] mb-1">
              {isAr ? 'ثنائي اللغة' : 'Bilingual Ready'}
            </div>
            <div className="text-xs text-[#7E8B7B]">
              {isAr ? 'تصميم مريح للقراءة من اليمين إلى اليسار' : 'Native right-to-left (RTL) Arabic & Latin typography'}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
