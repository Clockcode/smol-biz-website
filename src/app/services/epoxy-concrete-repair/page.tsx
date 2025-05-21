import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function EpoxyConcreteRepairPage() {
  return (
    <ServicePageTemplate
      title="Epoxy Concrete Repair"
      subtitle="Restore and protect your concrete with expert epoxy repair."
      heroImage="/images/basement_service.jpeg"
      intro="Our epoxy concrete repair service fixes cracks, chips, and damage in your concrete floors. We restore your surface to like-new condition and protect it for years to come."
      highlights={[
        'Repairs cracks, chips, and damage',
        'Prevents further deterioration',
        'Seamless, durable finish',
        'Fast, professional service',
      ]}
      whyChooseUs={[
        { icon: '🛠️', title: 'Repair Experts', description: 'We specialize in concrete repair and restoration.' },
        { icon: '🧱', title: 'Seamless Results', description: 'Our repairs blend in for a smooth, attractive finish.' },
        { icon: '⚡', title: 'Quick Service', description: 'We work efficiently to minimize downtime.' },
        { icon: '💪', title: 'Long-Lasting', description: 'Our repairs are built to last and protect your investment.' },
        { icon: '💲', title: 'Affordable', description: 'Get expert repairs at a price you can afford.' },
        { icon: '⭐', title: 'Trusted Service', description: "We're known for our reliability and happy customers." },
      ]}
      processSteps={[
        { title: 'Assessment', description: 'We inspect your floor and identify all areas needing repair.' },
        { title: 'Surface Prep', description: 'We clean and prep the damaged areas for repair.' },
        { title: 'Crack & Chip Repair', description: 'We fill and repair all cracks, chips, and holes.' },
        { title: 'Epoxy Application', description: 'We apply epoxy to restore and protect your floor.' },
        { title: 'Final Inspection', description: 'We check the finished repair to ensure quality.' },
      ]}
      costInfo="Epoxy concrete repair is affordable and extends the life of your floor. Pricing depends on the extent of damage and size of the area."
      costList={[
        'Free assessment and quote',
        'No hidden fees',
        'Fast, professional repairs',
        'Long-lasting results',
      ]}
      faqs={[
        { question: 'Can you repair large cracks and holes?', answer: 'Yes! We repair cracks, chips, and holes of all sizes.' },
        { question: 'How long does repair take?', answer: 'Most repairs are completed in 1 day.' },
        { question: 'Will the repair match my existing floor?', answer: 'Yes, we blend repairs for a seamless look.' },
        { question: 'How do I maintain my repaired floor?', answer: 'Just sweep and mop regularly. Epoxy is very easy to maintain.' },
        { question: 'Is there a warranty?', answer: 'Yes, all our repairs come with a warranty.' },
      ]}
    />
  );
}