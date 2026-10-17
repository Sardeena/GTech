'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { HOW_IT_WORKS_STEPS } from '@/lib/commercial-data';
import { EASE_CURVE } from '@/lib/motion';

interface HowItWorksSectionProps {
  locale: 'en' | 'ar';
  onInquiryClick: () => void;
}

export function HowItWorksSection({ locale, onInquiryClick }: HowItWorksSectionProps) {
  const isAr = locale === 'ar';
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="how-it-works" className="relative w-full border-b border-[#242D25] py-16 lg:py-24 bg-[#101310] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header with Viewport Reveal */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, ease: EASE_CURVE }}
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

        {/* 5-Step Process Timeline with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-14">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{
                duration: 0.4,
                delay: shouldReduceMotion ? 0 : index * 0.08,
                ease: EASE_CURVE,
              }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -3, borderColor: '#7E8B7B' }
              }
              className="group relative border border-[#242D25] bg-[#161B16] p-6 rounded flex flex-col justify-between transition-[background-color,border-color,box-shadow] duration-200 hover:bg-[#182019] hover:shadow-lg"
            >
              {/* Step indicator hairline */}
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-[2px] bg-[#C8FF47] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-t"
              />

              <div>
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-4 border-b border-[#242D25] pb-3">
                  <span className="font-mono text-xs font-bold text-[#C8FF47]">
                    STEP {step.number}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[#C8FF47] transition-transform duration-200 group-hover:scale-125" />
                </div>

                <h3 className="text-base font-bold text-[#EDEDE7] mb-2 transition-colors group-hover:text-white">
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
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: EASE_CURVE }}
          className="border border-[#242D25] bg-[#161B16] p-8 rounded text-center max-w-3xl mx-auto shadow-md"
        >
          <h4 className="text-xl font-bold text-[#EDEDE7] mb-2">
            {isAr ? 'جاهز لمناقشة مشروعك؟' : 'Ready to Get Started?'}
          </h4>
          <p className="text-xs text-[#7E8B7B] max-w-lg mx-auto mb-6">
            {isAr
              ? 'أرسل لنا تفاصيل مشروعك وسيقوم أحد مهندسينا بمراجعتها والتواصل معك بعرض عمل متكامل خلال 24 إلى 48 ساعة.'
              : 'Submit your requirements and an engineer will review your project and reply with a tailored proposal within 24–48 hours.'}
          </p>
          <motion.button
            whileHover={shouldReduceMotion ? undefined : { scale: 1.02, y: -1 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            transition={{ duration: 0.15, ease: EASE_CURVE }}
            onClick={onInquiryClick}
            type="button"
            className="px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#101310] bg-[#C8FF47] rounded hover:bg-[#b5ee35] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C8FF47] shadow-sm"
          >
            {isAr ? 'ابدأ محادثة المشروع' : 'Start a Project Conversation'}
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
