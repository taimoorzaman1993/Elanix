import type { Metadata } from "next"
import HomePageClient from "./HomePageClient"

export const metadata: Metadata = {
  title: "Professional Healthcare Solutions & Medical Billing Services",
  description:
    "Elanix Enterprise provides comprehensive healthcare solutions including medical billing, credentialing, virtual assistance, web development, and digital marketing. Trusted by 500+ healthcare providers with 99.5% accuracy rate.",
  keywords: [
    "medical billing services",
    "healthcare credentialing",
    "virtual assistant healthcare",
    "medical practice revenue",
    "healthcare compliance",
    "medical coding accuracy",
    "practice management solutions",
    "healthcare revenue cycle management",
  ],
  openGraph: {
    title: "Professional Healthcare Solutions & Medical Billing Services",
    description:
      "Comprehensive healthcare solutions with 99.5% accuracy rate. Medical billing, credentialing, virtual assistance, and more for healthcare providers.",
    url: "/",
    images: [
      {
        url: "/images/home-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elanix Enterprise Healthcare Solutions Dashboard",
      },
    ],
  },
  twitter: {
    title: "Professional Healthcare Solutions & Medical Billing Services",
    description:
      "Comprehensive healthcare solutions with 99.5% accuracy rate. Medical billing, credentialing, virtual assistance, and more.",
  },
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  return <HomePageClient />
}
