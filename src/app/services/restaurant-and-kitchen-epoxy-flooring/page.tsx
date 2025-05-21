import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function RestaurantEpoxyFlooringPage() {
  return (
    <ServicePageTemplate
      title="Restaurant & Kitchen Epoxy Flooring"
      subtitle="Hygienic, safe, and durable flooring for restaurants, kitchens, and food service areas."
      heroImage="/images/restaurant_service.jpg"
      intro="Our epoxy flooring solutions for restaurants and commercial kitchens are designed to meet the highest standards of safety, cleanliness, and durability. We help you create a safe, attractive, and easy-to-clean environment for your staff and customers."
      highlights={[
        'Slip-resistant and easy to clean',
        'Seamless, non-porous surface',
        'Resistant to stains, chemicals, and heavy traffic',
        'Meets health and safety standards',
      ]}
      whyChooseUs={[
        {
          icon: '👨‍🍳',
          title: 'Commercial Kitchen Experts',
          description: 'We specialize in restaurant and kitchen flooring, with years of experience in food service environments.'
        },
        {
          icon: '🦠',
          title: 'Hygienic & Safe',
          description: 'Our floors are seamless and non-porous, making them easy to sanitize and safe for food prep areas.'
        },
        {
          icon: '⚡',
          title: 'Minimal Disruption',
          description: 'We work efficiently to minimize downtime, so your kitchen can get back to business fast.'
        },
        {
          icon: '💡',
          title: 'Custom Solutions',
          description: 'We offer a range of colors and finishes to match your brand and needs.'
        },
        {
          icon: '💲',
          title: 'Competitive Pricing',
          description: 'Get top-quality flooring at a price that fits your budget.'
        },
        {
          icon: '⭐',
          title: 'Trusted Service',
          description: 'Our reputation is built on reliability, quality, and customer satisfaction.'
        },
      ]}
      processSteps={[
        {
          title: 'Kitchen Scheduling',
          description: 'We work with your team to plan the best time for installation, minimizing disruption to your business.'
        },
        {
          title: 'Concrete Prep & Grinding',
          description: 'We prepare the surface by grinding and cleaning to ensure a strong bond.'
        },
        {
          title: 'Crack & Joint Repair',
          description: 'We repair any cracks or joints to create a smooth, even surface.'
        },
        {
          title: 'Epoxy Application',
          description: 'We apply the epoxy system in multiple layers for maximum durability and safety.'
        },
        {
          title: 'Final Inspection',
          description: 'We inspect the finished floor to ensure it meets our high standards and your expectations.'
        },
      ]}
      costInfo="Epoxy flooring for restaurants and kitchens is cost-effective and long-lasting. Pricing depends on the size of your space, the condition of your existing floor, and your chosen finish."
      costList={[
        'Free on-site assessment and quote',
        'No hidden fees',
        'Flexible options for every budget',
        'Fast, professional installation',
      ]}
      faqs={[
        {
          question: 'Is epoxy flooring safe for kitchens?',
          answer: 'Yes! Our epoxy floors are slip-resistant, seamless, and easy to sanitize, making them ideal for kitchens and food prep areas.'
        },
        {
          question: 'How long does installation take?',
          answer: 'Most restaurant epoxy flooring projects are completed in 2-3 days, depending on the size and condition of your space.'
        },
        {
          question: 'Can you install epoxy over existing tile or concrete?',
          answer: 'Yes, we can install epoxy over most existing surfaces after proper preparation.'
        },
        {
          question: 'How do I clean and maintain my epoxy floor?',
          answer: 'Simply sweep and mop regularly. For tough stains, use a mild detergent and water.'
        },
        {
          question: 'Do you offer a warranty?',
          answer: 'Yes, all our epoxy flooring installations come with a warranty for your peace of mind.'
        },
      ]}
    />
  );
}