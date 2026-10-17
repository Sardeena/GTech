'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PRICING_PACKAGES, PricingPackage } from '@/lib/commercial-data';

interface PricingCatalogueSectionProps {
  currency: 'EGP' | 'USD';
  locale: 'en' | 'ar';
  onSelectService: (serviceId: string) => void;
}

const easeCurve = [0.16, 1, 0.3, 1] as const;

export function PricingCatalogueSection({
  currency,
  locale,
  onSelectService,
}: PricingCatalogueSectionProps) {
  const isAr = locale === 'ar';
  const [filterModel, setFilterModel] = useState<string>('all');

  const filterTabs = isAr
    ? [
        { id: 'all', label: 'جميع الباقات' },
        { id: 'one-time', label: 'شراء / بناء لمرة واحدة' },
        { id: 'rental-monthly', label: 'إيجار شهري للبرامج' },
        { id: 'recurring-support', label: 'صيانة ودعم مستمر' },
      ]
    : [
        { id: 'all', label: 'All Packages' },
        { id: 'one-time', label: 'One-Time Builds' },
        { id: 'rental-monthly', label: 'Software Rentals' },
        { id: 'recurring-support', label: 'Maintenance & Care' },
      ];

  const filteredPackages = PRICING_PACKAGES.filter((pkg) => {
    if (filterModel === 'all') return true;
    return pkg.model === filterModel;
  });

  return (
    <section id="pricing" className="w-full border-b border-[#242D25] py-16 lg:py-24 bg-[#161B16] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#7E8B7B] uppercase mb-2">
              {isAr ? 'الباقات والأسعار' : 'Transparent Packages'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EDEDE7]">
              {isAr ? 'خطط أسعار واضحة ومحددة' : 'Simple, Honest Pricing'}
            </h2>
          </div>
          <p className="text-sm text-[#7E8B7B] max-w-md">
            {isAr
              ? 'اختر بين الشراء لمرة واحدة أو الإيجار الشهري. لا توجد رسوم خفية أو مفاجآت في أسعار الصرف.'
              : 'Choose between one-time project builds or predictable monthly software rentals with zero hidden surprises.'}
          </p>
        </div>

        {/* Model Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-[#242D25] pb-5 mb-10">
          {filterTabs.map((tab) => {
            const isActive = filterModel === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilterModel(tab.id)}
                type="button"
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#C8FF47] text-[#101310] font-semibold'
                    : 'bg-[#101310] text-[#7E8B7B] border border-[#242D25] hover:text-[#EDEDE7]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredPackages.map((pkg: PricingPackage, idx: number) => {
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05, ease: easeCurve }}
                className={`relative flex flex-col justify-between border rounded p-6 bg-[#101310] transition-all ${
                  pkg.isPopular ? 'border-[#C8FF47] shadow-sm' : 'border-[#242D25]'
                }`}
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono text-[#7E8B7B] uppercase truncate">
                      {pkg.serviceCategory}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded shrink-0 ${
                      pkg.isPopular
                        ? 'bg-[#C8FF47] text-[#101310] font-bold'
                        : 'bg-[#161B16] text-[#C8FF47] border border-[#242D25]'
                    }`}>
                      {pkg.badge}
                    </span>
                  </div>

                  {/* Package Name */}
                  <h3 className="text-lg font-bold text-[#EDEDE7] mb-2">
                    {isAr ? pkg.nameAr : pkg.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-4 pb-4 border-b border-[#242D25]">
                    <div className="text-2xl font-bold font-mono tabular-nums text-[#EDEDE7]">
                      {currency === 'EGP' ? pkg.priceEgp : pkg.priceUsd}
                    </div>
                    {pkg.periodText && (
                      <div className="text-[11px] font-mono text-[#7E8B7B] mt-0.5">
                        {pkg.periodText}
                      </div>
                    )}
                  </div>

                  {/* Summary */}
                  <p className="text-xs text-[#EDEDE7]/80 leading-relaxed mb-6">
                    {pkg.description}
                  </p>

                  {/* Included Deliverables */}
                  <div className="space-y-2 mb-6 border-t border-[#242D25] pt-4">
                    <div className="text-[10px] font-mono uppercase text-[#7E8B7B]">
                      {isAr ? 'ما تتضمنه الباقة:' : 'What is included:'}
                    </div>
                    {pkg.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-1.5 text-xs text-[#EDEDE7]/90 leading-tight">
                        <span className="text-[#C8FF47] shrink-0 font-bold">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-4 border-t border-[#242D25]">
                  <button
                    onClick={() => onSelectService(pkg.serviceSlug)}
                    type="button"
                    className={`w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider rounded transition-colors text-center cursor-pointer ${
                      pkg.isPopular
                        ? 'bg-[#C8FF47] text-[#101310] hover:bg-[#b5ee35]'
                        : 'bg-[#161B16] text-[#EDEDE7] border border-[#242D25] hover:border-[#C8FF47] hover:text-[#C8FF47]'
                    }`}
                  >
                    {isAr ? 'اختر هذه الباقة' : pkg.ctaText}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Scope Notice */}
        <div className="border border-[#242D25] bg-[#101310] p-6 rounded flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-[#EDEDE7]">
              {isAr ? 'هل تحتاج إلى متطلبات مخصصة بالكامل؟' : 'Need a Fully Bespoke Setup?'}
            </h4>
            <p className="text-xs text-[#7E8B7B] mt-1">
              {isAr
                ? 'إذا كانت شركتك تتطلب مسارات عمل فريدة، أو ربطاً معقدة بقواعد بيانات داخلية، فنحن نقدم عروض أسعار تفصيلية بناءً على نطاق العمل.'
                : 'If your business requires specialized multi-system integrations or custom modules, we provide detailed written quotes based on your exact requirements.'}
            </p>
          </div>
          <button
            onClick={() => onSelectService('web-design')}
            type="button"
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#101310] bg-[#C8FF47] rounded hover:bg-[#b5ee35] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            {isAr ? 'طلب عرض مخصص' : 'Request Custom Quote'}
          </button>
        </div>

      </div>
    </section>
  );
}
