'use client';

import React, { useState } from 'react';
import { useRtl } from '@/hooks/useRtl';
import { TopNavigation } from '@/components/TopNavigation';
import { HeroSection } from '@/components/HeroSection';
import { ServicesCatalogue } from '@/components/ServicesCatalogue';
import { ServiceDiscoveryGuide } from '@/components/ServiceDiscoveryGuide';
import { PricingCatalogueSection } from '@/components/PricingCatalogueSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { PortfolioShowcaseSection } from '@/components/PortfolioShowcaseSection';
import { AboutCompanySection } from '@/components/AboutCompanySection';
import { InquiryForm } from '@/components/InquiryForm';
import { FooterSection } from '@/components/FooterSection';

export default function Home() {
  const [currency, setCurrency] = useState<'EGP' | 'USD'>('EGP');
  const [locale, setLocale] = useState<'en' | 'ar'>('en');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('web-design');
  const { direction, isRtl } = useRtl(locale);

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

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceSlug?: string) => {
    setSelectedServiceId(serviceSlug || 'web-design');
    scrollToContact();
  };

  return (
    <div
      dir={direction}
      className={`min-h-screen bg-[#101310] text-[#EDEDE7] transition-all ${isRtl ? 'font-sans' : ''}`}
    >
      {/* Top Navigation */}
      <TopNavigation
        onInquiryClick={scrollToContact}
        currency={currency}
        onCurrencyToggle={handleCurrencyToggle}
        locale={locale}
        onLocaleToggle={handleLocaleToggle}
      />

      <main>
        {/* 1. Customer Hero Section */}
        <HeroSection
          onExploreClick={scrollToServices}
          onInquiryClick={scrollToContact}
          locale={locale}
        />

        {/* 2. Commercial Services Catalogue (6 Categories) */}
        <ServicesCatalogue
          currency={currency}
          locale={locale}
          onSelectService={handleSelectService}
        />

        {/* 3. Interactive Service Discovery Guide (Replaces internal architecture explorer) */}
        <ServiceDiscoveryGuide
          currency={currency}
          locale={locale}
          onSelectService={handleSelectService}
        />

        {/* 4. Products & Pricing Catalogue (One-Time, Rentals, Support Retainers) */}
        <PricingCatalogueSection
          currency={currency}
          locale={locale}
          onSelectService={handleSelectService}
        />

        {/* 5. How It Works (Simple 5-step customer journey) */}
        <HowItWorksSection
          locale={locale}
          onInquiryClick={scrollToContact}
        />

        {/* 6. Portfolio & Product Demonstrations */}
        <PortfolioShowcaseSection
          locale={locale}
          onInquiryClick={handleSelectService}
        />

        {/* 7. About Gonnsen Tech & FAQs */}
        <AboutCompanySection
          locale={locale}
        />

        {/* 8. Contact & Project Inquiry Form (Verified Backend Persistence) */}
        <InquiryForm
          selectedServiceId={selectedServiceId}
          currency={currency}
        />
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
