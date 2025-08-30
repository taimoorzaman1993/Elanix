import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingContact from "@/components/floating-contact"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "%s | Elanix Enterprise - Healthcare Solutions",
    default: "Elanix Enterprise - Professional Business Solutions & Smart Services",
  },
  generator: 'Talha Ahmed , Sadeem Ahmed || Web Developer ',
  description:
      "Elanix Enterprise is a leading business solutions provider offering medical billing, virtual assistance, web & app development, digital marketing, AI automation, Bookkeeping & Accounting, and more — helping businesses nationwide streamline operations and grow efficiently.",
  icons: {
    icon: "/favicon.png", // this will handle <link rel="icon">
    shortcut: "/favicon.ico",
  },
  keywords: [
    "medical billing services",
    "healthcare credentialing",
    "virtual assistant healthcare",
    "medical practice management",
    "healthcare revenue cycle",
    "medical coding services",
    "healthcare compliance",
    "practice management solutions",
    "Medical billing", "Claims processing", "Revenue cycle management", "RCM services", "Credentialing services", "Web development", "Digital marketing", "Virtual assistant", "WordPress development", "Medical billing services", "Taimoor Zaman website", "Taimoor Zaman Elanix Enterprise", "Elanix", "Taimoor Zaman Ch - Founder & CEO - Medfolio Billing", "Healthcare compliance", "Practice management", "HIPAA compliance", "Medical billing solutions", "MedBill Pro", "Elanix Enterprise", "Medical coding", "Insurance verification", "Patient billing", "Accounts receivable management", "Medical billing outsourcing", "Healthcare billing services", "Medical billing software", "Medical billing company", "Medical billing agency", "Medical Billing Solutions", "End-to-end medical billing services", "Best medical billing company USA", "Outsourced medical billing solutions", "Top healthcare RCM providers", "Virtual assistant for medical practice", "Custom healthcare web development", "SEO for medical practices", "HIPAA-compliant billing services", "Medical billing and coding experts", "Practice growth solutions", "Front office automation healthcare", "Claim denial management services", "Insurance claim follow-up", "Credentialing for healthcare providers", "EHR integration services", "EMR billing support", "Healthcare digital transformation", "Secure patient data handling", "Online reputation management for doctors", "Telehealth billing services", "Healthcare business consulting", "Medical billing support services", "Dedicated medical billing team", "Medfolio Billing", "Elanix medical billing services", "Healthcare software development", "Taimoor Zaman Medfolio", "Elanix RCM solutions",

  ],
  authors: [{ name: "Elanix Enterprise" }],
  creator: "Elanix Enterprise",
  publisher: "Elanix Enterprise",
  metadataBase: new URL("https://elanixenterprise.com"),
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elanixenterprise.com",
    siteName: "Elanix Enterprise",
    title: "Elanix Enterprise - Professional Bussiness Solutions",
    description:
      "Leading healthcare solutions provider offering medical billing, credentialing, virtual assistance, and digital marketing services for healthcare providers.",
    images: [
      {
        url: "/web.png",
        width: 1200,
        height: 630,
        alt: "Elanix Enterprise Bussiness Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elanix Enterprise - Professional Bussiness Solutions",
    description:
      "Elanix Enterprise is a leading business solutions provider offering medical billing, credentialing, virtual assistance, web & app development, digital marketing, AI automation, and more — helping businesses streamline operations and grow nationwide.",
    images: ["https://x.com/Elanix_E/header_photo"],
    creator: "@Elanix-E",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <head>
        {/* Extra manual link if needed */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  )
}
