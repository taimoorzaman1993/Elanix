"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Phone, Mail, Code, Clock, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import CommonQuestions from "@/components/common-questions"
import PricingTable from "@/components/pricing-table"

const services = [
  "Custom Software Development",
  "CRM Software Development",
  "ERP System Development",
  "Healthcare Software Solutions",
  "Finance & Accounting Software",
  "Business Intelligence Dashboards",
  "Custom Admin Dashboard Development",]

// const benefits = [
//     "Tailored solutions for your business needs",
//     "Scalable and future-proof architecture",
//     "HIPAA & compliance-ready development",
//     "Agile development methodology",
//     "Seamless third-party integrations",
//     "Dedicated support and maintenance",
// ]

const benefits = [
  "Accelerate digital transformation with custom-built enterprise software",
  "Improve productivity through intelligent workflow automation",
  "Centralize business operations on a single integrated platform",
  "Enterprise-grade security with encrypted data protection",
  "Scalable architecture capable of supporting millions of transactions",
  "Real-time business intelligence dashboards for informed decision-making",
  "Custom CRM, ERP, HRMS, Finance, and Healthcare software solutions",
  "Reduced manual processes through automation and AI integration",
  "Cloud-ready infrastructure with high availability and disaster recovery",
  "Compliance-ready development for Healthcare, Finance, and Enterprise sectors",
  
]
const stats = [
    { number: "50+", label: "Software Projects", icon: Code },
    { number: "100%", label: "Client Satisfaction", icon: CheckCircle },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "30+", label: "Enterprise Clients", icon: Users },
]

const faqData = {
    title: "Common Questions About Custom Software Development",
    questions: [
        {
            question: "What types of custom software do you develop?",
            answer:
                "We develop a wide range of custom software solutions including enterprise applications, patient management systems, practice management software, telehealth platforms, CRM systems, and more. All our solutions are tailored to meet your specific business requirements.",
        },
        {
            question: "How long does it take to develop custom software?",
            answer:
                "The timeline depends on the complexity and scope of your project. A typical custom software project takes 8-16 weeks from requirements gathering to deployment. We provide detailed project timelines during the planning phase and maintain transparent communication throughout.",
        },
        {
            question: "Do you provide ongoing maintenance and support?",
            answer:
                "Yes, we offer comprehensive maintenance and support packages including bug fixes, security updates, performance optimization, and feature enhancements to ensure your software remains reliable and up-to-date.",
        },
        {
            question: "What technologies do you use for software development?",
            answer:
                "We use modern, industry-standard technologies including React, Next.js, Node.js, Python, Java, .NET, and cloud platforms like AWS, Azure, and Google Cloud. We select the best tech stack based on your project requirements.",
        },
        {
            question: "Do you build HIPAA compliant software?",
            answer:
                "Yes, we specialize in building HIPAA compliant software for healthcare providers. We implement robust security measures including data encryption, access controls, audit trails, and secure data storage to protect sensitive patient information.",
        },
        {
            question: "Can you integrate with our existing systems?",
            answer:
                "Absolutely. We have extensive experience integrating custom software with existing systems, including EMR/EHR platforms, practice management systems, billing software, and third-party APIs. We ensure seamless data flow between all your systems.",
        },
    ],
    serviceName: "Custom Software Development",
}

export default function CustomSoftwareDevelopmentPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4">
                                    <Code className="w-6 h-6 md:w-8 md:h-8 text-white" />
                                </div>
                                <Badge className="bg-blue-500 text-white px-3 py-1 text-sm">Custom Software</Badge>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                                Custom Software Development Services
                            </h1>
                            <p className="text-lg md:text-xl text-blue-200 mb-6 md:mb-8">
                                Tailored software solutions built to streamline your operations, enhance patient care, and
                                drive business growth. From concept to deployment, we deliver robust, scalable applications.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact">
                                    <Button
                                        size="lg"
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 w-full sm:w-auto"
                                    >
                                        Start Your Project
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
                                src="/services/custom-software-developement.jpg?height=500&width=600"
                                alt="Custom Software Development Services"
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
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                Our Custom Software Services
                            </h2>
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

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                Why Choose Our Software Development
                            </h2>
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
  serviceName="Custom Software Development"
  tiers={[
    {
      name: "Basic",
      price: "$1,000",
      description: "Small Business Solution / MVP",
    },
    {
      name: "Professional",
      price: "Custom",
      description: "Business Software Solution",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Large-Scale Enterprise Platform",
    },
  ]}
  features={[
    { name: "Business Requirement Analysis", basic: true, standard: true, premium: true },
    { name: "Custom UI/UX Design", basic: true, standard: true, premium: true },
    { name: "Responsive Web Application", basic: true, standard: true, premium: true },
    { name: "Secure Database Design", basic: true, standard: true, premium: true },
    { name: "User Authentication & Authorization", basic: true, standard: true, premium: true },
    { name: "Admin Dashboard", basic: false, standard: true, premium: true },
    { name: "REST API Development", basic: false, standard: true, premium: true },
    { name: "Third-Party API Integration", basic: false, standard: true, premium: true },
    { name: "Role-Based Access Control", basic: false, standard: true, premium: true },
    { name: "Analytics & Reporting Dashboard", basic: false, standard: true, premium: true },
    { name: "Cloud Deployment", basic: false, standard: true, premium: true },
    { name: "Source Code Ownership", basic: true, standard: true, premium: true },
    { name: "Performance Optimization", basic: false, standard: true, premium: true },
    { name: "Advanced Security Implementation", basic: false, standard: false, premium: true },
    { name: "HIPAA / GDPR Compliance", basic: false, standard: false, premium: true },
    { name: "Microservices Architecture", basic: false, standard: false, premium: true },
    { name: "High Availability & Scalability", basic: false, standard: false, premium: true },
    { name: "Dedicated Project Manager", basic: false, standard: false, premium: true },
    { name: "Priority Technical Support", basic: false, standard: false, premium: true },
    { name: "Ongoing Maintenance & SLA", basic: false, standard: false, premium: true },
  ]}
/>
            {/* Common Questions */}
            <CommonQuestions {...faqData} />

            {/* CTA Section */}
            <section className="py-12 md:py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                            Ready to Build Your Custom Software?
                        </h2>
                        <p className="text-lg md:text-xl mb-6 md:mb-8 text-blue-100 max-w-2xl mx-auto px-4">
                            Let's turn your idea into a powerful, scalable software solution that drives results.
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