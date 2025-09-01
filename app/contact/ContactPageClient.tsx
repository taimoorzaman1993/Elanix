"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle } from "lucide-react"
import { submitContactForm } from "../actions/contact"

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    practiceName: "",
    specialty: "",
    providers: "",
    message: "",
  })

  const [status, setStatus] = useState<{ success?: string; error?: string }>({})
  const [isPending, setIsPending] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsPending(true)
    setStatus({})

    const data = new FormData()
    Object.entries(formData).forEach(([key, value]) => data.append(key, value))

    try {
      const res = await submitContactForm(data)

      if (res.success) {
        setStatus({ success: `Thank you ${res.name}! Your message has been sent successfully.` })
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          practiceName: "",
          specialty: "",
          providers: "",
          message: "",
        })
      } else {
        setStatus({ error: res.error })
      }
    } catch (err) {
      console.error(err)
      setStatus({ error: "Something went wrong. Please try again." })
    } finally {
      setIsPending(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="mb-4 bg-blue-600 text-white">Get In Touch</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Elanix Enterprise</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Ready to transform your medical billing? Get your free quote today and discover how we can help maximize
              your practice revenue.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Form */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Your Free Quote</h2>

                  {/* Status Messages */}
                  {status.success && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-green-800">{status.success}</p>
                    </div>
                  )}

                  {status.error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
                      <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <p className="text-red-800">{status.error}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>

                    {/* Practice Name */}
                    <div>
                      <label htmlFor="practiceName" className="block text-sm font-medium text-gray-700 mb-2">
                        Practice Name
                      </label>
                      <Input
                        id="practiceName"
                        name="practiceName"
                        value={formData.practiceName}
                        onChange={handleInputChange}
                        placeholder="Enter your practice name"
                      />
                    </div>

                    {/* Specialty */}
                    <div>
                      <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-2">
                        Medical Specialty
                      </label>
                      <Input
                        id="specialty"
                        name="specialty"
                        value={formData.specialty}
                        onChange={handleInputChange}
                        placeholder="e.g., Cardiology, Family Medicine"
                      />
                    </div>

                    {/* Providers */}
                    <div>
                      <label htmlFor="providers" className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Providers
                      </label>
                      <select
                        id="providers"
                        name="providers"
                        value={formData.providers}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select number of providers</option>
                        <option value="1">1 Provider</option>
                        <option value="2-5">2-5 Providers</option>
                        <option value="6-10">6-10 Providers</option>
                        <option value="11-20">11-20 Providers</option>
                        <option value="20+">20+ Providers</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your billing needs and challenges"
                        rows={4}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isPending}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 transition-colors"
                    >
                      {isPending ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </div>
                      ) : (
                        "Get Free Quote"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Header */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Ready to streamline your medical billing? Our team of experts at Elanix Enterprise is here to help you
                  maximize your revenue and reduce administrative burden.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* USA Office */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">USA Office</h3>
                      <p className="text-gray-600">
                        833 Mahler Rd, Ste 9B
                        <br />
                        Burlingame, CA 94010
                      </p>
                      <p className="text-gray-600 mt-2">
                        <Phone className="w-4 h-4 inline mr-1 text-blue-600" />
                        (512) 375-9999
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* UK Office */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">UK Office</h3>
                      <p className="text-gray-600">
                        66 Lawrence Road
                        <br />
                        Leeds LS8 3HS, West Yorkshire
                      </p>
                      <p className="text-gray-600 mt-2">
                        <Phone className="w-4 h-4 inline mr-1 text-blue-600" />
                        00447455139486
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">info@elanixenterprise.com</p>
                      <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Business Hours */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM EST</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM EST</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Why Choose Us */}
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Why Choose Elanix Enterprise?</h3>
                <ul className="space-y-2 text-blue-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>99.5% claim accuracy rate</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>30% average revenue increase</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>24/7 customer support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>No long-term contracts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>HIPAA compliant solutions</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
