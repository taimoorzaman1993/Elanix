"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Phone, Mail, Bot, Clock, Users, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import CommonQuestions from "@/components/common-questions"
import PricingTable from "@/components/pricing-table"

const services = [
  "Process Automation",
  "Chatbot Development",
  "Document Processing",
  "Data Analysis & Insights",
  "Workflow Optimization",
  "AI Integration",
  "Machine Learning Solutions",
  "Predictive Analytics",
]

const benefits = [
  "Reduce operational costs by 40%",
  "Increase efficiency and productivity",
  "24/7 automated operations",
  "Eliminate human errors",
  "Scalable AI solutions",
  "Real-time insights and analytics",
]

const stats = [
  { number: "40%", label: "Cost Reduction", icon: Zap },
  { number: "24/7", label: "Automated Operations", icon: Clock },
  { number: "100+", label: "Processes Automated", icon: Bot },
  { number: "50+", label: "Satisfied Clients", icon: Users },
]

const faqData = {
  title: "Common Questions About AI Automation",
  questions: [
    {
      question: "What business processes can be automated with AI?",
      answer:
        "We can automate various processes including customer service, data entry, document processing, inventory management, scheduling, email responses, and reporting tasks.",
    },
    {
      question: "How long does it take to implement AI automation?",
      answer:
        "Implementation time varies based on complexity. Simple automation can be deployed in 2-4 weeks, while comprehensive AI solutions may take 2-6 months.",
    },
    {
      question: "Will AI automation replace our employees?",
      answer:
        "AI automation is designed to augment human capabilities, not replace employees. It handles repetitive tasks, allowing your team to focus on strategic, creative work.",
    },
    {
      question: "What kind of ROI can we expect from AI automation?",
      answer:
        "Most businesses see 20-40% cost reduction and 50-80% improvement in process efficiency within the first year of implementation.",
    },
    {
      question: "Do you provide training for our team?",
      answer:
        "Yes, we provide comprehensive training for your team to effectively use and manage the AI automation systems we implement.",
    },
    {
      question: "Can AI automation integrate with our existing systems?",
      answer:
        "We specialize in integrating AI solutions with existing software, databases, and workflows to ensure seamless operation.",
    },
  ],
  serviceName: "AI Automation",
}

export default function AIAutomationClientPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4">
                  <Bot className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <Badge className="bg-blue-500 text-white px-3 py-1 text-sm">AI Automation</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">AI Automation Services</h1>
              <p className="text-lg md:text-xl text-blue-200 mb-6 md:mb-8">
                Streamline your business processes with cutting-edge AI automation solutions that increase efficiency
                and reduce costs by up to 40%.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 w-full sm:w-auto"
                  >
                    Automate Now
                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </Button>
                </Link>

                <Link href="/for-you"  target="_blank">
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
                src="/services/automation.jpeg?height=500&width=600&text=AI+Automation"
                alt="AI Automation Services"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Services & Benefits Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our AI Automation Services</h2>
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Key Benefits</h2>
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

      {/* Pricing Table Section */}
      <PricingTable
        serviceName="AI Automation"
        tiers={[
          {
            name: "Basic",
            price: "$350",
            description: "Simple Process Automation",
          },
          {
            name: "Standard",
            price: "$700",
            description: "Advanced AI Integration",
            popular: true,
          },
          {
            name: "Premium",
            price: "$1,100",
            description: "Enterprise AI Solutions",
          },
        ]}
        features={[
          { name: "Process Analysis & Mapping", basic: true, standard: true, premium: true },
          { name: "Basic Workflow Automation", basic: true, standard: true, premium: true },
          { name: "Email & Document Processing", basic: true, standard: true, premium: true },
          { name: "Chatbot Development", basic: false, standard: true, premium: true },
          { name: "Machine Learning Integration", basic: false, standard: true, premium: true },
          { name: "Predictive Analytics", basic: false, standard: false, premium: true },
          { name: "Custom AI Model Training", basic: false, standard: false, premium: true },
          { name: "Advanced Data Processing", basic: false, standard: false, premium: true },
          { name: "Real-time Monitoring Dashboard", basic: false, standard: true, premium: true },
          { name: "24/7 Support & Maintenance", basic: false, standard: false, premium: true },
        ]}
      />

      {/* Common Questions */}
      <CommonQuestions {...faqData} />

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Automate Your Business?</h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-blue-100 max-w-2xl mx-auto px-4">
              Transform your operations with AI automation and reduce costs while increasing efficiency.
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
                  Get Started
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
