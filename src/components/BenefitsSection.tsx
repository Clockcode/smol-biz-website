import { siteConfig } from '@/config/site';

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center transition-transform duration-300 hover:shadow-lg"
              style={{ boxShadow: '0 4px 24px 0 rgba(30, 136, 229, 0.07)' }}
            >
              <div className="mb-6">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50">
                  <span className="text-4xl text-blue-600">{benefit.icon}</span>
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-500 text-base leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}