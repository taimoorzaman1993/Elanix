"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  Heart,
  Shield,
  FileText,
  User,
  Monitor,
  Globe,
  ClipboardList,
  TrendingUp,
  BarChart3,
  Settings,
  CheckCircle,
  Headphones,
  Smartphone,
  Bot,
  DraftingCompassIcon as Drafting,
  Calculator,
  PenTool,
} from "lucide-react"

const services = [
  {
    title: "Medical Billing",
    description:
      "Maximize your revenue and minimize claim denials with our complete medical billing solutions tailored for healthcare providers.",
    icon: Heart,
    href: "/services/medical-billing",
  },
  {
    title: "Credentialing",
    description:
      "Simplify your provider enrollment and credentialing process with our expert services tailored for healthcare organizations.",
    icon: Shield,
    href: "/services/credentialing",
  },
  {
    title: "State Licensing",
    description:
      "Streamline your state and DEA licensing with our expert services tailored for individual providers and healthcare organizations.",
    icon: FileText,
    href: "/services/state-licencing",
  },
  {
    title: "Virtual Assistant",
    description:
      "Boost your productivity with our professional virtual assistant services, designed to handle your administrative tasks efficiently.",
    icon: User,
    href: "/services/virtual-assistance",
  },
  {
    title: "Web Development",
    description: "Get a custom, high-performance website that meets your business needs and delights your users.",
    icon: Monitor,
    href: "/services/web-development",
  },
  {
    title: "Digital Marketing",
    description: "Expand your brand's reach and drive more engagement with our tailored digital marketing services.",
    icon: Globe,
    href: "/services/digital-marketing",
  },
  {
    title: "App Development",
    description:
      "Create powerful mobile and web applications tailored to your business needs with our expert development team.",
    icon: Smartphone,
    href: "/services/app-development",
  },
  {
    title: "AI Automation",
    description:
      "Streamline your business processes with cutting-edge AI automation solutions that increase efficiency and reduce costs.",
    icon: Bot,
    href: "/services/ai-automation",
  },
  {
    title: "AutoCAD Services",
    description:
      "Professional CAD design and drafting services for engineering, architecture, and technical documentation needs.",
    icon: Drafting,
    href: "/services/autocad",
  },
  {
    title: "QuickBooks Accounting",
    description:
      "Complete accounting and bookkeeping services using QuickBooks to manage your finances and maintain accurate records.",
    icon: Calculator,
    href: "/services/quickbooks",
  },
  {
    title: "Claims Processing",
    description:
      "Our advanced claims processing service ensures fast and accurate submission of medical claims, resulting in higher acceptance rates and quicker reimbursements.",
    icon: ClipboardList,
    href: "/services/claims-processing",
  },
  {
    title: "Revenue Optimization",
    description:
      "Maximize your practice's revenue with our comprehensive revenue optimization services, designed to streamline your billing cycle and improve cash flow.",
    icon: TrendingUp,
    href: "/services/revenue-optimization",
  },
  {
    title: "Performance Metrics",
    description:
      "Gain valuable insights into your practice's financial performance with our detailed analytics and reporting services.",
    icon: BarChart3,
    href: "/services/performance-metrics",
  },
  {
    title: "Practice Solutions",
    description:
      "Our comprehensive practice management solutions are designed to optimize your operations and improve overall efficiency.",
    icon: Settings,
    href: "/services/practice-solutions",
  },
  {
    title: "Compliance",
    description:
      "Stay up-to-date and compliant with the latest healthcare regulations through our comprehensive compliance services.",
    icon: CheckCircle,
    href: "/services/compliance",
  },
  {
    title: "Support Services",
    description:
      "Our dedicated support team is available 24/7 to assist you with any questions or issues you may encounter.",
    icon: Headphones,
    href: "/services/support-services",
  },
  
  
]

export default function ServicesPageClient() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-200 mb-8">End-to-end enterprise solutions designed for your success</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={service.href}>
                  <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
