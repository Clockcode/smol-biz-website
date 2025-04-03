# Business Website Template

A modern, responsive website template built with Next.js and TailwindCSS that can be easily customized for any business.

## Features

- Responsive design optimized for all devices
- SEO optimized with meta tags and structured data
- Modern UI with smooth animations
- Contact form for customer inquiries
- Configuration-based approach for easy customization
- Optimized images and performance

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/business-website-template.git
cd business-website-template
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customizing for Your Business

This template is designed to be easily customizable for any business. All business-specific information is stored in a configuration file.

### 1. Update the Site Configuration

Edit the `src/config/site.ts` file to update all business-specific information:

```typescript
export const siteConfig: SiteConfig = {
  name: "Your Business Name",
  description: "Your business description",
  url: "https://yourbusiness.com",
  ogImage: "/images/og-image.jpg",
  links: {
    phone: "+1XXX-XXX-XXXX",
    email: "info@yourbusiness.com",
    address: "Your City, State",
  },
  business: {
    name: "Your Business Name",
    tagline: "Your Business Tagline",
    description: "Your business description",
    hours: {
      "Monday - Friday": "9:00 AM - 5:00 PM",
      "Saturday": "10:00 AM - 2:00 PM",
      "Sunday": "Closed",
    },
    location: "Your City, State",
  },
  contact: {
    phone: "(XXX) XXX-XXXX",
    email: "info@yourbusiness.com",
    address: "Your Street Address",
    city: "Your City",
    province: "Your State/Province",
    postalCode: "Your Postal Code",
  },
  services: [
    {
      title: "Your Service 1",
      description: "Description of your service 1",
      image: "/images/service1.jpg",
    },
    // Add more services as needed
  ],
  benefits: [
    {
      title: "Your Benefit 1",
      description: "Description of your benefit 1",
    },
    // Add more benefits as needed
  ],
  seo: {
    title: "Your Business Name | Main Service",
    description: "Your SEO description",
    keywords: [
      "keyword1",
      "keyword2",
      // Add more keywords as needed
    ],
  },
};
```

### 2. Replace Images

Replace the images in the `public/images` directory with your own:

- `logo.svg` - Your business logo
- `hero-epoxy.jpg` - Hero section background image
- `residential-epoxy.jpg`, `commercial-epoxy.jpg`, `decorative-epoxy.jpg` - Service images
- `about-image.jpg` - About section image
- `og-image.jpg` - Open Graph image for social sharing

### 3. Customize Colors (Optional)

If you want to change the color scheme, edit the `tailwind.config.ts` file:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        // ... customize your color palette
      },
    },
  },
},
```

### 4. Deploy Your Website

Build your website for production:

```bash
npm run build
# or
yarn build
```

Then deploy to your preferred hosting platform.

## Project Structure

```
business-website-template/
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Root layout with metadata
│   │   ├── page.tsx      # Home page component
│   │   └── globals.css   # Global styles
│   ├── components/       # Reusable components
│   │   └── Header.tsx    # Header component
│   └── config/
│       └── site.ts       # Site configuration
├── public/
│   └── images/          # Static images
└── package.json         # Project dependencies
```

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [React](https://reactjs.org/) - UI library

## License

This project is licensed under the MIT License - see the LICENSE file for details
