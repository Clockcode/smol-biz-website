import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function CommercialEpoxyFlooringPage() {
  return (
    <ServicePageTemplate
      title="Commercial Epoxy Flooring"
      subtitle="Durable, attractive, and easy-to-maintain flooring for commercial spaces."
      heroImage="/images/commercial_service.jpeg"
      intro="Our commercial epoxy flooring solutions are designed for high-traffic environments like retail stores, offices, and showrooms. We deliver floors that are both beautiful and built to last."
      highlights={[
        'Long-lasting and low maintenance',
        'Resistant to stains, chemicals, and heavy use',
        'Custom colors and finishes available',
        'Fast installation with minimal disruption',
      ]}
      whyChooseUs={[
        { icon: '🏢', title: 'Business-Ready', description: 'Our floors are made for busy commercial spaces and look great for years.' },
        { icon: '🛡️', title: 'Tough & Protective', description: 'Epoxy protects your concrete and stands up to heavy foot and vehicle traffic.' },
        { icon: '⚡', title: 'Quick Turnaround', description: 'We work efficiently to minimize downtime for your business.' },
        { icon: '🎨', title: 'Custom Designs', description: 'Choose from a variety of colors and finishes to match your brand.' },
        { icon: '💲', title: 'Cost-Effective', description: 'Get premium flooring at a price that fits your budget.' },
        { icon: '⭐', title: 'Trusted Pros', description: 'Our team is known for reliability, quality, and customer satisfaction.' },
      ]}
      processSteps={[
        { title: 'Consultation & Planning', description: 'We assess your space and recommend the best epoxy solution for your needs.' },
        { title: 'Surface Preparation', description: 'We clean and prepare the concrete for a strong, lasting bond.' },
        { title: 'Repairs & Leveling', description: 'We fix any cracks or uneven areas for a smooth finish.' },
        { title: 'Epoxy Application', description: 'We apply the epoxy system in layers for maximum durability and style.' },
        { title: 'Final Walkthrough', description: 'We inspect the finished floor with you to ensure your satisfaction.' },
      ]}
      costInfo="Commercial epoxy flooring is a smart investment for any business. Pricing depends on the size of your space, the condition of your floor, and your chosen finish."
      costList={[
        'Free site assessment and quote',
        'No hidden costs',
        'Flexible scheduling',
        'Professional, fast installation',
      ]}
      faqs={[
        { question: 'Is epoxy flooring good for retail and office spaces?', answer: 'Absolutely! Epoxy is durable, attractive, and easy to clean—perfect for commercial environments.' },
        { question: 'How long does installation take?', answer: 'Most projects are completed in 2-4 days, depending on size and prep work needed.' },
        { question: 'Can you match our company colors?', answer: 'Yes, we offer a wide range of colors and finishes to match your brand.' },
        { question: 'How do I maintain my epoxy floor?', answer: 'Just sweep and mop regularly. Epoxy is very low maintenance.' },
        { question: 'Is there a warranty?', answer: 'Yes, all our installations come with a warranty for peace of mind.' },
      ]}
    />
  );
}