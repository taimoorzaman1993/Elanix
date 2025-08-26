"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Eye, FileText, Users, Database, Mail, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PrivacyPolicyClientPage() {
  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: [
        "Personal identification information (Name, email address, phone number)",
        "Medical practice information and credentials",
        "Billing and payment information",
        "Website usage data and analytics",
        "Communication records and preferences",
      ],
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "Provide healthcare billing and credentialing services",
        "Process payments and manage accounts",
        "Communicate about services and updates",
        "Improve our services and website functionality",
        "Comply with legal and regulatory requirements",
      ],
    },
    {
      icon: Shield,
      title: "Information Protection",
      content: [
        "Industry-standard encryption for data transmission",
        "Secure servers with regular security updates",
        "Limited access to authorized personnel only",
        "Regular security audits and assessments",
        "HIPAA-compliant data handling procedures",
      ],
    },
    {
      icon: Users,
      title: "Information Sharing",
      content: [
        "We do not sell personal information to third parties",
        "Information shared only with service providers under strict agreements",
        "Data may be disclosed when required by law",
        "Business transfers may include customer information",
        "Anonymous data may be used for research and analytics",
      ],
    },
    {
      icon: Database,
      title: "Data Retention",
      content: [
        "Personal data retained as long as account is active",
        "Medical billing records kept per regulatory requirements",
        "Marketing data retained until opt-out request",
        "Website analytics data aggregated and anonymized",
        "Backup data securely deleted according to schedule",
      ],
    },
    {
      icon: Lock,
      title: "Your Rights",
      content: [
        "Access and review your personal information",
        "Request corrections to inaccurate data",
        "Delete your account and associated data",
        "Opt-out of marketing communications",
        "Receive a copy of your data in portable format",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how Elanix Enterprise collects, uses, and protects
              your personal information.
            </p>
            <div className="bg-blue-100 rounded-lg p-6 mb-8">
              <p className="text-blue-800 font-medium">
                <strong>Last Updated:</strong> January 15, 2025
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 md:gap-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center flex-shrink-0">
                        <section.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                        <ul className="space-y-3">
                          {section.content.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HIPAA Compliance Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">HIPAA Compliance</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-3xl mx-auto">
              As a healthcare service provider, Elanix Enterprise is fully committed to HIPAA compliance. We implement
              comprehensive safeguards to protect your protected health information (PHI) and ensure all data handling
              meets or exceeds federal requirements.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 rounded-lg p-6">
                <Lock className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Secure Encryption</h3>
                <p className="text-blue-100 text-sm">End-to-end encryption for all data transmission</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <Users className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Access Controls</h3>
                <p className="text-blue-100 text-sm">Strict user authentication and authorization</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <Database className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Audit Trails</h3>
                <p className="text-blue-100 text-sm">Comprehensive logging and monitoring</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions About Our Privacy Policy?</h2>
            <p className="text-gray-600 text-lg mb-8">
              If you have any questions about this Privacy Policy or how we handle your data, please don't hesitate to
              contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium shadow-lg flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>Contact Us</span>
                </Button>
              </Link>
              <Link href="tel:(512) 375-9999">
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>(512) 375-9999</span>
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
