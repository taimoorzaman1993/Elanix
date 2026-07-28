import type { Metadata } from "next"
import PracticeSolutionsClientPage from "./PracticeSolutionsClientPage"

export const metadata: Metadata = {
  title: "Practice Management Solutions - Comprehensive Healthcare Practice Optimization | Elanix Enterprise",
  description:
    "Optimize your healthcare practice operations with our comprehensive management solutions. Improve efficiency, streamline workflows, and enhance patient care delivery.",
  keywords: [
    "practice management",
    "healthcare practice solutions",
    "practice optimization",
    "workflow management",
    "operational efficiency",
    "practice consulting",
    "healthcare operations",
    "practice improvement",
    "medical practice management",
    "healthcare workflow optimization",
  ],
  openGraph: {
    title: "Practice Management Solutions - Comprehensive Healthcare Practice Optimization | Elanix Enterprise",
    description:
      "Optimize your healthcare practice operations with our comprehensive management solutions. Improve efficiency and streamline workflows.",
    type: "website",
    url: "https://elanixenterprise.com/services/practice-solutions",
    images: [
      {
        url: "/images/practice-solutions-og.jpg",
        width: 1200,
        height: 630,
        alt: "Practice Management Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Practice Management Solutions - Comprehensive Healthcare Practice Optimization | Elanix Enterprise",
    description: "Optimize your healthcare practice operations with comprehensive management solutions.",
    images: ["/images/practice-solutions-twitter.jpg"],
  },
}

export default function PracticeSolutionsPage() {
  return <PracticeSolutionsClientPage />
}
