import type { Metadata } from "next"
import RevenueOptimizationClientPage from "./RevenueOptimizationClientPage"

export const metadata: Metadata = {
  title: "Revenue Optimization Services - Maximize Practice Revenue | Elanix Enterprise",
  description:
    "Maximize your practice's revenue with our comprehensive revenue optimization services. Streamline billing cycles, improve cash flow, and increase profitability.",
  keywords: [
    "revenue optimization",
    "practice revenue",
    "billing cycle optimization",
    "cash flow improvement",
    "medical practice profitability",
    "revenue management",
    "financial optimization",
    "practice growth",
    "revenue enhancement",
    "billing efficiency",
  ],
  openGraph: {
    title: "Revenue Optimization Services - Maximize Practice Revenue | Elanix Enterprise",
    description:
      "Maximize your practice's revenue with our comprehensive revenue optimization services. Streamline billing cycles and improve cash flow.",
    type: "website",
    url: "https://elanixenterprise.com/services/revenue-optimization",
    images: [
      {
        url: "/images/revenue-optimization-og.jpg",
        width: 1200,
        height: 630,
        alt: "Revenue Optimization Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Revenue Optimization Services - Maximize Practice Revenue | Elanix Enterprise",
    description: "Maximize your practice's revenue with our comprehensive revenue optimization services.",
    images: ["/images/revenue-optimization-twitter.jpg"],
  },
}

export default function RevenueOptimizationPage() {
  return <RevenueOptimizationClientPage />
}
