"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"
import Link from "next/link"

interface PricingFeature {
  name: string
  basic: boolean
  standard: boolean
  premium: boolean
}

interface PricingTier {
  name: string
  price: string
  description: string
  popular?: boolean
}

interface PricingTableProps {
  tiers: PricingTier[]
  features: PricingFeature[]
  serviceName: string
}

export default function PricingTable({ tiers, features, serviceName }: PricingTableProps) {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">{serviceName} Pricing Plans</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Choose the perfect plan that fits your needs and budget. All plans include our core features and 24/7
            support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <Card className={`h-full ${tier.popular ? "ring-2 ring-blue-500 shadow-xl" : "shadow-lg"}`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-500 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{tier.price}</div>
                  <p className="text-sm md:text-base text-gray-600">{tier.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {features.map((feature, featureIndex) => {
                      const isIncluded =
                        tier.name === "Basic"
                          ? feature.basic
                          : tier.name === "Standard"
                            ? feature.standard
                            : feature.premium
                      return (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          {isIncluded ? (
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 flex-shrink-0" />
                          )}
                          <span className={`text-sm md:text-base ${isIncluded ? "text-gray-700" : "text-gray-400"}`}>
                            {feature.name}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                  <Link href="/contact" className="block">
                    <Button
                      className={`w-full ${tier.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-900 hover:bg-gray-800"} text-white`}
                      size="lg"
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 md:mt-12"
        >
        </motion.div>
      </div>
    </section>
  )
}
