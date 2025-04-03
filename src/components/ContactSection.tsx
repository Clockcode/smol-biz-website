'use client';

import { siteConfig } from '@/config/site';
import { FormEvent } from 'react';

export default function ContactSection() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      details: formData.get('details'),
    };

    // For now, just log the data
    console.log('Form submitted:', data);
    alert('Thank you for your inquiry! We will contact you soon.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <p>
                  <strong>Address:</strong> {siteConfig.contact.address}
                </p>
                <p>
                  <strong>Phone:</strong>{' '}
                  <a
                    href={`tel:${siteConfig.links.phone}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </p>
                <p>
                  <strong>Email:</strong>{' '}
                  <a
                    href={`mailto:${siteConfig.links.email}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {siteConfig.contact.email}
                  </a>
                </p>
                <div className="space-y-2">
                  <strong>Business Hours:</strong> {Object.entries(siteConfig.business.hours).map(([day, hours]) => (
                    <div key={day}>
                      <span className="font-semibold">{day}:</span> {hours}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Request a Quote</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}