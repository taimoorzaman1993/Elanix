"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Clock, Target, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const stats = [
  { number: "500+", label: "Healthcare Providers", icon: Users },
  { number: "10+", label: "Years Experience", icon: Clock },
  { number: "99.5%", label: "Accuracy Rate", icon: Target },
  { number: "50+", label: "Industry Awards", icon: Award },
]

const values = [
  {
    title: "Accuracy",
    description: "We deliver precise and reliable solutions to ensure consistent results for every business.",
    icon: Target,
  },
  {
    title: "Transparency",
    description: "Clear communication and transparent reporting in everything we do.",
    icon: CheckCircle,
  },
  {
    title: "Innovation",
    description: "We harness the latest technology to create smarter solutions that drive business growth.",
    icon: Award,
  },
  {
    title: "Partnership",
    description: "We build long-term partnerships with businesses, helping them grow and succeed with trust and reliability.",
    icon: Users,
  },
]

const team = [
  {
    name: "Taimoor Zaman",
    role: "CEO & Founder",
    image: "/leadership/ceo.jpg?height=300&width=300",
    bio: "20+ years in healthcare administration and medical billing.",
  },
  {
    name: "Adnan Ahmed",
    role: "Chief Medical Officer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Board-certified physician with expertise in healthcare operations.",
  },
  {
    name: "Sadeem Ahmed",
    role: "VP of Technology",
    image: "/leadership/vp.jpeg?height=300&width=300",
    bio: "Leading our technology initiatives and digital transformation.",
  },
]

export default function AboutPageClient() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Badge className="mb-4 bg-blue-600 text-white">About Elanix Enterprise</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Empowering Businesses with Smart Solutions</h1>
              <p className="text-xl text-gray-200 mb-8">
                For over a decade, Elanix Enterprise has been a trusted partner for businesses across the USA, offering services like medical billing, virtual assistance, digital marketing, web & app development, and AI automation to help streamline operations and drive growth.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3">
                  Partner With Us
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Image
                src="/aboutus.jpg?height=500&width=600"
                alt="Elanix Team"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 mb-6">
                To empower businesses with innovative solutions that enhance efficiency, reduce costs, 
                and accelerate growth — allowing them to focus on what matters most: serving their customers.
              </p>
              <p className="text-gray-600 mb-8">
                We believe that streamlined operations and smart digital solutions are key to long-term 
                success. Our team of professionals works tirelessly to deliver measurable results while 
                maintaining the highest standards of accuracy, security, and compliance.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-blue-600 mr-3" />
                  <span>Secure & reliable processes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-blue-600 mr-3" />
                  <span>Certified professionals</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-blue-600 mr-3" />
                  <span>24/7 customer support</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="/mission.jpg?height=400&width=500"
                alt="Bussiness Team"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced leadership team brings decades of healthcare and technology expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Join hundreds of businesses that trust Elanix Enterprise for reliable and innovative solutions.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                Get Started Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
