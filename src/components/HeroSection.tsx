import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-epoxy.jpg"
          alt="Premium epoxy flooring in Toronto"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          {siteConfig.business.tagline}
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Transform your space with durable, beautiful epoxy floors
        </p>
        <Link
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
        >
          Get Free Consultation
        </Link>
      </div>
    </section>
  );
}