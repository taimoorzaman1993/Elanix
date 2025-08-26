"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, ArrowRight, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const specialtyData: Record<
  string,
  {
    name: string
    icon: string
    description: string
    services: string[]
    benefits: string[]
    stats: { label: string; value: string }[]
    testimonial: {
      name: string
      title: string
      content: string
      rating: number
    }
  }
> = {
  "cardiology-billing-services": {
    name: "Cardiology Billing Services",
    icon: "❤️",
    description:
      "Specialized billing services for cardiology practices, handling complex cardiac procedures, diagnostics, and interventional cardiology with precision and expertise.",
    services: [
      "Cardiac Catheterization Billing",
      "Echocardiogram Coding",
      "Stress Test Billing",
      "Pacemaker/ICD Procedures",
      "Cardiac Surgery Billing",
      "Nuclear Cardiology",
      "Electrophysiology Studies",
      "Interventional Procedures",
    ],
    benefits: [
      "99.5% accuracy in cardiac procedure coding",
      "Specialized knowledge of cardiology CPT codes",
      "Reduced claim denials by 85%",
      "Faster reimbursements for complex procedures",
      "Compliance with cardiology-specific regulations",
      "Dedicated cardiology billing specialists",
    ],
    stats: [
      { label: "Claim Accuracy", value: "99.5%" },
      { label: "Revenue Increase", value: "35%" },
      { label: "Denial Reduction", value: "85%" },
      { label: "Collection Rate", value: "98%" },
    ],
    testimonial: {
      name: "Dr. Michael Chen",
      title: "Interventional Cardiologist, Heart Center of Excellence",
      content:
        "Elanix Enterprise has transformed our cardiology billing. Their expertise in complex cardiac procedures and interventional coding has increased our revenue by 40% while reducing administrative burden significantly.",
      rating: 5,
    },
  },
  "orthopedics-billing": {
    name: "Orthopedics Billing Services",
    icon: "🦴",
    description:
      "Comprehensive orthopedic billing services that maximize profits and enhance patient satisfaction through expert coding of surgical and non-surgical orthopedic procedures.",
    services: [
      "Joint Replacement Surgery",
      "Arthroscopic Procedures",
      "Fracture Care Billing",
      "Sports Medicine Procedures",
      "Spine Surgery Billing",
      "Physical Therapy Integration",
      "Orthopedic Trauma",
      "Reconstructive Surgery",
    ],
    benefits: [
      "Specialized orthopedic coding expertise",
      "Complex surgical procedure billing",
      "Workers' compensation billing",
      "Personal injury claim management",
      "Multi-location practice support",
      "Real-time claim tracking",
    ],
    stats: [
      { label: "Surgical Accuracy", value: "99.8%" },
      { label: "Revenue Growth", value: "42%" },
      { label: "Claim Acceptance", value: "97%" },
      { label: "Days in A/R", value: "28" },
    ],
    testimonial: {
      name: "Dr. Sarah Williams",
      title: "Orthopedic Surgeon, Advanced Orthopedics",
      content:
        "The orthopedic billing expertise at Elanix Enterprise is unmatched. They handle our complex surgical cases with precision, and our practice has seen a 42% increase in revenue since partnering with them.",
      rating: 5,
    },
  },
  "radiology-billing": {
    name: "Radiology Billing Services",
    icon: "📡",
    description:
      "Expert radiology billing services for imaging centers and radiologists, handling complex diagnostic imaging procedures with precision and compliance.",
    services: [
      "CT Scan Billing",
      "MRI Procedure Coding",
      "X-Ray Billing",
      "Ultrasound Services",
      "Nuclear Medicine",
      "Mammography Billing",
      "Interventional Radiology",
      "PET Scan Coding",
    ],
    benefits: [
      "Specialized imaging procedure coding",
      "Complex radiology CPT expertise",
      "Multi-location imaging center support",
      "Real-time claim status tracking",
      "Denial management for imaging claims",
      "Compliance with radiology regulations",
    ],
    stats: [
      { label: "Imaging Accuracy", value: "99.2%" },
      { label: "Revenue Increase", value: "38%" },
      { label: "Claim Acceptance", value: "96%" },
      { label: "Turnaround Time", value: "24hrs" },
    ],
    testimonial: {
      name: "Dr. Jennifer Martinez",
      title: "Radiologist, Advanced Imaging Center",
      content:
        "Elanix Enterprise understands the complexities of radiology billing. Their expertise in imaging procedures has streamlined our revenue cycle and improved our cash flow significantly.",
      rating: 5,
    },
  },
  "pediatrics-billing": {
    name: "Pediatrics Billing Services",
    icon: "👶",
    description:
      "Specialized pediatric billing services for children's healthcare providers, handling age-specific procedures and family-centered care billing.",
    services: [
      "Well-Child Visit Billing",
      "Immunization Coding",
      "Pediatric Surgery Billing",
      "NICU Billing Services",
      "Developmental Screening",
      "Pediatric Emergency Care",
      "Adolescent Medicine",
      "Pediatric Specialty Care",
    ],
    benefits: [
      "Age-specific procedure expertise",
      "Family billing coordination",
      "Insurance verification for minors",
      "Medicaid and CHIP billing",
      "Pediatric-specific compliance",
      "Multi-payer coordination",
    ],
    stats: [
      { label: "Pediatric Accuracy", value: "99.1%" },
      { label: "Revenue Growth", value: "32%" },
      { label: "Claim Success", value: "95%" },
      { label: "Collection Rate", value: "97%" },
    ],
    testimonial: {
      name: "Dr. Amanda Foster",
      title: "Pediatrician, Children's Health Associates",
      content:
        "Working with Elanix Enterprise has been fantastic. They understand pediatric billing complexities and have helped us navigate insurance challenges while improving our revenue.",
      rating: 5,
    },
  },
  "anesthesia-billing": {
    name: "Anesthesia Billing Services",
    icon: "💉",
    description:
      "Complex anesthesia billing with precise time-based calculations, handling surgical anesthesia, pain management, and critical care procedures.",
    services: [
      "Surgical Anesthesia Billing",
      "Time-Based Calculations",
      "Pain Management Procedures",
      "Critical Care Anesthesia",
      "Obstetric Anesthesia",
      "Pediatric Anesthesia",
      "Regional Anesthesia",
      "MAC Procedures",
    ],
    benefits: [
      "Precise time unit calculations",
      "Complex anesthesia coding",
      "Multi-surgeon coordination",
      "ASA modifier expertise",
      "Qualifying circumstances coding",
      "Real-time documentation support",
    ],
    stats: [
      { label: "Time Accuracy", value: "99.7%" },
      { label: "Revenue Boost", value: "45%" },
      { label: "Claim Success", value: "98%" },
      { label: "Processing Speed", value: "12hrs" },
    ],
    testimonial: {
      name: "Dr. Robert Kim",
      title: "Anesthesiologist, Metro Surgical Center",
      content:
        "Elanix Enterprise's anesthesia billing expertise is exceptional. Their precise time calculations and coding accuracy have maximized our reimbursements significantly.",
      rating: 5,
    },
  },
  "family-medicine-billing": {
    name: "Family Medicine Billing Services",
    icon: "👨‍👩‍👧‍👦",
    description:
      "Comprehensive family practice billing solutions covering all ages and a wide range of primary care services for family medicine practices.",
    services: [
      "Primary Care Billing",
      "Preventive Care Services",
      "Chronic Care Management",
      "Annual Physical Exams",
      "Minor Procedures",
      "Immunization Billing",
      "Telehealth Services",
      "Care Coordination",
    ],
    benefits: [
      "Comprehensive primary care coding",
      "Multi-generational billing",
      "Preventive care optimization",
      "Chronic care management billing",
      "Value-based care support",
      "Patient-centered medical home billing",
    ],
    stats: [
      { label: "Primary Care Accuracy", value: "98.9%" },
      { label: "Revenue Growth", value: "28%" },
      { label: "Claim Acceptance", value: "94%" },
      { label: "Patient Satisfaction", value: "96%" },
    ],
    testimonial: {
      name: "Dr. Lisa Thompson",
      title: "Family Physician, Community Family Practice",
      content:
        "Elanix Enterprise has streamlined our family practice billing. Their understanding of primary care complexities has improved our revenue and reduced our administrative burden.",
      rating: 5,
    },
  },
  "general-practice-billing": {
    name: "General Practice Billing Services",
    icon: "👨‍⚕️",
    description:
      "Complete billing services for general practitioners, handling diverse medical conditions and procedures in primary care settings.",
    services: [
      "General Medical Billing",
      "Diagnostic Procedures",
      "Minor Surgery Billing",
      "Consultation Services",
      "Emergency Care",
      "Referral Management",
      "Medication Management",
      "Health Maintenance",
    ],
    benefits: [
      "Broad spectrum medical coding",
      "Multi-specialty coordination",
      "Comprehensive care billing",
      "Insurance navigation",
      "Patient billing support",
      "Revenue optimization",
    ],
    stats: [
      { label: "General Practice Accuracy", value: "98.5%" },
      { label: "Revenue Increase", value: "30%" },
      { label: "Claim Success", value: "93%" },
      { label: "Efficiency Gain", value: "40%" },
    ],
    testimonial: {
      name: "Dr. Mark Johnson",
      title: "General Practitioner, Main Street Medical",
      content:
        "Elanix Enterprise handles our diverse patient needs expertly. Their billing services have allowed us to focus on patient care while improving our financial performance.",
      rating: 5,
    },
  },
  "dermatology-billing": {
    name: "Dermatology Billing Services",
    icon: "🧴",
    description:
      "Dermatology billing with cosmetic and medical procedure expertise, handling both aesthetic and medical dermatology services.",
    services: [
      "Medical Dermatology",
      "Cosmetic Procedures",
      "Mohs Surgery Billing",
      "Skin Cancer Treatment",
      "Laser Procedures",
      "Dermatopathology",
      "Aesthetic Services",
      "Phototherapy Billing",
    ],
    benefits: [
      "Cosmetic vs medical coding expertise",
      "Complex dermatology procedures",
      "Prior authorization management",
      "Aesthetic billing coordination",
      "Pathology integration",
      "Multi-location support",
    ],
    stats: [
      { label: "Dermatology Accuracy", value: "99.3%" },
      { label: "Revenue Growth", value: "41%" },
      { label: "Cosmetic Billing", value: "95%" },
      { label: "Claim Success", value: "97%" },
    ],
    testimonial: {
      name: "Dr. Patricia Davis",
      title: "Dermatologist, Skin Health Center",
      content:
        "Elanix Enterprise expertly handles both our medical and cosmetic dermatology billing. Their knowledge of dermatology coding has significantly improved our practice revenue.",
      rating: 5,
    },
  },
  "urology-billing": {
    name: "Urology Billing Services",
    icon: "🫘",
    description:
      "Urological billing services with procedure expertise, handling complex urological surgeries and diagnostic procedures.",
    services: [
      "Urological Surgery",
      "Cystoscopy Procedures",
      "Kidney Stone Treatment",
      "Prostate Procedures",
      "Urodynamic Studies",
      "Lithotripsy Billing",
      "Robotic Surgery",
      "Oncology Procedures",
    ],
    benefits: [
      "Complex urological coding",
      "Surgical procedure expertise",
      "Robotic surgery billing",
      "Oncology integration",
      "Multi-specialty coordination",
      "Advanced procedure coding",
    ],
    stats: [
      { label: "Urology Accuracy", value: "99.4%" },
      { label: "Surgical Revenue", value: "43%" },
      { label: "Claim Acceptance", value: "96%" },
      { label: "Processing Time", value: "18hrs" },
    ],
    testimonial: {
      name: "Dr. Steven Rodriguez",
      title: "Urologist, Advanced Urology Associates",
      content:
        "Elanix Enterprise's urology billing expertise is outstanding. They handle our complex surgical procedures with precision, resulting in improved revenue and fewer denials.",
      rating: 5,
    },
  },
  "gastroenterology-billing": {
    name: "Gastroenterology Billing Services",
    icon: "🫁",
    description:
      "GI specialty billing with procedure-focused expertise, handling endoscopic procedures and complex gastroenterology services.",
    services: [
      "Endoscopy Procedures",
      "Colonoscopy Billing",
      "EGD Procedures",
      "ERCP Billing",
      "Liver Procedures",
      "IBD Management",
      "Capsule Endoscopy",
      "GI Surgery Billing",
    ],
    benefits: [
      "Endoscopic procedure expertise",
      "Complex GI coding",
      "Multi-procedure billing",
      "Pathology coordination",
      "Anesthesia integration",
      "Facility billing support",
    ],
    stats: [
      { label: "GI Accuracy", value: "99.1%" },
      { label: "Procedure Revenue", value: "39%" },
      { label: "Endoscopy Success", value: "98%" },
      { label: "Claim Rate", value: "95%" },
    ],
    testimonial: {
      name: "Dr. Maria Gonzalez",
      title: "Gastroenterologist, Digestive Health Specialists",
      content:
        "Elanix Enterprise understands the intricacies of GI billing. Their expertise in endoscopic procedures has streamlined our billing process and improved our bottom line.",
      rating: 5,
    },
  },
  "oncology-billing": {
    name: "Oncology Billing Services",
    icon: "🎗️",
    description:
      "Cancer treatment billing with chemotherapy expertise, handling complex oncology treatments and supportive care services.",
    services: [
      "Chemotherapy Billing",
      "Radiation Oncology",
      "Immunotherapy Services",
      "Surgical Oncology",
      "Hematology Procedures",
      "Clinical Trials",
      "Supportive Care",
      "Palliative Care",
    ],
    benefits: [
      "Complex oncology coding",
      "Chemotherapy administration",
      "Multi-disciplinary coordination",
      "Clinical trial billing",
      "Insurance authorization",
      "Specialty pharmacy coordination",
    ],
    stats: [
      { label: "Oncology Accuracy", value: "99.6%" },
      { label: "Treatment Revenue", value: "47%" },
      { label: "Authorization Rate", value: "94%" },
      { label: "Claim Success", value: "97%" },
    ],
    testimonial: {
      name: "Dr. David Wilson",
      title: "Medical Oncologist, Cancer Care Center",
      content:
        "Elanix Enterprise's oncology billing expertise is invaluable. They navigate the complexities of cancer treatment billing, allowing us to focus on patient care.",
      rating: 5,
    },
  },
  "neurology-billing": {
    name: "Neurology Billing Services",
    icon: "🧠",
    description:
      "Neurological disorder billing and coding, handling complex neurological procedures and diagnostic testing.",
    services: [
      "EEG Billing",
      "EMG/NCV Studies",
      "Neurological Exams",
      "Stroke Care",
      "Epilepsy Management",
      "Movement Disorders",
      "Headache Treatment",
      "Neurosurgery Coordination",
    ],
    benefits: [
      "Complex neurological coding",
      "Diagnostic test billing",
      "Multi-specialty coordination",
      "Chronic care management",
      "Emergency neurology billing",
      "Telemedicine support",
    ],
    stats: [
      { label: "Neurology Accuracy", value: "98.8%" },
      { label: "Diagnostic Revenue", value: "36%" },
      { label: "Claim Success", value: "94%" },
      { label: "Processing Speed", value: "20hrs" },
    ],
    testimonial: {
      name: "Dr. Rachel Adams",
      title: "Neurologist, Brain & Spine Institute",
      content:
        "Elanix Enterprise's neurology billing team understands our complex procedures. Their expertise has improved our revenue cycle and reduced administrative burden.",
      rating: 5,
    },
  },
  "ophthalmology-billing": {
    name: "Ophthalmology Billing Services",
    icon: "👁️",
    description:
      "Eye care billing with surgical and diagnostic procedures, handling comprehensive ophthalmology and optometry services.",
    services: [
      "Cataract Surgery",
      "Retinal Procedures",
      "Glaucoma Treatment",
      "LASIK Surgery",
      "Comprehensive Eye Exams",
      "Diabetic Eye Care",
      "Pediatric Ophthalmology",
      "Oculoplastic Surgery",
    ],
    benefits: [
      "Surgical ophthalmology expertise",
      "Vision care coordination",
      "Multi-procedure billing",
      "Insurance navigation",
      "Refractive surgery billing",
      "Diagnostic imaging support",
    ],
    stats: [
      { label: "Eye Care Accuracy", value: "99.2%" },
      { label: "Surgical Revenue", value: "44%" },
      { label: "Vision Claims", value: "96%" },
      { label: "Patient Satisfaction", value: "98%" },
    ],
    testimonial: {
      name: "Dr. Thomas Lee",
      title: "Ophthalmologist, Vision Care Associates",
      content:
        "Elanix Enterprise excels at ophthalmology billing. Their understanding of eye care procedures and vision insurance has significantly improved our practice efficiency.",
      rating: 5,
    },
  },
  "laboratory-billing-services": {
    name: "Laboratory Billing Services",
    icon: "🧪",
    description:
      "Specialized laboratory billing services for diagnostic labs, pathology labs, and clinical laboratories with expertise in complex lab procedures and testing.",
    services: [
      "Clinical Lab Billing",
      "Pathology Billing",
      "Molecular Diagnostics",
      "Microbiology Testing",
      "Blood Bank Services",
      "Toxicology Billing",
      "Genetic Testing",
      "Reference Lab Billing",
    ],
    benefits: [
      "Complex lab procedure coding",
      "Multi-payer lab billing expertise",
      "Reference lab coordination",
      "Automated result reporting",
      "Quality assurance protocols",
      "Compliance with lab regulations",
    ],
    stats: [
      { label: "Lab Accuracy", value: "99.7%" },
      { label: "Revenue Growth", value: "42%" },
      { label: "Claim Success", value: "97%" },
      { label: "Turnaround Time", value: "24hrs" },
    ],
    testimonial: {
      name: "Dr. Emily Watson",
      title: "Laboratory Director, Advanced Diagnostics Lab",
      content:
        "Elanix Enterprise understands the complexities of laboratory billing. Their expertise in lab procedures and coding has significantly improved our revenue cycle and reduced claim denials.",
      rating: 5,
    },
  },
  "behavioral-health-billing": {
    name: "Behavioral Health Billing Services",
    icon: "🧠",
    description:
      "Comprehensive behavioral health billing services for mental health providers, substance abuse treatment centers, and psychiatric practices.",
    services: [
      "Mental Health Billing",
      "Substance Abuse Treatment",
      "Psychiatric Services",
      "Therapy Session Billing",
      "Group Therapy Coding",
      "Crisis Intervention",
      "Telehealth Mental Health",
      "Medication Management",
    ],
    benefits: [
      "Mental health specialty coding",
      "Insurance authorization expertise",
      "Telehealth billing support",
      "Compliance with mental health regulations",
      "Multi-session treatment billing",
      "Crisis intervention coding",
    ],
    stats: [
      { label: "Mental Health Accuracy", value: "98.9%" },
      { label: "Authorization Rate", value: "94%" },
      { label: "Claim Success", value: "95%" },
      { label: "Revenue Increase", value: "38%" },
    ],
    testimonial: {
      name: "Dr. James Miller",
      title: "Psychiatrist, Mental Wellness Center",
      content:
        "Elanix Enterprise has been instrumental in managing our behavioral health billing. Their understanding of mental health coding and insurance requirements has improved our practice efficiency.",
      rating: 5,
    },
  },
  "urgent-care-billing": {
    name: "Urgent Care Billing Services",
    icon: "🏥",
    description:
      "Specialized urgent care billing services for walk-in clinics, urgent care centers, and emergency medicine practices with fast-paced billing needs.",
    services: [
      "Urgent Care Visits",
      "Emergency Procedures",
      "X-Ray and Imaging",
      "Minor Surgery Billing",
      "Occupational Health",
      "Workers' Compensation",
      "After-Hours Care",
      "Multi-Location Billing",
    ],
    benefits: [
      "Fast-paced billing expertise",
      "Emergency procedure coding",
      "Multi-location support",
      "Workers' comp billing",
      "Real-time claim processing",
      "After-hours billing support",
    ],
    stats: [
      { label: "Urgent Care Accuracy", value: "99.1%" },
      { label: "Processing Speed", value: "12hrs" },
      { label: "Claim Success", value: "96%" },
      { label: "Revenue Growth", value: "35%" },
    ],
    testimonial: {
      name: "Dr. Lisa Rodriguez",
      title: "Medical Director, QuickCare Urgent Care",
      content:
        "Elanix Enterprise handles our high-volume urgent care billing with precision. Their fast processing and expertise in urgent care procedures has been invaluable to our operations.",
      rating: 5,
    },
  },
  "allergy-billing": {
    name: "Allergy Billing Services",
    icon: "🤧",
    description:
      "Specialized allergy and immunology billing services for allergy practices, including immunotherapy, testing, and treatment procedures.",
    services: [
      "Allergy Testing Billing",
      "Immunotherapy Services",
      "Skin Testing Procedures",
      "Food Allergy Testing",
      "Environmental Allergy",
      "Drug Allergy Testing",
      "Asthma Management",
      "Allergy Shots Billing",
    ],
    benefits: [
      "Allergy-specific procedure coding",
      "Immunotherapy billing expertise",
      "Testing procedure optimization",
      "Insurance authorization management",
      "Seasonal billing adjustments",
      "Patient education billing",
    ],
    stats: [
      { label: "Allergy Accuracy", value: "99.3%" },
      { label: "Testing Revenue", value: "41%" },
      { label: "Authorization Rate", value: "93%" },
      { label: "Claim Success", value: "96%" },
    ],
    testimonial: {
      name: "Dr. Karen Thompson",
      title: "Allergist, Allergy & Asthma Associates",
      content:
        "Elanix Enterprise's expertise in allergy billing has transformed our practice. They understand the nuances of immunotherapy and testing procedures, resulting in improved revenue.",
      rating: 5,
    },
  },
  "sports-medicine-billing": {
    name: "Sports Medicine Billing Services",
    icon: "⚽",
    description:
      "Comprehensive sports medicine billing services for sports medicine physicians, physical therapy clinics, and athletic performance centers.",
    services: [
      "Sports Injury Treatment",
      "Physical Therapy Billing",
      "Rehabilitation Services",
      "Athletic Performance",
      "Injury Prevention",
      "Sports Physicals",
      "Concussion Management",
      "Orthopedic Sports Medicine",
    ],
    benefits: [
      "Sports medicine specialty coding",
      "Rehabilitation billing expertise",
      "Athletic injury procedures",
      "Performance enhancement billing",
      "Multi-disciplinary coordination",
      "Insurance navigation for athletes",
    ],
    stats: [
      { label: "Sports Med Accuracy", value: "99.0%" },
      { label: "Therapy Revenue", value: "37%" },
      { label: "Claim Success", value: "95%" },
      { label: "Processing Time", value: "18hrs" },
    ],
    testimonial: {
      name: "Dr. Michael Chang",
      title: "Sports Medicine Physician, Athletic Performance Center",
      content:
        "Elanix Enterprise understands the unique billing challenges in sports medicine. Their expertise has helped us optimize our revenue while focusing on athlete care.",
      rating: 5,
    },
  },
  "ent-billing": {
    name: "ENT Billing Services",
    icon: "👂",
    description:
      "Specialized ENT (Ear, Nose, and Throat) billing services for otolaryngology practices, including surgical and non-surgical procedures.",
    services: [
      "ENT Surgery Billing",
      "Hearing Tests",
      "Sinus Procedures",
      "Throat Surgery",
      "Ear Procedures",
      "Allergy Testing",
      "Sleep Apnea Treatment",
      "Head and Neck Surgery",
    ],
    benefits: [
      "ENT specialty procedure coding",
      "Surgical billing expertise",
      "Hearing test billing",
      "Sinus procedure optimization",
      "Multi-procedure coordination",
      "Insurance authorization support",
    ],
    stats: [
      { label: "ENT Accuracy", value: "99.4%" },
      { label: "Surgical Revenue", value: "43%" },
      { label: "Procedure Success", value: "97%" },
      { label: "Claim Rate", value: "96%" },
    ],
    testimonial: {
      name: "Dr. Susan Park",
      title: "ENT Surgeon, Advanced ENT Associates",
      content:
        "Elanix Enterprise's ENT billing expertise is exceptional. They handle our complex surgical procedures and hearing tests with precision, maximizing our reimbursements.",
      rating: 5,
    },
  },
}

interface PageProps {
  params: {
    slug: string
  }
}

export default function SpecialtyClientPage({ params }: PageProps) {
  const specialty = specialtyData[params.slug]

  if (!specialty) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 text-2xl md:text-3xl">
                  {specialty.icon}
                </div>
                <Badge className="bg-yellow-500 text-black px-3 py-1 text-sm">Specialty Billing</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">{specialty.name}</h1>
              <p className="text-lg md:text-xl text-blue-200 mb-6 md:mb-8">{specialty.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 w-full sm:w-auto"
                  >
                    Get Free Quote
                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-6 md:px-8 py-3 w-full sm:w-auto"
                >
                  Schedule Demo
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  {specialty.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-cyan-400">{stat.value}</div>
                      <div className="text-sm md:text-base text-blue-200">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services & Benefits Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our {specialty.name}</h2>
              <div className="space-y-3 md:space-y-4">
                {specialty.services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-3 md:p-4 bg-white rounded-lg shadow-sm"
                  >
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-700">{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Key Benefits</h2>
              <div className="space-y-3 md:space-y-4">
                {specialty.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-sm md:text-base text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-6 md:p-8 shadow-xl">
              <CardContent className="p-0">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(specialty.testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6">
                  "{specialty.testimonial.content}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold text-base md:text-lg">
                      {specialty.testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{specialty.testimonial.name}</div>
                    <div className="text-sm md:text-base text-gray-600">{specialty.testimonial.title}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              Ready to Optimize Your {specialty.name.replace(" Services", "")} Billing?
            </h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-blue-100 max-w-2xl mx-auto px-4">
              Get started with our specialized billing services and see the difference expertise makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-6 md:px-8 py-3">
                <Phone className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                Call (512) 375-9999
              </Button>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-6 md:px-8 py-3"
                >
                  <Mail className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                  Get Free Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
