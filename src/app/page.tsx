import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import BenefitsSection from '@/components/BenefitsSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <FaqSection />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Space?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today for a free consultation and quote.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
