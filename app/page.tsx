import type { Metadata } from "next"
import HomePageClient from "./HomePageClient"

export const metadata: Metadata = {
  title: "Elanix Enterprise - Medical Billing & Bussiness Solutions",
  description:
    "Elanix Enterprise provides comprehensive bussiness solutions including medical billing, credentialing, virtual assistance, web development, and digital marketing. Trusted by 500+ bussinesses  with 99.5% accuracy rate.",
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
    title: "Elanix Enterprise - Medical Billing & Bussiness Solutions",
    description:
      "Comprehensive bussiness solutions with 99.5% accuracy rate. Medical billing, credentialing, virtual assistance, and more for bussinesses .",
    url: "/",
    images: [
      {
        url: "/images/home-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elanix Enterprise Bussiness Solutions Dashboard",
      },
    ],
  },
  twitter: {
    title: "Elanix Enterprise - Medical Billing & Bussiness Solutions",
    description:
      "Comprehensive bussiness solutions with 99.5% accuracy rate. Medical billing, credentialing, virtual assistance, and more.",
  },
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  return <HomePageClient />
}
