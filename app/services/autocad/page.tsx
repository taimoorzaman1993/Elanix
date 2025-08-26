import type { Metadata } from "next"
import AutoCADClientPage from "./AutoCADClientPage"

export const metadata: Metadata = {
  title: "AutoCAD Services - Professional CAD Design & Drafting | Elanix Enterprise",
  description:
    "Professional CAD design and drafting services for engineering, architecture, and technical documentation needs. Expert AutoCAD solutions and 3D modeling.",
  keywords: [
    "AutoCAD services",
    "CAD design",
    "technical drafting",
    "engineering drawings",
    "architectural drawings",
    "3D modeling",
    "CAD drafting",
    "technical documentation",
    "design services",
    "CAD conversion",
    "blueprint creation",
    "mechanical drawings",
  ],
  openGraph: {
    title: "AutoCAD Services - Professional CAD Design & Drafting | Elanix Enterprise",
    description:
      "Professional CAD design and drafting services for engineering, architecture, and technical documentation needs.",
    type: "website",
    url: "https://elanixenterprise.com/services/autocad",
    images: [
      {
        url: "/images/autocad-og.jpg",
        width: 1200,
        height: 630,
        alt: "Elanix Enterprise AutoCAD Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoCAD Services - Professional CAD Design & Drafting | Elanix Enterprise",
    description:
      "Professional CAD design and drafting services for engineering, architecture, and technical documentation needs.",
    images: ["/images/autocad-twitter.jpg"],
  },
}

export default function AutoCADPage() {
  return <AutoCADClientPage />
}
