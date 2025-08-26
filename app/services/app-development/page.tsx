import type { Metadata } from "next"
import AppDevelopmentClientPage from "./AppDevelopmentClientPage"

export const metadata: Metadata = {
  title: "App Development Services - Mobile & Web Applications | Elanix Enterprise",
  description:
    "Create powerful mobile and web applications tailored to your business needs. Expert development team specializing in iOS, Android, and web app development.",
  keywords: [
    "app development",
    "mobile app development",
    "web app development",
    "iOS development",
    "Android development",
    "custom applications",
    "software development",
    "mobile solutions",
    "web applications",
    "app design",
    "application development",
    "mobile technology",
  ],
  openGraph: {
    title: "App Development Services - Mobile & Web Applications | Elanix Enterprise",
    description:
      "Create powerful mobile and web applications tailored to your business needs with our expert development team.",
    type: "website",
    url: "https://elanixenterprise.com/services/app-development",
    images: [
      {
        url: "/images/app-development-og.jpg",
        width: 1200,
        height: 630,
        alt: "Elanix Enterprise App Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "App Development Services - Mobile & Web Applications | Elanix Enterprise",
    description:
      "Create powerful mobile and web applications tailored to your business needs with our expert development team.",
    images: ["/images/app-development-twitter.jpg"],
  },
}

export default function AppDevelopmentPage() {
  return <AppDevelopmentClientPage />
}
