'use client';

import React, { useState } from 'react';
import { SERVICES_CATALOGUE } from '@/lib/architecture-data';

interface InquiryFormProps {
  selectedServiceId?: string;
  currency: 'EGP' | 'USD';
}

export function InquiryForm({ selectedServiceId, currency }: InquiryFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    country: 'EG',
    serviceVertical: selectedServiceId || 'custom-web-ecommerce',
    budgetRange: currency === 'EGP' ? '50k_100k' : '2k_5k',
    requirements: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.requirements.trim()) {
      setErrorMessage('Please provide your name, corporate email, and project requirements summary.');
      return;
    }

    // Basic email validation
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMessage('Please enter a valid business email address.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      organization: '',
      country: 'EG',
      serviceVertical: 'custom-web-ecommerce',
      budgetRange: currency === 'EGP' ? '50k_100k' : '2k_5k',
      requirements: '',
    });
  };

  return (
    <section id="contact" className="w-full border-b border-[#242D25] py-16 lg:py-24 bg-[#101310]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-xs font-mono tracking-widest text-[#7E8B7B] uppercase mb-2">
            Engagement & Onboarding
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EDEDE7]">
            Initiate a Technical Project Inquiry
          </h2>
          <p className="mt-2 text-sm text-[#7E8B7B] max-w-xl mx-auto">
            Direct communication with our systems engineering team. We review architectural requirements and respond with a formal technical scope within 24 hours.
          </p>
        </div>

        <div className="border border-[#242D25] bg-[#161B16] p-8 sm:p-10 rounded">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded border border-[#C8FF47] bg-[#182019] text-[#C8FF47] text-xl font-bold">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-[#EDEDE7]">
                Inquiry Logged & Assigned
              </h3>
              <p className="text-sm text-[#7E8B7B] max-w-md mx-auto">
                Thank you, <span className="text-[#EDEDE7] font-semibold">{formData.fullName}</span>. Your request for <span className="text-[#C8FF47]">{formData.organization || 'your organization'}</span> has been recorded in our intake pipeline.
              </p>
              <div className="p-4 bg-[#101310] border border-[#242D25] rounded max-w-sm mx-auto font-mono text-xs text-[#7E8B7B]">
                Assigned SLA: Initial review within 12 business hours
              </div>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  type="button"
                  className="px-5 py-2 text-xs font-semibold text-[#101310] bg-[#C8FF47] rounded hover:bg-[#b5ee35] transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {errorMessage && (
                <div className="p-3 bg-red-950/40 border border-red-800 text-xs text-red-300 rounded font-mono">
                  {errorMessage}
                </div>
              )}

              {/* Service vertical selector */}
              <div>
                <label className="block text-xs font-mono uppercase text-[#7E8B7B] mb-2">
                  Target Service Vertical *
                </label>
                <select
                  value={formData.serviceVertical}
                  onChange={(e) => setFormData({ ...formData, serviceVertical: e.target.value })}
                  className="w-full bg-[#101310] border border-[#242D25] text-sm text-[#EDEDE7] rounded px-4 py-2.5 focus:border-[#C8FF47] focus:outline-none"
                >
                  {SERVICES_CATALOGUE.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.number}. {s.title} ({s.category})
                    </option>
                  ))}
                </select>
              </div>

              {/* Two-column contact info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#7E8B7B] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Karim Mansour"
                    className="w-full bg-[#101310] border border-[#242D25] text-sm text-[#EDEDE7] rounded px-4 py-2.5 focus:border-[#C8FF47] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#7E8B7B] mb-2">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full bg-[#101310] border border-[#242D25] text-sm text-[#EDEDE7] rounded px-4 py-2.5 focus:border-[#C8FF47] focus:outline-none"
                  />
                </div>
              </div>

              {/* Organization & Country */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#7E8B7B] mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Nile Logistics Group"
                    className="w-full bg-[#101310] border border-[#242D25] text-sm text-[#EDEDE7] rounded px-4 py-2.5 focus:border-[#C8FF47] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#7E8B7B] mb-2">
                    Operating Jurisdiction
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full bg-[#101310] border border-[#242D25] text-sm text-[#EDEDE7] rounded px-4 py-2.5 focus:border-[#C8FF47] focus:outline-none"
                  >
                    <option value="EG">Egypt (Domestic - EGP Billing)</option>
                    <option value="AE">United Arab Emirates (USD / AED)</option>
                    <option value="SA">Saudi Arabia (USD / SAR)</option>
                    <option value="GB">United Kingdom (USD / GBP)</option>
                    <option value="EU">European Union (EUR / USD)</option>
                    <option value="US">United States & Global (USD)</option>
                  </select>
                </div>
              </div>

              {/* Phone & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#7E8B7B] mb-2">
                    Phone / WhatsApp (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+20 100 000 0000"
                    className="w-full bg-[#101310] border border-[#242D25] text-sm text-[#EDEDE7] rounded px-4 py-2.5 focus:border-[#C8FF47] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#7E8B7B] mb-2">
                    Estimated Budget Target ({currency})
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full bg-[#101310] border border-[#242D25] text-sm text-[#EDEDE7] rounded px-4 py-2.5 focus:border-[#C8FF47] focus:outline-none"
                  >
                    {currency === 'EGP' ? (
                      <>
                        <option value="25k_50k">25,000 – 50,000 EGP</option>
                        <option value="50k_100k">50,000 – 100,000 EGP</option>
                        <option value="100k_250k">100,000 – 250,000 EGP</option>
                        <option value="250k_plus">250,000+ EGP (Enterprise SLA)</option>
                      </>
                    ) : (
                      <>
                        <option value="1k_2k">$1,000 – $2,500 USD</option>
                        <option value="2k_5k">$2,500 – $5,000 USD</option>
                        <option value="5k_10k">$5,000 – $10,000 USD</option>
                        <option value="10k_plus">$10,000+ USD (Enterprise SLA)</option>
                      </>
                    )}
                  </select>
                </div>
              </div>

              {/* Requirements Summary */}
              <div>
                <label className="block text-xs font-mono uppercase text-[#7E8B7B] mb-2">
                  Technical Scope & Objectives *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  placeholder="Outline your project requirements, current technical stack, and anticipated timeline..."
                  className="w-full bg-[#101310] border border-[#242D25] text-sm text-[#EDEDE7] rounded px-4 py-3 focus:border-[#C8FF47] focus:outline-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-[11px] text-[#7E8B7B] font-mono">
                  No sales spam. Evaluated strictly by Gonnsen infrastructure engineers.
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#101310] bg-[#C8FF47] rounded hover:bg-[#b5ee35] transition-colors disabled:opacity-50 whitespace-nowrap"
                >
                  {isSubmitting ? 'Transmitting Scope...' : 'Transmit Project Inquiry'}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
