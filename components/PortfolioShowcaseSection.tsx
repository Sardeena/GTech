'use client';

import React from 'react';
import { motion } from 'motion/react';
import { SHOWCASE_PROJECTS, ShowcaseProject } from '@/lib/commercial-data';

interface PortfolioShowcaseSectionProps {
  locale: 'en' | 'ar';
  onInquiryClick: (serviceSlug?: string) => void;
}

const easeCurve = [0.16, 1, 0.3, 1] as const;

export function PortfolioShowcaseSection({
  locale,
  onInquiryClick,
}: PortfolioShowcaseSectionProps) {
  const isAr = locale === 'ar';

  return (
    <section id="work" className="w-full border-b border-[#242D25] py-16 lg:py-24 bg-[#101310] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
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
        </div>

        {/* 2x2 Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {SHOWCASE_PROJECTS.map((proj: ShowcaseProject, idx: number) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: easeCurve }}
              className="border border-[#242D25] bg-[#161B16] p-7 rounded flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-3 mb-3 pb-3 border-b border-[#242D25]">
                  <span className="text-xs font-mono text-[#7E8B7B] uppercase">
                    {proj.category}
                  </span>
                  <span className="text-[11px] font-mono text-[#C8FF47] bg-[#101310] px-2.5 py-0.5 rounded border border-[#242D25]">
                    {proj.demonstrationType}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#EDEDE7] mb-2">
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

              {/* Footer */}
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

                <button
                  onClick={() => onInquiryClick(proj.category.toLowerCase().includes('crm') ? 'crm' : 'web-design')}
                  type="button"
                  className="text-xs font-semibold text-[#C8FF47] hover:underline whitespace-nowrap self-start sm:self-auto cursor-pointer"
                >
                  {isAr ? 'طلب بناء مماثل ←' : 'Request Similar Build →'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
