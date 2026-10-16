'use client';

import React from 'react';
import { SERVICES_CATALOGUE, ServiceVertical } from '@/lib/architecture-data';

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

  return (
    <section id="services" className="w-full border-b border-[#242D25] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#7E8B7B] uppercase mb-2">
              Capabilities & Offerings
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EDEDE7]">
              Six Mission-Critical Verticals
            </h2>
          </div>
          <p className="text-sm text-[#7E8B7B] max-w-md">
            Engineered as discrete, decoupled infrastructure units. Every contract can be deployed standalone or unified under a master service agreement.
          </p>
        </div>

        {/* Asymmetric Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_CATALOGUE.map((service, index) => {
            const isFeatured = index === 0 || index === 4;
            return (
              <div
                key={service.id}
                className={`relative flex flex-col justify-between border border-[#242D25] bg-[#161B16] p-7 rounded transition-colors hover:border-[#7E8B7B] ${
                  isFeatured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Top line: Editorial Index + Category */}
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

                  <p className="text-sm text-[#EDEDE7]/80 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables List (unboxed, clean typographic structure) */}
                  <div className="space-y-2 mb-6 border-t border-[#242D25] pt-4">
                    <div className="text-xs font-mono text-[#7E8B7B] uppercase">
                      Architecture Inclusions:
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
                      Base Rate ({currency})
                    </div>
                    <div className="text-sm font-bold font-mono tabular-nums text-[#EDEDE7]">
                      {currency === 'EGP' ? service.pricingEgp : service.pricingUsd}
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectService(service.id)}
                    type="button"
                    className="px-3.5 py-1.5 text-xs font-medium text-[#EDEDE7] border border-[#242D25] bg-[#101310] rounded hover:border-[#C8FF47] hover:text-[#C8FF47] transition-colors whitespace-nowrap shrink-0"
                  >
                    Configure Scope
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
