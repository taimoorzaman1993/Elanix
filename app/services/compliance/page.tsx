import type { Metadata } from "next"
import ComplianceClientPage from "./ComplianceClientPage"

export const metadata: Metadata = {
  title: "Healthcare Compliance Services - HIPAA & Regulatory Compliance | Elanix Enterprise",
  description:
    "Stay compliant with healthcare regulations through our comprehensive compliance services. HIPAA compliance, regulatory updates, and risk management solutions.",
  keywords: [
    "healthcare compliance",
    "HIPAA compliance",
    "medical compliance",
    "regulatory compliance",
    "healthcare regulations",
    "compliance management",
    "risk management",
    "healthcare audit",
    "compliance consulting",
    "medical practice compliance",
  ],
  openGraph: {
    title: "Healthcare Compliance Services - HIPAA & Regulatory Compliance | Elanix Enterprise",
    description:
      "Stay compliant with healthcare regulations through our comprehensive compliance services. HIPAA compliance and regulatory updates.",
    type: "website",
    url: "https://elanixenterprise.com/services/compliance",
    images: [
      {
        url: "/images/compliance-og.jpg",
        width: 1200,
        height: 630,
        alt: "Healthcare Compliance Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare Compliance Services - HIPAA & Regulatory Compliance | Elanix Enterprise",
    description: "Stay compliant with healthcare regulations through our comprehensive compliance services.",
    images: ["/images/compliance-twitter.jpg"],
  },
}

export default function CompliancePage() {
  return <ComplianceClientPage />
}
