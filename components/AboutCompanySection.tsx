'use client';

import React from 'react';
import { motion } from 'motion/react';
import { COMMERCIAL_FAQS } from '@/lib/commercial-data';

interface AboutCompanySectionProps {
  locale: 'en' | 'ar';
}

const easeCurve = [0.16, 1, 0.3, 1] as const;

export function AboutCompanySection({ locale }: AboutCompanySectionProps) {
  const isAr = locale === 'ar';

  return (
    <section id="about" className="w-full border-b border-[#242D25] py-16 lg:py-24 bg-[#161B16] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-5">
            <div className="text-xs font-mono tracking-widest text-[#7E8B7B] uppercase mb-2">
              {isAr ? 'عن جونزن تك' : 'About Gonnsen Tech'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EDEDE7]">
              {isAr ? 'شريكك التقني الموثوق لبناء وتطوير أعمالك' : 'Practical Engineering for Growing Businesses'}
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-4 text-sm text-[#EDEDE7]/85 leading-relaxed">
            <p>
              {isAr
                ? 'جونزن تك هي شركة برمجيات وخدمات رقمية مقرها القاهرة، تقدم حلولها للشركات في مصر وخارجها. نساعد أصحاب الأعمال والمديرين في بناء مواقع جذابة وعالية الكفاءة، وتشغيل أنظمة إدارة العملاء (CRM)، وأتمتة مسارات العمل المتكررة، وتوفير استضافة سحابية آمنة.'
                : 'Gonnsen Tech is a digital services and software business based in Cairo, serving clients throughout Egypt and internationally. We help business owners and managers build high-performing websites, deploy flexible CRM systems, automate tedious manual operations, and maintain reliable cloud infrastructure.'}
            </p>
            <p className="text-[#7E8B7B]">
              {isAr
                ? 'نحن لا نقدم وعوداً خيالية أو تعقيدات برمجية غير مفهومة. نركز على التصميم الأنيق، والأكواد النظيفة السريعة، والتسعير العادل والشفاف، والدعم الفني الحقيقي الذي يمكنك الاعتماد عليه.'
                : 'We prioritize clear communication, clean code, honest pricing, and direct technical support. Whether you want to rent a CRM to keep initial costs low or invest in a bespoke web platform, we deliver solutions designed to work reliably.'}
            </p>
          </div>
        </div>

        {/* 3 Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="border border-[#242D25] bg-[#101310] p-6 rounded space-y-2.5">
            <div className="text-xs font-mono text-[#C8FF47] uppercase font-semibold">
              01 · {isAr ? 'وضوح تام' : 'Clear Communication'}
            </div>
            <h3 className="text-base font-bold text-[#EDEDE7]">
              {isAr ? 'حديث مباشر بدون تعقيدات' : 'Plain Language & No Jargon'}
            </h3>
            <p className="text-xs text-[#7E8B7B] leading-relaxed">
              {isAr
                ? 'نتحدث معك بلغة الأعمال الواضحة. نخبرك بما ستحصل عليه بالضبط، والجدول الزمني، والتكلفة المحددة مقدماً.'
                : 'We explain what we build in straightforward business language. You always know the timeline, deliverables, and exact pricing before work begins.'}
            </p>
          </div>

          <div className="border border-[#242D25] bg-[#101310] p-6 rounded space-y-2.5">
            <div className="text-xs font-mono text-[#C8FF47] uppercase font-semibold">
              02 · {isAr ? 'مرونة مادية' : 'Commercial Flexibility'}
            </div>
            <h3 className="text-base font-bold text-[#EDEDE7]">
              {isAr ? 'الإيجار أو الشراء' : 'Rent or Purchase Options'}
            </h3>
            <p className="text-xs text-[#7E8B7B] leading-relaxed">
              {isAr
                ? 'ندرك أن لكل شركة مرحلة مختلفة من النمو؛ لذا نقدم أنظمة CRM واستضافة بنظام الإيجار الشهري المنخفض أو التملك الكامل.'
                : 'Different business stages need different cash flows. We offer low monthly software rentals alongside owned custom builds.'}
            </p>
          </div>

          <div className="border border-[#242D25] bg-[#101310] p-6 rounded space-y-2.5">
            <div className="text-xs font-mono text-[#C8FF47] uppercase font-semibold">
              03 · {isAr ? 'دعم مستمر' : 'Ongoing Commitment'}
            </div>
            <h3 className="text-base font-bold text-[#EDEDE7]">
              {isAr ? 'بجوارك بعد التسليم' : 'Here Long After Launch'}
            </h3>
            <p className="text-xs text-[#7E8B7B] leading-relaxed">
              {isAr
                ? 'لا تنتهي علاقتنا بتسليم الموقع، بل نوفر خطط صيانة وتحديثات أمان ونسخ احتياطي لحماية استثمارك المستمر.'
                : 'We remain available to maintain, update, and protect your digital assets with responsive support and scheduled maintenance retainers.'}
            </p>
          </div>
        </div>

        {/* Customer FAQ Subsection */}
        <div className="border border-[#242D25] bg-[#101310] p-8 sm:p-10 rounded">
          <div className="mb-8">
            <div className="text-xs font-mono text-[#C8FF47] uppercase font-semibold mb-1">
              {isAr ? 'الأسئلة الأكثر شيوعاً' : 'Customer Questions'}
            </div>
            <h3 className="text-2xl font-bold text-[#EDEDE7]">
              {isAr ? 'إجابات واضحة على تساؤلاتك' : 'Frequently Asked Questions'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COMMERCIAL_FAQS.map((faq, fIdx) => (
              <div key={fIdx} className="space-y-2 border-b border-[#242D25]/60 pb-5 last:border-0 md:last:border-b">
                <h4 className="text-sm font-bold text-[#EDEDE7]">
                  {faq.question}
                </h4>
                <p className="text-xs text-[#7E8B7B] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
