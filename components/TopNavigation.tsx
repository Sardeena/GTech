'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { useRtl } from '@/hooks/useRtl';

interface TopNavigationProps {
  onInquiryClick: () => void;
  currency: 'EGP' | 'USD';
  onCurrencyToggle: () => void;
  locale: 'en' | 'ar';
  onLocaleToggle: () => void;
}

export function TopNavigation({
  onInquiryClick,
  currency,
  onCurrencyToggle,
  locale,
  onLocaleToggle,
}: TopNavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isRtl, direction } = useRtl(locale);

  const navItems = isRtl
    ? [
        { label: 'الخدمات', href: '#services' },
        { label: 'كيف يعمل النظام', href: '#ecosystem' },
        { label: 'قواعد البيانات', href: '#data-model' },
        { label: 'الأمان والخصوصية', href: '#security' },
        { label: 'خطة العمل', href: '#roadmap' },
      ]
    : [
        { label: 'Services', href: '#services' },
        { label: 'How It Works', href: '#ecosystem' },
        { label: 'Database', href: '#data-model' },
        { label: 'Security', href: '#security' },
        { label: 'Roadmap', href: '#roadmap' },
      ];

  return (
    <header
      dir={direction}
      className={`sticky top-0 z-50 w-full border-b border-[#242D25] bg-[#101310]/95 backdrop-blur-md transition-colors ${
        isRtl ? 'font-sans' : ''
      }`}
    >
      <div className="mx-auto grid grid-cols-12 items-center h-18 max-w-7xl px-6 lg:px-8 gap-4">
        
        {/* Zone 1: Brand Wordmark (Start-aligned) */}
        <div className="col-span-7 sm:col-span-5 lg:col-span-3 flex items-center gap-3">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-[#EDEDE7] transition-colors hover:text-[#C8FF47] whitespace-nowrap shrink-0"
          >
            GONNSEN TECH
          </Link>
          <span className="hidden xl:inline-block text-[11px] text-[#7E8B7B] tracking-wider truncate">
            {isRtl ? 'القاهرة والخدمات العالمية' : 'CAIRO & WORLDWIDE'}
          </span>
        </div>

        {/* Zone 2: Navigation Links (Center-aligned) */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex lg:col-span-6 items-center justify-center gap-6 xl:gap-8 text-sm font-medium text-[#7E8B7B]"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[#EDEDE7] whitespace-nowrap shrink-0"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Utilities & Contact Action (End-aligned) */}
        <div className="col-span-5 sm:col-span-7 lg:col-span-3 flex items-center justify-end gap-2.5 sm:gap-3 shrink-0">
          
          {/* Currency Toggle */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onCurrencyToggle}
            type="button"
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono text-[#EDEDE7] border border-[#242D25] bg-[#161B16] rounded transition-colors hover:border-[#7E8B7B] cursor-pointer"
            title={isRtl ? 'تغيير عملة عرض الأسعار' : 'Switch pricing currency'}
          >
            <span className="text-[#7E8B7B]">
              {isRtl ? 'العملة:' : 'CURRENCY:'}
            </span>
            <span className="font-semibold text-[#C8FF47]">{currency}</span>
          </motion.button>

          {/* Locale Toggle */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onLocaleToggle}
            type="button"
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono text-[#EDEDE7] border border-[#242D25] bg-[#161B16] rounded transition-colors hover:border-[#7E8B7B] cursor-pointer"
            title={isRtl ? 'Switch to English' : 'التبديل إلى العربية'}
            aria-label={isRtl ? 'Switch to English' : 'التبديل إلى العربية'}
          >
            <span className="hidden xs:inline text-[#7E8B7B]">
              {isRtl ? 'اللغة:' : 'LOCALE:'}
            </span>
            <span className="font-semibold text-[#C8FF47]">
              {locale === 'en' ? 'EN' : 'العربية'}
            </span>
          </motion.button>

          {/* Primary CTA */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onInquiryClick}
            type="button"
            className="px-3.5 sm:px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#101310] bg-[#C8FF47] rounded hover:bg-[#b5ee35] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#C8FF47] cursor-pointer"
          >
            {isRtl ? 'تواصل معنا' : 'Contact Us'}
          </motion.button>

          {/* Mobile hamburger button */}
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="flex lg:hidden p-2 text-[#EDEDE7] border border-[#242D25] bg-[#161B16] rounded"
            aria-label={isRtl ? 'تبديل القائمة' : 'Toggle navigation menu'}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile drawer with smooth animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            dir={direction}
            className="lg:hidden border-t border-[#242D25] bg-[#101310] px-6 py-4 space-y-4 overflow-hidden"
          >
            <div className="flex flex-col space-y-2.5 text-sm text-[#7E8B7B] text-start">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1.5 hover:text-[#EDEDE7] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#242D25] flex items-center justify-between gap-3">
              <button
                onClick={onCurrencyToggle}
                type="button"
                className="px-3 py-1.5 text-xs font-mono text-[#EDEDE7] border border-[#242D25] bg-[#161B16] rounded"
              >
                {isRtl ? 'العملة:' : 'CURRENCY:'} <span className="text-[#C8FF47]">{currency}</span>
              </button>
              <button
                onClick={onLocaleToggle}
                type="button"
                className="px-3 py-1.5 text-xs font-mono text-[#EDEDE7] border border-[#242D25] bg-[#161B16] rounded"
              >
                {isRtl ? 'اللغة:' : 'LOCALE:'} <span className="text-[#C8FF47]">{locale === 'en' ? 'EN' : 'العربية'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
