"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, X } from "lucide-react"
import Link from "next/link"

const pricingData = [
  {
    service: "Credentialing (Each Pair)",
    tier1: "$200.00",
    tier2: "$200.00",
    tier3: "$200.00",
  },
  {
    service: "Billing (In network)",
    tier1: "4.5%\n(min $250)",
    tier2: "3.99%",
    tier3: "Custom",
  },
  {
    service: "Web Development",
    tier1: "$600",
    tier2: "$1000",
    tier3: "$1400",
  },
  {
    service: "App Development",
    tier1: "$400",
    tier2: "$700",
    tier3: "$1100",
  },
  {
    service: "Digital Marketing",
    tier1: "$200",
    tier2: "$350",
    tier3: "$500",
  },
  {
    service: "AI Automation",
    tier1: "$350",
    tier2: "$700",
    tier3: "$1100",
  },
   {
    service: "Construction Estimation",
    tier1: "$250",
    tier2: "$600",
    tier3: "$900",
  },
  {
    service: "Virtual Assistant",
    tier1: "20 H/W\n($600 per month)",
    tier2: "40 H/W\n($1000 per month)",
    tier3: "Custom Plan",
  },
]

const pricingPlans = [
  {
    name: "Starter",
    price: "4.99%",
    description: "Perfect for small practices",
    features: ["Claims Processing", "Payment Posting", "Basic Reporting", "Email Support", "Monthly Statements"],
    notIncluded: ["Denial Management", "Prior Authorization", "24/7 Phone Support"],
    popular: false,
    color: "border-blue-200",
  },
  {
    name: "Professional",
    price: "4.5%",
    description: "Most popular for growing practices",
    features: [
      "Everything in Starter",
      "Denial Management",
      "Prior Authorization",
      "Advanced Reporting",
      "Phone Support",
      "Patient Statements",
      "Insurance Verification",
    ],
    notIncluded: ["Dedicated Account Manager", ],
    popular: true,
    color: "border-blue-500 ring-2 ring-blue-500",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large practices and hospitals",
    features: [
      "Everything in Professional",
      "Dedicated Account Manager",
      "Custom Integrations",
      "24/7 Priority Support",
      "Advanced Analytics",
      "Multi-location Support",
      "Custom Workflows",
      "API Access",
    ],
    notIncluded: [],
    popular: false,
    color: "border-blue-200",
  },
]

export default function PricingClientPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="bg-blue-500 text-white px-3 py-1 text-sm">Transparent Pricing</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Simple, Transparent Pricing</h1>
            <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto px-4">
              Choose the perfect plan for your practice. No hidden fees, no long-term contracts. Pay only for what you
              use.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Beautiful Pricing Table */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
              We ensure best pricing for our clients
            </h2>
            <p className="text-lg md:text-xl text-gray-600">Transparent pricing tailored to your practice's needs</p>
          </motion.div>

          <div className="max-w-6xl mx-auto overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Table Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
                <div className="grid grid-cols-4 gap-0">
                  <div className="p-4 md:p-6 font-semibold text-lg md:text-xl">Collections</div>
                  <div className="p-4 md:p-6 text-center font-semibold text-lg md:text-xl border-l border-blue-500">
                    Basic 

                  </div>
                  <div className="p-4 md:p-6 text-center font-semibold text-lg md:text-xl border-l border-blue-500">
                    Standard
                  </div>
                  <div className="p-4 md:p-6 text-center font-semibold text-lg md:text-xl border-l border-blue-500">
                    Premium
                  </div>
                </div>
              </div>

              {/* Table Body */}
              <div className="bg-white rounded-b-lg shadow-lg">
                {pricingData.map((row, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-4 gap-0 ${index !== pricingData.length - 1 ? "border-b border-gray-200" : ""}`}
                  >
                    <div className="p-4 md:p-6 font-medium text-gray-800 bg-gray-50">{row.service}</div>
                    <div className="p-4 md:p-6 text-center text-gray-700 border-l border-gray-200 whitespace-pre-line">
                      {row.tier1}
                    </div>
                    <div className="p-4 md:p-6 text-center text-gray-700 border-l border-gray-200 whitespace-pre-line">
                      {row.tier2}
                    </div>
                    <div className="p-4 md:p-6 text-center text-gray-700 border-l border-gray-200 whitespace-pre-line">
                      {row.tier3}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <Card className={`h-full ${plan.color} ${plan.popular ? "shadow-xl" : "shadow-lg"}`}>
                  <CardHeader className="text-center p-4 md:p-6">
                    <CardTitle className="text-xl md:text-2xl font-bold">{plan.name}</CardTitle>
                    <div className="text-3xl md:text-4xl font-bold text-blue-600 my-4">
                      {plan.price}
                      {plan.price !== "Custom" && (
                        <span className="text-base md:text-lg text-gray-600">/collection</span>
                      )}
                   
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4 p-4 md:p-6 pt-0">
                    <div className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-sm md:text-base text-gray-700">{feature}</span>
                        </div>
                      ))}
                      {plan.notIncluded.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <X className="w-4 h-4 md:w-5 md:h-5 text-gray-400 mr-3 flex-shrink-0" />
                          <span className="text-sm md:text-base text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/contact">
                      <Button
                        className={`w-full mt-6 ${
                          plan.popular
                            ? "bg-blue-600 hover:bg-blue-700 text-white"
                            : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                        }`}
                      >
                        Get Started
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            <Card>
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-3">What percentage do you charge?</h3>
                <p className="text-gray-600">
                  Our pricing starts at 2.49% of collections for our Starter plan, 3.99% for Professional, and custom
                  pricing for Enterprise. No hidden fees or setup costs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-3">Is there a contract requirement?</h3>
                <p className="text-gray-600">
                  No long-term contracts required. We believe in earning your business every month through excellent
                  service and results.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-3">What's included in the setup?</h3>
                <p className="text-gray-600">
                  Free setup includes practice analysis, workflow optimization, staff training, and integration with
                  your existing systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Get Started?</h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-blue-100 max-w-2xl mx-auto px-4">
              Join hundreds of healthcare providers who trust Elanix Enterprise for their medical billing needs.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-6 md:px-8 py-3">
                Get Free Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
