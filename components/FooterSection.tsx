'use client';

import React from 'react';
import Link from 'next/link';

export function FooterSection() {
  return (
    <footer className="w-full border-t border-[#242D25] bg-[#101310] py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#242D25]">
          
          {/* Brand & Positioning */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="text-xl font-bold tracking-tight text-[#EDEDE7] hover:text-[#C8FF47] transition-colors">
              GONNSEN TECH
            </Link>
            <p className="text-sm font-medium text-[#C8FF47]">
              Your ideas. Built to work.
            </p>
            <p className="text-xs text-[#7E8B7B] max-w-sm leading-relaxed">
              We design websites, build CRM business systems, automate workflows, and provide reliable cloud hosting and technical maintenance for companies in Egypt and international markets.
            </p>
            <div className="pt-2 text-xs font-mono text-[#7E8B7B] space-y-1">
              <div>Cairo Office: Cairo, Egypt</div>
              <div>Commercial Services: Egypt (EGP) & International (USD)</div>
            </div>
          </div>

          {/* Column 2: Commercial Services */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono tracking-wider text-[#EDEDE7] uppercase font-semibold">
              Services & Software
            </div>
            <ul className="space-y-2 text-xs text-[#7E8B7B]">
              <li>
                <Link href="/services/web-design" className="hover:text-[#EDEDE7] transition-colors">
                  Website Design & Development
                </Link>
              </li>
              <li>
                <Link href="/services/crm" className="hover:text-[#EDEDE7] transition-colors">
                  CRM Systems — Rent or Buy
                </Link>
              </li>
              <li>
                <Link href="/services/automation" className="hover:text-[#EDEDE7] transition-colors">
                  Business Automation & n8n Workflows
                </Link>
              </li>
              <li>
                <Link href="/services/branding" className="hover:text-[#EDEDE7] transition-colors">
                  Branding & Creative Design
                </Link>
              </li>
              <li>
                <Link href="/services/domains-hosting-vps" className="hover:text-[#EDEDE7] transition-colors">
                  Domains, Hosting & VPS
                </Link>
              </li>
              <li>
                <Link href="/services/maintenance" className="hover:text-[#EDEDE7] transition-colors">
                  Website Maintenance & Technical Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Policies */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono tracking-wider text-[#EDEDE7] uppercase font-semibold">
              Company & Inquiries
            </div>
            <ul className="space-y-2 text-xs text-[#7E8B7B]">
              <li>
                <Link href="/pricing" className="hover:text-[#EDEDE7] transition-colors">
                  Pricing & Packages
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-[#EDEDE7] transition-colors">
                  Work & Product Demos
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#EDEDE7] transition-colors">
                  About Gonnsen Tech
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C8FF47] transition-colors">
                  Start a Project Inquiry
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="hover:text-[#EDEDE7] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="hover:text-[#EDEDE7] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Baseline Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7E8B7B]">
          <div className="flex flex-wrap items-center gap-3">
            <span>© {new Date().getFullYear()} Gonnsen Tech. All rights reserved.</span>
            <span aria-hidden="true">·</span>
            <span>Cairo, Egypt</span>
            <span aria-hidden="true">·</span>
            <span>Registered Commercial Business</span>
          </div>

          <div className="flex items-center gap-4 font-mono text-[11px]">
            <span>Egypt & International</span>
            <span className="text-[#C8FF47]">Your ideas. Built to work.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
