import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "About Us - Leading Bussiness Solutions Provider Since 2010",
  description:
    "Learn about Elanix Enterprise, a leading healthcare solutions provider serving 500+ practices with 99.5% accuracy. Our mission, values, and expert team dedicated to healthcare excellence.",
  keywords: [
    "about elanix enterprise",
    "healthcare solutions company",
    "medical billing company history",
    "healthcare revenue management experts",
    "medical billing team",
    "healthcare compliance experts",
  ],
  openGraph: {
    title: "About Us - Leading Healthcare Solutions Provider Since 2010",
    description:
      "Leading healthcare solutions provider serving 500+ practices with 99.5% accuracy. Meet our expert team.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://elanixenterprise.com"}/about`,
    images: [
      {
        url: "/aboutus.jpg",
        width: 1200,
        height: 630,
        alt: "About Elanix Enterprise Healthcare Team",
      },
    ],
  },
  twitter: {
    title: "About Us - Leading Healthcare Solutions Provider",
    description: "Leading healthcare solutions provider serving 500+ practices with 99.5% accuracy.",
  },
  alternates: {
    canonical: "/about",
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
