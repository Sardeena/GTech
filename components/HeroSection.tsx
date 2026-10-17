'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onInquiryClick: () => void;
  locale: 'en' | 'ar';
}

const easeCurve = [0.16, 1, 0.3, 1] as const;

export function HeroSection({ onExploreClick, onInquiryClick, locale }: HeroSectionProps) {
  const isAr = locale === 'ar';

  return (
    <section className="relative w-full border-b border-[#242D25] pt-12 pb-16 lg:pt-18 lg:pb-22 overflow-hidden bg-[#101310]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Editorial Top Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: easeCurve }}
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
              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08, ease: easeCurve }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#EDEDE7] leading-[1.08] mb-6 text-balance"
              >
                {isAr ? (
                  <>
                    أفكارك. <br />
                    <span className="text-[#C8FF47]">مبنية لتعمل بنجاح.</span>
                  </>
                ) : (
                  <>
                    Your ideas. <br />
                    <span className="text-[#C8FF47]">Built to work.</span>
                  </>
                )}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.16, ease: easeCurve }}
                className="text-base sm:text-lg text-[#EDEDE7]/85 leading-relaxed max-w-2xl mb-8"
              >
                {isAr
                  ? 'نصمم مواقع عصرية، ونبني أنظمة إدارة العملاء والمبيعات (CRM)، ونؤتمت الأعمال الروتينية التي تستهلك وقت فريقك، مع خيارات مرنة للشراء أو الإيجار الشهري.'
                  : 'We design websites, build business systems, and automate the work that slows you down. Choose between flexible monthly software rentals or bespoke one-time builds tailored to your business.'}
              </motion.p>
            </div>

            {/* Direct Action Triggers */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.24, ease: easeCurve }}
              className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#242D25]"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onExploreClick}
                type="button"
                className="px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#101310] bg-[#C8FF47] rounded hover:bg-[#b5ee35] transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#C8FF47] cursor-pointer"
              >
                {isAr ? 'استكشف الخدمات' : 'Explore Services'}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02, borderColor: '#7E8B7B' }}
                whileTap={{ scale: 0.98 }}
                onClick={onInquiryClick}
                type="button"
                className="px-6 py-3 text-xs sm:text-sm font-medium text-[#EDEDE7] border border-[#242D25] bg-[#161B16] rounded hover:border-[#7E8B7B] transition-colors whitespace-nowrap cursor-pointer"
              >
                {isAr ? 'ابدأ مشروعك الآن' : 'Start a Project'}
              </motion.button>
            </motion.div>
          </div>

          {/* Column 2: Visual Anchor */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: easeCurve }}
            className="lg:col-span-5 relative min-h-[300px] sm:min-h-[380px] rounded border border-[#242D25] overflow-hidden bg-[#161B16]"
          >
            <Image
              src="/images/datacenter.jpg"
              alt="Gonnsen Tech digital systems and high-availability cloud infrastructure"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              referrerPolicy="no-referrer"
            />
            
            {/* Measured contrast scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#101310] via-transparent to-transparent opacity-85" />
            
            {/* Customer-Oriented Caption Badge */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-[#EDEDE7]/90 bg-[#101310]/85 backdrop-blur-sm border border-[#242D25] px-3.5 py-2.5 rounded">
              <span className="text-[#C8FF47] font-semibold">{isAr ? 'منصة الأعمال:' : 'BUSINESS PLATFORM:'}</span>
              <span className="truncate">{isAr ? 'مواقع · برامج CRM · أتمتة n8n · سيرفرات' : 'Websites · CRM · Automation · Hosting'}</span>
            </div>
          </motion.div>
        </div>

        {/* 4-Column Customer Value Strip (Grounded, Verified Commitments) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.32, ease: easeCurve }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#242D25] border border-[#242D25] rounded overflow-hidden"
        >
          
          <div className="bg-[#161B16] p-5 sm:p-6 transition-colors hover:bg-[#182019]">
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

          <div className="bg-[#161B16] p-5 sm:p-6 transition-colors hover:bg-[#182019]">
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

          <div className="bg-[#161B16] p-5 sm:p-6 transition-colors hover:bg-[#182019]">
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

          <div className="bg-[#161B16] p-5 sm:p-6 transition-colors hover:bg-[#182019]">
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
