import type { Metadata } from "next"
import MedicalBillingClientPage from "./MedicalBillingClientPage"

export const metadata: Metadata = {
  title: "Medical Billing Services - 99.5% Accuracy Rate & 30% Revenue Increase",
  description:
    "Professional medical billing services with 99.5% claim accuracy. Comprehensive revenue cycle management, denial management, and coding services. Trusted by 500+ healthcare providers.",
  keywords: [
    "medical billing services",
    "revenue cycle management",
    "medical coding services",
    "claim processing",
    "denial management",
    "healthcare billing accuracy",
    "medical billing company",
    "practice revenue optimization",
  ],
  openGraph: {
    title: "Medical Billing Services - 99.5% Accuracy Rate & 30% Revenue Increase",
    description:
      "Professional medical billing with 99.5% accuracy. Comprehensive revenue cycle management trusted by 500+ providers.",
    url: "/services/medical-billing",
    images: [
      {
        url: "/images/medical-billing-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Medical Billing Services Dashboard",
      },
    ],
  },
  twitter: {
    title: "Medical Billing Services - 99.5% Accuracy Rate",
    description: "Professional medical billing with 99.5% accuracy and 30% revenue increase.",
  },
  alternates: {
    canonical: "/services/medical-billing",
  },
}

export default function MedicalBillingPage() {
  return <MedicalBillingClientPage />
}
