import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function IndustrialEpoxyFlooringPage() {
  return (
    <ServicePageTemplate
      title="Industrial Epoxy Flooring"
      subtitle="Heavy-duty, chemical-resistant flooring for industrial facilities."
      heroImage="/images/industrial_service.jpeg"
      intro="Our industrial epoxy flooring is engineered for warehouses, factories, and production facilities. It stands up to heavy machinery, chemicals, and constant use."
      highlights={[
        'Extreme durability',
        'Chemical and abrasion resistant',
        'Easy to clean and maintain',
        'Fast installation with minimal downtime',
      ]}
      whyChooseUs={[
        { icon: '🏭', title: 'Industrial Experts', description: 'We understand the demands of industrial environments and deliver floors that last.' },
        { icon: '🧪', title: 'Chemical Resistant', description: 'Our floors resist harsh chemicals, oils, and solvents.' },
        { icon: '⚙️', title: 'Built for Heavy Use', description: 'Epoxy stands up to forklifts, machinery, and constant traffic.' },
        { icon: '⚡', title: 'Quick Turnaround', description: 'We work efficiently to minimize downtime for your operations.' },
        { icon: '💲', title: 'Cost-Effective', description: 'Get industrial-grade flooring at a competitive price.' },
        { icon: '⭐', title: 'Proven Results', description: 'Our reputation is built on quality, reliability, and satisfied clients.' },
      ]}
      processSteps={[
        { title: 'Site Assessment', description: 'We evaluate your facility and recommend the best epoxy system.' },
        { title: 'Surface Preparation', description: 'We clean and prep the concrete for a strong, lasting bond.' },
        { title: 'Repairs & Leveling', description: 'We fix cracks and uneven areas for a smooth finish.' },
        { title: 'Epoxy Application', description: 'We apply the epoxy in layers for maximum durability.' },
        { title: 'Final Inspection', description: 'We inspect the finished floor to ensure it meets our standards.' },
      ]}
      costInfo="Industrial epoxy flooring is a smart investment for any facility. Pricing depends on the size, condition, and requirements of your space."
      costList={[
        'Free site assessment and quote',
        'No hidden costs',
        'Flexible scheduling',
        'Professional, fast installation',
      ]}
      faqs={[
        { question: 'Is epoxy flooring good for factories and warehouses?', answer: 'Yes! Epoxy is designed for heavy use and industrial environments.' },
        { question: 'How long does installation take?', answer: 'Most projects are completed in 2-5 days, depending on size and prep work.' },
        { question: 'Is epoxy resistant to chemicals?', answer: 'Absolutely. Our epoxy systems resist most chemicals, oils, and solvents.' },
        { question: 'How do I maintain my epoxy floor?', answer: 'Sweep and mop regularly. Epoxy is very low maintenance.' },
        { question: 'Is there a warranty?', answer: 'Yes, all our installations come with a warranty.' },
      ]}
    />
  );
}