"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Phone, Mail, Megaphone, TrendingUp, Users, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import CommonQuestions from "@/components/common-questions"
import PricingTable from "@/components/pricing-table"

const services = [
  "Search Engine Optimization (SEO)",
  "Pay-Per-Click Advertising (PPC)",
  "Social Media Marketing",
  "Content Marketing",
  "Email Marketing",
  "Online Reputation Management",
  "Analytics & Reporting",
  "Conversion Optimization",
]

const benefits = [
  "Increased online visibility",
  "More qualified leads",
  "Higher conversion rates",
  "Better ROI tracking",
  "Brand awareness growth",
  "Competitive advantage",
]

const stats = [
  { number: "150%", label: "Average ROI", icon: TrendingUp },
  { number: "300+", label: "Campaigns Managed", icon: Target },
  { number: "50+", label: "Happy Clients", icon: Users },
  { number: "24/7", label: "Campaign Monitoring", icon: CheckCircle },
]

const faqData = {
  title: "Common Questions About Digital Marketing",
  questions: [
    {
      question: "What digital marketing services do you offer?",
      answer:
        "We offer comprehensive digital marketing services including SEO, PPC advertising, social media marketing, content marketing, email marketing, online reputation management, and analytics reporting.",
    },
    {
      question: "How long does it take to see results from SEO?",
      answer:
        "SEO results typically begin to show within 3-6 months, with significant improvements visible after 6-12 months. The timeline depends on competition, current website status, and target keywords.",
    },
    {
      question: "Do you work with healthcare practices specifically?",
      answer:
        "Yes, we specialize in healthcare marketing and understand the unique challenges and regulations that healthcare providers face. We ensure all marketing efforts are HIPAA compliant.",
    },
    {
      question: "How do you measure marketing success?",
      answer:
        "We track key performance indicators including website traffic, lead generation, conversion rates, cost per acquisition, return on investment, and patient acquisition metrics specific to healthcare practices.",
    },
    {
      question: "Can you help with online reputation management?",
      answer:
        "We help healthcare practices monitor and improve their online reputation through review management, patient feedback systems, and proactive reputation building strategies.",
    },
    {
      question: "What's included in your reporting?",
      answer:
        "Our reports include detailed analytics on website performance, campaign results, lead generation, conversion tracking, ROI analysis, and actionable recommendations for improvement.",
    },
  ],
  serviceName: "Digital Marketing",
}

export default function DigitalMarketingClientPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4">
                  <Megaphone className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <Badge className="bg-blue-500 text-white px-3 py-1 text-sm">Digital Marketing</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Digital Marketing Services</h1>
              <p className="text-lg md:text-xl text-blue-200 mb-6 md:mb-8">
                Comprehensive digital marketing strategies to attract more patients and grow your practice. Data-driven
                campaigns that deliver measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 w-full sm:w-auto"
                  >
                    Start Marketing
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
                src="/services/digitalmarketing.jpg?height=500&width=600"
                alt="Digital Marketing Services"
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Marketing Services</h2>
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Marketing Benefits</h2>
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
      <PricingTable
        serviceName="Digital Marketing"
        tiers={[
          {
            name: "Basic",
            price: "$200",
            description: "Essential Marketing Package",
          },
          {
            name: "Standard",
            price: "$350",
            description: "Comprehensive Marketing",
            popular: true,
          },
          {
            name: "Premium",
            price: "$500",
            description: "Full-Service Marketing",
          },
        ]}
        features={[
          { name: "SEO Optimization", basic: true, standard: true, premium: true },
          { name: "Social Media Management", basic: true, standard: true, premium: true },
          { name: "Content Creation", basic: true, standard: true, premium: true },
          { name: "PPC Campaign Management", basic: false, standard: true, premium: true },
          { name: "Email Marketing Campaigns", basic: false, standard: true, premium: true },
          { name: "Online Reputation Management", basic: false, standard: false, premium: true },
          { name: "Advanced Analytics & Reporting", basic: false, standard: false, premium: true },
          { name: "Conversion Rate Optimization", basic: false, standard: false, premium: true },
          { name: "Monthly Strategy Consultation", basic: false, standard: true, premium: true },
          { name: "24/7 Campaign Monitoring", basic: false, standard: false, premium: true },
        ]}
      />

      {/* Common Questions */}
      <CommonQuestions {...faqData} />

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Grow Your Practice?</h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-blue-100 max-w-2xl mx-auto px-4">
              Start your digital marketing journey and attract more patients to your practice.
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
                  Get Started
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
