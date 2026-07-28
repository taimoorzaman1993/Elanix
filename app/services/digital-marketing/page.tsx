import type { Metadata } from "next"
import DigitalMarketingClientPage from "./DigitalMarketingClientPage"

export const metadata: Metadata = {
  title: "Healthcare Digital Marketing - 150% ROI & Patient Acquisition",
  description:
    "Comprehensive digital marketing for healthcare practices. SEO, PPC, social media, content marketing. 150% average ROI with compliant healthcare marketing strategies.",
  keywords: [
    "healthcare digital marketing",
    "medical practice marketing",
    "healthcare SEO services",
    "medical PPC advertising",
    "healthcare social media",
    "patient acquisition marketing",
    "medical content marketing",
  ],
  openGraph: {
    title: "Healthcare Digital Marketing - 150% ROI & Patient Acquisition",
    description: "Comprehensive digital marketing for healthcare. SEO, PPC, social media with 150% average ROI.",
    url: "/services/digital-marketing",
    images: [
      {
        url: "/images/digital-marketing-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Healthcare Digital Marketing Services",
      },
    ],
  },
  twitter: {
    title: "Healthcare Digital Marketing - 150% ROI",
    description: "Comprehensive digital marketing for healthcare with 150% average ROI and patient acquisition.",
  },
  alternates: {
    canonical: "/services/digital-marketing",
  },
}

export default function DigitalMarketingPage() {
  return <DigitalMarketingClientPage />
}
