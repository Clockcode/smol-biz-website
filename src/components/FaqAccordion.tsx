'use client';

import { useState } from 'react';

export interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {faqs.map((faq, idx) => {
        const open = openIndex === idx;
        return (
          <div
            key={idx}
            className="bg-white rounded-xl shadow p-6 md:p-8 transition-all border border-gray-100"
            style={{ boxShadow: open ? '0 4px 24px 0 rgba(30, 136, 229, 0.07)' : undefined }}
          >
            <button
              className="flex items-center w-full text-left focus:outline-none"
              onClick={() => setOpenIndex(open ? null : idx)}
              aria-expanded={open}
              aria-controls={`faq-content-${idx}`}
            >
              <span className={`text-2xl mr-4 text-blue-700 font-bold select-none`}>{open ? '−' : '+'}</span>
              <span className="font-bold text-lg md:text-xl text-blue-900">
                {faq.question}
              </span>
            </button>
            {open && (
              <div
                id={`faq-content-${idx}`}
                className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed"
              >
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}