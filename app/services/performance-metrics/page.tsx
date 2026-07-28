import type { Metadata } from "next"
import PerformanceMetricsClientPage from "./PerformanceMetricsClientPage"

export const metadata: Metadata = {
  title: "Performance Metrics & Analytics - Healthcare Practice Insights | Elanix Enterprise",
  description:
    "Gain valuable insights into your practice's financial performance with our detailed analytics and reporting services. Track KPIs, monitor trends, and make data-driven decisions.",
  keywords: [
    "performance metrics",
    "healthcare analytics",
    "practice analytics",
    "financial reporting",
    "KPI tracking",
    "practice insights",
    "data analytics",
    "performance reporting",
    "business intelligence",
    "healthcare metrics",
  ],
  openGraph: {
    title: "Performance Metrics & Analytics - Healthcare Practice Insights | Elanix Enterprise",
    description:
      "Gain valuable insights into your practice's financial performance with our detailed analytics and reporting services.",
    type: "website",
    url: "https://elanixenterprise.com/services/performance-metrics",
    images: [
      {
        url: "/images/performance-metrics-og.jpg",
        width: 1200,
        height: 630,
        alt: "Performance Metrics & Analytics Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Metrics & Analytics - Healthcare Practice Insights | Elanix Enterprise",
    description:
      "Gain valuable insights into your practice's financial performance with detailed analytics and reporting.",
    images: ["/images/performance-metrics-twitter.jpg"],
  },
}

export default function PerformanceMetricsPage() {
  return <PerformanceMetricsClientPage />
}
