import type { Metadata } from "next"
import PrivacyPolicyClientPage from "./PrivacyPolicyClientPage"

export const metadata: Metadata = {
  title: "Privacy Policy - HIPAA Compliant Healthcare Data Protection",
  description:
    "Elanix Enterprise privacy policy detailing how we protect your healthcare data. HIPAA compliant practices, secure data handling, and transparent privacy protection.",
  keywords: [
    "healthcare privacy policy",
    "HIPAA compliance",
    "medical data protection",
    "healthcare data security",
    "patient information privacy",
    "medical billing privacy",
  ],
  openGraph: {
    title: "Privacy Policy - HIPAA Compliant Healthcare Data Protection",
    description:
      "Our commitment to protecting your healthcare data with HIPAA compliant practices and secure data handling.",
    url: "/privacy-policy",
    images: [
      {
        url: "/images/privacy-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Healthcare Data Privacy and Security",
      },
    ],
  },
  twitter: {
    title: "Privacy Policy - HIPAA Compliant Data Protection",
    description: "Our commitment to protecting your healthcare data with HIPAA compliant practices.",
  },
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClientPage />
}
