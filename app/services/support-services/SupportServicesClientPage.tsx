"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Phone, Mail, Headphones, Clock, Users, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import CommonQuestions from "@/components/common-questions"
import PricingTable from "@/components/pricing-table"

const services = [
  "24/7 Technical Support",
  "Customer Service Helpdesk",
  "System Troubleshooting",
  "Training & Onboarding",
  "Account Management",
  "Emergency Response",
  "Remote Assistance",
  "Documentation & Resources",
]

const benefits = [
  "Round-the-clock availability",
  "Expert technical assistance",
  "Quick response times",
  "Personalized support",
  "Multiple contact channels",
  "Proactive monitoring",
]

const stats = [
  { number: "24/7", label: "Support Availability", icon: Clock },
  { number: "<5min", label: "Average Response", icon: MessageCircle },
  { number: "99%", label: "Issue Resolution", icon: CheckCircle },
  { number: "500+", label: "Happy Clients", icon: Users },
]

const faqData = {
  title: "Common Questions About Support Services",
  questions: [
    {
      question: "What hours is support available?",
      answer:
        "Our support team is available 24/7, 365 days a year. You can reach us anytime via phone, email, live chat, or our support portal for immediate assistance.",
    },
    {
      question: "How quickly do you respond to support requests?",
      answer:
        "We respond to urgent issues within 5 minutes, standard requests within 1 hour, and general inquiries within 4 hours during business days.",
    },
    {
      question: "What types of issues can you help with?",
      answer:
        "We assist with technical issues, software problems, billing questions, training needs, system setup, troubleshooting, and any other practice-related concerns.",
    },
    {
      question: "Do you provide remote assistance?",
      answer:
        "Yes, we offer secure remote assistance to troubleshoot issues, provide training, and help with system configuration directly on your computers with your permission.",
    },
    {
      question: "Is there an additional cost for support services?",
      answer:
        "Basic support is included with all our service packages. Premium support options with faster response times and dedicated account managers are available for an additional fee.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can reach our support team via phone at (512) 375-9999, email at support@elanixenterprise.com, live chat on our website, or through our client portal.",
    },
  ],
  serviceName: "Support Services",
}

export default function SupportServicesClientPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4">
                  <Headphones className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <Badge className="bg-blue-500 text-white px-3 py-1 text-sm">Support Services</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">24/7 Support Services</h1>
              <p className="text-lg md:text-xl text-blue-200 mb-6 md:mb-8">
                Our dedicated support team is available 24/7 to assist you with any questions or issues you may
                encounter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 w-full sm:w-auto"
                  >
                    Get Started 
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
                src="/services/customer.jpg?height=500&width=600&text=24/7+Support"
                alt="24/7 Support Services"
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Support Services</h2>
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Why Choose Our Support</h2>
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

      <PricingTable
        serviceName="Support Services"
        tiers={[
          {
            name: "Basic",
            price: "$100",
            description: "Standard Support Package",
          },
          {
            name: "Standard",
            price: "$200",
            description: "Priority Support Package",
            popular: true,
          },
          {
            name: "Premium",
            price: "$300",
            description: "Enterprise Support Package",
          },
        ]}
        features={[
          { name: "Email Support", basic: true, standard: true, premium: true },
          { name: "Phone Support", basic: true, standard: true, premium: true },
          { name: "System Troubleshooting", basic: true, standard: true, premium: true },
          { name: "Priority Response (<1hr)", basic: false, standard: true, premium: true },
          { name: "Remote Assistance", basic: false, standard: true, premium: true },
          { name: "24/7 Emergency Support", basic: false, standard: false, premium: true },
          { name: "Dedicated Account Manager", basic: false, standard: false, premium: true },
          { name: "Proactive System Monitoring", basic: false, standard: false, premium: true },
          { name: "Training & Onboarding", basic: false, standard: true, premium: true },
          { name: "Custom Documentation", basic: false, standard: false, premium: true },
        ]}
      />

      {/* Common Questions */}
      <CommonQuestions {...faqData} />

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Need Help? We're Here 24/7</h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-blue-100 max-w-2xl mx-auto px-4">
              Get immediate assistance from our dedicated support team whenever you need it.
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
                  Contact Support
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
