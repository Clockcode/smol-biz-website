import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function GarageFloorEpoxyPage() {
  return (
    <ServicePageTemplate
      title="Garage Floor Epoxy"
      subtitle="Protect and beautify your garage with tough, easy-to-clean epoxy flooring."
      heroImage="/images/garage_flooring.jpeg"
      intro="Transform your garage with our premium epoxy flooring. Our floors are tough, attractive, and make cleaning up oil, dirt, and spills a breeze."
      highlights={[
        'Resistant to oil, chemicals, and stains',
        'Slip-resistant and safe',
        'Easy to clean and maintain',
        'Custom colors and finishes',
      ]}
      whyChooseUs={[
        { icon: '🚗', title: 'Garage Specialists', description: 'We know garages and deliver floors that stand up to cars, tools, and more.' },
        { icon: '🧼', title: 'Easy to Clean', description: 'Epoxy makes cleaning up oil and dirt simple.' },
        { icon: '🦶', title: 'Slip-Resistant', description: 'Our floors are designed for safety, even when wet.' },
        { icon: '🎨', title: 'Custom Styles', description: 'Choose from a variety of colors and finishes.' },
        { icon: '💲', title: 'Affordable Quality', description: "Get a great garage floor at a price you'll love." },
        { icon: '⭐', title: 'Trusted Service', description: "We're known for our reliability and happy customers." },
      ]}
      processSteps={[
        { title: 'Consultation', description: 'We discuss your needs and help you choose the best style and finish.' },
        { title: 'Surface Prep', description: 'We clean and prepare your garage floor for a strong, lasting bond.' },
        { title: 'Repairs', description: 'We fix any cracks or damage for a smooth surface.' },
        { title: 'Epoxy Application', description: 'We apply the epoxy in layers for a flawless, durable finish.' },
        { title: 'Final Inspection', description: 'We check the finished floor to ensure it meets our high standards.' },
      ]}
      costInfo="Garage floor epoxy is affordable and long-lasting. Pricing depends on the size of your garage and your chosen finish."
      costList={[
        'Free consultation and quote',
        'No hidden fees',
        'Flexible options for every budget',
        'Fast, professional installation',
      ]}
      faqs={[
        { question: 'Is epoxy flooring good for garages?', answer: 'Yes! Epoxy is perfect for garages and stands up to cars, tools, and spills.' },
        { question: 'How long does installation take?', answer: 'Most garage projects are completed in 1-2 days.' },
        { question: 'Can you install epoxy over old concrete?', answer: 'Yes, we can install epoxy over most existing concrete after proper prep.' },
        { question: 'How do I clean my garage floor?', answer: 'Just sweep and mop regularly. Epoxy is very easy to maintain.' },
        { question: 'Is there a warranty?', answer: 'Yes, all our installations come with a warranty.' },
      ]}
    />
  );
}