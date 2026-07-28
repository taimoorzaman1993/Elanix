import type { Metadata } from "next"
import CustomSoftwareDevelopmentClientPage from "./CustomSoftwareDevelopmentClientPage"

export const metadata: Metadata = {
  title: "Custom Software Development - Tailored Enterprise Solutions",
  description:
    "Custom software development services for enterprises. Scalable, secure, and HIPAA-compliant solutions including APIs, cloud-native apps, and legacy modernization.",
  keywords: [
    "custom software development",
    "enterprise application development",
    "legacy system modernization",
    "API development",
    "cloud-native applications",
    "HIPAA compliant software",
    "healthcare software development",
  ],
  openGraph: {
    title: "Custom Software Development - Tailored Enterprise Solutions",
    description:
      "Scalable, secure custom software built for your business. APIs, cloud-native apps, legacy modernization.",
    url: "/services/custom-software-development",
    images: [
      {
        url: "/images/custom-software-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Custom Software Development Services",
      },
    ],
  },
  twitter: {
    title: "Custom Software Development - Tailored Enterprise Solutions",
    description: "Scalable, secure custom software built for your business.",
  },
  alternates: {
    canonical: "/services/custom-software-development",
  },
}

export default function CustomSoftwareDevelopmentPage() {
  return <CustomSoftwareDevelopmentClientPage />
}
