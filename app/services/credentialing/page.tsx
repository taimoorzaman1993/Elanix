import type { Metadata } from "next"
import CredentialingClientPage from "./CredentialingClientPage"

export const metadata: Metadata = {
  title: "Healthcare Credentialing Services - 98% Success Rate in 45 Days",
  description:
    "Professional healthcare credentialing and provider enrollment services. 98% success rate with average 45-day completion. CAQH management, hospital privileging, and compliance.",
  keywords: [
    "healthcare credentialing services",
    "provider enrollment",
    "medical credentialing",
    "CAQH profile management",
    "hospital privileging",
    "insurance panel applications",
    "credentialing compliance",
    "provider licensing",
  ],
  openGraph: {
    title: "Healthcare Credentialing Services - 98% Success Rate in 45 Days",
    description:
      "Professional credentialing with 98% success rate. Provider enrollment, CAQH management, and hospital privileging.",
    url: "/services/credentialing",
    images: [
      {
        url: "/images/credentialing-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Healthcare Credentialing Services",
      },
    ],
  },
  twitter: {
    title: "Healthcare Credentialing Services - 98% Success Rate",
    description: "Professional credentialing with 98% success rate in 45 days average.",
  },
  alternates: {
    canonical: "/services/credentialing",
  },
}

export default function CredentialingPage() {
  return <CredentialingClientPage />
}
