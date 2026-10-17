'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { useRtl } from '@/hooks/useRtl';
import { EASE_CURVE } from '@/lib/motion';

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
  const [isScrolled, setIsScrolled] = useState(false);
  const { isRtl, direction } = useRtl(locale);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navItems = isRtl
    ? [
        { label: 'الخدمات', href: '/#services' },
        { label: 'الأسعار والباقات', href: '/#pricing' },
        { label: 'كيف نعمل', href: '/#how-it-works' },
        { label: 'نماذج الأعمال', href: '/#work' },
        { label: 'عن الشركة', href: '/#about' },
        { label: 'تواصل معنا', href: '/#contact' },
      ]
    : [
        { label: 'Services', href: '/#services' },
        { label: 'Pricing', href: '/#pricing' },
        { label: 'How It Works', href: '/#how-it-works' },
        { label: 'Work & Demos', href: '/#work' },
        { label: 'About', href: '/#about' },
        { label: 'Contact', href: '/#contact' },
      ];

  return (
    <header
      dir={direction}
      className={`sticky top-0 z-50 w-full transition-[background-color,box-shadow,border-color] duration-250 ${
        isScrolled
          ? 'border-b border-[#242D25] bg-[#101310]/95 backdrop-blur-md shadow-lg shadow-black/40'
          : 'border-b border-[#242D25]/80 bg-[#101310]/80 backdrop-blur-sm'
      } ${isRtl ? 'font-sans' : ''}`}
    >
      <div className="mx-auto grid grid-cols-12 items-center h-18 max-w-7xl px-6 lg:px-8 gap-4">
        
        {/* Zone 1: Brand Wordmark (Start-aligned) */}
        <div className="col-span-7 sm:col-span-5 lg:col-span-3 flex items-center gap-3">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-[#EDEDE7] transition-colors hover:text-[#C8FF47] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#C8FF47] focus-visible:outline-offset-2 rounded"
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
              className="relative py-1 transition-colors hover:text-[#EDEDE7] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#C8FF47] focus-visible:outline-offset-2 rounded group"
            >
              <span>{item.label}</span>
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C8FF47] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-start"
              />
            </a>
          ))}
        </nav>

        {/* Zone 3: Utilities & Contact Action (End-aligned) */}
        <div className="col-span-5 sm:col-span-7 lg:col-span-3 flex items-center justify-end gap-2.5 sm:gap-3 shrink-0">
          
          {/* Currency Toggle */}
          <motion.button
            whileHover={shouldReduceMotion ? undefined : { scale: 1.02, borderColor: '#7E8B7B' }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
            transition={{ duration: 0.15, ease: EASE_CURVE }}
            onClick={onCurrencyToggle}
            type="button"
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono text-[#EDEDE7] border border-[#242D25] bg-[#161B16] rounded transition-colors hover:border-[#7E8B7B] focus-visible:outline-2 focus-visible:outline-[#C8FF47] focus-visible:outline-offset-2 cursor-pointer"
            title={isRtl ? 'تغيير عملة عرض الأسعار' : 'Switch pricing currency'}
            aria-label={isRtl ? 'تغيير عملة عرض الأسعار' : 'Switch pricing currency'}
          >
            <span className="text-[#7E8B7B]">
              {isRtl ? 'العملة:' : 'CURRENCY:'}
            </span>
            <span className="font-semibold text-[#C8FF47]">{currency}</span>
          </motion.button>

          {/* Locale Toggle */}
          <motion.button
            whileHover={shouldReduceMotion ? undefined : { scale: 1.02, borderColor: '#7E8B7B' }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
            transition={{ duration: 0.15, ease: EASE_CURVE }}
            onClick={onLocaleToggle}
            type="button"
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono text-[#EDEDE7] border border-[#242D25] bg-[#161B16] rounded transition-colors hover:border-[#7E8B7B] focus-visible:outline-2 focus-visible:outline-[#C8FF47] focus-visible:outline-offset-2 cursor-pointer"
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
            whileHover={shouldReduceMotion ? undefined : { scale: 1.02, y: -0.5 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            transition={{ duration: 0.15, ease: EASE_CURVE }}
            onClick={onInquiryClick}
            type="button"
            className="px-3.5 sm:px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#101310] bg-[#C8FF47] rounded hover:bg-[#b5ee35] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#C8FF47] focus-visible:outline-offset-2 cursor-pointer shadow-sm"
          >
            {isRtl ? 'ابدأ مشروعك' : 'Start a Project'}
          </motion.button>

          {/* Mobile hamburger button */}
          <motion.button
            whileTap={shouldReduceMotion ? undefined : { scale: 0.94 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="flex lg:hidden p-2 text-[#EDEDE7] border border-[#242D25] bg-[#161B16] rounded hover:border-[#7E8B7B] focus-visible:outline-2 focus-visible:outline-[#C8FF47] focus-visible:outline-offset-2 cursor-pointer"
            aria-label={isRtl ? 'تبديل القائمة' : 'Toggle navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="h-5 w-5 transition-transform duration-200"
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
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: EASE_CURVE }}
            dir={direction}
            role="dialog"
            aria-label={isRtl ? 'قائمة الموبايل' : 'Mobile navigation'}
            className="lg:hidden border-t border-[#242D25] bg-[#101310] px-6 py-4 space-y-4 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-2.5 text-sm text-[#7E8B7B] text-start">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 hover:text-[#EDEDE7] transition-colors rounded focus-visible:outline-2 focus-visible:outline-[#C8FF47]"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#242D25] flex items-center justify-between gap-3">
              <button
                onClick={onCurrencyToggle}
                type="button"
                className="px-3 py-1.5 text-xs font-mono text-[#EDEDE7] border border-[#242D25] bg-[#161B16] rounded active:scale-95 transition-transform"
              >
                {isRtl ? 'العملة:' : 'CURRENCY:'} <span className="text-[#C8FF47] font-semibold">{currency}</span>
              </button>
              <button
                onClick={onLocaleToggle}
                type="button"
                className="px-3 py-1.5 text-xs font-mono text-[#EDEDE7] border border-[#242D25] bg-[#161B16] rounded active:scale-95 transition-transform"
              >
                {isRtl ? 'اللغة:' : 'LOCALE:'} <span className="text-[#C8FF47] font-semibold">{locale === 'en' ? 'EN' : 'العربية'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
