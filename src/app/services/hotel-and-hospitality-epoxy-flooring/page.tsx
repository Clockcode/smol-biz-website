import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function HotelAndHospitalityEpoxyFlooringPage() {
  return (
    <ServicePageTemplate
      title="Hotel & Hospitality Epoxy Flooring"
      subtitle="Elegant, durable, and easy-to-maintain flooring for hotels and hospitality venues."
      heroImage="/images/hotel_service.jpg"
      intro="Our epoxy flooring solutions for hotels and hospitality spaces combine style, durability, and easy maintenance. Create a welcoming, high-end look that stands up to heavy use."
      highlights={[
        'Elegant, seamless appearance',
        'Resistant to stains and spills',
        'Easy to clean and maintain',
        'Custom colors and finishes',
      ]}
      whyChooseUs={[
        { icon: '🏨', title: 'Hospitality Experts', description: 'We understand the needs of hotels and hospitality venues.' },
        { icon: '🧼', title: 'Easy to Clean', description: 'Epoxy floors are seamless and resist stains, making cleaning a breeze.' },
        { icon: '🎨', title: 'Custom Styles', description: 'Choose from a variety of colors and finishes to match your brand.' },
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
      costInfo="Epoxy flooring for hotels and hospitality venues is affordable and long-lasting. Pricing depends on the size of your space and your chosen finish."
      costList={[
        'Free consultation and quote',
        'No hidden fees',
        'Flexible options for every budget',
        'Fast, professional installation',
      ]}
      faqs={[
        { question: 'Is epoxy flooring good for hotels?', answer: 'Yes! Epoxy is perfect for hotels and hospitality spaces.' },
        { question: 'How long does installation take?', answer: 'Most projects are completed in 2-4 days.' },
        { question: 'Can you install epoxy in lobbies and hallways?', answer: 'Absolutely! Epoxy is perfect for high-traffic areas.' },
        { question: 'How do I clean my epoxy floor?', answer: 'Just sweep and mop regularly. Epoxy is very easy to maintain.' },
        { question: 'Is there a warranty?', answer: 'Yes, all our installations come with a warranty for your peace of mind.' },
      ]}
    />
  );
}