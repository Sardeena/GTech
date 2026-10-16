'use client';

import React from 'react';
import { DESIGN_TOKENS } from '@/lib/architecture-data';

export function DesignTokenShowcase() {
  return (
    <section className="w-full border-b border-[#242D25] py-16 bg-[#161B16]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mb-8">
          <div className="text-xs font-mono tracking-widest text-[#7E8B7B] uppercase mb-1">
            Visual Constitution
          </div>
          <h3 className="text-2xl font-bold text-[#EDEDE7]">
            Bespoke Design Token System
          </h3>
          <p className="text-xs text-[#7E8B7B] mt-1">
            Strict anti-AI slop discipline. No purple-blue gradients, zero decorative status pills, and rigorous 60-30-10 color allocation.
          </p>
        </div>

        {/* Token Swatches Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          
          <div className="border border-[#242D25] bg-[#101310] p-4 rounded">
            <div className="h-10 w-full rounded bg-[#101310] border border-[#242D25] mb-3" />
            <div className="text-xs font-bold text-[#EDEDE7]">Graphite Canvas</div>
            <div className="text-[11px] font-mono text-[#7E8B7B] uppercase">#101310 (60%)</div>
          </div>

          <div className="border border-[#242D25] bg-[#101310] p-4 rounded">
            <div className="h-10 w-full rounded bg-[#C8FF47] mb-3" />
            <div className="text-xs font-bold text-[#EDEDE7]">Signal Lime Accent</div>
            <div className="text-[11px] font-mono text-[#7E8B7B] uppercase">#C8FF47 (10%)</div>
          </div>

          <div className="border border-[#242D25] bg-[#101310] p-4 rounded">
            <div className="h-10 w-full rounded bg-[#EDEDE7] mb-3" />
            <div className="text-xs font-bold text-[#EDEDE7]">Warm Off-White</div>
            <div className="text-[11px] font-mono text-[#7E8B7B] uppercase">#EDEDE7 (Typography)</div>
          </div>

          <div className="border border-[#242D25] bg-[#101310] p-4 rounded">
            <div className="h-10 w-full rounded bg-[#7E8B7B] mb-3" />
            <div className="text-xs font-bold text-[#EDEDE7]">Technical Gray-Green</div>
            <div className="text-[11px] font-mono text-[#7E8B7B] uppercase">#7E8B7B (30%)</div>
          </div>

        </div>

        {/* Design System Rules Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#EDEDE7]/80">
          <div className="border border-[#242D25] bg-[#101310] p-5 rounded space-y-2">
            <div className="font-mono text-[#C8FF47] font-semibold uppercase">
              Zero-Pill Discipline
            </div>
            <p className="leading-relaxed">
              Metadata, statuses, dates, and categories are rendered strictly as unboxed inline text with typographic separators (· or /). No candy chips or floating badge sandwiches.
            </p>
          </div>

          <div className="border border-[#242D25] bg-[#101310] p-5 rounded space-y-2">
            <div className="font-mono text-[#C8FF47] font-semibold uppercase">
              Single-Line Controls
            </div>
            <p className="leading-relaxed">
              Every button, navigation link, tab, and tag is contained in a single line (whitespace-nowrap) with responsive truncation to prevent broken multi-line button text.
            </p>
          </div>

          <div className="border border-[#242D25] bg-[#101310] p-5 rounded space-y-2">
            <div className="font-mono text-[#C8FF47] font-semibold uppercase">
              Controlled Motion & Contrast
            </div>
            <p className="leading-relaxed">
              Complies with prefers-reduced-motion preferences. All text passes WCAG AA contrast (minimum 4.5:1). Interactive controls feature high-visibility Signal Lime focus rings.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
