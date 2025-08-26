import type { Metadata } from "next"
import SpecialtyClientPage from "./SpecialtyClientPage"

const specialtyData: Record<
  string,
  {
    name: string
    icon: string
    description: string
  }
> = {
  "cardiology-billing-services": {
    name: "Cardiology Billing Services",
    icon: "❤️",
    description:
      "Specialized billing services for cardiology practices, handling complex cardiac procedures, diagnostics, and interventional cardiology with precision and expertise.",
  },
  "orthopedics-billing": {
    name: "Orthopedics Billing Services",
    icon: "🦴",
    description:
      "Comprehensive orthopedic billing services that maximize profits and enhance patient satisfaction through expert coding of surgical and non-surgical orthopedic procedures.",
  },
  "radiology-billing": {
    name: "Radiology Billing Services",
    icon: "📡",
    description:
      "Expert radiology billing services for imaging centers and radiologists, handling complex diagnostic imaging procedures with precision and compliance.",
  },
  "pediatrics-billing": {
    name: "Pediatrics Billing Services",
    icon: "👶",
    description:
      "Specialized pediatric billing services for children's healthcare providers, handling age-specific procedures and family-centered care billing.",
  },
  "anesthesia-billing": {
    name: "Anesthesia Billing Services",
    icon: "💉",
    description:
      "Complex anesthesia billing with precise time-based calculations, handling surgical anesthesia, pain management, and critical care procedures.",
  },
  "family-medicine-billing": {
    name: "Family Medicine Billing Services",
    icon: "👨‍👩‍👧‍👦",
    description:
      "Comprehensive family practice billing solutions covering all ages and a wide range of primary care services for family medicine practices.",
  },
  "general-practice-billing": {
    name: "General Practice Billing Services",
    icon: "👨‍⚕️",
    description:
      "Complete billing services for general practitioners, handling diverse medical conditions and procedures in primary care settings.",
  },
  "dermatology-billing": {
    name: "Dermatology Billing Services",
    icon: "🧴",
    description:
      "Dermatology billing with cosmetic and medical procedure expertise, handling both aesthetic and medical dermatology services.",
  },
  "urology-billing": {
    name: "Urology Billing Services",
    icon: "🫘",
    description:
      "Urological billing services with procedure expertise, handling complex urological surgeries and diagnostic procedures.",
  },
  "gastroenterology-billing": {
    name: "Gastroenterology Billing Services",
    icon: "🫁",
    description:
      "GI specialty billing with procedure-focused expertise, handling endoscopic procedures and complex gastroenterology services.",
  },
  "oncology-billing": {
    name: "Oncology Billing Services",
    icon: "🎗️",
    description:
      "Cancer treatment billing with chemotherapy expertise, handling complex oncology treatments and supportive care services.",
  },
  "neurology-billing": {
    name: "Neurology Billing Services",
    icon: "🧠",
    description:
      "Neurological disorder billing and coding, handling complex neurological procedures and diagnostic testing.",
  },
  "ophthalmology-billing": {
    name: "Ophthalmology Billing Services",
    icon: "👁️",
    description:
      "Eye care billing with surgical and diagnostic procedures, handling comprehensive ophthalmology and optometry services.",
  },
  "laboratory-billing-services": {
    name: "Laboratory Billing Services",
    icon: "🧪",
    description:
      "Specialized laboratory billing services for diagnostic labs, pathology labs, and clinical laboratories with expertise in complex lab procedures and testing.",
  },
  "behavioral-health-billing": {
    name: "Behavioral Health Billing Services",
    icon: "🧠",
    description:
      "Comprehensive behavioral health billing services for mental health providers, substance abuse treatment centers, and psychiatric practices.",
  },
  "urgent-care-billing": {
    name: "Urgent Care Billing Services",
    icon: "🏥",
    description:
      "Specialized urgent care billing services for walk-in clinics, urgent care centers, and emergency medicine practices with fast-paced billing needs.",
  },
  "allergy-billing": {
    name: "Allergy Billing Services",
    icon: "🤧",
    description:
      "Specialized allergy and immunology billing services for allergy practices, including immunotherapy, testing, and treatment procedures.",
  },
  "sports-medicine-billing": {
    name: "Sports Medicine Billing Services",
    icon: "⚽",
    description:
      "Comprehensive sports medicine billing services for sports medicine physicians, physical therapy clinics, and athletic performance centers.",
  },
  "ent-billing": {
    name: "ENT Billing Services",
    icon: "👂",
    description:
      "Specialized ENT (Ear, Nose, and Throat) billing services for otolaryngology practices, including surgical and non-surgical procedures.",
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const specialty = specialtyData[params.slug]

  if (!specialty) {
    return {
      title: "Specialty Not Found",
      description: "The requested medical billing specialty was not found.",
    }
  }

  const specialtyName = specialty.name.replace(" Services", "")

  return {
    title: `${specialtyName} Billing Services - Expert Medical Billing & Coding`,
    description: `Professional ${specialtyName.toLowerCase()} billing services with specialized coding expertise. ${specialty.description}`,
    keywords: [
      `${specialtyName.toLowerCase()} billing`,
      `${specialtyName.toLowerCase()} medical billing`,
      `${specialtyName.toLowerCase()} coding services`,
      `${specialtyName.toLowerCase()} revenue cycle`,
      "specialty medical billing",
      "healthcare billing services",
    ],
    openGraph: {
      title: `${specialtyName} Billing Services - Expert Medical Billing & Coding`,
      description: `Professional ${specialtyName.toLowerCase()} billing with specialized coding expertise and proven results.`,
      url: `/specialties/${params.slug}`,
      images: [
        {
          url: `/images/specialties/${params.slug}-og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `${specialtyName} Medical Billing Services`,
        },
      ],
    },
    twitter: {
      title: `${specialtyName} Billing Services - Expert Medical Billing`,
      description: `Professional ${specialtyName.toLowerCase()} billing with specialized coding expertise.`,
    },
    alternates: {
      canonical: `/specialties/${params.slug}`,
    },
  }
}

interface PageProps {
  params: {
    slug: string
  }
}

export default function SpecialtyPage({ params }: PageProps) {
  return <SpecialtyClientPage params={params} />
}
