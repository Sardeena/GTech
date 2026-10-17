'use client';

import React from 'react';
import { motion } from 'motion/react';
import { HOW_IT_WORKS_STEPS } from '@/lib/commercial-data';

interface HowItWorksSectionProps {
  locale: 'en' | 'ar';
  onInquiryClick: () => void;
}

const easeCurve = [0.16, 1, 0.3, 1] as const;

export function HowItWorksSection({ locale, onInquiryClick }: HowItWorksSectionProps) {
  const isAr = locale === 'ar';

  return (
    <section id="how-it-works" className="w-full border-b border-[#242D25] py-16 lg:py-24 bg-[#101310] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: easeCurve }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="text-xs font-mono tracking-widest text-[#7E8B7B] uppercase mb-2">
            {isAr ? 'خطوات التعاون' : 'Simple Customer Journey'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EDEDE7]">
            {isAr ? 'كيف تبدأ العمل معنا بسهولة' : 'How We Work Together'}
          </h2>
          <p className="mt-2 text-sm text-[#7E8B7B]">
            {isAr
              ? 'خمس خطوات واضحة من الفكرة الأولى وحتى التسليم والدعم المستمر دون تعقيدات أو مصطلحات تقنية مبهمة.'
              : 'A transparent five-step process from your initial idea to deployment and ongoing support.'}
          </p>
        </motion.div>

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-14">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: easeCurve }}
              className="relative border border-[#242D25] bg-[#161B16] p-6 rounded flex flex-col justify-between"
            >
              <div>
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-4 border-b border-[#242D25] pb-3">
                  <span className="font-mono text-xs font-bold text-[#C8FF47]">
                    STEP {step.number}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[#C8FF47]" />
                </div>

                <h3 className="text-base font-bold text-[#EDEDE7] mb-2">
                  {isAr ? step.titleAr : step.title}
                </h3>

                <p className="text-xs text-[#EDEDE7]/80 leading-relaxed mb-4">
                  {isAr ? step.summaryAr : step.summary}
                </p>
              </div>

              <div className="space-y-1.5 pt-3 border-t border-[#242D25] text-[11px] text-[#7E8B7B]">
                {step.details.map((detail, dIdx) => (
                  <div key={dIdx} className="leading-tight">
                    • {detail}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="border border-[#242D25] bg-[#161B16] p-8 rounded text-center max-w-3xl mx-auto">
          <h4 className="text-xl font-bold text-[#EDEDE7] mb-2">
            {isAr ? 'جاهز لمناقشة مشروعك؟' : 'Ready to Get Started?'}
          </h4>
          <p className="text-xs text-[#7E8B7B] max-w-lg mx-auto mb-6">
            {isAr
              ? 'أرسل لنا تفاصيل مشروعك وسيقوم أحد مهندسينا بمراجعتها والتواصل معك بعرض عمل متكامل خلال 24 إلى 48 ساعة.'
              : 'Submit your requirements and an engineer will review your project and reply with a tailored proposal within 24–48 hours.'}
          </p>
          <button
            onClick={onInquiryClick}
            type="button"
            className="px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#101310] bg-[#C8FF47] rounded hover:bg-[#b5ee35] transition-colors cursor-pointer"
          >
            {isAr ? 'ابدأ محادثة المشروع' : 'Start a Project Conversation'}
          </button>
        </div>

      </div>
    </section>
  );
}
