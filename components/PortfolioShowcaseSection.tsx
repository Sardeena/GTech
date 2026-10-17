'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { SHOWCASE_PROJECTS, ShowcaseProject } from '@/lib/commercial-data';
import { EASE_CURVE } from '@/lib/motion';

interface PortfolioShowcaseSectionProps {
  locale: 'en' | 'ar';
  onInquiryClick: (serviceSlug?: string) => void;
}

export function PortfolioShowcaseSection({
  locale,
  onInquiryClick,
}: PortfolioShowcaseSectionProps) {
  const isAr = locale === 'ar';
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="work" className="relative w-full border-b border-[#242D25] py-16 lg:py-24 bg-[#101310] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header with Viewport Reveal */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, ease: EASE_CURVE }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="text-xs font-mono tracking-widest text-[#7E8B7B] uppercase mb-2">
              {isAr ? 'نماذج العمل والتطبيقات' : 'Product Demonstrations'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EDEDE7]">
              {isAr ? 'نماذج حقيقية من جودة تنفيذنا' : 'Verified Demonstrations & Builds'}
            </h2>
          </div>
          <p className="text-sm text-[#7E8B7B] max-w-md">
            {isAr
              ? 'نؤمن بالشفافية المطلقة: نعرض هنا نماذج حقيقية ومثبتة عملياً لأنظمتنا ومتاجرنا دون فبركة شعارات عملاء وهمية أو ادعاءات غير حقيقية.'
              : 'Grounded commercial proof: functional demonstrations and verified builds of our systems, stores, and workflows without fabricated client logos.'}
          </p>
        </motion.div>

        {/* 2x2 Showcase Grid with Hover Lift & Accent Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {SHOWCASE_PROJECTS.map((proj: ShowcaseProject, idx: number) => (
            <motion.div
              key={proj.id}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{
                duration: 0.4,
                delay: shouldReduceMotion ? 0 : idx * 0.08,
                ease: EASE_CURVE,
              }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -4, borderColor: '#7E8B7B' }
              }
              className="group relative border border-[#242D25] bg-[#161B16] p-7 rounded flex flex-col justify-between transition-[background-color,border-color,box-shadow] duration-200 hover:bg-[#182019] hover:shadow-xl hover:shadow-black/30"
            >
              {/* Subtle top indicator on hover */}
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-[2px] bg-[#C8FF47] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-t"
              />

              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between gap-3 mb-3 pb-3 border-b border-[#242D25]">
                  <span className="text-xs font-mono text-[#7E8B7B] uppercase">
                    {proj.category}
                  </span>
                  <span className="text-[11px] font-mono text-[#C8FF47] bg-[#101310] px-2.5 py-0.5 rounded border border-[#242D25] transition-colors group-hover:border-[#7E8B7B]">
                    {proj.demonstrationType}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#EDEDE7] mb-2 transition-colors group-hover:text-white">
                  {proj.title}
                </h3>

                <p className="text-xs text-[#EDEDE7]/80 leading-relaxed mb-6">
                  {proj.scopeSummary}
                </p>

                {/* Deliverables */}
                <div className="space-y-2 mb-6 border-t border-[#242D25] pt-4">
                  <div className="text-[10px] font-mono uppercase text-[#7E8B7B]">
                    {isAr ? 'عناصر التنفيذ المحققة:' : 'Implemented Features:'}
                  </div>
                  {proj.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-1.5 text-xs text-[#EDEDE7]/90 leading-tight">
                      <span className="text-[#C8FF47] font-bold">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Row */}
              <div className="pt-4 border-t border-[#242D25] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {proj.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono text-[#7E8B7B] bg-[#101310] px-2 py-0.5 rounded border border-[#242D25]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <motion.button
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  transition={{ duration: 0.15, ease: EASE_CURVE }}
                  onClick={() => onInquiryClick(proj.category.toLowerCase().includes('crm') ? 'crm' : 'web-design')}
                  type="button"
                  className="group/cta inline-flex items-center gap-1.5 text-xs font-semibold text-[#C8FF47] hover:underline whitespace-nowrap self-start sm:self-auto cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C8FF47]"
                >
                  <span>{isAr ? 'طلب بناء مماثل' : 'Request Similar Build'}</span>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover/cta:translate-x-1 rtl:group-hover/cta:-translate-x-1"
                  >
                    {isAr ? '←' : '→'}
                  </span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
