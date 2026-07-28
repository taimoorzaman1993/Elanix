import type { Metadata } from "next"
import BlogClientPage from "./BlogClientPage"


export const metadata: Metadata = {
  title: "Elanix Enterprise Blog - Insights on Medical Billing, Web, Apps, AI & More",
  description:
    "Explore expert insights from Elanix Enterprise on medical billing, web & app development, AI automations, digital marketing, and QuickBooks accounting. Stay ahead with tips, trends, and strategies to grow your business.",
  keywords: [
    // Blog specific
    "Elanix Enterprise blog",
    "business insights blog",
    "tech and healthcare blog",
    "medical billing tips",
    "healthcare compliance updates",
    "web development insights",
    "AI automation blog",
    "digital marketing strategies",
    "QuickBooks accounting blog",
    // Service-specific
    "medical billing services",
    "healthcare billing",
    "custom web development",
    "mobile app development",
    "AI workflow automation",
    "SEO digital marketing",
    "QuickBooks bookkeeping",
  ],

  openGraph: {
    title: "Elanix Enterprise Blog - Medical Billing, Tech & Business Insights",
    description:
      "Stay informed with Elanix Enterprise’s expert blogs on medical billing, coding, web development, app solutions, AI automation, digital marketing, and QuickBooks accounting.",
    url: "https://elanixenterprise.com/blog",
    siteName: "Elanix Enterprise",
    images: [
      {
        url: "https://elanixenterprise.com/web.png",
        width: 1200,
        height: 630,
        alt: "Elanix Enterprise Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Elanix Enterprise Blog - Medical Billing, Web, Apps, AI & Marketing",
    description:
      "Explore expert blogs from Elanix Enterprise covering medical billing, web & app dev, AI automation, digital marketing, and QuickBooks accounting solutions.",
    images: ["https://elanixenterprise.com/web.png"],
  },
};


export default function BlogPage() {
  return <BlogClientPage />
}
