"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, CheckCircle, Globe, Mail, Phone, User } from "lucide-react"

export default function PayoneerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="mb-6 bg-blue-600 text-white text-lg px-4 py-2">
              <Shield className="w-5 h-5 mr-2" />
              Verification Page
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Payoneer Verification</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              This page serves as official verification for Payoneer account validation and compliance purposes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Verification Status */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Verification Confirmed</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              This website has been successfully verified and is owned by the individual listed below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Owner Information */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Website Owner Information</h2>
              <p className="text-lg text-gray-600">
                This website is owned and operated by the following verified individual:
              </p>
            </div>

            <Card className="shadow-2xl border-0 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-full mb-6">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">Taimoor Uz Zaman Chaudhry</h3>
                <p className="text-blue-100 text-lg">Website Owner & Operator</p>
              </div>

              <CardContent className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-lg">Email Address</h4>
                        <p className="text-gray-600 text-lg">Taimooruzzaman@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-lg">Phone Number</h4>
                        <p className="text-gray-600 text-lg">+92 315 5108667</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Globe className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-lg">Website</h4>
                        <p className="text-gray-600 text-lg">Elanix Enterprise</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-lg">Verification Status</h4>
                        <p className="text-green-600 text-lg font-semibold">Verified & Active</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 text-lg mb-3">Verification Details</h4>
                  <ul className="space-y-2 text-blue-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />
                      Identity verified through official documentation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />
                      Business registration confirmed
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />
                      Contact information validated
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />
                      Payoneer compliance requirements met
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">About This Verification</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              This verification page has been created to comply with Payoneer's requirements for business account
              verification. It serves as official documentation of website ownership and business legitimacy for
              financial service providers and payment processors.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Secure</h3>
                  <p className="text-gray-600 text-sm">All information is verified and secure</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Verified</h3>
                  <p className="text-gray-600 text-sm">Identity and business confirmed</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Globe className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Compliant</h3>
                  <p className="text-gray-600 text-sm">Meets all regulatory requirements</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
