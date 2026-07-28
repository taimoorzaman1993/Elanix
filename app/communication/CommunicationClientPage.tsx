"use client"

import { motion } from "framer-motion"
import { MessageCircle, Phone, Mail, Clock, Users, Headphones, Video, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CommunicationClientPage() {
  const communicationChannels = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Direct phone support for urgent matters and consultations",
      availability: "Monday - Friday, 8 AM - 6 PM EST",
      contact: "(512) 375-9999",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Comprehensive email support for detailed inquiries",
      availability: "24/7 - Response within 24 hours",
      contact: "info@elanixenterprise.com",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Real-time chat support for quick questions",
      availability: "Monday - Friday, 9 AM - 5 PM EST",
      contact: "Available on website",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Video,
      title: "Video Consultations",
      description: "Face-to-face meetings for complex discussions",
      availability: "By appointment only",
      contact: "Schedule via phone or email",
      color: "from-orange-500 to-orange-600",
    },
  ]

  const communicationPolicies = [
    {
      icon: Clock,
      title: "Response Times",
      points: [
        "Urgent issues: Within 2 hours",
        "General inquiries: Within 24 hours",
        "Project updates: Weekly reports",
        "Other questions: Same business day",
      ],
    },
    {
      icon: Users,
      title: "Dedicated Support Team",
      points: [
        "Assigned account manager for each client",
        "Specialized support for different services",
        "Escalation procedures for complex issues",
        "Regular check-ins and progress updates",
      ],
    },
    {
      icon: FileText,
      title: "Communication Preferences",
      points: [
        "Choose your preferred communication method",
        "Set frequency of updates and reports",
        "Customize notification settings",
        "Access to client portal for 24/7 updates",
      ],
    },
    {
      icon: Headphones,
      title: "Professional Standards",
      points: [
        "HIPAA-compliant communication protocols",
        "Secure channels for sensitive information",
        "Professional and courteous interactions",
        "Clear documentation of all communications",
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
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Communication Hub</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Stay connected with Elanix Enterprise through multiple communication channels. We're committed to
              providing clear, timely, and professional communication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Communication Channels */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Reach Us</h2>
            <p className="text-gray-600 text-lg">Choose the communication method that works best for you</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communicationChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${channel.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <channel.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{channel.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{channel.description}</p>
                    <div className="space-y-2">
                      <p className="text-xs text-gray-500 font-medium">{channel.availability}</p>
                      <p className="text-blue-600 font-semibold">{channel.contact}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Communication Policies */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Communication Standards</h2>
            <p className="text-gray-600 text-lg">We maintain high standards for all client communications</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {communicationPolicies.map((policy, index) => (
              <motion.div
                key={policy.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center flex-shrink-0">
                        <policy.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{policy.title}</h3>
                        <ul className="space-y-2">
                          {policy.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{point}</span>
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

      {/* Customer Support Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Customer Support</h2>
            <p className="text-gray-600 text-lg mb-8">
               Reach out for assistance with your questions, concerns, or support needs
            </p>
            <div className="bg-white rounded-lg p-8 shadow-lg max-w-md mx-auto">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Dedicated Support Line</h3>
              <p className="text-2xl font-bold text-gray-900 mb-4">(512) 375-9999</p>
              <p className="text-sm text-gray-600">Available 24/7 — our team is ready to assist you anytime</p>
            </div>
          </motion.div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
            <p className="text-gray-600 text-lg mb-8">Contact us today to discuss your  business needs</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="sms:+15123759999" >
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium shadow-lg flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>Send Message</span>
                </Button>
              </Link>
              <Link href="tel:(512) 375-9999">
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
