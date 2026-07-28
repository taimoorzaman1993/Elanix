import type { Metadata } from "next"
import CommunicationClientPage from "./CommunicationClientPage"

export const metadata: Metadata = {
  title: "Communication Hub - 24/7 Customer Support & Contact Methods",
  description:
    "Multiple ways to reach Elanix Enterprise: phone (512) 375-9999, email, live chat, and video consultations. 24/7 emergency support for healthcare providers.",
  keywords: [
    "healthcare support contact",
    "24/7 medical billing support",
    "healthcare communication",
    "medical billing customer service",
    "healthcare provider support",
    "emergency billing support",
  ],
  openGraph: {
    title: "Communication Hub - 24/7 Healthcare Support & Contact Methods",
    description:
      "Multiple contact methods including 24/7 emergency support. Phone, email, chat, and video consultations available.",
    url: "/communication",
    images: [
      {
        url: "/web.png",
        width: 1200,
        height: 630,
        alt: "Bussiness Communication and Support Options",
      },
    ],
  },
  twitter: {
    title: "Communication Hub - 24/7 Customer Support",
    description: "Multiple contact methods including 24/7 emergency support for healthcare providers.",
  },
  alternates: {
    canonical: "/communication",
  },
}

export default function CommunicationPage() {
  return <CommunicationClientPage />
}
