"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, CheckCircle, Globe, Mail, Phone, MapPin, Clock } from "lucide-react"

export default function InternProfile() {
  const { internid } = useParams() // dynamic id from URL

  // Dummy intern data (replace with DB/API later)
  const interns: Record<string, any> = {
    // "user": {
    //   name: "username",
    //   email: "user@example.com",
    //   phone: "+92 300 1234567",
    //   organization: "Xyx Billing Solution",
    //   status: "Verified & COmplected",
    //   duration: "June 2024 - August 2024 (3 months)",
    //   location: "Lahore, Pakistan (Remote)",
    //   image: "https://randomuser.me/api/portraits/men/32.jpg",
    // },
  }

  const intern = interns[internid as string]

  // If no intern found
  if (!intern) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-700">Record not found</h1>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-blue-600 text-white text-lg px-4 py-2">
              <Shield className="w-5 h-5 mr-2" />
              Internship Verification
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Internship Completed 
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              This page confirms that the following intern has successfully completed their internship.
            </p>
          </motion.div>
        </div>
      </section>

      

      {/* Intern Information */}
     {/* Paragraph Information */}
        <section className="py-12 md:py-16">
        



        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="shadow-2xl border-0 overflow-hidden">
              {/* Profile Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white text-center">
                <div className="flex justify-center mb-6">
                  <img
                    src={intern.image}
                    alt={intern.name}
                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                  />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">{intern.name}</h3>
                <p className="text-blue-100 text-lg">Internship Graduate</p>
              </div>



                
              {/* Card Content */}
              <CardContent className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Email */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">Email Address</h4>
                      <p className="text-gray-600 text-lg">{intern.email}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">Phone Number</h4>
                      <p className="text-gray-600 text-lg">{intern.phone}</p>
                    </div>
                  </div>

                  {/* Organization */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Globe className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">Organization</h4>
                      <p className="text-gray-600 text-lg">{intern.organization}</p>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">Internship Status</h4>
                      <p className="text-green-600 text-lg font-semibold">{intern.status}</p>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">Duration</h4>
                      <p className="text-gray-600 text-lg">{intern.duration}</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">Location</h4>
                      <p className="text-gray-600 text-lg">{intern.location}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>


            <div className="container mx-auto px-4 py-4">
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto"
            >
            <Card className="shadow-lg border-l-4 border-blue-600 bg-white">
                <CardContent className="p-8 md:p-10">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                    {`${intern.name} is a dedicated student who successfully completed their internship as a `}
                    <span className="font-semibold text-blue-700">{intern.role || "valued team member"}</span>.
                    During the <span className="font-semibold">{intern.duration}</span> program in{" "}
                    <span className="font-semibold">{intern.location}</span>,{" "}
                    {intern.name.split(" ")[0]} consistently demonstrated
                    <span className="text-blue-600 font-medium"> commitment</span>,{" "}
                    <span className="text-blue-600 font-medium">teamwork</span>, and{" "}
                    <span className="text-blue-600 font-medium">eagerness to learn</span>.  
                    Successfully finishing in <span className="font-semibold">{intern.completion || "2024"}</span>,{" "}
                    {intern.name.split(" ")[0]} proved to be a{" "}
                    <span className="text-green-600 font-semibold">valuable addition</span> to our team.
                </p>
                </CardContent>
            </Card>
            </motion.div>
        </div>




          </motion.div>
        </div>
      </section>
    </div>
  )
}
