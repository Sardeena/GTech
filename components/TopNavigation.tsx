'use client';

import React, { useState } from 'react';
import Link from 'next/link';

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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#242D25] bg-[#101310]/95 backdrop-blur-md">
      {/* Top Bar Contract: Zone 1 (Wordmark) — Zone 2 (4-5 single line links) — Zone 3 (1 primary action) */}
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-8 px-6 lg:px-8">
        
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-[#EDEDE7] transition-colors hover:text-[#C8FF47] whitespace-nowrap shrink-0"
          >
            GONNSEN TECH
          </Link>
          <span className="hidden sm:inline-block text-xs text-[#7E8B7B] tracking-wider">
            CAIRO & GLOBAL INFRASTRUCTURE
          </span>
        </div>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#7E8B7B]">
          <a
            href="#services"
            className="transition-colors hover:text-[#EDEDE7] whitespace-nowrap shrink-0"
          >
            Services
          </a>
          <a
            href="#ecosystem"
            className="transition-colors hover:text-[#EDEDE7] whitespace-nowrap shrink-0"
          >
            3-Surface Architecture
          </a>
          <a
            href="#data-model"
            className="transition-colors hover:text-[#EDEDE7] whitespace-nowrap shrink-0"
          >
            Data Model
          </a>
          <a
            href="#security"
            className="transition-colors hover:text-[#EDEDE7] whitespace-nowrap shrink-0"
          >
            Security & RLS
          </a>
          <a
            href="#roadmap"
            className="transition-colors hover:text-[#EDEDE7] whitespace-nowrap shrink-0"
          >
            Phase 1 Backlog
          </a>
        </nav>

        {/* Zone 3: Utilities & Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Functional Currency Toggle */}
          <button
            onClick={onCurrencyToggle}
            type="button"
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono text-[#EDEDE7] border border-[#242D25] bg-[#161B16] rounded transition-colors hover:border-[#7E8B7B]"
            title="Toggle pricing display currency"
          >
            <span className="text-[#7E8B7B]">CURRENCY:</span>
            <span className="font-semibold text-[#C8FF47]">{currency}</span>
          </button>

          {/* Functional Locale Toggle */}
          <button
            onClick={onLocaleToggle}
            type="button"
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono text-[#EDEDE7] border border-[#242D25] bg-[#161B16] rounded transition-colors hover:border-[#7E8B7B]"
            title="Toggle display locale"
          >
            <span className="text-[#7E8B7B]">LOCALE:</span>
            <span className="font-semibold text-[#C8FF47]">{locale === 'en' ? 'EN' : 'AR'}</span>
          </button>

          {/* Primary CTA */}
          <button
            onClick={onInquiryClick}
            type="button"
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#101310] bg-[#C8FF47] rounded hover:bg-[#b5ee35] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#C8FF47]"
          >
            Project Inquiry
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="flex lg:hidden p-2 text-[#EDEDE7] border border-[#242D25] bg-[#161B16] rounded"
            aria-label="Toggle navigation menu"
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
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#242D25] bg-[#101310] px-6 py-4 space-y-3">
          <div className="flex flex-col space-y-2 text-sm text-[#7E8B7B]">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#EDEDE7]"
            >
              Services
            </a>
            <a
              href="#ecosystem"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#EDEDE7]"
            >
              3-Surface Architecture
            </a>
            <a
              href="#data-model"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#EDEDE7]"
            >
              Data Model
            </a>
            <a
              href="#security"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#EDEDE7]"
            >
              Security & RLS
            </a>
            <a
              href="#roadmap"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#EDEDE7]"
            >
              Phase 1 Backlog
            </a>
          </div>
          <div className="pt-3 border-t border-[#242D25] flex items-center justify-between">
            <button
              onClick={onCurrencyToggle}
              type="button"
              className="px-3 py-1.5 text-xs font-mono text-[#EDEDE7] border border-[#242D25] bg-[#161B16] rounded"
            >
              CURRENCY: <span className="text-[#C8FF47]">{currency}</span>
            </button>
            <button
              onClick={onLocaleToggle}
              type="button"
              className="px-3 py-1.5 text-xs font-mono text-[#EDEDE7] border border-[#242D25] bg-[#161B16] rounded"
            >
              LOCALE: <span className="text-[#C8FF47]">{locale === 'en' ? 'EN' : 'AR'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
