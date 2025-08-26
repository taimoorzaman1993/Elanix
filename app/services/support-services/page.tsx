import type { Metadata } from "next"
import SupportServicesClientPage from "./SupportServicesClientPage"

export const metadata: Metadata = {
  title: "24/7 Healthcare Support Services - Dedicated Customer Support | Elanix Enterprise",
  description:
    "Get round-the-clock support for your healthcare practice. Our dedicated support team is available 24/7 to assist with any questions or technical issues.",
  keywords: [
    "healthcare support",
    "24/7 support",
    "customer support",
    "technical support",
    "practice support",
    "help desk",
    "customer service",
    "support services",
    "healthcare assistance",
    "dedicated support",
  ],
  openGraph: {
    title: "24/7 Healthcare Support Services - Dedicated Customer Support | Elanix Enterprise",
    description:
      "Get round-the-clock support for your healthcare practice. Our dedicated support team is available 24/7 to assist with any questions.",
    type: "website",
    url: "https://elanixenterprise.com/services/support-services",
    images: [
      {
        url: "/images/support-services-og.jpg",
        width: 1200,
        height: 630,
        alt: "24/7 Healthcare Support Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Healthcare Support Services - Dedicated Customer Support | Elanix Enterprise",
    description: "Get round-the-clock support for your healthcare practice with our dedicated support team.",
    images: ["/images/support-services-twitter.jpg"],
  },
}

export default function SupportServicesPage() {
  return <SupportServicesClientPage />
}
