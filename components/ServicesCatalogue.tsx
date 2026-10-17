'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { COMMERCIAL_SERVICES, ServiceOffering } from '@/lib/commercial-data';
import { EASE_CURVE } from '@/lib/motion';

interface ServicesCatalogueProps {
  currency: 'EGP' | 'USD';
  locale: 'en' | 'ar';
  onSelectService: (serviceId: string) => void;
}

export function ServicesCatalogue({
  currency,
  locale,
  onSelectService,
}: ServicesCatalogueProps) {
  const isAr = locale === 'ar';
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services" className="relative w-full border-b border-[#242D25] py-16 lg:py-24 overflow-hidden bg-[#101310]">
      {/* Background subtle ambient highlight */}
      <div
        className="ambient-lime-radial absolute bottom-0 right-10 w-96 h-96 rounded-full blur-3xl z-0 opacity-30"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.45, ease: EASE_CURVE }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="text-xs font-mono tracking-widest text-[#7E8B7B] uppercase mb-2">
              {isAr ? 'الخدمات والحلول التجارية' : 'Services & Software'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EDEDE7]">
              {isAr ? 'ما نقدمه لنمو أعمالك' : 'What We Build For Your Business'}
            </h2>
          </div>
          <p className="text-sm text-[#7E8B7B] max-w-md">
            {isAr
              ? 'اختر الخدمة التي تحتاجها الآن، مع حرية الاختيار بين الشراء لمرة واحدة أو الإيجار الشهري المريح دون تكاليف تأسيس مرهقة.'
              : 'Choose the service your business needs today. Select between flexible monthly rentals or fully owned custom implementations.'}
          </p>
        </motion.div>

        {/* 6 Commercial Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMMERCIAL_SERVICES.map((service: ServiceOffering, index: number) => {
            const isFeatured = index === 0 || index === 1;
            return (
              <motion.div
                key={service.id}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  duration: 0.4,
                  delay: shouldReduceMotion ? 0 : index * 0.06,
                  ease: EASE_CURVE,
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { y: -4, borderColor: '#7E8B7B' }
                }
                className={`group relative flex flex-col justify-between border border-[#242D25] bg-[#161B16] p-7 rounded transition-[background-color,border-color,box-shadow] duration-200 hover:bg-[#182019] hover:shadow-xl hover:shadow-black/30 ${
                  isFeatured ? 'border-[#242D25]' : ''
                }`}
              >
                {/* Subtle top indicator that illuminates on hover */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-[2px] bg-[#C8FF47] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-t"
                />

                <div>
                  {/* Top Line: Number + Models */}
                  <div className="flex items-center justify-between text-xs font-mono text-[#7E8B7B] mb-4">
                    <span className="text-[#C8FF47] font-semibold text-sm transition-transform duration-200 group-hover:translate-x-0.5">
                      {service.number}.
                    </span>
                    <span className="text-[11px] bg-[#101310] px-2.5 py-1 rounded border border-[#242D25] text-[#EDEDE7]/90 transition-colors group-hover:border-[#7E8B7B]">
                      {service.commercialModels.join(' · ')}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-[#EDEDE7] mb-1 transition-colors group-hover:text-white">
                    {isAr ? service.titleAr : service.title}
                  </h3>
                  <p className="text-xs font-medium text-[#C8FF47] mb-4">
                    {isAr ? service.taglineAr : service.tagline}
                  </p>

                  <p className="text-sm text-[#EDEDE7]/85 leading-relaxed mb-6">
                    {isAr ? service.summaryAr : service.summary}
                  </p>

                  {/* Customer Benefits */}
                  <div className="space-y-2.5 mb-6 border-t border-[#242D25] pt-4">
                    <div className="text-xs font-mono text-[#7E8B7B] uppercase">
                      {isAr ? 'أهم الفوائد لشركتك:' : 'Key Customer Benefits:'}
                    </div>
                    {service.benefits.slice(0, 3).map((benefit, bIdx) => (
                      <div key={bIdx} className="text-xs text-[#EDEDE7]/90 leading-tight">
                        <span className="text-[#C8FF47] font-bold mr-1 rtl:ml-1 rtl:mr-0">✓</span>
                        <strong className="text-[#EDEDE7]">{benefit.title}:</strong>{' '}
                        <span className="text-[#7E8B7B]">{benefit.description}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Line: Transparent Pricing & Dual Actions */}
                <div className="pt-5 border-t border-[#242D25] space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-[10px] font-mono text-[#7E8B7B] uppercase">
                      {isAr ? `الأسعار التقديرية (${currency})` : `Starting at (${currency})`}
                    </div>
                    <div className="text-xs font-bold font-mono text-[#EDEDE7] tabular-nums">
                      {currency === 'EGP' ? service.pricingSummaryEgp : service.pricingSummaryUsd}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <Link
                      href={`/services/${service.slug}`}
                      className="group/link flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium text-[#EDEDE7] border border-[#242D25] bg-[#101310] rounded hover:border-[#C8FF47] hover:text-[#C8FF47] transition-all whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#C8FF47]"
                    >
                      <span>{isAr ? 'تفاصيل الخدمة' : 'View Service'}</span>
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-200 group-hover/link:translate-x-0.5 rtl:group-hover/link:-translate-x-0.5"
                      >
                        {isAr ? '←' : '→'}
                      </span>
                    </Link>

                    <motion.button
                      whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                      whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                      transition={{ duration: 0.15, ease: EASE_CURVE }}
                      onClick={() => onSelectService(service.slug)}
                      type="button"
                      className="py-2 px-3 text-xs font-semibold uppercase tracking-wider text-[#101310] bg-[#C8FF47] rounded hover:bg-[#b5ee35] transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#C8FF47] cursor-pointer"
                    >
                      {isAr ? 'طلب عرض سعر' : 'Ask About This'}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Transparent Pricing Notice */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-8 pt-4 border-t border-[#242D25] flex flex-col sm:flex-row items-center justify-between text-xs text-[#7E8B7B] gap-2"
        >
          <span>
            {isAr
              ? '* الأسعار المعروضة هي أسعار بداية استرشادية للباقات الأساسية. يتم تأكيد التكلفة النهائية في مقترح عمل مكتوب بعد دراسة متطلباتك الدقيقة.'
              : '* Displayed prices represent base package starting estimates. Exact quotes are confirmed in a written proposal following technical scope review.'}
          </span>
          <span className="font-mono text-[#C8FF47] shrink-0">
            {isAr ? 'شفافية كاملة في التسعير' : 'Clear & Transparent Pricing'}
          </span>
        </motion.div>

      </div>
    </section>
  );
}
