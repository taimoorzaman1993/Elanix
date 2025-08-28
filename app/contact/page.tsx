import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us - Get Free  Quote",
  description:
    "Contact Elanix Enterprise for a free consultation on medical billing, credentialing, and healthcare solutions. Call (512) 375-9999 or get your free quote online today.",
  keywords: [
    "contact medical billing company",
    "free healthcare billing quote",
    "medical billing consultation",
    "healthcare solutions contact",
    "credentialing services quote",
    "virtual assistant healthcare contact",
  ],
  openGraph: {
    title: "Contact Us - Get Free Healthcare Billing Quote | Elanix Enterprise",
    description:
      "Get a free consultation on medical billing and bussinesses solutions. Contact our experts today for personalized service.",
    url: "/contact",
    images: [
      {
        url: "/web.png",
        width: 1200,
        height: 630,
        alt: "Contact Elanix Enterprise for Healthcare Solutions",
      },
    ],
  },
  twitter: {
    title: "Contact Us - Get Free Healthcare Billing Quote",
    description: "Get a free consultation on medical billing and bussinesses solutions. Contact our experts today.",
  },
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
