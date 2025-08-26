"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useState } from "react"
import { Heart, TestTube, Brain, Building2, Bone, Stethoscope, Activity, Ear } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const popularSpecialties = [
  { name: "Cardiology", icon: Heart, slug: "cardiology-billing-services" },
  { name: "Laboratory Billing", icon: TestTube, slug: "laboratory-billing-services" },
  { name: "Behavioral Health", icon: Brain, slug: "behavioral-health-billing" },
  { name: "Urgent Care", icon: Building2, slug: "urgent-care-billing" },
  { name: "Orthopedics", icon: Bone, slug: "orthopedics-billing" },
  { name: "Allergy", icon: Stethoscope, slug: "allergy-billing" },
  { name: "Sports Medicine", icon: Activity, slug: "sports-medicine-billing" },
  { name: "ENT", icon: Ear, slug: "ent-billing" },
]

const allSpecialties = [
  {
    name: "Orthopedics",
    icon: Bone,
    description: "Orthopedics billing services that maximize profits and enhance patient satisfaction.",
  },
  {
    name: "Pediatrics",
    icon: Heart,
    description: "Specialized pediatric billing services for children's healthcare providers.",
  },
  {
    name: "Anesthesia",
    icon: Activity,
    description: "Complex anesthesia billing with precise time-based calculations.",
  },
  {
    name: "Family Medicine",
    icon: Stethoscope,
    description: "Comprehensive family practice billing solutions.",
  },
  {
    name: "General Practice",
    icon: Building2,
    description: "Complete billing services for general practitioners.",
  },
  {
    name: "Chiropractor",
    icon: Bone,
    description: "Specialized chiropractic billing and coding services.",
  },
  {
    name: "Dermatology",
    icon: Heart,
    description: "Dermatology billing with cosmetic and medical procedure expertise.",
  },
  { name: "Podiatry", icon: Activity, description: "Foot and ankle specialty billing services." },
  {
    name: "Gastroenterology",
    icon: TestTube,
    description: "GI specialty billing with procedure-focused expertise.",
  },
  {
    name: "Orthopedic Surgery",
    icon: Bone,
    description: "Surgical orthopedic billing with complex procedure coding.",
  },
  {
    name: "Surgery",
    icon: Activity,
    description: "Comprehensive surgical billing across all specialties.",
  },
  {
    name: "Physical Medicine",
    icon: Stethoscope,
    description: "PM&R billing services for rehabilitation medicine.",
  },
  {
    name: "Cardiology",
    icon: Heart,
    description: "Cardiac specialty billing with diagnostic and interventional procedures.",
  },
  {
    name: "Urology",
    icon: TestTube,
    description: "Urological billing services with procedure expertise.",
  },
  {
    name: "Speech Therapy",
    icon: Brain,
    description: "Speech-language pathology billing services.",
  },
  {
    name: "Physical Therapy",
    icon: Activity,
    description: "PT billing with therapy-specific coding expertise.",
  },
  {
    name: "Psychiatry",
    icon: Brain,
    description: "Mental health billing with therapy and medication management.",
  },
  { name: "Radiology", icon: TestTube, description: "Imaging and radiology billing services." },
  {
    name: "Plastic Surgery",
    icon: Activity,
    description: "Cosmetic and reconstructive surgery billing.",
  },
  { name: "Pathology", icon: TestTube, description: "Laboratory pathology billing services." },
  {
    name: "Emergency Medicine",
    icon: Building2,
    description: "ER billing with complex emergency procedures.",
  },
  {
    name: "Pain Management",
    icon: Stethoscope,
    description: "Pain clinic billing with injection and procedure coding.",
  },
  {
    name: "Ophthalmology",
    icon: Heart,
    description: "Eye care billing with surgical and diagnostic procedures.",
  },
  {
    name: "Endocrinology",
    icon: TestTube,
    description: "Hormone and diabetes specialty billing.",
  },
  {
    name: "Oncology",
    icon: Activity,
    description: "Cancer treatment billing with chemotherapy expertise.",
  },
  {
    name: "Neurology",
    icon: Brain,
    description: "Neurological disorder billing and coding.",
  },
  {
    name: "Mental Health",
    icon: Brain,
    description: "Comprehensive mental health billing services.",
  },
  {
    name: "Infectious Disease",
    icon: TestTube,
    description: "ID specialty billing with complex treatment protocols.",
  },
  {
    name: "Hematology",
    icon: TestTube,
    description: "Blood disorder specialty billing services.",
  },
  {
    name: "Geriatrics",
    icon: Stethoscope,
    description: "Elderly care billing with Medicare expertise.",
  },
  { name: "ENT", icon: Ear, description: "Ear, nose, and throat specialty billing." },
  {
    name: "Dentistry",
    icon: Stethoscope,
    description: "Dental practice billing and insurance processing.",
  },
]

export default function SpecialtiesClientPage() {
  const [hoveredSpecialty, setHoveredSpecialty] = useState<string | null>(null)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-cyan-600 text-white">Specialty Focused</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Medical Billing Specialties</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Over 70+ specialties covered with our service. Our expertise across various medical specialties regardless
              of your practice size.
            </p>
          </motion.div>

          {/* Demo Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg p-6 max-w-2xl mx-auto"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Pick Your Specialty | Schedule Free Demo</h3>
            <p className="text-gray-600 mb-4">
              Select your medical specialty below and get a customized demo of our billing services.
            </p>
            <div className="flex gap-4">
              <Input placeholder="Enter your specialty or practice type" className="flex-1" />
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8">SUBMIT</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Specialties */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">OUR POPULAR</h2>
            <h2 className="text-4xl font-bold text-primary-600 mb-8">SPECIALTIES ⭐</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {popularSpecialties.map((specialty, index) => (
              <motion.div
                key={specialty.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/specialties/${specialty.slug}`}>
                  <Card className="text-center hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                        <specialty.icon className="w-8 h-8 text-primary-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {specialty.name}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Specialties Grid */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {allSpecialties.map((specialty, index) => (
              <motion.div
                key={specialty.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative"
                onMouseEnter={() => setHoveredSpecialty(specialty.name)}
                onMouseLeave={() => setHoveredSpecialty(null)}
              >
                <Card className="bg-white text-gray-900 hover:bg-primary-50 transition-all duration-300 cursor-pointer group relative">
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                      <specialty.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="font-semibold text-sm group-hover:text-primary-600 transition-colors">
                      {specialty.name}
                    </h3>
                  </CardContent>

                  {/* Hover Tooltip */}
                  {hoveredSpecialty === specialty.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-10"
                    >
                      <div className="bg-cyan-500 text-white p-3 rounded-lg shadow-lg max-w-xs text-sm">
                        <div className="font-semibold mb-1">{specialty.name}</div>
                        <div>{specialty.description}</div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-cyan-500"></div>
                      </div>
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Couldn't Spot Your Specialty here?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Drop Your Email Below and Our Medical Billing Manager will reach you in no time.
            </p>

            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Input placeholder="Your Specialty" />
                <Input placeholder="Name" />
                <Input placeholder="Email Address" />
                <Input placeholder="Phone Number" />
              </div>
              <Button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3">SUBMIT</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
