'use client';

import React from 'react';

export function DesignTokenShowcase() {
  return (
    <section className="w-full border-b border-[#242D25] py-16 bg-[#161B16]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mb-8">
          <div className="text-xs font-mono tracking-widest text-[#7E8B7B] uppercase mb-1">
            Design Standards
          </div>
          <h3 className="text-2xl font-bold text-[#EDEDE7]">
            Clean, Fast & Easy to Read
          </h3>
          <p className="text-xs text-[#7E8B7B] mt-1">
            We avoid cluttered designs, neon gradients, and confusing decorations. Every color and font is picked for high contrast, fast loading, and effortless reading.
          </p>
        </div>

        {/* Token Swatches Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          
          <div className="border border-[#242D25] bg-[#101310] p-4 rounded">
            <div className="h-10 w-full rounded bg-[#101310] border border-[#242D25] mb-3" />
            <div className="text-xs font-bold text-[#EDEDE7]">Graphite Canvas</div>
            <div className="text-[11px] font-mono text-[#7E8B7B] uppercase">#101310 (Main Background)</div>
          </div>

          <div className="border border-[#242D25] bg-[#101310] p-4 rounded">
            <div className="h-10 w-full rounded bg-[#C8FF47] mb-3" />
            <div className="text-xs font-bold text-[#EDEDE7]">Signal Lime</div>
            <div className="text-[11px] font-mono text-[#7E8B7B] uppercase">#C8FF47 (Primary Actions)</div>
          </div>

          <div className="border border-[#242D25] bg-[#101310] p-4 rounded">
            <div className="h-10 w-full rounded bg-[#EDEDE7] mb-3" />
            <div className="text-xs font-bold text-[#EDEDE7]">Warm Off-White</div>
            <div className="text-[11px] font-mono text-[#7E8B7B] uppercase">#EDEDE7 (Readable Text)</div>
          </div>

          <div className="border border-[#242D25] bg-[#101310] p-4 rounded">
            <div className="h-10 w-full rounded bg-[#7E8B7B] mb-3" />
            <div className="text-xs font-bold text-[#EDEDE7]">Muted Gray-Green</div>
            <div className="text-[11px] font-mono text-[#7E8B7B] uppercase">#7E8B7B (Borders & Notes)</div>
          </div>

        </div>

        {/* Design System Rules Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#EDEDE7]/85">
          <div className="border border-[#242D25] bg-[#101310] p-5 rounded space-y-2">
            <div className="font-mono text-[#C8FF47] font-semibold uppercase">
              No Distracting Badges
            </div>
            <p className="leading-relaxed">
              Information like dates, prices, and categories are presented as clean text separated by subtle dots, avoiding noisy colorful badges.
            </p>
          </div>

          <div className="border border-[#242D25] bg-[#101310] p-5 rounded space-y-2">
            <div className="font-mono text-[#C8FF47] font-semibold uppercase">
              Clean, Unbroken Buttons
            </div>
            <p className="leading-relaxed">
              Buttons and navigation links stay on one clean line with comfortable padding, making them easy to tap on phones and tablets.
            </p>
          </div>

          <div className="border border-[#242D25] bg-[#101310] p-5 rounded space-y-2">
            <div className="font-mono text-[#C8FF47] font-semibold uppercase">
              Accessible & Comfortable
            </div>
            <p className="leading-relaxed">
              High contrast for comfortable reading in all lighting conditions, gentle transitions, and clear green focus outlines for keyboard users.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
