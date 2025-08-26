import type { Metadata } from "next"
import AIAutomationClientPage from "./AIAutomationClientPage"

export const metadata: Metadata = {
  title: "AI Automation Services - Streamline Business Processes | Elanix Enterprise",
  description:
    "Streamline your business processes with cutting-edge AI automation solutions that increase efficiency and reduce costs. Expert AI implementation and consulting.",
  keywords: [
    "AI automation",
    "artificial intelligence",
    "business automation",
    "process automation",
    "machine learning",
    "AI consulting",
    "workflow automation",
    "intelligent automation",
    "AI solutions",
    "automation services",
    "digital transformation",
    "AI implementation",
  ],
  openGraph: {
    title: "AI Automation Services - Streamline Business Processes | Elanix Enterprise",
    description:
      "Streamline your business processes with cutting-edge AI automation solutions that increase efficiency and reduce costs.",
    type: "website",
    url: "https://elanixenterprise.com/services/ai-automation",
    images: [
      {
        url: "/web.png",
        width: 1200,
        height: 630,
        alt: "Elanix Enterprise AI Automation Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Services - Streamline Business Processes | Elanix Enterprise",
    description:
      "Streamline your business processes with cutting-edge AI automation solutions that increase efficiency and reduce costs.",
    images: ["https://x.com/Elanix_E/header_photo"],
  },
}

export default function AIAutomationPage() {
  return <AIAutomationClientPage />
}
