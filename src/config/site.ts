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
      title: "Residential Epoxy Flooring",
      description: "Transform your garage, basement, or living space with durable and attractive epoxy flooring solutions.",
      image: "/images/residential-epoxy.jpg",
    },
    {
      title: "Commercial Epoxy Flooring",
      description: "High-performance epoxy flooring for warehouses, retail spaces, and industrial facilities.",
      image: "/images/commercial-epoxy.jpg",
    },
    {
      title: "Decorative Epoxy Systems",
      description: "Custom designs, metallic finishes, and unique patterns to match your aesthetic preferences.",
      image: "/images/decorative-epoxy.jpg",
    },
  ],
  benefits: [
    {
      title: "20+ Years Experience",
      description: "Trusted by homeowners and businesses across Toronto for over two decades.",
      icon: "🏗️",
    },
    {
      title: "Premium Materials",
      description: "We use only the highest quality epoxy products and materials for lasting results.",
      icon: "✨",
    },
    {
      title: "Expert Installation",
      description: "Our certified technicians ensure flawless application and proper curing.",
      icon: "🏗️",
    },
    {
      title: "5-Year Warranty",
      description: "Peace of mind with our comprehensive warranty on materials and workmanship.",
      icon: "✅",
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