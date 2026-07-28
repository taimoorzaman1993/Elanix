import type { Metadata } from "next"
import TestimonialsClientPage from "./TestimonialsClientPage"

export const metadata: Metadata = {
  title: "Client Testimonials - Healthcare Provider Success Stories",
  description:
    "Read success stories from 500+ healthcare providers who trust Elanix Enterprise. See how our medical billing services increased revenue by 35% and improved practice efficiency.",
  keywords: [
    "medical billing testimonials",
    "healthcare provider reviews",
    "medical billing success stories",
    "credentialing service reviews",
    "healthcare solutions testimonials",
    "practice management reviews",
  ],
  openGraph: {
    title: "Client Testimonials - Healthcare Provider Success Stories",
    description:
      "Success stories from 500+ healthcare providers. See how our services increased revenue by 35% and improved practice efficiency.",
    url: "/testimonials",
    images: [
      {
        url: "/images/testimonials-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Healthcare Provider Testimonials for Elanix Enterprise",
      },
    ],
  },
  twitter: {
    title: "Client Testimonials - Healthcare Provider Success Stories",
    description: "Success stories from 500+ healthcare providers. See real results from our healthcare solutions.",
  },
  alternates: {
    canonical: "/testimonials",
  },
}

export default function TestimonialsPage() {
  return <TestimonialsClientPage />
}
