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
    <section className="relative w-full border-b border-[#242D25] pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Top kicker */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: easeCurve }}
          className="flex flex-wrap items-center gap-2 text-xs font-mono tracking-wider text-[#7E8B7B] uppercase mb-6"
        >
          <span>Reliable Web Technology</span>
          <span aria-hidden="true">·</span>
          <span>Cairo & Worldwide</span>
          <span aria-hidden="true">·</span>
          <span>Carefully Planned Architecture</span>
          <span aria-hidden="true">·</span>
          <span className="text-[#C8FF47]">Ready to Build</span>
        </motion.div>

        {/* 2-Column Split: Editorial Headline + Real Infrastructure Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch mb-14">
          
          {/* Column 1: Editorial Headline & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-between pr-0 lg:pr-6">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: easeCurve }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#EDEDE7] leading-[1.08] mb-6 text-balance"
              >
                Your business. <br />
                <span className="text-[#C8FF47]">Our infrastructure.</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: easeCurve }}
                className="text-base sm:text-lg text-[#EDEDE7]/85 leading-relaxed max-w-2xl mb-8"
              >
                Gonnsen Tech builds and manages the digital foundations your company relies on. We create fast custom websites, provide ready-to-use business software rentals, run high-speed cloud servers, and offer ongoing technical support so your systems stay online and trouble-free.
              </motion.p>
            </div>

            {/* Direct action triggers */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.3, ease: easeCurve }}
              className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#242D25]"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onInquiryClick}
                type="button"
                className="px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#101310] bg-[#C8FF47] rounded hover:bg-[#b5ee35] transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#C8FF47]"
              >
                Tell Us About Your Project
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02, borderColor: '#7E8B7B' }}
                whileTap={{ scale: 0.98 }}
                onClick={onExploreClick}
                type="button"
                className="px-6 py-3 text-xs sm:text-sm font-medium text-[#EDEDE7] border border-[#242D25] bg-[#161B16] rounded transition-colors whitespace-nowrap"
              >
                See How the System Works
              </motion.button>
            </motion.div>
          </div>

          {/* Column 2: Visual Anchor with subtle reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25, ease: easeCurve }}
            className="lg:col-span-5 relative min-h-[320px] sm:min-h-[400px] rounded border border-[#242D25] overflow-hidden bg-[#161B16]"
          >
            <Image
              src="/src/assets/images/gonnsen_infrastructure_datacenter_1792191985972.jpg"
              alt="Gonnsen Tech Enterprise Datacenter Infrastructure Racks"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
              referrerPolicy="no-referrer"
            />
            
            {/* Measured contrast scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#101310] via-transparent to-transparent opacity-80" />
            
            {/* Image caption badge */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-[#EDEDE7]/90 bg-[#101310]/85 backdrop-blur-sm border border-[#242D25] px-3 py-2 rounded">
              <span className="text-[#C8FF47]">SERVER FACILITY:</span>
              <span className="truncate">Modern enterprise servers with reliable 24/7 power</span>
            </div>
          </motion.div>
        </div>

        {/* Full-width 4-Column Metric Strip below the split */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: easeCurve }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#242D25] border border-[#242D25] rounded overflow-hidden"
        >
          
          <div className="bg-[#161B16] p-5 sm:p-6 transition-colors hover:bg-[#182019]">
            <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-[#C8FF47] mb-1">
              06
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#EDEDE7] mb-1">
              Core Services
            </div>
            <div className="text-xs text-[#7E8B7B]">
              Websites, software rentals, custom tools, domains, servers & support
            </div>
          </div>

          <div className="bg-[#161B16] p-5 sm:p-6 transition-colors hover:bg-[#182019]">
            <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-[#EDEDE7] mb-1">
              03
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#EDEDE7] mb-1">
              Connected Platforms
            </div>
            <div className="text-xs text-[#7E8B7B]">
              Public website, client dashboard, and internal team operations
            </div>
          </div>

          <div className="bg-[#161B16] p-5 sm:p-6 transition-colors hover:bg-[#182019]">
            <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-[#EDEDE7] mb-1">
              14%
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#EDEDE7] mb-1">
              Official Egyptian VAT
            </div>
            <div className="text-xs text-[#7E8B7B]">
              Transparent pricing in EGP and USD with legal tax invoices
            </div>
          </div>

          <div className="bg-[#161B16] p-5 sm:p-6 transition-colors hover:bg-[#182019]">
            <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-[#C8FF47] mb-1">
              99.9%
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#EDEDE7] mb-1">
              Reliable Uptime Goal
            </div>
            <div className="text-xs text-[#7E8B7B]">
              Fast 1-hour response when you need urgent technical assistance
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
