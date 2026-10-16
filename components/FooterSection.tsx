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
            <div className="text-xl font-bold tracking-tight text-[#EDEDE7]">
              GONNSEN TECH
            </div>
            <p className="text-sm font-medium text-[#C8FF47]">
              Your business. Our infrastructure.
            </p>
            <p className="text-xs text-[#7E8B7B] max-w-sm leading-relaxed">
              Mission-critical web platforms, multi-tenant software rentals, cloud compute nodes, and managed digital agreements serving enterprise clients in Egypt and internationally.
            </p>
            <div className="pt-2 text-xs font-mono text-[#7E8B7B] space-y-1">
              <div>Cairo Operational Node: Cairo Metro Hub, Egypt</div>
              <div>European Transit: Frankfurt / Marseille Backbone</div>
            </div>
          </div>

          {/* Nav Mirror: Services */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono tracking-wider text-[#EDEDE7] uppercase font-semibold">
              Verticals
            </div>
            <ul className="space-y-2 text-xs text-[#7E8B7B]">
              <li><a href="#services" className="hover:text-[#EDEDE7] transition-colors">Websites & E-Commerce</a></li>
              <li><a href="#services" className="hover:text-[#EDEDE7] transition-colors">CRM & CMS Software Rentals</a></li>
              <li><a href="#services" className="hover:text-[#EDEDE7] transition-colors">Custom Business Automation</a></li>
              <li><a href="#services" className="hover:text-[#EDEDE7] transition-colors">Domain Registration & DNS</a></li>
              <li><a href="#services" className="hover:text-[#EDEDE7] transition-colors">Hosting & VPS Fleet</a></li>
              <li><a href="#services" className="hover:text-[#EDEDE7] transition-colors">Maintenance SLAs & Security</a></li>
            </ul>
          </div>

          {/* Architecture & Specs */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono tracking-wider text-[#EDEDE7] uppercase font-semibold">
              Phase 0 Architecture Specs
            </div>
            <ul className="space-y-2 text-xs text-[#7E8B7B]">
              <li><a href="#ecosystem" className="hover:text-[#EDEDE7] transition-colors">3-Surface Topology Specification</a></li>
              <li><a href="#data-model" className="hover:text-[#EDEDE7] transition-colors">12-Cluster PostgreSQL Data Model</a></li>
              <li><a href="#security" className="hover:text-[#EDEDE7] transition-colors">Zero-Trust Security & RLS Matrix</a></li>
              <li><a href="#roadmap" className="hover:text-[#EDEDE7] transition-colors">Phase 1 Implementation Backlog</a></li>
              <li><a href="#contact" className="hover:text-[#C8FF47] transition-colors">Direct Technical RFP Intake</a></li>
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
            <span>Commercial Registration Compliant</span>
          </div>

          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span>Next.js 15 & PostgreSQL Architecture</span>
            <span className="text-[#C8FF47]">Phase 0 Baseline</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
