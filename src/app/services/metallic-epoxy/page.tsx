import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function MetallicEpoxyPage() {
  return (
    <ServicePageTemplate
      title="Metallic Epoxy"
      subtitle="Stunning, unique floors with metallic epoxy finishes."
      heroImage="/images/metallic_service.jpeg"
      intro="Our metallic epoxy flooring creates a one-of-a-kind look for homes and businesses. Choose from a range of colors and effects for a floor that truly stands out."
      highlights={[
        'Unique, eye-catching designs',
        'Durable and easy to clean',
        'Custom colors and effects',
        'Perfect for homes and businesses',
      ]}
      whyChooseUs={[
        { icon: '🎨', title: 'Custom Designs', description: 'We create unique floors tailored to your style.' },
        { icon: '✨', title: 'Stunning Effects', description: 'Metallic epoxy offers a high-end, luxurious look.' },
        { icon: '🧼', title: 'Easy to Clean', description: 'Epoxy is seamless and resists stains.' },
        { icon: '🏠', title: 'Versatile', description: 'Perfect for homes, offices, showrooms, and more.' },
        { icon: '💲', title: 'Great Value', description: "Get a luxury look at a competitive price." },
        { icon: '⭐', title: 'Trusted Service', description: "We're known for our reliability and happy clients." },
      ]}
      processSteps={[
        { title: 'Consultation', description: 'We discuss your vision and help you choose colors and effects.' },
        { title: 'Surface Prep', description: 'We clean and prepare your floor for a strong, lasting bond.' },
        { title: 'Repairs', description: 'We fix any cracks or damage for a smooth surface.' },
        { title: 'Epoxy Application', description: 'We apply the metallic epoxy in layers for a stunning finish.' },
        { title: 'Final Inspection', description: 'We check the finished floor to ensure it meets your expectations.' },
      ]}
      costInfo="Metallic epoxy is affordable compared to other luxury flooring. Pricing depends on the size of your space and your chosen effects."
      costList={[
        'Free consultation and quote',
        'No hidden fees',
        'Flexible options for every budget',
        'Fast, professional installation',
      ]}
      faqs={[
        { question: 'Is metallic epoxy durable?', answer: 'Yes! Metallic epoxy is as tough as it is beautiful.' },
        { question: 'How long does installation take?', answer: 'Most projects are completed in 2-3 days.' },
        { question: 'Can I choose my own colors and effects?', answer: 'Absolutely! We offer a wide range of custom options.' },
        { question: 'How do I clean my metallic epoxy floor?', answer: 'Just sweep and mop regularly. Epoxy is very easy to maintain.' },
        { question: 'Is there a warranty?', answer: 'Yes, all our installations come with a warranty.' },
      ]}
    />
  );
}