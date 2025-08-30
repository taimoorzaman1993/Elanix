"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import TypingEffect from "@/components/typing-effect"
import {
  Star,
  CheckCircle,
  ArrowRight,
  Users,
  DollarSign,
  Clock,
  CreditCard,
  Stethoscope,
  Headphones,
  Monitor,
  Megaphone,
  ChevronLeft,
  ChevronRight,
  Quote,
  Award,
  Shield,
  TrendingUp,
  Target,
  Zap,
  Globe,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

const heroSlides = [
  {
    id: 0,
    title: "From 200+ USA projects to new horizons in Canada & UK.",
    service: "Global Expansion",
    type: "global-expansion",
    backgroundImage: "/coverAll.jpg?height=800&width=1200",
    buttonLink: "/services",
    buttonText: "Explore Our Services",
  },
  {
    id: 1,
    title: "Virtual Assistant",
    service: "Elanix Enterprise",
    backgroundImage: "/VirtualAssistantCover.jpg?height=800&width=1200",
    buttonLink: "/services/virtual-assistance",
  },
  {
    id: 2,
    title: "Medical Billing",
    service: "Elanix Enterprise",
    backgroundImage: "/MedicalBillingCover.jpg?height=800&width=1200",
    buttonLink: "/services/medical-billing",
  },
  {
    id: 3,
    title: "Credentialing",
    service: "Elanix Enterprise",
    backgroundImage: "/credentelingCover.jpg?height=800&width=1200",
    buttonLink: "/services/credentialing",
  },
  {
    id: 4,
    title: "Web Development",
    service: "Elanix Enterprise",
    backgroundImage: "/WebDevelopmentCover.jpg?height=800&width=1200",
    buttonLink: "/services/web-development",
  },
  {
    id: 5,
    title: "Digital Marketing",
    service: "Elanix Enterprise",
    backgroundImage: "/DigitalMarketingCover.jpg?height=800&width=1200",
    buttonLink: "/services/digital-marketing",
  },
]

const services = [
  {
    title: "Medical Billing Services",
    description: "Comprehensive billing solutions for healthcare providers with 99% accuracy rate.",
    icon: Stethoscope,
    features: ["Claims Processing", "Payment Posting", "Denial Management"],
    link: "/services/medical-billing",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Credentialing Services",
    description: "Professional credentialing and provider enrollment services for healthcare providers.",
    icon: Award,
    features: ["Provider Enrollment", "Re-credentialing", "Compliance Management"],
    link: "/services/credentialing",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    title: "State Licensing",
    description: "Professional licensing and regulatory compliance services for healthcare providers.",
    icon: CreditCard,
    features: ["License Applications", "Renewals", "Compliance Support"],
    link: "/services/state-licencing",
    color: "from-blue-600 to-blue-700",
  },
  {
    title: "Virtual Assistance",
    description: "Dedicated virtual assistants specialized in bussiness administration.",
    icon: Headphones,
    features: ["Administrative Support", "Patient Communication", "Data Entry"],
    link: "/services/virtual-assistance",
    color: "from-cyan-600 to-blue-600",
  },
  {
    title: "Web Development",
    description: "Custom bussiness websites with modern design and functionality.",
    icon: Monitor,
    features: ["Responsive Design", "HIPAA Compliance", "SEO Optimization"],
    link: "/services/web-development",
    color: "from-blue-700 to-blue-800",
  },
  {
    title: "Digital Marketing",
    description: "Comprehensive marketing strategies to grow your bussiness practice.",
    icon: Megaphone,
    features: ["SEO Services", "Social Media", "Content Marketing"],
    link: "/services/digital-marketing",
    color: "from-cyan-700 to-blue-700",
  },
]

const stats = [
  { number: "99%", label: "Claim Acceptance Rate", icon: CheckCircle },
  { number: "24/7", label: "Customer Support", icon: Clock },
  { number: "500+", label: "Healthcare Providers", icon: Users },
  { number: "30%", label: "Revenue Increase", icon: DollarSign },
]

const pricingPlans = [
  {
    name: "Starter",
    price: "4.99%\n(min $250)",
    description: "Perfect for small practices",
    features: ["Claims Processing", "Payment Posting", "Basic Reporting", "Email Support"],
    popular: false,
    color: "border-blue-200",
  },
  {
    name: "Professional",
    price: "3.99%",
    description: "Most popular for growing practices",
    features: [
      "Everything in Starter",
      "Denial Management",
      "Prior Authorization",
      "Advanced Reporting",
      "Phone Support",
    ],
    popular: true,
    color: "border-blue-500 ring-2 ring-blue-500",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large practices and hospitals",
    features: [
      "Everything in Professional",
      "Dedicated Account Manager",
      "Custom Integrations",
      "24/7 Priority Support",
    ],
    popular: false,
    color: "border-blue-200",
  },
]

const whyChooseUs = [
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "100% secure and compliant with all bussiness regulations",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Average 30% increase in revenue for our clients",
  },
  {
    icon: Target,
    title: "99% Accuracy",
    description: "Industry-leading accuracy in medical billing and coding",
    link: "/services/medical-billing",
  },
  {
    icon: Zap,
    title: "Fast Processing",
    description: "Quick turnaround times for all your bussiness needs",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Certified professionals with years of healthcare experience",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Delivering solutions to organizations and enterprises nationwide",
  },
]

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    title: "Cardiology Practice, New York",
    content:
      "Elanix EnterPrise has transformed our billing process completely. Our revenue increased by 35% within the first six months, and we no longer worry about claim denials or payment delays.",
    rating: 5,
    image: "/test/testhome1.jpeg?height=80&width=80",
  },
  {
    name: "Dr. Michael Chen",
    title: "Family Medicine, California",
    content:
      "The virtual assistant services have been a game-changer for our practice. We can now focus on patient care while they handle all administrative tasks efficiently.",
    rating: 5,
    image: "/test/testhome2.jpeg?height=80&width=80",
  },
  {
    name: "Dr. Matthew Hayes",
    title: "Pediatrics, Texas",
    content:
      "Their credentialing services helped us get licensed in multiple states quickly. The process was smooth and professional throughout.",
    rating: 5,
    image: "/test/testhome3.jpeg?height=80&width=80",
  },
]

export default function HomePageClient() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(
      () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
      },
      currentSlide === 0 ? 8000 : 4000,
    )

    return () => clearInterval(timer)
  }, [currentSlide])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Slider Section */}
      <section className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={heroSlides[currentSlide].backgroundImage || "/coverAll.jpg"}
                alt={heroSlides[currentSlide].title}
                fill
                className="object-cover"
                priority
              />
              <div
                className={`absolute inset-0 ${
                  heroSlides[currentSlide].type === "global-expansion"
                    ? "bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-cyan-900/90"
                    : "bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent"
                }`}
              ></div>
            </div>

            {heroSlides[currentSlide].type === "global-expansion" && (
              <>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48"></div>
                  <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full translate-x-40 translate-y-40"></div>
                  <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white rounded-full -translate-y-32"></div>
                </div>

                {/* Animated Globe Icons */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div
                    animate={{
                      x: [0, 30, 0],
                      y: [0, -20, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="absolute top-20 left-10 text-white/20"
                  >
                    <Globe className="w-8 h-8 md:w-12 md:h-12" />
                  </motion.div>
                  <motion.div
                    animate={{
                      x: [0, -25, 0],
                      y: [0, 15, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 2,
                    }}
                    className="absolute top-32 right-16 text-white/20"
                  >
                    <Globe className="w-6 h-6 md:w-10 md:h-10" />
                  </motion.div>
                  <motion.div
                    animate={{
                      x: [0, 20, 0],
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 4,
                    }}
                    className="absolute bottom-20 left-1/4 text-white/20"
                  >
                    <Globe className="w-7 h-7 md:w-11 md:h-11" />
                  </motion.div>
                </div>
              </>
            )}

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
              <div
                className={`${heroSlides[currentSlide].type === "global-expansion" ? "max-w-5xl mx-auto text-center" : "max-w-2xl"}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-white"
                >
                  {heroSlides[currentSlide].type === "global-expansion" ? (
                    <>
                      {/* Country Flags */}
                      <div className="flex justify-center items-center space-x-4 md:space-x-6 mb-6 md:mb-8">

                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 }}
                          className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-2"
                        >
                          <Image
                            src="/flags/Uk.png"
                            alt="UK Flag"
                            width={32}
                            height={24}
                            className="w-6 h-4 md:w-8 md:h-6 rounded-sm border border-white/30"
                          />
                          <span className="text-white text-sm md:text-base font-medium">UK</span>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 }}
                          className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-2"
                        >
                          <Image
                            src="/flags/Usa.png"
                            alt="USA Flag"
                            width={32}
                            height={24}
                            className="w-6 h-4 md:w-8 md:h-6 rounded-sm border border-white/30"
                          />
                          <span className="text-white text-sm md:text-base font-medium">USA</span>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 }}
                          className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-2"
                        >
                          <Image
                            src="/flags/Canada.png"
                            alt="Canada Flag"
                            width={32}
                            height={24}
                            className="w-6 h-4 md:w-8 md:h-6 rounded-sm border border-white/30"
                          />
                          <span className="text-white text-sm md:text-base font-medium">Canada</span>
                        </motion.div>
                        
                      </div>

                      {/* Title with Typing Effect */}
                      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight">
                        <TypingEffect text={heroSlides[currentSlide].title} speed={55} className="text-white" />
                      </h1>

                      {/* Stats Row */}
                      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-8 md:mb-10">
                        <div className="text-center">
                          <div className="text-2xl md:text-3xl font-bold text-white">200+</div>
                          <div className="text-sm md:text-base text-blue-100">Happy Clients</div>
                        </div>
                        <div className="w-px h-8 bg-white/30 hidden sm:block"></div>
                        <div className="text-center">
                          <div className="text-2xl md:text-3xl font-bold text-white">3</div>
                          <div className="text-sm md:text-base text-blue-100">Countries</div>
                        </div>
                        <div className="w-px h-8 bg-white/30 hidden sm:block"></div>
                        <div className="text-center">
                          <div className="text-2xl md:text-3xl font-bold text-white">24/7</div>
                          <div className="text-sm md:text-base text-blue-100">Global Support</div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <Badge className="mb-6 bg-cyan-400 text-blue-900 px-3  hover:text-white  md:px-4 py-1 md:py-2 text-sm font-medium">
                        {heroSlides[currentSlide].service}
                      </Badge>

                      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight">
                        {heroSlides[currentSlide].title}
                      </h1>
                    </>
                  )}

                  <Link href={heroSlides[currentSlide].buttonLink}>
                    <Button
                      size="lg"
                      className={`${
                        heroSlides[currentSlide].type === "global-expansion"
                          ? "bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700 px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl font-semibold shadow-2xl transform hover:scale-105"
                          : "bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
                      } rounded-full font-medium transition-all duration-300`}
                    >
                      {heroSlides[currentSlide].buttonText || "Get started"}
                      {heroSlides[currentSlide].type === "global-expansion" && (
                        <ArrowRight className="ml-3 w-5 h-5 md:w-6 md:h-6" />
                      )}
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 bg-white">
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

      {/* Services Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Our Professional Services</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Comprehensive solutions designed to streamline your bussiness operations and maximize efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group border-0 shadow-lg overflow-hidden">
                  <div className="h-1 md:h-2 bg-cyan-400"></div>
                  <CardContent className="p-6 md:p-8">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                      <service.icon className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">{service.description}</p>
                    <ul className="space-y-2 mb-4 md:mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs md:text-sm text-gray-500">
                          <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href={service.link}>
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors border-blue-200 text-sm md:text-base bg-transparent"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Elanix EnterPrise Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Why Choose Elanix EnterPrise?</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              We're committed to delivering exceptional bussiness solutions that drive results and exceed expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center p-4 md:p-6"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <item.icon className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-900">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-600 px-2">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Simple, Transparent Pricing</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Choose the perfect plan for your practice. No hidden fees, no long-term contracts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-3 md:px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <Card className={`h-full ${plan.color} ${plan.popular ? "shadow-xl" : "shadow-lg"}`}>
                  <CardContent className="p-6 md:p-8 text-center">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-3xl md:text-4xl font-bold text-blue-600 my-4">
                      {plan.price}
                      {plan.price !== "Custom" && (
                        <span className="text-base md:text-lg text-gray-600">/collection</span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">{plan.description}</p>
                    <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm md:text-base">
                          <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button
                        className={`w-full ${
                          plan.popular
                            ? "bg-blue-600 hover:bg-blue-700 text-white"
                            : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                        }`}
                      >
                        Get Started
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">What Our Clients Say</h2>
            <p className="text-lg md:text-xl text-blue-200">Trusted by bussiness professionals worldwide</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center"
              >
                <Quote className="w-10 h-10 md:w-12 md:h-12 text-blue-300 mx-auto mb-4 md:mb-6" />
                <blockquote className="text-lg md:text-xl mb-6 md:mb-8 leading-relaxed px-4">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <Image
                    src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-base md:text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="text-sm md:text-base text-blue-200">{testimonials[currentTestimonial].title}</div>
                    <div className="flex text-yellow-400 mt-1">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-2 mt-6 md:mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-white" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Transform Your Bussiness?</h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-blue-100 max-w-2xl mx-auto px-4">
              Join hundreds of bussiness providers who trust Elanix EnterPrise for their professional service needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-6 md:px-8 py-3 rounded-full">
                  Get Free Consultation
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-6 md:px-8 py-3 rounded-full bg-transparent"
              >
                <span className="text-blue-900">Learn More</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
