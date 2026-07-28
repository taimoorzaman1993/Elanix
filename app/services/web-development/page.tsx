import type { Metadata } from "next"
import WebDevelopmentClientPage from "./WebDevelopmentClientPage"

export const metadata: Metadata = {
  title: "Healthcare Web Development - HIPAA Compliant Medical Websites",
  description:
    "Custom healthcare website development with HIPAA compliance. Responsive design, patient portals, SEO optimization. 100+ websites built with 99% uptime guarantee.",
  keywords: [
    "healthcare web development",
    "medical website design",
    "HIPAA compliant websites",
    "patient portal development",
    "healthcare website SEO",
    "medical practice websites",
    "responsive healthcare design",
  ],
  openGraph: {
    title: "Healthcare Web Development - HIPAA Compliant Medical Websites",
    description:
      "Custom HIPAA compliant websites for healthcare. Responsive design, patient portals, SEO optimization.",
    url: "/services/web-development",
    images: [
      {
        url: "/images/web-development-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Healthcare Web Development Services",
      },
    ],
  },
  twitter: {
    title: "Healthcare Web Development - HIPAA Compliant Websites",
    description: "Custom HIPAA compliant websites with responsive design and patient portals.",
  },
  alternates: {
    canonical: "/services/web-development",
  },
}

export default function WebDevelopmentPage() {
  return <WebDevelopmentClientPage />
}
