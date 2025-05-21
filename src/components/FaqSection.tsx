'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'How long does epoxy flooring last?',
    answer: (
      <>
        Epoxy floors typically last 5–10 years, depending on use and location. Residential epoxy can last over 10 years, especially indoors. Commercial and industrial epoxy usually lasts 5–10 years. Professional installation helps your floor last longer.
      </>
    ),
  },
  {
    question: 'What are the benefits of epoxy flooring?',
    answer: (
      <>
        Epoxy floors are durable, easy to clean, and look great. They resist chemicals, stains, and heavy traffic. Epoxy is perfect for garages, basements, and commercial spaces.
      </>
    ),
  },
  {
    question: 'Why choose epoxy for my floors?',
    answer: (
      <>
        Epoxy flooring is tough, safe, and attractive. It protects your concrete, resists spills and scratches, and makes spaces brighter by reflecting light. It's a smart choice for homes and businesses.
      </>
    ),
  },
  {
    question: 'Is epoxy flooring really durable?',
    answer: (
      <>
        Yes! Epoxy floors handle heat, water, and most chemicals. They last for years while keeping your concrete safe and looking good.
      </>
    ),
  },
  {
    question: 'Where do you offer your services?',
    answer: (
      <>
        We serve Toronto, the Greater Toronto Area (GTA), and all of Ontario. From downtown Toronto to the surrounding suburbs and beyond, we're here to help with your epoxy flooring needs.
      </>
    ),
  },
  {
    question: 'How much does epoxy flooring cost?',
    answer: (
      <>
        Epoxy flooring is affordable compared to other options. Prices vary by service and floor size. Call us for a free quote!
      </>
    ),
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-gray-400 text-lg font-medium mb-2">FAQ</div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">Questions about Epoxy</h2>
        </div>
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
      </div>
    </section>
  );
}