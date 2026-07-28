import type { Metadata } from "next"
import SpecialtiesPageClient from "./SpecialtiesPageClient"

export const metadata: Metadata = {
  title: "Our Specialties - Healthcare Technology, AI & Business Solutions",
  description:
    "Explore our specialized expertise in healthcare technology, AI automation, web development, and business process optimization. Cutting-edge solutions for modern businesses.",
  keywords: [
    "healthcare technology specialties",
    "AI automation services",
    "web development expertise",
    "business process automation",
    "medical billing technology",
    "healthcare IT solutions",
    "artificial intelligence services",
    "custom software development",
  ],
  openGraph: {
    title: "Our Specialties - Healthcare Technology, AI & Business Solutions",
    description:
      "Specialized expertise in healthcare technology, AI automation, web development, and business solutions with cutting-edge technologies.",
    url: "/specialties",
    images: [
      {
        url: "/images/specialties-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Technology Specialties Overview",
      },
    ],
  },
  twitter: {
    title: "Our Specialties - Healthcare Technology & AI Solutions",
    description: "Specialized expertise in healthcare technology, AI automation, and business solutions.",
  },
  alternates: {
    canonical: "/specialties",
  },
}

export default function SpecialtiesPage() {
  return <SpecialtiesPageClient />
}
