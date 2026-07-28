"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    title: "Cardiology Practice, New York",
    content:
      "Elanix Enterprise has transformed our billing process completely. Our revenue increased by 35% within the first six months, and we no longer worry about claim denials or payment delays. Their team is professional, responsive, and truly understands the complexities of medical billing.",
    rating: 5,
    image: "/testom/test1.jpeg?height=80&width=80",
    specialty: "Cardiology",
  },
  {
    name: "Dr. Michael Chen",
    title: "Family Medicine, California",
    content:
      "The virtual assistant services have been a game-changer for our practice. We can now focus on patient care while they handle all administrative tasks efficiently. The cost savings and improved productivity have been remarkable.",
    rating: 5,
    image: "/testom/test2.jpeg?height=80&width=80",
    specialty: "Family Medicine",
  },
  {
    name: "Dr. Emily Rodriguez",
    title: "Pediatrics, Texas",
    content:
      "Their credentialing services helped us get licensed in multiple states quickly. The process was smooth and professional throughout. We highly recommend Elanix Enterprise for any healthcare provider looking to expand their practice.",
    rating: 5,
    image: "/testom/test3.jpeg?height=80&width=80",
    specialty: "Pediatrics",
  },
  {
    name: "Dr. Robert Kim",
    title: "Orthopedic Surgery, Florida",
    content:
      "The web development team created a beautiful, HIPAA-compliant website for our practice. Patient inquiries have increased by 50% since the launch. Their attention to detail and understanding of healthcare needs is exceptional.",
    rating: 5,
    image: "/testom/test4.jpeg?height=80&width=80",
    specialty: "Orthopedics",
  },
  {
    name: "Dr. Lisa Thompson",
    title: "Dermatology, Arizona",
    content:
      "Their digital marketing services have significantly increased our online presence. We're now ranking on the first page of Google for our target keywords, and new patient appointments have doubled.",
    rating: 5,
    image: "/testom/test5.jpeg?height=80&width=80",
    specialty: "Dermatology",
  },
  {
    name: "Dr. James Wilson",
    title: "Internal Medicine, Illinois",
    content:
      "Working with Elanix Enterprise has been one of the best decisions for our practice. Their comprehensive approach to revenue cycle management has streamlined our operations and improved our cash flow significantly.",
    rating: 5,
    image: "/testom/test6.jpeg?height=80&width=80",
    specialty: "Internal Medicine",
  },
]

export default function TestimonialsClientPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="bg-blue-500 text-white px-3 py-1 text-sm">Client Success Stories</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">What Our Clients Say</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Discover how Elanix has helped bussinesses across the country transform their practices and
              achieve remarkable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <Quote className="w-8 h-8 text-blue-600 mb-4" />
                    <blockquote className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</blockquote>
                    <div className="flex text-yellow-400 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <div className="flex items-center space-x-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-gray-600 text-sm">{testimonial.title}</div>
                        <Badge variant="outline" className="mt-1 text-xs">
                          {testimonial.specialty}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Trusted by Healthcare Professionals</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Happy Clients" },
              { number: "99%", label: "Client Satisfaction" },
              { number: "35%", label: "Average Revenue Increase" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
