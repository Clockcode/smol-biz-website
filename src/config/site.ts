export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    phone: string;
    email: string;
    address: string;
  };
  business: {
    name: string;
    tagline: string;
    description: string;
    hours: {
      [key: string]: string;
    };
    location: string;
  };
  contact: {
    phone: string;
    email: string;
    address: string;
    city: string;
    province: string;
    postalCode: string;
  };
  services: Array<{
    title: string;
    description: string;
    image: string;
  }>;
  benefits: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
};

export const siteConfig: SiteConfig = {
  name: "Toronto Epoxy Solutions",
  description: "Transform your space with premium epoxy flooring solutions in Toronto. Expert installation, residential & commercial services, free consultations. 20+ years of experience.",
  url: "https://torontoepoxy.com",
  ogImage: "/images/og-image.jpg",
  links: {
    phone: "+1416XXX-XXXX",
    email: "info@torontoepoxy.com",
    address: "Toronto, ON",
  },
  business: {
    name: "Toronto Epoxy Solutions",
    tagline: "Toronto's Premier Epoxy Flooring Solutions",
    description: "Professional epoxy flooring services for residential and commercial properties in the Greater Toronto Area.",
    hours: {
      "Monday - Friday": "8:00 AM - 6:00 PM",
      "Saturday": "9:00 AM - 4:00 PM",
      "Sunday": "Closed",
    },
    location: "Toronto, ON",
  },
  contact: {
    phone: "(416) XXX-XXXX",
    email: "info@torontoepoxy.com",
    address: "Toronto",
    city: "Toronto",
    province: "ON",
    postalCode: "M5V",
  },
  services: [
    {
      title: "Commercial Epoxy Flooring",
      description: "Durable, high-performance flooring solutions for retail spaces, offices, and commercial buildings. Perfect for high-traffic areas.",
      image: "/images/commercial_service.jpeg",
    },
    {
      title: "Residential Epoxy Flooring",
      description: "Transform your home with beautiful, long-lasting epoxy floors. Ideal for garages, basements, and living spaces.",
      image: "/images/residential_service.jpeg",
    },
    {
      title: "Industrial Epoxy Flooring",
      description: "Heavy-duty flooring solutions for warehouses, factories, and industrial facilities. Built to withstand extreme conditions.",
      image: "/images/industrial_service.jpeg",
    },
    {
      title: "Garage Floor Epoxy",
      description: "Protect and enhance your garage floor with our premium epoxy coatings. Resistant to oil, chemicals, and heavy loads.",
      image: "/images/garage_flooring.jpeg",
    },
    {
      title: "Concrete Polishing",
      description: "Professional concrete polishing services for a sleek, modern look. Perfect for both residential and commercial spaces.",
      image: "/images/concrete_polishing_service.jpeg",
    },
    {
      title: "Metallic Epoxy",
      description: "Create stunning, unique floors with our metallic epoxy systems. Perfect for adding a touch of luxury to any space.",
      image: "/images/metallic_service.jpeg",
    },
    {
      title: "Epoxy Concrete Repair",
      description: "Expert repair and restoration services for damaged concrete floors. We'll make your floors look new again.",
      image: "/images/basement_service.jpeg",
    },
    {
      title: "Hotel & Hospitality Epoxy Flooring",
      description: "Elegant and durable flooring solutions for hotels, resorts, and hospitality venues. Designed for high-end aesthetics.",
      image: "/images/hotel_service.jpg",
    },
    {
      title: "Restaurant & Kitchen Epoxy Flooring",
      description: "Food-safe, slip-resistant flooring for restaurants and commercial kitchens. Easy to clean and maintain.",
      image: "/images/restaurant_service.jpg",
    },
    {
      title: "Airports & Hangars Epoxy Flooring",
      description: "Heavy-duty, chemical-resistant flooring for aviation facilities. Built to handle aircraft traffic and maintenance.",
      image: "/images/airport_service.jpg",
    },
    {
      title: "Institutional Epoxy Flooring",
      description: "Durable, low-maintenance flooring for schools, hospitals, and government buildings. Perfect for public spaces.",
      image: "/images/institutional_service.jpg",
    },
  ],
  benefits: [
    {
      title: "Quality Results",
      description: "Our licensed experts deliver top-notch floors with years of experience and skill.",
      icon: "🛡️",
    },
    {
      title: "Top Rated Company",
      description: "We're one of the most trusted flooring companies, known for excellent service.",
      icon: "⭐",
    },
    {
      title: "Affordable Solutions",
      description: "Enjoy quality flooring at prices that fit your budget, with flexible options.",
      icon: "💲",
    },
    {
      title: "Fast Response",
      description: "Call us and our team will respond quickly to help with your flooring needs.",
      icon: "⚡",
    },
  ],
  seo: {
    title: "Toronto Epoxy Flooring Solutions | Professional Installation Services",
    description: "Transform your space with premium epoxy flooring solutions in Toronto. Expert installation, residential & commercial services, free consultations. 20+ years of experience.",
    keywords: [
      "epoxy flooring toronto",
      "epoxy garage floor",
      "commercial epoxy flooring",
      "residential epoxy",
      "toronto epoxy contractors",
    ],
  },
};