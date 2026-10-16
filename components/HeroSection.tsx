'use client';

import React from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  onExploreClick: () => void;
  onInquiryClick: () => void;
  locale: 'en' | 'ar';
}

export function HeroSection({ onExploreClick, onInquiryClick, locale }: HeroSectionProps) {
  const isAr = locale === 'ar';

  return (
    <section className="relative w-full border-b border-[#242D25] pt-12 pb-16 lg:pt-16 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Top unboxed metadata kicker with typographic separators */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono tracking-wider text-[#7E8B7B] uppercase mb-6">
          <span>Enterprise Infrastructure</span>
          <span aria-hidden="true">·</span>
          <span>Cairo & Global Transit</span>
          <span aria-hidden="true">·</span>
          <span>Phase 0 Architecture</span>
          <span aria-hidden="true">·</span>
          <span className="text-[#C8FF47]">Ready for Implementation</span>
        </div>

        {/* 2-Column Split: Editorial Headline + Real Infrastructure Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch mb-14">
          
          {/* Column 1: Editorial Headline & Concrete Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-between pr-0 lg:pr-6">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#EDEDE7] leading-[1.08] mb-6 text-balance">
                Your business. <br />
                <span className="text-[#C8FF47]">Our infrastructure.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-[#EDEDE7]/80 leading-relaxed max-w-2xl mb-8">
                Gonnsen Tech designs, builds, and manages end-to-end digital infrastructure for businesses in Egypt and worldwide. We provide custom web platforms, software rentals, cloud VPS hosting, institutional domain management, and guaranteed enterprise maintenance agreements.
              </p>
            </div>

            {/* Direct action triggers */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#242D25]">
              <button
                onClick={onInquiryClick}
                type="button"
                className="px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#101310] bg-[#C8FF47] rounded hover:bg-[#b5ee35] transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#C8FF47]"
              >
                Start Project Inquiry
              </button>
              
              <button
                onClick={onExploreClick}
                type="button"
                className="px-6 py-3 text-xs sm:text-sm font-medium text-[#EDEDE7] border border-[#242D25] bg-[#161B16] rounded hover:border-[#7E8B7B] transition-colors whitespace-nowrap"
              >
                Inspect 3-Surface Specs
              </button>
            </div>
          </div>

          {/* Column 2: Visual Anchor with measured border and scrim */}
          <div className="lg:col-span-5 relative min-h-[320px] sm:min-h-[400px] rounded border border-[#242D25] overflow-hidden bg-[#161B16]">
            <Image
              src="/src/assets/images/gonnsen_infrastructure_datacenter_1792191985972.jpg"
              alt="Gonnsen Tech Enterprise Datacenter Infrastructure Racks"
              fill
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
            
            {/* Measured contrast scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#101310] via-transparent to-transparent opacity-80" />
            
            {/* Image caption badge - clean unboxed technical typography */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-[#EDEDE7]/90 bg-[#101310]/85 backdrop-blur-sm border border-[#242D25] px-3 py-2 rounded">
              <span className="text-[#C8FF47]">NODE SPEC:</span>
              <span className="truncate">Tier-III Datacenter / BGP Multihomed Backbone</span>
            </div>
          </div>
        </div>

        {/* Full-width 4-Column Metric Strip below the split */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#242D25] border border-[#242D25] rounded overflow-hidden">
          
          <div className="bg-[#161B16] p-5 sm:p-6">
            <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-[#C8FF47] mb-1">
              06
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#EDEDE7] mb-1">
              Core Verticals
            </div>
            <div className="text-xs text-[#7E8B7B]">
              Web, CRM/CMS rentals, Automation, Domains, VPS & SLA
            </div>
          </div>

          <div className="bg-[#161B16] p-5 sm:p-6">
            <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-[#EDEDE7] mb-1">
              03
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#EDEDE7] mb-1">
              Ecosystem Surfaces
            </div>
            <div className="text-xs text-[#7E8B7B]">
              Public Web, Client Portal & Internal Operations Console
            </div>
          </div>

          <div className="bg-[#161B16] p-5 sm:p-6">
            <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-[#EDEDE7] mb-1">
              14%
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#EDEDE7] mb-1">
              Egypt VAT Compliant
            </div>
            <div className="text-xs text-[#7E8B7B]">
              Dual pricing in EGP & USD with formal tax invoicing
            </div>
          </div>

          <div className="bg-[#161B16] p-5 sm:p-6">
            <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-[#C8FF47] mb-1">
              99.9%
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#EDEDE7] mb-1">
              SLA Commitment
            </div>
            <div className="text-xs text-[#7E8B7B]">
              Guaranteed 1-hour critical response for managed agreements
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
