import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function ResidentialEpoxyFlooringPage() {
  return (
    <ServicePageTemplate
      title="Residential Epoxy Flooring"
      subtitle="Beautiful, durable, and easy-to-clean floors for your home."
      heroImage="/images/residential_service.jpeg"
      intro="Upgrade your home with our residential epoxy flooring. Perfect for garages, basements, and living spaces, our floors are stylish, strong, and simple to maintain."
      highlights={[
        'Seamless and modern look',
        'Resistant to stains and spills',
        'Safe and slip-resistant',
        'Easy to clean and maintain',
      ]}
      whyChooseUs={[
        { icon: '🏠', title: 'Home Experts', description: 'We know what homeowners need and deliver beautiful, lasting results.' },
        { icon: '🧼', title: 'Easy to Clean', description: 'Epoxy floors are seamless and resist stains, making cleaning a breeze.' },
        { icon: '🎨', title: 'Custom Styles', description: 'Choose from a variety of colors and finishes to match your home.' },
        { icon: '🦶', title: 'Safe & Slip-Resistant', description: 'Our floors are designed to be safe for families and pets.' },
        { icon: '💲', title: 'Affordable Quality', description: 'Get premium flooring at a price that fits your budget.' },
        { icon: '⭐', title: 'Trusted Service', description: "We're known for our reliability, quality, and happy customers." },
      ]}
      processSteps={[
        { title: 'Consultation', description: 'We discuss your needs and help you choose the best style and finish.' },
        { title: 'Surface Prep', description: 'We clean and prepare your floor for a strong, lasting bond.' },
        { title: 'Repairs', description: 'We fix any cracks or damage for a smooth surface.' },
        { title: 'Epoxy Application', description: 'We apply the epoxy in layers for a flawless, durable finish.' },
        { title: 'Final Inspection', description: 'We check the finished floor to ensure it meets our high standards.' },
      ]}
      costInfo="Residential epoxy flooring is affordable and long-lasting. Pricing depends on the size of your space and your chosen finish."
      costList={[
        'Free consultation and quote',
        'No hidden fees',
        'Flexible options for every budget',
        'Fast, professional installation',
      ]}
      faqs={[
        { question: 'Is epoxy flooring safe for homes?', answer: 'Yes! Epoxy is non-toxic, slip-resistant, and safe for families and pets.' },
        { question: 'How long does installation take?', answer: 'Most residential projects are completed in 1-3 days.' },
        { question: 'Can you install epoxy in basements and garages?', answer: 'Absolutely! Epoxy is perfect for basements, garages, and living spaces.' },
        { question: 'How do I clean my epoxy floor?', answer: 'Just sweep and mop regularly. Epoxy is very easy to maintain.' },
        { question: 'Is there a warranty?', answer: 'Yes, all our installations come with a warranty for your peace of mind.' },
      ]}
    />
  );
}