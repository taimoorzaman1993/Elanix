"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, ArrowRight, Phone, Mail, Stethoscope, DollarSign, Clock, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import CommonQuestions from "@/components/common-questions"
import PricingTable from "@/components/pricing-table"

const services = [
  "Revenue Cycle Management",
  "Insurance Verification",
  "Prior Authorization",
  "Coding & Compliance",
  "Claims Processing & Submission",
  "Payment Posting & Reconciliation",
  "Denial Management & Appeals",
  "Patient Billing & Collections",

]

const benefits = [
  "99.5% claim accuracy rate",
  "30% average revenue increase",
  "85% reduction in claim denials",
  "24/7 customer support",
  "HIPAA compliant processes",
  "Real-time reporting & analytics",
]

const stats = [
  { number: "99.5%", label: "Claim Accuracy", icon: CheckCircle },
  { number: "30%", label: "Revenue Increase", icon: DollarSign },
  { number: "24/7", label: "Support Available", icon: Clock },
  { number: "500+", label: "Healthcare Providers", icon: Users },
]

const faqData = {
  title: "Common Questions About Medical Billing",
  questions: [
    {
      question: "What is medical billing?",
      answer:
        "Medical billing is the process of submitting and following up on claims with health insurance companies to receive payment for services rendered by healthcare providers.",
    },
    {
      question: "How long does it take to process claims?",
      answer:
        "Most claims are processed within 24-48 hours of submission. Clean claims typically receive payment within 14-30 days from insurance companies.",
    },
    {
      question: "What is your claim accuracy rate?",
      answer:
        "We maintain a 99.5% claim accuracy rate, which significantly reduces denials and speeds up the payment process for your practice.",
    },
    {
      question: "Do you handle denial management?",
      answer:
        "Yes, we provide comprehensive denial management services, including appeals and resubmissions to maximize your revenue recovery.",
    },
    {
      question: "Can you integrate with our existing practice management system?",
      answer:
        "We work with all major practice management systems and EMRs. Our team will handle the integration process seamlessly.",
    },
    {
      question: "What reporting do you provide?",
      answer:
        "We provide detailed real-time reports including claim status, payment tracking, denial analysis, and comprehensive revenue cycle analytics.",
    },
  ],
  serviceName: "Medical Billing",
}

const pricingTiers = [
  {
    name: "Basic",
    price: "4.5%",
    description: "of total collection\n(min $250)",
  },
  {
    name: "Standard",
    price: "4.99%",
    description: "of total collection",
    popular: true,
  },
  {
    name: "Premium",
    price: "Custom ",
    description: "",
  },
]

const pricingFeatures = [
  { name: "Claims Processing & Submission", basic: true, standard: true, premium: true },
  { name: "Payment Posting", basic: true, standard: true, premium: true },
  { name: "Denial Management", basic: false, standard: true, premium: true },
  { name: "Patient Billing", basic: true, standard: true, premium: true },
  { name: "Insurance Verification", basic: false, standard: true, premium: true },
  { name: "Prior Authorization", basic: false, standard: false, premium: true },
  { name: "Advanced Reporting", basic: false, standard: true, premium: true },
  { name: "Dedicated Account Manager", basic: false, standard: false, premium: true },
  { name: "24/7 Priority Support", basic: false, standard: false, premium: true },
  { name: "Revenue Cycle Analytics", basic: false, standard: true, premium: true },
]

export default function MedicalBillingClientPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4">
                  <Stethoscope className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <Badge className="bg-blue-500 text-white px-3 py-1 text-sm">Medical Billing</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Medical Billing Services</h1>
              <p className="text-lg md:text-xl text-blue-200 mb-6 md:mb-8">
                Comprehensive medical billing solutions designed to maximize your revenue while you focus on patient
                care. Trusted by 500+ healthcare providers across the USA.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 w-full sm:w-auto"
                  >
                    Schedule  Free Assessment
                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </Button>
                </Link>

                <Link href="/for-you"  target="_blank">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-6 md:px-8 py-3 w-full sm:w-auto bg-transparent"
                >
                  Learn More
                </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Image
                src="/services/medicalbilling.jpg?height=500&width=600"
                alt="Medical Billing Services"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Benefits Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Medical Billing Services</h2>
              <div className="space-y-3 md:space-y-4">
                {services.map((service, index) => (
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
                {benefits.map((benefit, index) => (
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

      {/* Pricing Table Section */}
      <PricingTable tiers={pricingTiers} features={pricingFeatures} serviceName="Medical Billing" />

      {/* Process Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Our Billing Process</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              A streamlined, efficient process designed to maximize your revenue and minimize your administrative
              burden.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { step: "1", title: "Setup & Integration", description: "We integrate with your existing systems" },
              { step: "2", title: "Claims Processing", description: "Expert coding and claim submission" },
              { step: "3", title: "Follow-up", description: "Denial management and appeals process" },
              { step: "4", title: "Reporting", description: "Detailed analytics and performance reports" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg md:text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-600 px-2">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 md:py-20 bg-gray-50">
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
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6">
                  "Elanix Enterprise has transformed our billing process completely. Our revenue increased by 35% within
                  the first six months, and we no longer worry about claim denials or payment delays."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold text-base md:text-lg">SJ</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Dr. Sarah Johnson</div>
                    <div className="text-sm md:text-base text-gray-600">Cardiology Practice, New York</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Common Questions */}
      <CommonQuestions {...faqData} />

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Maximize Your Practice Revenue?</h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-blue-100 max-w-2xl mx-auto px-4">
              Join hundreds of healthcare providers who trust Elanix Enterprise for their medical billing needs.
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
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-6 md:px-8 py-3 bg-transparent"
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
