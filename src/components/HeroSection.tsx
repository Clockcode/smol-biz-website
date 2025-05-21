import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src="/images/epoxy_header.jpeg"
          alt="Premium epoxy flooring in Toronto"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/23" />
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          {siteConfig.business.tagline}
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors w-full sm:w-auto"
          >
            Get Free Estimate
          </Link>
          <a
            href={`tel:${siteConfig.links.phone}`}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {siteConfig.contact.phone}
          </a>
        </div>
        <h3 className="text-2xl md:text-3xl text-white font-medium mt-16 px-8">
            Ready to Transform Your Concrete Floors into Breathtaking Works of Art?
          </h3>
      </div>
    </section>
  );
}