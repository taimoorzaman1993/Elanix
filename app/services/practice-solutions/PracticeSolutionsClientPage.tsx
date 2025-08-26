"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Phone, Mail, Settings, Clock, Users, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import CommonQuestions from "@/components/common-questions"

const services = [
  "Practice Workflow Optimization",
  "Staff Training & Development",
  "Technology Integration",
  "Patient Experience Enhancement",
  "Operational Efficiency Analysis",
  "Quality Improvement Programs",
  "Compliance Management",
  "Strategic Planning & Consulting",
]

const benefits = [
  "Improved operational efficiency",
  "Enhanced patient satisfaction",
  "Streamlined workflows",
  "Reduced administrative burden",
  "Better staff productivity",
  "Compliance assurance",
]

const stats = [
  { number: "40%", label: "Efficiency Improvement", icon: TrendingUp },
  { number: "90%", label: "Client Satisfaction", icon: CheckCircle },
  { number: "150+", label: "Practices Optimized", icon: Users },
  { number: "24/7", label: "Support Available", icon: Clock },
]

const faqData = {
  title: "Common Questions About Practice Solutions",
  questions: [
    {
      question: "What areas of practice management do you optimize?",
      answer:
        "We optimize all aspects including patient flow, scheduling, billing processes, staff workflows, technology utilization, compliance procedures, and patient communication systems.",
    },
    {
      question: "How long does a practice optimization project take?",
      answer:
        "Most optimization projects take 3-6 months depending on practice size and complexity. We provide phased implementation to minimize disruption to daily operations.",
    },
    {
      question: "Do you provide staff training as part of the solution?",
      answer:
        "Yes, comprehensive staff training is included in all our solutions. We ensure your team is fully equipped to implement and maintain the optimized processes.",
    },
    {
      question: "Can you help with technology integration?",
      answer:
        "Absolutely. We assist with EMR optimization, practice management system integration, and implementation of new technologies to improve efficiency and patient care.",
    },
    {
      question: "What kind of ROI can we expect?",
      answer:
        "Most practices see 20-40% improvement in operational efficiency, reduced costs, increased revenue, and improved patient satisfaction within 6-12 months.",
    },
    {
      question: "Do you provide ongoing support after implementation?",
      answer:
        "Yes, we offer ongoing support packages including regular check-ins, performance monitoring, additional training, and continuous optimization recommendations.",
    },
  ],
  serviceName: "Practice Solutions",
}

export default function PracticeSolutionsClientPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4">
                  <Settings className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <Badge className="bg-blue-500 text-white px-3 py-1 text-sm">Practice Solutions</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Practice Management Solutions</h1>
              <p className="text-lg md:text-xl text-blue-200 mb-6 md:mb-8">
                Comprehensive practice management solutions designed to optimize operations and improve overall
                efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 w-full sm:w-auto"
                  >
                    Optimize Practice
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
                src="/services/practicesolution.jpg?height=500&width=600&text=Practice+Solutions"
                alt="Practice Management Solutions"
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Practice Solutions</h2>
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Why Choose Our Solutions</h2>
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

      {/* Common Questions */}
      <CommonQuestions {...faqData} />

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Optimize Your Practice?</h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-blue-100 max-w-2xl mx-auto px-4">
              Transform your practice operations with our comprehensive management solutions.
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
