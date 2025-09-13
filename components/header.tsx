"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  Stethoscope,
  CreditCard,
  Headphones,
  Monitor,
  Megaphone,
  Globe,
  MapPin,
  Award,
  Smartphone,
  Bot,
  DraftingCompassIcon as Drafting,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface CursorTrail {
  x: number
  y: number
  timestamp: number
}

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [cursorTrail, setCursorTrail] = useState<CursorTrail[]>([])
  

  // Cursor trail effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPoint: CursorTrail = {
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(),
      }
      setCursorTrail((prev) => [newPoint, ...prev].slice(0, 20))
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorTrail((prev) => prev.filter((point) => Date.now() - point.timestamp < 800))
    }, 16)
    return () => clearInterval(interval)
  }, [])

  const services = [
    {
      title: "Medical Billing",
      description: "Comprehensive billing solutions for healthcare providers.",
      icon: Stethoscope,
      href: "/services/medical-billing",
    },
    {
      title: "Credentialing",
      description: "Professional credentialing and provider enrollment services.",
      icon: Award,
      href: "/services/credentialing",
    },
    {
      title: "State Licensing",
      description: "Professional licensing and regulatory compliance services.",
      icon: CreditCard,
      href: "/services/state-licencing",
    },
    {
      title: "Virtual Assistance",
      description: "Dedicated virtual assistants for your business needs.",
      icon: Headphones,
      href: "/services/virtual-assistance",
    },
    {
      title: "Web Development",
      description: "Custom websites and web applications for your business.",
      icon: Monitor,
      href: "/services/web-development",
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive marketing strategies to grow your business.",
      icon: Megaphone,
      href: "/services/digital-marketing",
    },
    {
      title: "App Development",
      description: "Mobile and web applications tailored to your business needs.",
      icon: Smartphone,
      href: "/services/app-development",
    },
    {
      title: "AI Automation",
      description: "Intelligent automation solutions to streamline your operations.",
      icon: Bot,
      href: "/services/ai-automation",
    },
    {
      title: "Construction Estimation ",
      description: "Professional CAD design and drafting services.",
      icon: Drafting,
      href: "/services/construction-estimation",
    },
  ]

  return (
    <>
      {/* Sticky container for both top bar + header */}
      <div className="sticky top-0 z-50">
        {/* Top Bar */}
        <div className="text-white py-2 md:py-3" style={{ backgroundColor: "#03045E" }}>
          <div className="container mx-auto">
            {/* Mobile Layout */}
            <div className="flex flex-col space-y-1 text-xs md:hidden">
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-3 h-3" />
                <span className="font-medium">833 Mahler Rd, Ste 9B Burlingame, CA 94010</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-3 h-3" />
                <Link href="/contact" className="hover:text-blue-200 transition-colors">
                  info@elanixenterprise.com
                </Link>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-3 h-3" />
                <span className="font-medium">(512) 375-9999</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Globe className="w-3 h-3" />
                <Link href="/services" className="hover:text-blue-200 transition-colors">
                  Global Services
                </Link>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex justify-between items-center text-sm">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span className="font-medium">833 Mahler Rd, Ste 9B Burlingame, CA 94010</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <Link href="/contact" className="hover:text-blue-200 transition-colors">
                    info@elanixenterprise.com
                  </Link>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">+1 (512) 375-9999</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <Link href="/services" className="hover:text-blue-200 transition-colors">
                  Global Services
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <header className="bg-white shadow-lg border-b border-blue-100">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16 md:h-20 text-slate-600">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2 md:space-x-3">
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                  <img
                    src="/logo.png"
                    alt="Elanix Enterprise Logo"
                    className="w-14 h-14 md:w-18 md:h-18 object-contain"
                  />
                </div>
                <div>
                  <span className="text-xl md:text-2xl font-bold text-blue-900">Elanix Enterprise</span>
                  <div className="text-xs text-blue-600 font-medium">Smart Solutions. Global Impact.</div>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                {/* Services Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setIsServicesOpen(true)}
        onMouseLeave={() => setIsServicesOpen(false)}
        
      >
        <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
          <span>Services</span>
          <ChevronDown className="w-4 h-4" />
        </button>

        <AnimatePresence>
          {isServicesOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-[-5%] mt-2 w-[900px] xl:w-[900px] max-w-[60vw]
                         bg-white rounded-xl shadow-2xl border border-blue-100 
                         p-6 md:p-8 grid grid-cols-3 gap-4 md:gap-5
                         max-h-[90vh] overflow-y-auto z-50"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={service.href}
                    className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 rounded-lg 
                               hover:bg-blue-50 transition-colors group"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <service.icon className="w-6 h-6 md:w-7 md:h-7 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm md:text-base">
                        {service.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 mt-1">{service.description}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}

              {/* Call-to-Action Section */}
              <div className="col-span-3 mt-4 p-4 md:p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">REQUEST A CONSULTATION</h3>
                <p className="text-sm text-blue-700 mb-4">
                  Schedule a FREE consultation to learn how we can help your business grow.
                </p>
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
                <Link
                  href="/specialties"
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                >
                  Specialties
                </Link>

                <Link href="/pricing" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                  Pricing
                </Link>

                <Link href="/for-you" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                  Solutions
                </Link>

                {/* Resources Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsResourcesOpen(true)}
                  onMouseLeave={() => setIsResourcesOpen(false)}
                >
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                    <span>Resources</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  <AnimatePresence>
                    {isResourcesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-blue-100 p-2"
                      >
                        <Link href="/blog" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg">
                          Blog
                        </Link>
                        <Link href="/about" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg">
                          About Us
                        </Link>
                        <Link
                          href="/testimonials"
                          className="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg"
                        >
                          Testimonials
                        </Link>
                        <Link
                          href="/privacy-policy"
                          className="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg"
                        >
                          Privacy Policy
                        </Link>
                        <Link
                          href="/communication"
                          className="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg"
                        >
                          Communication
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </nav>

              {/* CTA */}
              <div className="hidden lg:block">
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium shadow-lg text-sm md:text-base">
                    Request a Quote
                  </Button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden bg-white border-t border-blue-100 overflow-hidden"
              >
                <div className="container mx-auto px-4 py-4 md:py-6 space-y-3 md:space-y-4">
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="block py-2 md:py-3 text-gray-700 hover:text-blue-600 border-b border-gray-100 text-sm md:text-base"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                  <Link
                    href="/specialties"
                    className="block py-2 md:py-3 text-gray-700 hover:text-blue-600 text-sm md:text-base"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Specialties
                  </Link>
                  <Link
                    href="/pricing"
                    className="block py-2 md:py-3 text-gray-700 hover:text-blue-600 text-sm md:text-base"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/for-you"
                    className="block py-2 md:py-3 text-gray-700 hover:text-blue-600 text-sm md:text-base"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Solutions
                  </Link>
                  <Link
                    href="/blog"
                    className="block py-2 md:py-3 text-gray-700 hover:text-blue-600 text-sm md:text-base"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/about"
                    className="block py-2 md:py-3 text-gray-700 hover:text-blue-600 text-sm md:text-base"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/testimonials"
                    className="block py-2 md:py-3 text-gray-700 hover:text-blue-600 text-sm md:text-base"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Testimonials
                  </Link>
                  <Link
                    href="/privacy-policy"
                    className="block py-2 md:py-3 text-gray-700 hover:text-blue-600 text-sm md:text-base"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/communication"
                    className="block py-2 md:py-3 text-gray-700 hover:text-blue-600 text-sm md:text-base"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Communication
                  </Link>
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4">Get Free Quote</Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
      </div>

      {/* Cursor Trail */}
      <div className="fixed inset-0 pointer-events-none z-40">
        {cursorTrail.map((point, index) => {
          const age = Date.now() - point.timestamp
          const opacity = Math.max(0, 1 - age / 400)
          const scale = Math.max(0.4, 1 - age / 800)

          return (
            <div
              key={`${point.timestamp}-${index}`}
              className="absolute w-3 h-3 rounded-full"
              style={{
                left: point.x - 6,
                top: point.y - 6,
                opacity,
                transform: `scale(${scale})`,
                background: `radial-gradient(circle, #3B82F6 20%, #1E40AF 60%, #1E3A8A 100%)`,
                boxShadow: "0 0 8px rgba(59, 130, 246, 0.6)",
                transition: "opacity 0.05s ease-out, transform 0.05s ease-out",
              }}
            />
          )
        })}
      </div>
    </>
  )
}
