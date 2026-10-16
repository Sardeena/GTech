'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_CATALOGUE } from '@/lib/architecture-data';

interface InquiryFormProps {
  selectedServiceId?: string;
  currency: 'EGP' | 'USD';
}

const easeCurve = [0.16, 1, 0.3, 1] as const;

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
      setErrorMessage('Please enter your name, work email, and a short note about what you need.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 350);
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
    <section id="contact" className="w-full border-b border-[#242D25] py-16 lg:py-24 bg-[#101310] overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: easeCurve }}
          className="text-center mb-12"
        >
          <div className="text-xs font-mono tracking-widest text-[#7E8B7B] uppercase mb-2">
            Contact Our Team
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EDEDE7]">
            Tell Us About Your Project
          </h2>
          <p className="mt-2 text-sm text-[#7E8B7B] max-w-xl mx-auto">
            Send us a message and our engineering team will get back to you with a clear project scope and honest price estimate within one business day.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeCurve }}
          className="border border-[#242D25] bg-[#161B16] p-8 sm:p-10 rounded"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="submitted-state"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: easeCurve }}
                className="text-center py-10 space-y-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 0.1 }}
                  className="inline-flex h-12 w-12 items-center justify-center rounded border border-[#C8FF47] bg-[#182019] text-[#C8FF47] text-xl font-bold"
                >
                  ✓
                </motion.div>
                <h3 className="text-2xl font-bold text-[#EDEDE7]">
                  Thank You! We Received Your Message
                </h3>
                <p className="text-sm text-[#7E8B7B] max-w-md mx-auto">
                  Thank you, <span className="text-[#EDEDE7] font-semibold">{formData.fullName}</span>. We saved your project details for <span className="text-[#C8FF47]">{formData.organization || 'your business'}</span>. One of our engineers will reach out to you directly.
                </p>
                <div className="p-4 bg-[#101310] border border-[#242D25] rounded max-w-sm mx-auto font-mono text-xs text-[#7E8B7B]">
                  We usually reply within 12 business hours.
                </div>
                <div className="pt-4">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleReset}
                    type="button"
                    className="px-5 py-2 text-xs font-semibold text-[#101310] bg-[#C8FF47] rounded hover:bg-[#b5ee35] transition-colors"
                  >
                    Send Another Message
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                
                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="p-3 bg-red-950/40 border border-red-800 text-xs text-red-300 rounded font-mono"
                  >
                    {errorMessage}
                  </motion.div>
                )}

                {/* Service selector */}
                <div>
                  <label className="block text-xs font-mono uppercase text-[#7E8B7B] mb-2">
                    What service do you need? *
                  </label>
                  <select
                    value={formData.serviceVertical}
                    onChange={(e) => setFormData({ ...formData, serviceVertical: e.target.value })}
                    className="w-full bg-[#101310] border border-[#242D25] text-sm text-[#EDEDE7] rounded px-4 py-2.5 focus:border-[#C8FF47] focus:outline-none transition-colors"
                  >
                    {SERVICES_CATALOGUE.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.number}. {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Two-column contact info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#7E8B7B] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Karim Mansour"
                      className="w-full bg-[#101310] border border-[#242D25] text-sm text-[#EDEDE7] rounded px-4 py-2.5 focus:border-[#C8FF47] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#7E8B7B] mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full bg-[#101310] border border-[#242D25] text-sm text-[#EDEDE7] rounded px-4 py-2.5 focus:border-[#C8FF47] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Company & Country */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#7E8B7B] mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Nile Logistics"
                      className="w-full bg-[#101310] border border-[#242D25] text-sm text-[#EDEDE7] rounded px-4 py-2.5 focus:border-[#C8FF47] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#7E8B7B] mb-2">
                      Where is your business based?
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full bg-[#101310] border border-[#242D25] text-sm text-[#EDEDE7] rounded px-4 py-2.5 focus:border-[#C8FF47] focus:outline-none transition-colors"
                    >
                      <option value="EG">Egypt (Domestic - EGP Billing)</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="SA">Saudi Arabia</option>
                      <option value="GB">United Kingdom</option>
                      <option value="EU">European Union</option>
                      <option value="US">United States & Worldwide</option>
                    </select>
                  </div>
                </div>

                {/* Phone & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#7E8B7B] mb-2">
                      Phone or WhatsApp (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+20 100 000 0000"
                      className="w-full bg-[#101310] border border-[#242D25] text-sm text-[#EDEDE7] rounded px-4 py-2.5 focus:border-[#C8FF47] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#7E8B7B] mb-2">
                      Estimated Budget ({currency})
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full bg-[#101310] border border-[#242D25] text-sm text-[#EDEDE7] rounded px-4 py-2.5 focus:border-[#C8FF47] focus:outline-none transition-colors"
                    >
                      {currency === 'EGP' ? (
                        <>
                          <option value="25k_50k">25,000 – 50,000 EGP</option>
                          <option value="50k_100k">50,000 – 100,000 EGP</option>
                          <option value="100k_250k">100,000 – 250,000 EGP</option>
                          <option value="250k_plus">250,000+ EGP (Enterprise)</option>
                        </>
                      ) : (
                        <>
                          <option value="1k_2k">$1,000 – $2,500 USD</option>
                          <option value="2k_5k">$2,500 – $5,000 USD</option>
                          <option value="5k_10k">$5,000 – $10,000 USD</option>
                          <option value="10k_plus">$10,000+ USD (Enterprise)</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>

                {/* Requirements Summary */}
                <div>
                  <label className="block text-xs font-mono uppercase text-[#7E8B7B] mb-2">
                    Tell us a bit about what you need *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    placeholder="What are you looking to build, what challenges are you facing, and what is your timeline?"
                    className="w-full bg-[#101310] border border-[#242D25] text-sm text-[#EDEDE7] rounded px-4 py-3 focus:border-[#C8FF47] focus:outline-none transition-colors"
                  />
                </div>

                {/* Submit CTA */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-[11px] text-[#7E8B7B] font-mono">
                    No marketing spam. Handled directly by our engineering group.
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#101310] bg-[#C8FF47] rounded hover:bg-[#b5ee35] transition-colors disabled:opacity-50 whitespace-nowrap cursor-pointer"
                  >
                    {isSubmitting ? 'Sending Details...' : 'Send Project Inquiry'}
                  </motion.button>
                </div>

              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
