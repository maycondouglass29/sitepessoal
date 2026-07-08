import { BUSINESS, FAQ_ITEMS } from "./constants";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BUSINESS.url}/#business`,
    name: `${BUSINESS.fullName} — ${BUSINESS.title}`,
    description: BUSINESS.description,
    url: BUSINESS.url,
    telephone: `+55${BUSINESS.phone.replace(/\D/g, "")}`,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      addressCountry: BUSINESS.address.country,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: BUSINESS.priceRange,
    sameAs: [
      BUSINESS.social.github,
      BUSINESS.social.linkedin,
      BUSINESS.social.instagram,
    ],
    image: `${BUSINESS.url}/og-image.png`,
    areaServed: {
      "@type": "Country",
      name: "Brazil",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Desenvolvimento Full Stack",
            description: "Criação de plataformas SaaS, aplicações web e mobile com React, Node.js e tecnologias modernas.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Marketing Digital",
            description: "Gestão de tráfego pago (Google Ads e Meta Ads), copywriting, SEO e automação de vendas.",
          },
        },
      ],
    },
  };
}

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: BUSINESS.fullName,
    jobTitle: BUSINESS.title,
    url: BUSINESS.url,
    email: BUSINESS.email,
    telephone: `+55${BUSINESS.phone.replace(/\D/g, "")}`,
    sameAs: [
      BUSINESS.social.github,
      BUSINESS.social.linkedin,
      BUSINESS.social.instagram,
    ],
    knowsAbout: [
      "React",
      "Node.js",
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "Google Ads",
      "Meta Ads",
      "SEO",
      "Copywriting",
      "SaaS Development",
      "Inteligência Artificial",
      "Stripe",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Helder System",
    },
  };
}

export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${BUSINESS.fullName} — ${BUSINESS.title}`,
    url: BUSINESS.url,
    description: BUSINESS.description,
    inLanguage: "pt-BR",
    author: {
      "@type": "Person",
      name: BUSINESS.fullName,
    },
  };
}
