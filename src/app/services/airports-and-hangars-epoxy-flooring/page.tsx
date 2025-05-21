import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function AirportsAndHangarsEpoxyFlooringPage() {
  return (
    <ServicePageTemplate
      title="Airports & Hangars Epoxy Flooring"
      subtitle="Heavy-duty, chemical-resistant flooring for aviation facilities."
      heroImage="/images/airport_service.jpg"
      intro="Our epoxy flooring for airports and hangars is engineered to handle aircraft traffic, chemicals, and constant use. We deliver safe, durable, and easy-to-maintain floors for aviation environments."
      highlights={[
        'Withstands heavy loads and traffic',
        'Chemical and abrasion resistant',
        'Easy to clean and maintain',
        'Fast installation with minimal downtime',
      ]}
      whyChooseUs={[
        { icon: '✈️', title: 'Aviation Experts', description: 'We understand the unique needs of airports and hangars.' },
        { icon: '🧪', title: 'Chemical Resistant', description: 'Our floors resist jet fuel, oil, and harsh chemicals.' },
        { icon: '⚙️', title: 'Built for Heavy Use', description: 'Epoxy stands up to aircraft, vehicles, and equipment.' },
        { icon: '⚡', title: 'Quick Turnaround', description: 'We work efficiently to minimize downtime for your operations.' },
        { icon: '💲', title: 'Cost-Effective', description: 'Get aviation-grade flooring at a competitive price.' },
        { icon: '⭐', title: 'Proven Results', description: 'Our reputation is built on quality, reliability, and satisfied clients.' },
      ]}
      processSteps={[
        { title: 'Site Assessment', description: 'We evaluate your facility and recommend the best epoxy system.' },
        { title: 'Surface Preparation', description: 'We clean and prep the concrete for a strong, lasting bond.' },
        { title: 'Repairs & Leveling', description: 'We fix cracks and uneven areas for a smooth finish.' },
        { title: 'Epoxy Application', description: 'We apply the epoxy in layers for maximum durability.' },
        { title: 'Final Inspection', description: 'We inspect the finished floor to ensure it meets our standards.' },
      ]}
      costInfo="Epoxy flooring for airports and hangars is a smart investment. Pricing depends on the size, condition, and requirements of your space."
      costList={[
        'Free site assessment and quote',
        'No hidden costs',
        'Flexible scheduling',
        'Professional, fast installation',
      ]}
      faqs={[
        { question: 'Is epoxy flooring good for hangars and airports?', answer: 'Yes! Epoxy is designed for heavy use and aviation environments.' },
        { question: 'How long does installation take?', answer: 'Most projects are completed in 2-5 days, depending on size and prep work.' },
        { question: 'Is epoxy resistant to chemicals?', answer: 'Absolutely. Our epoxy systems resist most chemicals, oils, and solvents.' },
        { question: 'How do I maintain my epoxy floor?', answer: 'Sweep and mop regularly. Epoxy is very low maintenance.' },
        { question: 'Is there a warranty?', answer: 'Yes, all our installations come with a warranty.' },
      ]}
    />
  );
}