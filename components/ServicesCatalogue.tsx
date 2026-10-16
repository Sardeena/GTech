'use client';

import React from 'react';
import { motion } from 'motion/react';
import { SERVICES_CATALOGUE } from '@/lib/architecture-data';

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
    <section id="services" className="w-full border-b border-[#242D25] py-16 lg:py-24 overflow-hidden">
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
              {isAr ? 'ما نقدمه' : 'What We Offer'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EDEDE7]">
              {isAr ? 'الخدمات الأساسية للشركات' : 'Our Core Services'}
            </h2>
          </div>
          <p className="text-sm text-[#7E8B7B] max-w-md">
            {isAr
              ? 'يمكنك اختيار كل خدمة بمفردها، أو دمجها في باقة متكاملة لإدارة أعمالك على الإنترنت بسهولة وبدعم مستمر.'
              : 'Choose any service on its own, or combine them into a complete package to run your business online with peace of mind.'}
          </p>
        </motion.div>

        {/* Asymmetric Services Grid with subtle card hover and entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_CATALOGUE.map((service, index) => {
            const isFeatured = index === 0 || index === 4;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06, ease: easeCurve }}
                whileHover={{ y: -4, borderColor: '#7E8B7B' }}
                className={`relative flex flex-col justify-between border border-[#242D25] bg-[#161B16] p-7 rounded transition-colors ${
                  isFeatured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Top line: Index + Category */}
                  <div className="flex items-center justify-between text-xs font-mono text-[#7E8B7B] mb-4">
                    <span className="text-[#C8FF47] font-semibold text-sm">
                      {service.number}.
                    </span>
                    <span>{service.category}</span>
                  </div>

                  {/* Title & Bilingual Subtitle */}
                  <h3 className="text-xl font-bold text-[#EDEDE7] mb-1">
                    {isAr ? service.titleAr : service.title}
                  </h3>
                  <p className="text-xs font-medium text-[#C8FF47] mb-4">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-[#EDEDE7]/85 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables List (unboxed, clean typographic structure) */}
                  <div className="space-y-2 mb-6 border-t border-[#242D25] pt-4">
                    <div className="text-xs font-mono text-[#7E8B7B] uppercase">
                      {isAr ? 'ما تتضمنه الخدمة:' : 'What is included:'}
                    </div>
                    {service.keyDeliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#EDEDE7]/90 leading-tight">
                        <span className="text-[#C8FF47] font-mono shrink-0">→</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom line: Dynamic Pricing & Action Button */}
                <div className="pt-4 border-t border-[#242D25] flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[10px] font-mono text-[#7E8B7B] uppercase">
                      {isAr ? `الأسعار (${currency})` : `Starting at (${currency})`}
                    </div>
                    <div className="text-sm font-bold font-mono tabular-nums text-[#EDEDE7]">
                      {currency === 'EGP' ? service.pricingEgp : service.pricingUsd}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.03, borderColor: '#C8FF47', color: '#C8FF47' }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => onSelectService(service.id)}
                    type="button"
                    className="px-3.5 py-1.5 text-xs font-medium text-[#EDEDE7] border border-[#242D25] bg-[#101310] rounded transition-colors whitespace-nowrap shrink-0"
                  >
                    {isAr ? 'طلب تفاصيل الخدمة' : 'Ask About This'}
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
