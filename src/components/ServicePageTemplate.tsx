import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import FaqAccordion, { FaqItem } from '@/components/FaqAccordion';

export interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  heroImage: string;
  intro: string;
  highlights?: string[];
  whyChooseUs: Array<{ icon: React.ReactNode; title: string; description: string }>;
  processSteps: Array<{ title: string; description: string }>;
  costInfo: string;
  costList?: string[];
  faqs: FaqItem[];
}

export default function ServicePageTemplate({
  title,
  subtitle,
  heroImage,
  intro,
  highlights,
  whyChooseUs,
  processSteps,
  costInfo,
  costList,
  faqs,
}: ServicePageTemplateProps) {
  return (
    <main>
      {/* Header/Hero Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">{title}</h1>
            <p className="text-xl text-gray-700 mb-6">{subtitle}</p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Request a Quote
            </Link>
          </div>
          {heroImage && (
            <div className="flex-1">
              <Image src={heroImage} alt={title} width={500} height={300} className="rounded-lg shadow" />
            </div>
          )}
        </div>
      </section>

      {/* Intro/Overview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-6 text-lg text-gray-700">{intro}</div>
          {highlights && (
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              {highlights.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-blue-900 mb-8">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
                <div className="mb-4 text-blue-600 text-3xl">{reason.icon}</div>
                <h3 className="font-bold text-lg mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process/Steps */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-blue-900 mb-8">Our Process</h2>
          <ol className="space-y-6">
            {processSteps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">{idx + 1}</span>
                <div>
                  <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Service Costs */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Epoxy Flooring Costs</h2>
          <div className="mb-4 text-gray-700">{costInfo}</div>
          {costList && (
            <ul className="list-disc pl-6 text-gray-700">
              {costList.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-gray-400 text-lg font-medium mb-2">FAQ</div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">Questions about {title}</h2>
          </div>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-blue-600 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Contact us today for a free quote!</h3>
        <a href="tel:+1-416-901-0000" className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition-colors">
          Call us at 416-901-0000
        </a>
        <Link href="/contact" className="ml-4 inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition-colors">
          Request a Quote
        </Link>
      </section>

      <Footer />
    </main>
  );
}