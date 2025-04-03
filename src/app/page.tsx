import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import BenefitsSection from '@/components/BenefitsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {

  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      {/* <ContactSection /> */}
      <Footer />
    </main>
  );
}
