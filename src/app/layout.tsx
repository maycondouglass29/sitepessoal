import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import {
  generateLocalBusinessSchema,
  generatePersonSchema,
  generateFAQSchema,
  generateWebsiteSchema,
} from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${BUSINESS.name} — ${BUSINESS.title} | Freelancer`,
  description: BUSINESS.description,
  keywords: [
    "desenvolvedor de software",
    "freelancer",
    "react",
    "next.js",
    "node.js",
    "desenvolvimento web",
    "desenvolvimento mobile",
    "São Paulo",
    BUSINESS.name,
  ],
  authors: [{ name: BUSINESS.name, url: BUSINESS.url }],
  creator: BUSINESS.name,
  metadataBase: new URL(BUSINESS.url),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: BUSINESS.url,
    title: `${BUSINESS.name} — ${BUSINESS.title}`,
    description: BUSINESS.description,
    siteName: BUSINESS.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS.name} — ${BUSINESS.title}`,
    description: BUSINESS.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BUSINESS.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemas = [
    generateLocalBusinessSchema(),
    generatePersonSchema(),
    generateFAQSchema(),
    generateWebsiteSchema(),
  ];

  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <meta name="theme-color" content="#0A0A0A" />
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="antialiased">
        {children}
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
