"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, BarChart3, Rocket, Layers, CheckCircle, Download } from "lucide-react"
import Link from "next/link"

const practiceTypes = [
  {
    title: "Startups",
    description: "1–5 Team Members",
    icon: Rocket,
    features: [
      "Simple setup process",
      "Cost-effective solutions",
      "Personalized account management",
      "Quick onboarding & training",
    ],
    color: "bg-blue-600",
  },
  {
    title: "Growing Businesses",
    description: "6-20 Providers",
    icon: BarChart3,
    features: ["Scalable solutions to match growth",
       "Advanced reporting & insights", 
       "Multi-branch support", 
       "Dedicated support team"],
    color: "bg-blue-700",
  },
  {
    title: "Enterprises",
    description: "20+ Providers",
    icon: Building2,
    features: ["Enterprise-grade solutions",
       "Custom integrations",
        "24/7 priority support", 
        "Advanced analytics & automation"],
    color: "bg-blue-800",
  },
  {
    title: "Industry-Specific Solutions",
    description: "All Industries",
    icon: Layers,
    features: [
      "Tailored strategies for unique needs",
      "Specialized expertise",
      "Compliance & security assurance",
      "End-to-end business support",
    ],
    color: "bg-cyan-600",
  },
]

const benefits = [
  "Boost efficiency and profitability",
  "Reduce operational bottlenecks",
  "Faster project delivery and support",
  "Secure and compliant processes",
  "24/7 customer support",
  "No long-term contracts",
]

const handleDownloadGuide = () => {
  // Create a dummy PDF download
  const link = document.createElement("a")
  link.href = "/Elanix.pdf" // This would be a real PDF file in production
  link.download = "Elanix-Enterprise-Guide.pdf"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export default function ForYouClientPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="bg-blue-500 text-white px-3 py-1 text-sm">Tailored Solutions</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Solutions Built For You</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Whether you’re a startup, small business, or large enterprise, 
              Elanix Enterprise provides tailored solutions to fit your unique goals and scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Practice Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Find Your Perfect Fit</h2>
            <p className="text-xl text-gray-600">Customized solutions for every practice type and size</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {practiceTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div
                      className={`w-16 h-16 ${type.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <type.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <ul className="space-y-2">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">Learn More</Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Businesses Choose Elanix Enterprise
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                At Elanix Enterprise, we understand that every business is unique. 
                That’s why we provide flexible and scalable solutions designed to grow with you.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-3" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Get Started Today</h3>
              <p className="text-blue-700 mb-6">
                Ready to see how Elanix Enterprise can transform your business? 
                Schedule a free consultation today and discover the solution tailored to your needs.
              </p>
              <div className="space-y-4">
                <Link href="/contact">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Schedule Free Consultation</Button>
                </Link>
                <Button
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  onClick={handleDownloadGuide}
                >
                  <Download className="mr-2 w-4 h-4" />
                  Download Practice Guide
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-6">Ready to Find Your Perfect Solution?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Let Elanix Enterprise help you choose the right solution for your bussiness. Get started with a free
              consultation today.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                Get Free Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
