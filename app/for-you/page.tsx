import type { Metadata } from "next"
import ForYouClientPage from "./ForYouClientPage"

export const metadata: Metadata = {
  title: "Business Solutions for Every Size - Tailored Services",
  description:
    "Customized business solutions for startups, growing businesses, enterprises, and industry-specific needs. Find the perfect plan to streamline operations and accelerate growth.",
    keywords: [
    "Elanix Enterprise",
    "business solutions provider USA",
    "medical billing services",
    "outsourced medical billing",
    "claims processing",
    "RCM services",
    "credentialing services",
    "virtual assistant services",
    "affordable virtual assistant USA",
    "web development company USA",
    "app development services",
    "WordPress development experts",
    "custom web applications",
    "digital marketing agency",
    "SEO services USA",
    "social media marketing experts",
    "business growth solutions",
    "AI automation services",
    "QuickBooks accounting support",
    "cloud-based business solutions",
    "ecommerce website development",
    "startup business solutions",
    "small business support services",
    "enterprise business solutions",
    "practice management solutions",
    "healthcare billing services",
    "HIPAA-compliant billing services",
    "insurance verification services",
    "medical coding solutions",
    "accounts receivable management",
    "best business solutions company",
    "top outsourcing company USA",
    "professional billing services",
    "digital transformation for businesses",
    "front office automation",
    "telehealth billing solutions",
    "industry-specific business services",
    "online reputation management",
    "business consulting services",
    "custom software development",
    "secure data handling solutions",
    "cloud-based automation tools",
    "growth-focused business solutions",
    "24/7 customer support services",
  ],
  openGraph: {
    title: "Business Solutions for Every Size - Tailored Services",
    description:
      "Customized solutions for businesses of all sizes. From startups to enterprises, we help you scale efficiently.",
    url: "/for-you",
    images: [
      {
        url: "/web.png",
        width: 1200,
        height: 630,
        alt: "Tailored Business Solutions for Every Size",
      },
    ],
  },
  twitter: {
    title: "Business Solutions for Every Size",
    description: "Customized solutions for startups, SMBs, and enterprises. Find the perfect fit for your business.",
  },
  alternates: {
    canonical: "/for-you",
  },
}


export default function ForYouPage() {
  return <ForYouClientPage />
}
