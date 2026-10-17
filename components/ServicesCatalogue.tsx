'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { COMMERCIAL_SERVICES, ServiceOffering } from '@/lib/commercial-data';

interface ServicesCatalogueProps {
  currency: 'EGP' | 'USD';
  locale: 'en' | 'ar';
  onSelectService: (serviceId: string) => void;
}

const easeCurve = [0.16, 1, 0.3, 1] as const;

export function ServicesCatalogue({
  currency,
  locale,
  onSelectService,
}: ServicesCatalogueProps) {
  const isAr = locale === 'ar';

  return (
    <section id="services" className="w-full border-b border-[#242D25] py-16 lg:py-24 overflow-hidden bg-[#101310]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: easeCurve }}
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
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: easeCurve }}
                whileHover={{ y: -4, borderColor: '#7E8B7B' }}
                className={`relative flex flex-col justify-between border border-[#242D25] bg-[#161B16] p-7 rounded transition-colors ${
                  isFeatured ? 'border-[#242D25]' : ''
                }`}
              >
                <div>
                  {/* Top Line: Number + Models */}
                  <div className="flex items-center justify-between text-xs font-mono text-[#7E8B7B] mb-4">
                    <span className="text-[#C8FF47] font-semibold text-sm">
                      {service.number}.
                    </span>
                    <span className="text-[11px] bg-[#101310] px-2.5 py-1 rounded border border-[#242D25]">
                      {service.commercialModels.join(' · ')}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-[#EDEDE7] mb-1">
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
                        <span className="text-[#C8FF47] font-bold mr-1">✓</span>
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
                    <div className="text-xs font-bold font-mono text-[#EDEDE7]">
                      {currency === 'EGP' ? service.pricingSummaryEgp : service.pricingSummaryUsd}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <Link
                      href={`/services/${service.slug}`}
                      className="flex-1 text-center py-2 px-3 text-xs font-medium text-[#EDEDE7] border border-[#242D25] bg-[#101310] rounded hover:border-[#C8FF47] hover:text-[#C8FF47] transition-colors whitespace-nowrap"
                    >
                      {isAr ? 'تفاصيل الخدمة' : 'View Service'}
                    </Link>

                    <button
                      onClick={() => onSelectService(service.slug)}
                      type="button"
                      className="py-2 px-3 text-xs font-semibold uppercase tracking-wider text-[#101310] bg-[#C8FF47] rounded hover:bg-[#b5ee35] transition-colors whitespace-nowrap cursor-pointer"
                    >
                      {isAr ? 'طلب عرض سعر' : 'Ask About This'}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Transparent Pricing Notice */}
        <div className="mt-8 pt-4 border-t border-[#242D25] flex flex-col sm:flex-row items-center justify-between text-xs text-[#7E8B7B] gap-2">
          <span>
            {isAr
              ? '* الأسعار المعروضة هي أسعار بداية استرشادية للباقات الأساسية. يتم تأكيد التكلفة النهائية في مقترح عمل مكتوب بعد دراسة متطلباتك الدقيقة.'
              : '* Displayed prices represent base package starting estimates. Exact quotes are confirmed in a written proposal following technical scope review.'}
          </span>
          <span className="font-mono text-[#C8FF47] shrink-0">
            {isAr ? 'شفافية كاملة في التسعير' : 'Clear & Transparent Pricing'}
          </span>
        </div>

      </div>
    </section>
  );
}
