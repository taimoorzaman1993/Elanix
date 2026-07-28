import type { Metadata } from "next"
import QuickBooksClientPage from "./QuickBooksClientPage"

export const metadata: Metadata = {
  title: "BookKeeping & Accounting Services - Professional Bookkeeping | Elanix Enterprise",
  description:
    "Complete accounting and bookkeeping services using QuickBooks to manage your finances and maintain accurate records. Expert QuickBooks setup and training.",
  keywords: [
    "QuickBooks services",
    "accounting services",
    "bookkeeping",
    "financial management",
    "QuickBooks setup",
    "tax preparation",
    "payroll services",
    "financial reporting",
    "small business accounting",
    "QuickBooks training",
    "accounts management",
    "financial consulting",
  ],
  openGraph: {
    title: "BookKeeping Accounting Services - Professional Bookkeeping | Elanix Enterprise",
    description:
      "Complete accounting and bookkeeping services using BookKeeping to manage your finances and maintain accurate records.",
    type: "website",
    url: "https://elanixenterprise.com/services/quickbooks",
    images: [
      {
        url: "/images/quickbooks-og.jpg",
        width: 1200,
        height: 630,
        alt: "Elanix Enterprise QuickBooks Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QuickBooks Accounting Services - Professional Bookkeeping | Elanix Enterprise",
    description:
      "Complete accounting and bookkeeping services using QuickBooks to manage your finances and maintain accurate records.",
    images: ["/images/quickbooks-twitter.jpg"],
  },
}

export default function QuickBooksPage() {
  return <QuickBooksClientPage />
}
