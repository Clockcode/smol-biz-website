import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function ConcretePolishingPage() {
  return (
    <ServicePageTemplate
      title="Concrete Polishing"
      subtitle="Sleek, modern, and low-maintenance polished concrete floors."
      heroImage="/images/concrete_polishing_service.jpeg"
      intro="Our concrete polishing service transforms dull concrete into a glossy, attractive, and durable surface. Perfect for homes, offices, and commercial spaces."
      highlights={[
        'High-gloss, modern look',
        'Stain and scratch resistant',
        'Low maintenance',
        'Long-lasting and eco-friendly',
      ]}
      whyChooseUs={[
        { icon: '🪩', title: 'Modern Finish', description: 'Get a beautiful, high-gloss floor that stands out.' },
        { icon: '🧽', title: 'Easy Maintenance', description: 'Polished concrete is simple to clean and resists stains.' },
        { icon: '🌱', title: 'Eco-Friendly', description: 'Polishing uses your existing concrete—no extra materials needed.' },
        { icon: '⚡', title: 'Quick Service', description: 'We work efficiently to minimize disruption.' },
        { icon: '💲', title: 'Great Value', description: 'Enjoy a premium look at a competitive price.' },
        { icon: '⭐', title: 'Trusted Pros', description: 'Our team is known for quality and customer satisfaction.' },
      ]}
      processSteps={[
        { title: 'Consultation', description: 'We assess your space and discuss your desired finish.' },
        { title: 'Surface Prep', description: 'We clean and prep the concrete for polishing.' },
        { title: 'Grinding', description: 'We use diamond grinders to smooth and level the surface.' },
        { title: 'Polishing', description: 'We polish the concrete in stages to achieve the desired gloss.' },
        { title: 'Sealing', description: 'We apply a protective sealer for extra durability.' },
      ]}
      costInfo="Concrete polishing is affordable and long-lasting. Pricing depends on the size and condition of your floor."
      costList={[
        'Free consultation and quote',
        'No hidden fees',
        'Flexible options for every budget',
        'Fast, professional service',
      ]}
      faqs={[
        { question: 'Is polished concrete slippery?', answer: 'No, polished concrete is slip-resistant and safe for most spaces.' },
        { question: 'How long does the process take?', answer: 'Most projects are completed in 1-3 days.' },
        { question: 'Can you polish old concrete?', answer: 'Yes, we can polish most existing concrete after proper prep.' },
        { question: 'How do I maintain my polished floor?', answer: 'Just sweep and mop regularly. Polished concrete is very easy to maintain.' },
        { question: 'Is there a warranty?', answer: 'Yes, all our work comes with a warranty.' },
      ]}
    />
  );
}