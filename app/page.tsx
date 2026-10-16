'use client';

import React, { useState } from 'react';
import { TopNavigation } from '@/components/TopNavigation';
import { HeroSection } from '@/components/HeroSection';
import { ServicesCatalogue } from '@/components/ServicesCatalogue';
import { ArchitectureExplorer } from '@/components/ArchitectureExplorer';
import { DesignTokenShowcase } from '@/components/DesignTokenShowcase';
import { InquiryForm } from '@/components/InquiryForm';
import { FooterSection } from '@/components/FooterSection';

export default function Home() {
  const [currency, setCurrency] = useState<'EGP' | 'USD'>('EGP');
  const [locale, setLocale] = useState<'en' | 'ar'>('en');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('custom-web-ecommerce');

  const handleCurrencyToggle = () => {
    setCurrency((prev) => (prev === 'EGP' ? 'USD' : 'EGP'));
  };

  const handleLocaleToggle = () => {
    setLocale((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToEcosystem = () => {
    const el = document.getElementById('ecosystem');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    scrollToContact();
  };

  return (
    <div className={`min-h-screen bg-[#101310] text-[#EDEDE7] ${locale === 'ar' ? 'font-sans' : ''}`}>
      {/* Top Navigation conforming to Top Bar Contract */}
      <TopNavigation
        onInquiryClick={scrollToContact}
        currency={currency}
        onCurrencyToggle={handleCurrencyToggle}
        locale={locale}
        onLocaleToggle={handleLocaleToggle}
      />

      <main>
        {/* Editorial Hero Section */}
        <HeroSection
          onExploreClick={scrollToEcosystem}
          onInquiryClick={scrollToContact}
          locale={locale}
        />

        {/* 6 Core Business Verticals */}
        <ServicesCatalogue
          currency={currency}
          locale={locale}
          onSelectService={handleSelectService}
        />

        {/* Interactive Architecture Explorer (3 Surfaces, 12 Schemas, Security, i18n, Roadmap) */}
        <ArchitectureExplorer
          currency={currency}
          onInquiryTrigger={scrollToContact}
        />

        {/* Custom Design Token & Discipline Proof */}
        <DesignTokenShowcase />

        {/* Interactive RFP & Technical Intake Form */}
        <InquiryForm
          selectedServiceId={selectedServiceId}
          currency={currency}
        />
      </main>

      {/* Quiet Editorial Footer */}
      <FooterSection />
    </div>
  );
}
