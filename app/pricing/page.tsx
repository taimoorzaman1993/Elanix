import type { Metadata } from "next"
import PricingClientPage from "./PricingClientPage"

export const metadata: Metadata = {
  title: "Elanix  Pricing - Transparent Bussinesses Service Rates",
  description:
    "Transparent pricing for medical billing services starting at 2.49%. No hidden fees, no long-term contracts. Compare our healthcare billing plans and get a custom quote.",
  keywords: [
    "medical billing pricing",
    "healthcare billing rates",
    "medical billing cost",
    "credentialing service pricing",
    "virtual assistant healthcare cost",
    "transparent medical billing fees",
  ],
  openGraph: {
    title: "Medical Billing Pricing - Transparent Bussiness Service Rates",
    description:
      "Transparent pricing starting at 2.49%. No hidden fees, no contracts. Compare plans and get a custom quote for your practice.",
    url: "/pricing",
    images: [
      {
        url: "/web.png",
        width: 1200,
        height: 630,
        alt: "Medical Billing Pricing Plans",
      },
    ],
  },
  twitter: {
    title: "Elanix  Pricing - Transparent Healthcare Service Rates",
    description: "Transparent pricing starting at 2.49%. No hidden fees, no contracts. Get a custom quote today.",
  },
  alternates: {
    canonical: "/pricing",
  },
}

export default function PricingPage() {
  return <PricingClientPage />
}
