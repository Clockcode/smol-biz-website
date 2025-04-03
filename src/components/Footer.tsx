import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{siteConfig.business.name}</h3>
            <p className="text-gray-400">{siteConfig.business.description}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p>{siteConfig.contact.address}</p>
              <p>
                <a
                  href={`tel:${siteConfig.links.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <div className="text-gray-400">{Object.entries(siteConfig.business.hours).map(([day, hours]) => (
              <div key={day}>
                <span className="font-semibold">{day}:</span> {hours}
              </div>
            ))}</div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} {siteConfig.business.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}