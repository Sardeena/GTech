'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COMMERCIAL_SERVICES } from '@/lib/commercial-data';

interface InquiryFormProps {
  selectedServiceId?: string;
  currency: 'EGP' | 'USD';
}

interface ServerSuccessData {
  inquiryId: string;
  receivedAt: string;
  message: string;
  storageBackend?: string;
}

const easeCurve = [0.16, 1, 0.3, 1] as const;

export function InquiryForm({ selectedServiceId, currency }: InquiryFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    country: 'EG',
    serviceVertical: selectedServiceId || 'web-design',
    budgetRange: currency === 'EGP' ? '50k_100k' : '2k_5k',
    requirements: '',
    website_hp: '', // Honeypot field
  });

  // Sync selected service if changed from outside without useEffect cascading renders
  const [prevServiceId, setPrevServiceId] = useState(selectedServiceId);
  if (selectedServiceId && selectedServiceId !== prevServiceId) {
    setPrevServiceId(selectedServiceId);
    setFormData((prev) => ({ ...prev, serviceVertical: selectedServiceId }));
  }

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<ServerSuccessData | null>(null);
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError(null);
    setFieldErrors({});

    // Client-side quick check
    const newFieldErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newFieldErrors.fullName = 'Please enter your name.';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newFieldErrors.email = 'Please enter a valid work email.';
    }
    if (!formData.requirements.trim() || formData.requirements.trim().length < 10) {
      newFieldErrors.requirements = 'Please provide at least a short description (10+ characters) of what you need.';
    }

    if (Object.keys(newFieldErrors).length > 0) {
      setFieldErrors(newFieldErrors);
      setGeneralError('Please review the highlighted fields before submitting.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          organization: formData.organization,
          country: formData.country,
          serviceVertical: formData.serviceVertical,
          budgetRange: formData.budgetRange,
          requirements: formData.requirements,
          honeypot: formData.website_hp,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.success) {
        if (data?.fields) {
          setFieldErrors(data.fields);
        }
        setGeneralError(
          data?.error || 'We could not submit your inquiry at this moment. Please check your details and try again.'
        );
        setIsSubmitting(false);
        return;
      }

      // Success confirmed by server
      setSuccessData({
        inquiryId: data.inquiryId,
        receivedAt: data.receivedAt,
        message: data.message,
        storageBackend: data.storageBackend,
      });
      setIsSubmitting(false);
    } catch {
      setGeneralError('Network connection issue. Please check your internet connection and try again.');
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSuccessData(null);
    setGeneralError(null);
    setFieldErrors({});
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      organization: '',
      country: 'EG',
      serviceVertical: 'custom-web-ecommerce',
      budgetRange: currency === 'EGP' ? '50k_100k' : '2k_5k',
      requirements: '',
      website_hp: '',
    });
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="w-full border-b border-[#242D25] py-16 lg:py-24 bg-[#101310] overflow-hidden"
    >
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
            Contact & Consultation
          </div>
          <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EDEDE7]">
            Tell Us About Your Project
          </h2>
          <p className="mt-2 text-sm text-[#7E8B7B] max-w-xl mx-auto">
            Submit your technical requirements. An engineer will review your project and reply with a proposed scope and timeline.
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
            {successData ? (
              <motion.div
                key="submitted-state"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: easeCurve }}
                className="text-center py-10 space-y-4"
                role="status"
                aria-live="polite"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 0.1 }}
                  className="inline-flex h-12 w-12 items-center justify-center rounded border border-[#C8FF47] bg-[#182019] text-[#C8FF47] text-xl font-bold"
                  aria-hidden="true"
                >
                  ✓
                </motion.div>

                <h3 className="text-2xl font-bold text-[#EDEDE7]">
                  Inquiry Received & Verified
                </h3>

                <p className="text-sm text-[#7E8B7B] max-w-md mx-auto">
                  Thank you, <span className="text-[#EDEDE7] font-semibold">{formData.fullName}</span>. Your request has been securely recorded on the server under reference{' '}
                  <span className="font-mono text-[#C8FF47] font-semibold">{successData.inquiryId}</span>.
                </p>

                <div className="p-4 bg-[#101310] border border-[#242D25] rounded max-w-sm mx-auto font-mono text-xs text-[#7E8B7B] space-y-1">
                  <div>Timestamp: {new Date(successData.receivedAt).toLocaleString()}</div>
                  <div className="text-[11px] text-[#7E8B7B]/80">Status: In Engineering Queue</div>
                </div>

                <div className="pt-4">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleReset}
                    type="button"
                    className="px-5 py-2 text-xs font-semibold text-[#101310] bg-[#C8FF47] rounded hover:bg-[#b5ee35] transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
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
                noValidate
                className="space-y-6"
              >
                {/* General Accessible Error Alert */}
                {generalError && (
                  <div
                    role="alert"
                    aria-live="polite"
                    className="p-3 bg-red-950/50 border border-red-800 text-xs text-red-200 rounded font-mono"
                  >
                    {generalError}
                  </div>
                )}

                {/* Honeypot field for spam prevention (hidden from users) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website_hp">Leave this field blank</label>
                  <input
                    type="text"
                    id="website_hp"
                    name="website_hp"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website_hp}
                    onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
                  />
                </div>

                {/* Service selector */}
                <div>
                  <label
                    htmlFor="serviceVertical"
                    className="block text-xs font-mono uppercase text-[#7E8B7B] mb-2"
                  >
                    Target Service Area <span className="text-[#C8FF47]">*</span>
                  </label>
                  <select
                    id="serviceVertical"
                    name="serviceVertical"
                    value={formData.serviceVertical}
                    onChange={(e) => setFormData({ ...formData, serviceVertical: e.target.value })}
                    className="w-full bg-[#101310] border border-[#242D25] text-sm text-[#EDEDE7] rounded px-4 py-2.5 focus:border-[#C8FF47] focus:outline-none transition-colors"
                  >
                    {COMMERCIAL_SERVICES.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.number}. {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Two-column contact info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-mono uppercase text-[#7E8B7B] mb-2"
                    >
                      Your Name <span className="text-[#C8FF47]">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      aria-required="true"
                      aria-invalid={!!fieldErrors.fullName}
                      aria-describedby={fieldErrors.fullName ? 'fullName-error' : undefined}
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (fieldErrors.fullName) {
                          setFieldErrors({ ...fieldErrors, fullName: '' });
                        }
                      }}
                      placeholder="e.g. Karim Mansour"
                      className={`w-full bg-[#101310] border text-sm text-[#EDEDE7] rounded px-4 py-2.5 focus:outline-none transition-colors ${
                        fieldErrors.fullName ? 'border-red-500 focus:border-red-500' : 'border-[#242D25] focus:border-[#C8FF47]'
                      }`}
                    />
                    {fieldErrors.fullName && (
                      <p id="fullName-error" className="mt-1 text-xs text-red-400 font-mono">
                        {fieldErrors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase text-[#7E8B7B] mb-2"
                    >
                      Work Email <span className="text-[#C8FF47]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      aria-required="true"
                      aria-invalid={!!fieldErrors.email}
                      aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (fieldErrors.email) {
                          setFieldErrors({ ...fieldErrors, email: '' });
                        }
                      }}
                      placeholder="name@company.com"
                      className={`w-full bg-[#101310] border text-sm text-[#EDEDE7] rounded px-4 py-2.5 focus:outline-none transition-colors ${
                        fieldErrors.email ? 'border-red-500 focus:border-red-500' : 'border-[#242D25] focus:border-[#C8FF47]'
                      }`}
                    />
                    {fieldErrors.email && (
                      <p id="email-error" className="mt-1 text-xs text-red-400 font-mono">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Company & Country */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-xs font-mono uppercase text-[#7E8B7B] mb-2"
                    >
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Nile Logistics"
                      className="w-full bg-[#101310] border border-[#242D25] text-sm text-[#EDEDE7] rounded px-4 py-2.5 focus:border-[#C8FF47] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="country"
                      className="block text-xs font-mono uppercase text-[#7E8B7B] mb-2"
                    >
                      Jurisdiction
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full bg-[#101310] border border-[#242D25] text-sm text-[#EDEDE7] rounded px-4 py-2.5 focus:border-[#C8FF47] focus:outline-none transition-colors"
                    >
                      <option value="EG">Egypt (Domestic - Proposed EGP settlement)</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="SA">Saudi Arabia</option>
                      <option value="GB">United Kingdom</option>
                      <option value="EU">European Union</option>
                      <option value="US">United States & Global</option>
                    </select>
                  </div>
                </div>

                {/* Phone & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-mono uppercase text-[#7E8B7B] mb-2"
                    >
                      Phone or WhatsApp (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+20 100 000 0000"
                      className="w-full bg-[#101310] border border-[#242D25] text-sm text-[#EDEDE7] rounded px-4 py-2.5 focus:border-[#C8FF47] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="budgetRange"
                      className="block text-xs font-mono uppercase text-[#7E8B7B] mb-2"
                    >
                      Target Budget Range ({currency})
                    </label>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full bg-[#101310] border border-[#242D25] text-sm text-[#EDEDE7] rounded px-4 py-2.5 focus:border-[#C8FF47] focus:outline-none transition-colors"
                    >
                      {currency === 'EGP' ? (
                        <>
                          <option value="25k_50k">25,000 – 50,000 EGP (Proposed)</option>
                          <option value="50k_100k">50,000 – 100,000 EGP (Proposed)</option>
                          <option value="100k_250k">100,000 – 250,000 EGP (Proposed)</option>
                          <option value="250k_plus">250,000+ EGP (Custom Agreement)</option>
                        </>
                      ) : (
                        <>
                          <option value="1k_2k">$1,000 – $2,500 USD (Proposed)</option>
                          <option value="2k_5k">$2,500 – $5,000 USD (Proposed)</option>
                          <option value="5k_10k">$5,000 – $10,000 USD (Proposed)</option>
                          <option value="10k_plus">$10,000+ USD (Custom Agreement)</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>

                {/* Requirements Summary */}
                <div>
                  <label
                    htmlFor="requirements"
                    className="block text-xs font-mono uppercase text-[#7E8B7B] mb-2"
                  >
                    Project Scope & Requirements <span className="text-[#C8FF47]">*</span>
                  </label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    required
                    rows={4}
                    aria-required="true"
                    aria-invalid={!!fieldErrors.requirements}
                    aria-describedby={fieldErrors.requirements ? 'requirements-error' : undefined}
                    value={formData.requirements}
                    onChange={(e) => {
                      setFormData({ ...formData, requirements: e.target.value });
                      if (fieldErrors.requirements) {
                        setFieldErrors({ ...fieldErrors, requirements: '' });
                      }
                    }}
                    placeholder="Outline your project scope, technical expectations, and anticipated timeline..."
                    className={`w-full bg-[#101310] border text-sm text-[#EDEDE7] rounded px-4 py-3 focus:outline-none transition-colors ${
                      fieldErrors.requirements ? 'border-red-500 focus:border-red-500' : 'border-[#242D25] focus:border-[#C8FF47]'
                    }`}
                  />
                  {fieldErrors.requirements && (
                    <p id="requirements-error" className="mt-1 text-xs text-red-400 font-mono">
                      {fieldErrors.requirements}
                    </p>
                  )}
                </div>

                {/* Submit CTA */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-[11px] text-[#7E8B7B] font-mono">
                    Protected by rate-limits and server validation.
                  </div>
                  <motion.button
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#101310] bg-[#C8FF47] rounded hover:bg-[#b5ee35] transition-colors disabled:opacity-50 whitespace-nowrap cursor-pointer"
                  >
                    {isSubmitting ? 'Verifying & Saving...' : 'Submit Project Inquiry'}
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
