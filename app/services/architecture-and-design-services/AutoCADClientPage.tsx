// "use client"

// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import {
//   CheckCircle,
//   ArrowRight,
//   Phone,
//   Mail,
//   DraftingCompassIcon as Drafting,
//   Clock,
//   Users,
//   Award,
// } from "lucide-react"
// import Link from "next/link"
// import Image from "next/image"
// import CommonQuestions from "@/components/common-questions"
// import PricingTable from "@/components/pricing-table"

// const services = [
//   "2D Technical Drawings",
//   "3D Modeling & Visualization",
//   "Architectural Drafting",
//   "Mechanical Engineering Drawings",
//   "Electrical Schematics",
//   "CAD Conversion Services",
//   "Blueprint Creation",
//   "Technical Documentation",
// ]

// const benefits = [
//   "Precise technical drawings",
//   "Industry-standard compliance",
//   "Fast turnaround times",
//   "Experienced CAD professionals",
//   "Quality assurance",
//   "Competitive pricing",
// ]

// const stats = [
//   { number: "500+", label: "Projects Completed", icon: Drafting },
//   { number: "15+", label: "Years Experience", icon: Award },
//   { number: "48hr", label: "Average Turnaround", icon: Clock },
//   { number: "100+", label: "Satisfied Clients", icon: Users },
// ]

// const faqData = {
//   title: "Common Questions About Architecture & Design Services",
//   questions: [
//     {
//       question: "What types of CAD drawings do you create?",
//       answer:
//         "We create 2D technical drawings, 3D models, architectural plans, mechanical drawings, electrical schematics, and engineering blueprints for various industries.",
//     },
//     {
//       question: "What file formats do you work with?",
//       answer:
//         "We work with all major CAD formats including DWG, DXF, PDF, and can convert between different formats. We also provide files in formats suitable for manufacturing and construction.",
//     },
//     {
//       question: "How long does it take to complete a CAD project?",
//       answer:
//         "Turnaround time depends on project complexity. Simple drawings take 24-48 hours, while complex 3D models and detailed technical drawings may take 1-2 weeks.",
//     },
//     {
//       question: "Do you provide revisions if needed?",
//       answer:
//         "Yes, we offer unlimited revisions until you're completely satisfied with the final drawings. We ensure all specifications and requirements are met.",
//     },
//     {
//       question: "Can you work from sketches or existing drawings?",
//       answer:
//         "We can work from hand sketches, existing drawings, PDFs, images, or any reference material you provide to create professional CAD drawings.",
//     },
//     {
//       question: "Do you follow industry standards?",
//       answer:
//         "Yes, we follow all relevant industry standards including ANSI, ISO, and specific industry guidelines to ensure your drawings meet professional requirements.",
//     },
//   ],
//   serviceName: "Architecture & Design",
// }

// export default function AutoCADClientPage() {
//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-12 md:py-20">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
//             <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
//               <div className="flex items-center mb-4">
//                 <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4">
//                   <Drafting className="w-6 h-6 md:w-8 md:h-8 text-white" />
//                 </div>
//                 <Badge className="bg-blue-500 text-white px-3 py-1 text-sm">CAD Services</Badge>
//               </div>
//               <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Architecture & Design Services</h1>
//               <p className="text-lg md:text-xl text-blue-200 mb-6 md:mb-8">
//                 Professional CAD design and drafting services for engineering, architecture, and technical documentation
//                 needs with 15+ years of experience.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Link href="/contact">
//                   <Button
//                     size="lg"
//                     className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 w-full sm:w-auto"
//                   >
//                     Start Now
//                     <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
//                   </Button>
//                 </Link>

//                 <Link href="/for-you"  target="_blank">
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="border-white text-white hover:bg-white hover:text-blue-900 px-6 md:px-8 py-3 w-full sm:w-auto bg-transparent"
//                 >
//                   Learn More
//                 </Button>
//                 </Link>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="relative"
//             >
//               <Image
//                 src="/services/autocad.jpg?height=500&width=600&text=AutoCAD+Services"
//                 alt="Architecture & Design Services"
//                 width={600}
//                 height={500}
//                 className="rounded-lg shadow-2xl w-full h-auto"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-12 md:py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="text-center"
//               >
//                 <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
//                   <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
//                 </div>
//                 <div className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">{stat.number}</div>
//                 <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services & Benefits Section */}
//       <section className="py-12 md:py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
//             <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
//               <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our CAD Services</h2>
//               <div className="space-y-3 md:space-y-4">
//                 {services.map((service, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: index * 0.1 }}
//                     className="flex items-center space-x-3 p-3 md:p-4 bg-white rounded-lg shadow-sm"
//                   >
//                     <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" />
//                     <span className="text-sm md:text-base text-gray-700">{service}</span>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>

//             <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
//               <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Why Choose Our Services</h2>
//               <div className="space-y-3 md:space-y-4">
//                 {benefits.map((benefit, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: index * 0.1 }}
//                     className="flex items-start space-x-3"
//                   >
//                     <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-blue-600 flex-shrink-0 mt-1" />
//                     <span className="text-sm md:text-base text-gray-700">{benefit}</span>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       <PricingTable
//         serviceName="AutoCAD & Architectural Design"
//         tiers={[
//           {
//             name: "Basic",
//             price: "$350",
//             description: "Simple 2D Drawings",
//           },
//           {
//             name: "Standard",
//             price: "$600",
//             description: "Advanced CAD Design",
//             popular: true,
//           },
//           {
//             name: "Premium",
//             price: "$900",
//             description: "Complex 3D Modeling & Architecture",
//           },
//         ]}
//         features={[
//           { name: "2D Technical Drawings", basic: true, standard: true, premium: true },
//           { name: "CAD File Conversion", basic: true, standard: true, premium: true },
//           { name: "Blueprint Creation", basic: true, standard: true, premium: true },
//           { name: "3D Modeling & Visualization", basic: false, standard: true, premium: true },
//           { name: "Architectural Drafting", basic: false, standard: true, premium: true },
//           { name: "Mechanical Engineering Drawings", basic: false, standard: false, premium: true },
//           { name: "Electrical Schematics", basic: false, standard: false, premium: true },
//           { name: "Advanced 3D Rendering", basic: false, standard: false, premium: true },
//           { name: "Technical Documentation", basic: false, standard: true, premium: true },
//           { name: "Unlimited Revisions", basic: false, standard: false, premium: true },
//         ]}
//       />

//       {/* Common Questions */}
//       <CommonQuestions {...faqData} />

//       {/* CTA Section */}
//       <section className="py-12 md:py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Start Your CAD Project?</h2>
//             <p className="text-lg md:text-xl mb-6 md:mb-8 text-blue-100 max-w-2xl mx-auto px-4">
//               Get professional CAD drawings and technical documentation from experienced professionals.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-6 md:px-8 py-3">
//                 <Phone className="mr-2 w-4 h-4 md:w-5 md:h-5" />
//                 Call (512) 375-9999
//               </Button>
//               <Link href="/contact">
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="border-white text-white hover:bg-white hover:text-blue-600 px-6 md:px-8 py-3 bg-transparent"
//                 >
//                   <Mail className="mr-2 w-4 h-4 md:w-5 md:h-5" />
//                   Get Quote
//                 </Button>
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   )
// }



"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  DraftingCompassIcon as Drafting,
  ClipboardList,
  FileSpreadsheet,
  Ruler,
  Layers,
  Clock,
  Users,
  Award,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import CommonQuestions from "@/components/common-questions"
import PricingTable from "@/components/pricing-table"

const services = [
  "Complete quantity takeoffs from PDF or CAD drawings",
  "Cost estimation with material, labor & equipment breakdowns",
  "CSI Division–based BOQs",
  "Bid-day support & addenda updates",
  "Value engineering & scope reviews",
  "Change orders & as-built reconciliations",
]

const benefits = [
  "Clear Excel BOQs – ready for submission",
  "Marked-up drawings – color-coded for review",
  "Fast turnarounds – always on time",
  "Customized formats – tailored to your templates",
  "Accuracy you can rely on – double-checked numbers",
  "All-in-one service across trades (Civil, Arch, MEP)",
  "Flexible engagements – one-time or ongoing support",
]

const stats = [
  { number: "750+", label: "Estimates Delivered", icon: FileSpreadsheet },
  { number: "20+", label: "Industries Covered", icon: Layers },
  { number: "48hr", label: "Quick Turnarounds", icon: Clock },
  { number: "200+", label: "Happy Contractors", icon: Users },
]

const workProcess = [
  { step: "Share Your Plans", desc: "Email us or upload your drawings or blueprints (PDF or CAD). We’ll take it from there.", icon: Drafting },
  { step: "Tell Us What You Need", desc: "Specify if you want the entire project or certain trades. We’re flexible.", icon: ClipboardList },
  { step: "Approve the Quote", desc: "We’ll review your files, send a quote & timeline. Approve via email and we’ll start.", icon: Award },
  { step: "Get Accurate Estimates", desc: "We run takeoffs, verify everything, and deliver a detailed estimate ready for use.", icon: Ruler },
]

const faqData = {
  title: "Common Questions About Estimation Services",
  questions: [
    {
      question: "What types of estimates do you provide?",
      answer:
        "We provide construction cost estimates, BOQs, quantity takeoffs, and bid support across civil, architectural, structural, and MEP trades.",
    },
    {
      question: "How do I share my project details?",
      answer:
        "Simply send us your drawings in PDF or CAD format along with scope notes and bid deadlines. We’ll handle the rest.",
    },
    {
      question: "How accurate are your estimates?",
      answer:
        "All estimates are double-checked and follow CSI Divisions. We use documented assumptions and up-to-date cost data.",
    },
    {
      question: "Do you provide revisions if needed?",
      answer:
        "Yes, revisions are included. We ensure your estimates meet project requirements before submission.",
    },
    {
      question: "Can you work with my templates?",
      answer:
        "Absolutely. We can deliver BOQs and reports in your preferred format, ready for bid submission.",
    },
  ],
  serviceName: "Construction Estimation",
}

export default function EstimationClientPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section (kept same style & color) */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4">
                  <Drafting className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <Badge className="bg-blue-500 text-white px-3 py-1 text-sm">Architecture & Design Services</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                Architecture & Design Services
              </h1>
              <p className="text-lg md:text-xl text-blue-200 mb-6 md:mb-8">
                Accurate, reliable, and fast estimation services for contractors, builders, and project managers across
                all major trades.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 w-full sm:w-auto"
                  >
                    Get Estimate
                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </Button>
                </Link>

                <Link href="/for-you" target="_blank">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-blue-900 px-6 md:px-8 py-3 w-full sm:w-auto bg-transparent"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Image
                src="/services/autocad.jpg?height=500&width=600&text=Estimation+Services"
                alt="Construction Estimation Services"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Benefits */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Estimation Services</h2>
              <div className="space-y-3 md:space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-3 md:p-4 bg-white rounded-lg shadow-sm"
                  >
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-700">{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
              <div className="space-y-3 md:space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-sm md:text-base text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">Our Work Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg shadow-md p-6 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.step}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <PricingTable
        serviceName="Construction Estimation"
        tiers={[
          { name: "Basic", price: "$350", description: "Small Residential Projects" },
          { name: "Standard", price: "$600", description: "Medium-Scale Commercial Projects", popular: true },
          { name: "Premium", price: "$900", description: "Large Industrial & Public Projects" },
        ]}
        features={[
          { name: "Quantity Takeoffs", basic: true, standard: true, premium: true },
          { name: "Cost Estimation (Material + Labor)", basic: true, standard: true, premium: true },
          { name: "Excel BOQs", basic: true, standard: true, premium: true },
          { name: "Marked-Up Drawings", basic: false, standard: true, premium: true },
          { name: "Bid-Day Support", basic: false, standard: true, premium: true },
          { name: "Value Engineering", basic: false, standard: false, premium: true },
          { name: "Unlimited Revisions", basic: false, standard: false, premium: true },
        ]}
      />

      {/* FAQs */}
      <CommonQuestions {...faqData} />

      {/* CTA */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Get Accurate Estimates?</h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-blue-100 max-w-2xl mx-auto px-4">
              Send us your project drawings, bid date, and scope—we’ll take care of the rest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-6 md:px-8 py-3">
                <Phone className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                Call (512) 375-9999
              </Button>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-6 md:px-8 py-3 bg-transparent"
                >
                  <Mail className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                  Get Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
