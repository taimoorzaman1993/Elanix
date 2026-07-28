"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Phone, Mail, Smartphone, Clock, Users, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import CommonQuestions from "@/components/common-questions"
import PricingTable from "@/components/pricing-table"

const services = [
  "iOS App Development",
  "Android App Development",
  "Cross-Platform Development",
  "Web Application Development",
  "UI/UX Design",
  "App Store Optimization",
  "Maintenance & Support",
  "API Integration",
]

const benefits = [
  "Custom app solutions",
  "Cross-platform compatibility",
  "User-friendly design",
  "Scalable architecture",
  "App store deployment",
  "Ongoing maintenance",
]

const stats = [
  { number: "100+", label: "Apps Developed", icon: Smartphone },
  { number: "99%", label: "Client Satisfaction", icon: Star },
  { number: "24/7", label: "Support Available", icon: Clock },
  { number: "50+", label: "Happy Clients", icon: Users },
]

const faqData = {
  title: "Common Questions About App Development",
  questions: [
    {
      question: "What platforms do you develop apps for?",
      answer:
        "We develop apps for iOS, Android, and web platforms. We also specialize in cross-platform development using React Native and Flutter for cost-effective solutions.",
    },
    {
      question: "How long does it take to develop an app?",
      answer:
        "Development time varies based on complexity. Simple apps take 2-3 months, while complex applications can take 6-12 months. We provide detailed timelines during planning.",
    },
    {
      question: "Do you provide app design services?",
      answer:
        "Yes, we offer complete UI/UX design services including wireframing, prototyping, user interface design, and user experience optimization to ensure your app is intuitive and engaging.",
    },
    {
      question: "Can you help with app store submission?",
      answer:
        "We handle the entire app store submission process for both Apple App Store and Google Play Store, including optimization and compliance with store guidelines.",
    },
    {
      question: "Do you provide ongoing maintenance and updates?",
      answer:
        "Yes, we offer comprehensive maintenance packages including bug fixes, security updates, feature enhancements, and compatibility updates for new OS versions.",
    },
    {
      question: "What technologies do you use for app development?",
      answer:
        "We use modern technologies including React Native, Flutter, Swift, Kotlin, Node.js, and various cloud services to build robust, scalable applications.",
    },
  ],
  serviceName: "App Development",
}

export default function AppDevelopmentClientPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4">
                  <Smartphone className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <Badge className="bg-blue-500 text-white px-3 py-1 text-sm">App Development</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">App Development Services</h1>
              <p className="text-lg md:text-xl text-blue-200 mb-6 md:mb-8">
                Create powerful mobile and web applications tailored to your business needs with our expert development
                team specializing in modern technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 w-full sm:w-auto"
                  >
                    Contact Now
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
                src="/services/appdevelopment.jpg?height=500&width=600&text=App+Development"
                alt="App Development Services"
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Development Services</h2>
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Why Choose Our Services</h2>
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
        serviceName="App Development"
        tiers={[
          {
            name: "Basic",
            price: "$400",
            description: "3-4 Screen Mobile App",
          },
          {
            name: "Standard",
            price: "$700",
            description: "5-9 Screen Mobile App",
            popular: true,
          },
          {
            name: "Premium",
            price: "$1,100",
            description: "Multi-Screen + Admin Panel",
          },
        ]}
        features={[
          { name: "Custom UI/UX Design", basic: true, standard: true, premium: true },
          { name: "Cross-Platform Development", basic: true, standard: true, premium: true },
          { name: "App Store Deployment", basic: true, standard: true, premium: true },
          { name: "Push Notifications", basic: false, standard: true, premium: true },
          { name: "User Authentication", basic: false, standard: true, premium: true },
          { name: "Database Integration", basic: false, standard: true, premium: true },
          { name: "Admin Dashboard", basic: false, standard: false, premium: true },
          { name: "Advanced Analytics", basic: false, standard: false, premium: true },
          { name: "API Integration", basic: false, standard: true, premium: true },
          { name: "Real-time Features", basic: false, standard: false, premium: true },
        ]}
      />

      {/* Common Questions */}
      <CommonQuestions {...faqData} />

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Build Your App?</h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-blue-100 max-w-2xl mx-auto px-4">
              Transform your ideas into powerful applications that engage users and drive business growth.
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
