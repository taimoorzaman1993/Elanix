import type { Metadata } from "next"
import VirtualAssistanceClientPage from "./VirtualAssistanceClientPage"

export const metadata: Metadata = {
  title: "Healthcare Virtual Assistant Services - 50% Cost Savings & 24/7 Support",
  description:
    "Professional virtual assistant services for healthcare practices. Administrative support, patient communication, appointment scheduling. 50% cost savings with 24/7 availability.",
  keywords: [
    "healthcare virtual assistant",
    "medical virtual assistant",
    "healthcare administrative support",
    "patient communication services",
    "medical appointment scheduling",
    "healthcare data entry",
    "virtual healthcare support",
  ],
  openGraph: {
    title: "Healthcare Virtual Assistant Services - 50% Cost Savings & 24/7 Support",
    description:
      "Professional virtual assistants for healthcare. Administrative support, patient communication, 50% cost savings.",
    url: "/services/virtual-assistance",
    images: [
      {
        url: "/images/virtual-assistant-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Healthcare Virtual Assistant Services",
      },
    ],
  },
  twitter: {
    title: "Healthcare Virtual Assistant Services - 50% Cost Savings",
    description: "Professional virtual assistants for healthcare with 24/7 support and 50% cost savings.",
  },
  alternates: {
    canonical: "/services/virtual-assistance",
  },
}

export default function VirtualAssistancePage() {
  return <VirtualAssistanceClientPage />
}
