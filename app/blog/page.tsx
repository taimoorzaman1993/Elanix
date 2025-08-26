import type { Metadata } from "next"
import BlogClientPage from "./BlogClientPage"

export const metadata: Metadata = {
  title: "Healthcare Billing Blog - Medical Billing Tips & Insights",
  description:
    "Stay informed with the latest medical billing trends, coding updates, and healthcare revenue management insights. Expert tips from Elanix Enterprise billing professionals.",
  keywords: [
    "medical billing blog",
    "healthcare billing tips",
    "medical coding updates",
    "revenue cycle management",
    "healthcare compliance news",
    "medical billing best practices",
    "healthcare industry insights",
  ],
  openGraph: {
    title: "Healthcare Billing Blog - Medical Billing Tips & Insights",
    description:
      "Latest medical billing trends, coding updates, and healthcare revenue management insights from industry experts.",
    url: "/blog",
    images: [
      {
        url: "/medicalbilling.jpg",
        width: 1200,
        height: 630,
        alt: "Healthcare Billing Blog and Insights",
      },
    ],
  },
  twitter: {
    title: "Healthcare Billing Blog - Medical Billing Tips & Insights",
    description: "Latest medical billing trends and healthcare revenue management insights from industry experts.",
  },
  alternates: {
    canonical: "/blog",
  },
}

export default function BlogPage() {
  return <BlogClientPage />
}
