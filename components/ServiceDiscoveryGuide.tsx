'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { COMMERCIAL_SERVICES } from '@/lib/commercial-data';
import { EASE_CURVE } from '@/lib/motion';

interface ServiceDiscoveryGuideProps {
  currency: 'EGP' | 'USD';
  locale: 'en' | 'ar';
  onSelectService: (serviceId: string) => void;
}

export function ServiceDiscoveryGuide({
  currency,
  locale,
  onSelectService,
}: ServiceDiscoveryGuideProps) {
  const isAr = locale === 'ar';
  const shouldReduceMotion = useReducedMotion();
  const [selectedGoal, setSelectedGoal] = useState<string>('web-design');

  const goals = isAr
    ? [
        { id: 'web-design', label: 'موقع إلكتروني أو متجر جديد', serviceSlug: 'web-design' },
        { id: 'crm', label: 'إدارة العملاء وفريق المبيعات', serviceSlug: 'crm' },
        { id: 'automation', label: 'أتمتة الأعمال وربط التطبيقات (n8n)', serviceSlug: 'automation' },
        { id: 'branding', label: 'شعار وهوية بصرية متكاملة', serviceSlug: 'branding' },
        { id: 'domains-hosting-vps', label: 'استضافة سحابية وسيرفرات VPS', serviceSlug: 'domains-hosting-vps' },
        { id: 'maintenance', label: 'صيانة دورية ودعم فني مستمر', serviceSlug: 'maintenance' },
      ]
    : [
        { id: 'web-design', label: 'Build a Website or Online Store', serviceSlug: 'web-design' },
        { id: 'crm', label: 'Organize Leads & Sales CRM', serviceSlug: 'crm' },
        { id: 'automation', label: 'Automate Manual Tasks (n8n)', serviceSlug: 'automation' },
        { id: 'branding', label: 'Design Brand Logo & Identity', serviceSlug: 'branding' },
        { id: 'domains-hosting-vps', label: 'Fast Cloud Hosting & VPS', serviceSlug: 'domains-hosting-vps' },
        { id: 'maintenance', label: 'Website Care & Ongoing Support', serviceSlug: 'maintenance' },
      ];

  const activeService = COMMERCIAL_SERVICES.find((s) => s.slug === selectedGoal) || COMMERCIAL_SERVICES[0];

  return (
    <section id="guide" className="relative w-full border-b border-[#242D25] py-16 lg:py-24 bg-[#161B16] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header with Viewport Reveal */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, ease: EASE_CURVE }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="text-xs font-mono tracking-widest text-[#7E8B7B] uppercase mb-2">
            {isAr ? 'دليل الاختيار السريع' : 'Interactive Service Guide'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EDEDE7]">
            {isAr ? 'ما الذي يحتاجه عملك اليوم؟' : 'Which Service Is Right For Your Business?'}
          </h2>
          <p className="mt-2 text-sm text-[#7E8B7B]">
            {isAr
              ? 'اختر هدفك الحالي وسنوضح لك الحل الأنسب ونموذج التعاقد المتاح والتكلفة المتوقعة.'
              : 'Select your immediate business goal to see our recommended solution, commercial options, and estimated timeline.'}
          </p>
        </motion.div>

        {/* Goal Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {goals.map((g) => {
            const isSelected = selectedGoal === g.id;
            return (
              <motion.button
                key={g.id}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                transition={{ duration: 0.15, ease: EASE_CURVE }}
                onClick={() => setSelectedGoal(g.id)}
                type="button"
                className={`px-4 py-2.5 text-xs sm:text-sm font-medium rounded transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#C8FF47] cursor-pointer ${
                  isSelected
                    ? 'bg-[#C8FF47] text-[#101310] font-semibold shadow-sm'
                    : 'bg-[#101310] text-[#7E8B7B] border border-[#242D25] hover:text-[#EDEDE7] hover:border-[#7E8B7B]'
                }`}
              >
                {g.label}
              </motion.button>
            );
          })}
        </div>

        {/* Selected Recommendation Card with Smooth Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: EASE_CURVE }}
            className="border border-[#242D25] bg-[#101310] p-8 sm:p-10 rounded max-w-5xl mx-auto mb-12 shadow-lg shadow-black/20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Solution Detail */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-[#C8FF47] uppercase font-semibold">
                    {isAr ? 'الحل المقترح لعملك' : 'Recommended Solution'}
                  </span>
                  <span className="text-[11px] font-mono text-[#7E8B7B] bg-[#161B16] px-2.5 py-0.5 rounded border border-[#242D25]">
                    {activeService.number} / 06
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#EDEDE7]">
                  {isAr ? activeService.titleAr : activeService.title}
                </h3>

                <p className="text-sm text-[#EDEDE7]/90 leading-relaxed">
                  {isAr ? activeService.summaryAr : activeService.summary}
                </p>

                <div className="space-y-2 pt-2 border-t border-[#242D25]">
                  <div className="text-xs font-mono text-[#7E8B7B] uppercase">
                    {isAr ? 'أهم المخرجات التي ستستلمها:' : 'Key Deliverables You Receive:'}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#EDEDE7]/85">
                    {activeService.deliverables.slice(0, 4).map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-1.5">
                        <span className="text-[#C8FF47] font-bold">→</span>
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Commercial Model & Direct Action */}
              <div className="lg:col-span-5 bg-[#161B16] border border-[#242D25] p-6 rounded space-y-5">
                <div>
                  <div className="text-xs font-mono text-[#7E8B7B] uppercase mb-1">
                    {isAr ? 'طريقة التعاقد المتاحة' : 'Available Commercial Models'}
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {activeService.commercialModels.map((m, mIdx) => (
                      <span
                        key={mIdx}
                        className="text-xs font-medium text-[#EDEDE7] bg-[#101310] px-2.5 py-1 rounded border border-[#242D25]"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#242D25]">
                  <div className="text-[10px] font-mono text-[#7E8B7B] uppercase">
                    {isAr ? `الاستثمار التقديري (${currency})` : `Estimated Starting Investment (${currency})`}
                  </div>
                  <div className="text-lg font-bold font-mono text-[#C8FF47] tabular-nums mt-0.5">
                    {currency === 'EGP' ? activeService.pricingSummaryEgp : activeService.pricingSummaryUsd}
                  </div>
                  <p className="text-[11px] text-[#7E8B7B] mt-1 leading-snug">
                    {isAr
                      ? 'الأسعار محددة وشفافة دون أي مصاريف خفية.'
                      : 'Clear, transparent pricing without hidden fees or currency surcharges.'}
                  </p>
                </div>

                <div className="pt-2 space-y-2">
                  <motion.button
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                    transition={{ duration: 0.15, ease: EASE_CURVE }}
                    onClick={() => onSelectService(activeService.slug)}
                    type="button"
                    className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#101310] bg-[#C8FF47] rounded hover:bg-[#b5ee35] transition-colors text-center focus-visible:outline-2 focus-visible:outline-[#C8FF47] cursor-pointer"
                  >
                    {isAr ? 'ابدأ هذا المشروع الآن' : 'Start This Project'}
                  </motion.button>

                  <Link
                    href={`/services/${activeService.slug}`}
                    className="group block w-full py-2 px-4 text-xs font-medium text-[#EDEDE7] border border-[#242D25] bg-[#101310] rounded hover:border-[#7E8B7B] transition-colors text-center focus-visible:outline-2 focus-visible:outline-[#C8FF47]"
                  >
                    <span>{isAr ? 'قراءة التفاصيل والأسئلة الشائعة' : 'Read Full Details & FAQs'}</span>
                    <span
                      aria-hidden="true"
                      className="inline-block transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 ml-1 rtl:mr-1 rtl:ml-0"
                    >
                      {isAr ? '←' : '→'}
                    </span>
                  </Link>
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Rent vs. Buy Comparison Matrix */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: EASE_CURVE }}
          className="border border-[#242D25] bg-[#101310] p-7 sm:p-8 rounded max-w-5xl mx-auto"
        >
          <div className="mb-6">
            <span className="text-xs font-mono text-[#C8FF47] uppercase font-semibold">
              {isAr ? 'مقارنة تجارية' : 'Commercial Model Guide'}
            </span>
            <h4 className="text-xl font-bold text-[#EDEDE7] mt-1">
              {isAr ? 'هل تختار الشراء أم الإيجار الشهري؟' : 'Should You Rent or Buy Software?'}
            </h4>
            <p className="text-xs text-[#7E8B7B] mt-1">
              {isAr
                ? 'نقدم المرونة الكاملة لشركتك حتى تختار ما يناسب ميزانيتك الحالية وخططك المستقبلية.'
                : 'We offer complete commercial flexibility so you can align with your operational budget.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="border border-[#242D25] bg-[#161B16] p-5 rounded space-y-3 transition-colors hover:border-[#7E8B7B]">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-[#EDEDE7]">{isAr ? 'الإيجار الشهري (Rental)' : 'Monthly Software Rental'}</span>
                <span className="text-[10px] font-mono text-[#C8FF47] bg-[#101310] px-2 py-0.5 rounded border border-[#242D25]">
                  {isAr ? 'أقل تكلفة للبدء' : 'Lowest Initial Outlay'}
                </span>
              </div>
              <p className="text-[#7E8B7B] leading-relaxed">
                {isAr
                  ? 'مثالي للشركات التي ترغب في تشغيل نظام إدارة العملاء أو المتجر فوراً بمصاريف شهرية بسيطة تشمل الاستضافة والدعم والتحديثات.'
                  : 'Best for businesses that want to start immediately with low recurring expenses. Includes cloud hosting, daily backups, and ongoing software updates.'}
              </p>
              <div className="space-y-1.5 text-[#EDEDE7]/80 pt-2 border-t border-[#242D25]">
                <div>• {isAr ? 'لا توجد تكاليف تطوير ضخمة مقدماً' : 'Zero large upfront development capital required'}</div>
                <div>• {isAr ? 'الاستضافة السحابية والنسخ الاحتياطي مشمولان' : 'High-speed cloud hosting & backups included'}</div>
                <div>• {isAr ? 'إمكانية الترقية أو التحويل للشراء في أي وقت' : 'Option to credit rental fees toward buying later'}</div>
              </div>
            </div>

            <div className="border border-[#242D25] bg-[#161B16] p-5 rounded space-y-3 transition-colors hover:border-[#7E8B7B]">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-[#EDEDE7]">{isAr ? 'الشراء الكامل (One-Time Build)' : 'Full Purchase & Custom Build'}</span>
                <span className="text-[10px] font-mono text-[#EDEDE7] bg-[#101310] px-2 py-0.5 rounded border border-[#242D25]">
                  {isAr ? 'ملكية بنسبة 100%' : '100% Asset Ownership'}
                </span>
              </div>
              <p className="text-[#7E8B7B] leading-relaxed">
                {isAr
                  ? 'مثالي للشركات التي تحتاج إلى نظام مخصص بالكامل وتملك الأكواد وقواعد البيانات الخاصة بها مع نشرها على سيرفراتها الخاصة.'
                  : 'Best for established businesses that require fully bespoke business workflows, complete code ownership, and private deployment on their own servers.'}
              </p>
              <div className="space-y-1.5 text-[#EDEDE7]/80 pt-2 border-t border-[#242D25]">
                <div>• {isAr ? 'ملكية تامة لكافة الأكواد والتصميمات' : '100% ownership of code, assets, and databases'}</div>
                <div>• {isAr ? 'تخصيص كامل للشاشات ومسارات العمل' : 'Custom feature development to match your exact workflow'}</div>
                <div>• {isAr ? 'لا توجد رسوم برمجية شهرية إجبارية' : 'No mandatory recurring software fees'}</div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
