import type { Metadata } from "next"
import StateLicencingClientPage from "./StateLicencingClientPage"

export const metadata: Metadata = {
  title: "State Licensing Services - Multi-State Healthcare Provider Licensing",
  description:
    "Professional state licensing services for healthcare providers. Multi-state coordination, license applications, renewals, and compliance. Fast-track processing available.",
  keywords: [
    "healthcare state licensing",
    "medical license applications",
    "multi-state licensing",
    "provider licensing services",
    "medical license renewal",
    "healthcare compliance",
    "state medical board applications",
  ],
  openGraph: {
    title: "State Licensing Services - Multi-State Healthcare Provider Licensing",
    description:
      "Professional state licensing with multi-state coordination. Fast-track processing and compliance support.",
    url: "/services/state-licencing",
    images: [
      {
        url: "/images/licensing-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Healthcare State Licensing Services",
      },
    ],
  },
  twitter: {
    title: "State Licensing Services - Multi-State Provider Licensing",
    description: "Professional state licensing with multi-state coordination and fast-track processing.",
  },
  alternates: {
    canonical: "/services/state-licencing",
  },
}

export default function StateLicencingPage() {
  return <StateLicencingClientPage />
}
