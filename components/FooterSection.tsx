'use client';

import React from 'react';

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
              Custom websites, business software rentals, cloud servers, and reliable technical support for growing companies in Egypt and worldwide.
            </p>
            <div className="pt-2 text-xs font-mono text-[#7E8B7B] space-y-1">
              <div>Cairo Office: Cairo, Egypt</div>
              <div>International Cloud: High-speed European servers</div>
            </div>
          </div>

          {/* Nav Mirror: Services */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono tracking-wider text-[#EDEDE7] uppercase font-semibold">
              Services
            </div>
            <ul className="space-y-2 text-xs text-[#7E8B7B]">
              <li><a href="#services" className="hover:text-[#EDEDE7] transition-colors">Websites & Online Stores</a></li>
              <li><a href="#services" className="hover:text-[#EDEDE7] transition-colors">CRM & CMS Software Rentals</a></li>
              <li><a href="#services" className="hover:text-[#EDEDE7] transition-colors">Custom Business Apps</a></li>
              <li><a href="#services" className="hover:text-[#EDEDE7] transition-colors">Domain Registration & DNS</a></li>
              <li><a href="#services" className="hover:text-[#EDEDE7] transition-colors">Hosting & Cloud Servers</a></li>
              <li><a href="#services" className="hover:text-[#EDEDE7] transition-colors">Maintenance & Support</a></li>
            </ul>
          </div>

          {/* Architecture & Specs */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono tracking-wider text-[#EDEDE7] uppercase font-semibold">
              System Overview
            </div>
            <ul className="space-y-2 text-xs text-[#7E8B7B]">
              <li><a href="#ecosystem" className="hover:text-[#EDEDE7] transition-colors">The Three System Areas</a></li>
              <li><a href="#data-model" className="hover:text-[#EDEDE7] transition-colors">How Data is Organized</a></li>
              <li><a href="#security" className="hover:text-[#EDEDE7] transition-colors">How We Protect Client Data</a></li>
              <li><a href="#roadmap" className="hover:text-[#EDEDE7] transition-colors">What We Are Building Next</a></li>
              <li><a href="#contact" className="hover:text-[#C8FF47] transition-colors">Send a Project Inquiry</a></li>
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

          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span>Next.js 15 & PostgreSQL</span>
            <span className="text-[#C8FF47]">Reliable Foundation</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
