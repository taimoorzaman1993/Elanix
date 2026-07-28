"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Phone, Mail, Headphones, Clock, Users, DollarSign } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import CommonQuestions from "@/components/common-questions"
import PricingTable from "@/components/pricing-table"

const services = [
  "Administrative Support",
  "Patient Communication",
  "Appointment Scheduling",
  "Data Entry & Management",
  "Customer Service",
  "Social Media Management",
  "Research & Analysis",
  "Document Preparation",
]

const benefits = [
  "Cost-effective solution",
  "Highly trained professionals",
  "24/7 availability",
  "Scalable workforce",
  "Reduced overhead costs",
  "Improved productivity",
]

const stats = [
  { number: "50%", label: "Cost Savings", icon: DollarSign },
  { number: "24/7", label: "Availability", icon: Clock },
  { number: "100+", label: "Virtual Assistants", icon: Users },
  { number: "99%", label: "Client Satisfaction", icon: CheckCircle },
]

const faqData = {
  title: "Common Questions About Virtual Assistance",
  questions: [
    {
      question: "What tasks can virtual assistants handle?",
      answer:
        "Our virtual assistants can handle administrative tasks, patient communication, appointment scheduling, data entry, customer service, social media management, research, and document preparation.",
    },
    {
      question: "How do you ensure quality and reliability?",
      answer:
        "All our virtual assistants are thoroughly vetted, trained, and monitored. We provide ongoing supervision and quality assurance to ensure consistent, high-quality service.",
    },
    {
      question: "What are the working hours for virtual assistants?",
      answer:
        "We offer flexible scheduling including 24/7 coverage. You can choose the hours that work best for your practice, whether it's during business hours or extended coverage.",
    },
    {
      question: "How quickly can we get started?",
      answer:
        "We can typically have a virtual assistant assigned to your practice within 48-72 hours after completing the onboarding process and understanding your specific needs.",
    },
    {
      question: "Is training provided for virtual assistants?",
      answer:
        "Yes, we provide comprehensive training on your practice's procedures, software systems, and specific requirements to ensure seamless integration with your team.",
    },
    {
      question: "How do you handle data security and HIPAA compliance?",
      answer:
        "All our virtual assistants are HIPAA trained and we maintain strict data security protocols. We use secure systems and follow all healthcare privacy regulations.",
    },
  ],
  serviceName: "Virtual Assistance",
}

export default function VirtualAssistanceClientPage() {
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
                <Badge className="bg-blue-500 text-white px-3 py-1 text-sm">Virtual Services</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Virtual Assistance Services</h1>
              <p className="text-lg md:text-xl text-blue-200 mb-6 md:mb-8">
                Scale your operations with our skilled virtual assistants specialized in healthcare administration and
                business support. Available 24/7 to help grow your practice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 w-full sm:w-auto"
                  >
                    Hire Virtual Assistant 
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
                src="/services/virtualassistant.jpg?height=500&width=600"
                alt="Virtual Assistance Services"
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Virtual Assistant Services</h2>
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
      <PricingTable
        serviceName="Virtual Assistance"
        tiers={[
          {
            name: "Basic",
            price: "$600",
            description: "Half-Time Assistant",
          },
          {
            name: "Standard",
            price: "$1,000",
            description: "Full-Time Assistant",
            popular: true,
          },
          {
            name: "Premium",
            price: "Custom",
            description: "Custom + Office Data Entry",
          },
        ]}
        features={[
          { name: "Administrative Support", basic: true, standard: true, premium: true },
          { name: "Patient Communication", basic: true, standard: true, premium: true },
          { name: "Appointment Scheduling", basic: true, standard: true, premium: true },
          { name: "Data Entry & Management", basic: false, standard: true, premium: true },
          { name: "Customer Service Support", basic: false, standard: true, premium: true },
          { name: "Social Media Management", basic: false, standard: false, premium: true },
          { name: "Research & Analysis", basic: false, standard: false, premium: true },
          { name: "Document Preparation", basic: false, standard: true, premium: true },
          { name: "Office Data Entry", basic: false, standard: false, premium: true },
          { name: "Dedicated Account Manager", basic: false, standard: false, premium: true },
        ]}
      />

      {/* Common Questions */}
      <CommonQuestions {...faqData} />

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Scale Your Operations?</h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-blue-100 max-w-2xl mx-auto px-4">
              Hire skilled virtual assistants from Elanix Enterprise and focus on growing your business.
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
