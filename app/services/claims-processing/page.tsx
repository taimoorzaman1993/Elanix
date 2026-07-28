import type { Metadata } from "next"
import ClaimsProcessingClientPage from "./ClaimsProcessingClientPage"

export const metadata: Metadata = {
  title: "Claims Processing Services - Fast & Accurate Medical Claims | Elanix Enterprise",
  description:
    "Streamline your medical claims processing with our advanced services. Ensure fast, accurate claim submissions with higher acceptance rates and quicker reimbursements.",
  keywords: [
    "claims processing",
    "medical claims",
    "claim submission",
    "healthcare claims",
    "medical billing claims",
    "claim management",
    "insurance claims",
    "claim acceptance rates",
    "medical reimbursements",
    "claims processing services",
  ],
  openGraph: {
    title: "Claims Processing Services - Fast & Accurate Medical Claims | Elanix Enterprise",
    description:
      "Streamline your medical claims processing with our advanced services. Ensure fast, accurate claim submissions with higher acceptance rates.",
    type: "website",
    url: "https://elanixenterprise.com/services/claims-processing",
    images: [
      {
        url: "/images/claims-processing-og.jpg",
        width: 1200,
        height: 630,
        alt: "Claims Processing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claims Processing Services - Fast & Accurate Medical Claims | Elanix Enterprise",
    description:
      "Streamline your medical claims processing with our advanced services. Ensure fast, accurate claim submissions.",
    images: ["/images/claims-processing-twitter.jpg"],
  },
}

export default function ClaimsProcessingPage() {
  return <ClaimsProcessingClientPage />
}
