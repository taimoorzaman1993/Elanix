import type { Metadata } from "next"
import ServicesPageClient from "./ServicesPageClient"

export const metadata: Metadata = {
  title: "Our Services - Comprehensive Healthcare Solutions | Elanix Enterprise",
  description:
    "Discover our complete range of healthcare services including medical billing, credentialing, state licensing, virtual assistance, web development, and digital marketing solutions.",
  keywords: [
    "healthcare services",
    "medical billing services",
    "credentialing services",
    "state licensing",
    "virtual assistance",
    "web development",
    "digital marketing",
    "claims processing",
    "revenue optimization",
    "compliance services",
    "practice management",
    "healthcare solutions",
  ],
  openGraph: {
    title: "Our Services - Comprehensive Healthcare Solutions | Elanix Enterprise",
    description:
      "End-to-end enterprise solutions designed for your success. Explore our complete range of healthcare services.",
    type: "website",
    url: "https://elanixenterprise.com/services",
    images: [
      {
        url: "/images/services-og.jpg",
        width: 1200,
        height: 630,
        alt: "Elanix Enterprise Services Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services - Comprehensive Healthcare Solutions | Elanix Enterprise",
    description:
      "End-to-end enterprise solutions designed for your success. Explore our complete range of healthcare services.",
    images: ["/images/services-twitter.jpg"],
  },
}

export default function ServicesPage() {
  return <ServicesPageClient />
}
