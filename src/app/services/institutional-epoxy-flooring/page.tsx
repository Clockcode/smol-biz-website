import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function InstitutionalEpoxyFlooringPage() {
  return (
    <ServicePageTemplate
      title="Institutional Epoxy Flooring"
      subtitle="Durable, low-maintenance flooring for schools, hospitals, and public buildings."
      heroImage="/images/institutional_service.jpg"
      intro="Our institutional epoxy flooring is designed for high-traffic public spaces. It's safe, easy to clean, and built to last in schools, hospitals, and more."
      highlights={[
        'Safe and slip-resistant',
        'Easy to clean and maintain',
        'Long-lasting and durable',
        'Custom colors and finishes',
      ]}
      whyChooseUs={[
        { icon: '🏫', title: 'Institutional Experts', description: 'We understand the needs of schools, hospitals, and public spaces.' },
        { icon: '🧼', title: 'Easy to Clean', description: 'Epoxy floors are seamless and resist stains, making cleaning a breeze.' },
        { icon: '🎨', title: 'Custom Styles', description: 'Choose from a variety of colors and finishes to match your facility.' },
        { icon: '🦶', title: 'Safe & Slip-Resistant', description: 'Our floors are designed for safety and comfort.' },
        { icon: '💲', title: 'Affordable Quality', description: 'Get premium flooring at a price that fits your budget.' },
        { icon: '⭐', title: 'Trusted Service', description: "We're known for our reliability, quality, and happy clients." },
      ]}
      processSteps={[
        { title: 'Consultation', description: 'We discuss your needs and help you choose the best style and finish.' },
        { title: 'Surface Prep', description: 'We clean and prepare your floor for a strong, lasting bond.' },
        { title: 'Repairs', description: 'We fix any cracks or damage for a smooth surface.' },
        { title: 'Epoxy Application', description: 'We apply the epoxy in layers for a flawless, durable finish.' },
        { title: 'Final Inspection', description: 'We check the finished floor to ensure it meets our high standards.' },
      ]}
      costInfo="Epoxy flooring for institutions is affordable and long-lasting. Pricing depends on the size of your space and your chosen finish."
      costList={[
        'Free consultation and quote',
        'No hidden fees',
        'Flexible options for every budget',
        'Fast, professional installation',
      ]}
      faqs={[
        { question: 'Is epoxy flooring good for schools and hospitals?', answer: 'Yes! Epoxy is perfect for high-traffic public spaces.' },
        { question: 'How long does installation take?', answer: 'Most projects are completed in 2-4 days.' },
        { question: 'Can you install epoxy in hallways and classrooms?', answer: 'Absolutely! Epoxy is perfect for all areas of your facility.' },
        { question: 'How do I clean my epoxy floor?', answer: 'Just sweep and mop regularly. Epoxy is very easy to maintain.' },
        { question: 'Is there a warranty?', answer: 'Yes, all our installations come with a warranty for your peace of mind.' },
      ]}
    />
  );
}