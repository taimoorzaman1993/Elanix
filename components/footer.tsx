"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4 md:mb-6">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center overflow-hidden">
                <img src="/logo.jpg" alt="Elanix Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-lg md:text-xl font-bold">Elanix Enterprise</span>
            </div>
            <p className="text-blue-200 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              At Elanix Enterprise, we deliver complete solutions for businesses — from revenue cycle management and credentialing to digital transformation, marketing, and design.
            </p>

            <div className="mb-4 md:mb-6">
              <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Subscribe to Our Newsletter</h3>
              <div className="space-y-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-blue-800 border-blue-700 text-white placeholder:text-white text-sm md:text-base"
                />
                <div className="flex items-center space-x-2">
                  <Checkbox id="gdpr" className="border-blue-600" />
                  <label htmlFor="gdpr" className="text-xs md:text-sm text-blue-200">
                    Accept GDPR Terms
                  </label>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-sm md:text-base">SUBMIT</Button>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">SERVICES</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><Link href="/services/medical-billing" className="text-blue-200 hover:text-white transition-colors text-sm md:text-base">Medical Billing</Link></li>
              <li><Link href="/services/credentialing" className="text-blue-200 hover:text-white transition-colors text-sm md:text-base">Credentialing</Link></li>
              <li><Link href="/services/state-licencing" className="text-blue-200 hover:text-white transition-colors text-sm md:text-base">State Licensing</Link></li>
              <li><Link href="/services/virtual-assistance" className="text-blue-200 hover:text-white transition-colors text-sm md:text-base">Virtual Assistance</Link></li>
              <li><Link href="/services/web-development" className="text-blue-200 hover:text-white transition-colors text-sm md:text-base">Web Development</Link></li>
              <li><Link href="/services/digital-marketing" className="text-blue-200 hover:text-white transition-colors text-sm md:text-base">Digital Marketing</Link></li>
              <li><Link href="/services/app-development" className="text-blue-200 hover:text-white transition-colors text-sm md:text-base">App Development</Link></li>
              <li><Link href="/services/ai-automation" className="text-blue-200 hover:text-white transition-colors text-sm md:text-base">AI Automation</Link></li>
              <li><Link href="/services/construction-estimation" className="text-blue-200 hover:text-white transition-colors text-sm md:text-base">Construction Estimation</Link></li>
              <li><Link href="/services/quickbooks" className="text-blue-200 hover:text-white transition-colors text-sm md:text-base">BookKeeping & Accounting</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">SOLUTIONS</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><Link href="/services" className="text-blue-200 hover:text-white transition-colors text-sm md:text-base">All Services</Link></li>
              <li><Link href="/specialties" className="text-blue-200 hover:text-white transition-colors text-sm md:text-base">Our Specialties</Link></li>
              <li><Link href="/for-you" className="text-blue-200 hover:text-white transition-colors text-sm md:text-base">Practice Solutions</Link></li>
              <li><Link href="/pricing" className="text-blue-200 hover:text-white transition-colors text-sm md:text-base">Pricing Plans</Link></li>
            </ul>
            <div className="mt-4 md:mt-6 flex items-center space-x-4">
              <img src="/DMCProtected.png?height=40&width=120" alt="DMCA Protected" className="h-8 md:h-10" />
              <img src="/commerce.png?height=90&width=90" alt="ISO Certified" className="h-[65px] md:h-[96px]" />
    
         
         
         </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">QUICK LINKS</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><Link href="/about" className="text-blue-200 hover:text-white transition-colors text-sm md:text-base">About Us</Link></li>
              <li><Link href="/blog" className="text-blue-200 hover:text-white transition-colors text-sm md:text-base">Blog</Link></li>
              <li><Link href="/testimonials" className="text-blue-200 hover:text-white transition-colors text-sm md:text-base">Testimonials</Link></li>
              <li><Link href="/contact" className="text-blue-200 hover:text-white transition-colors text-sm md:text-base">Contact Us</Link></li>
            </ul>

            {/* Social Icons */}
            <div className="mt-6 md:mt-8">
              <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Elanix Enterprise</h4>
              <div className="flex space-x-3">
                <motion.a href="https://www.facebook.com/people/Elanix-Enterprise/61579633629936/" whileHover={{ scale: 1.1 }} className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Facebook className="w-4 h-4 md:w-5 md:h-5" />
                </motion.a>
                <motion.a href="https://www.instagram.com/elanix_enterprise/" whileHover={{ scale: 1.1 }} className="w-8 h-8 md:w-10 md:h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                  <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                </motion.a>
                <motion.a href="https://x.com/Elanix_E" whileHover={{ scale: 1.1 }} className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </motion.a>
                <motion.a href="https://www.linkedin.com/company/elanix-enterprise/?viewAsMember=true" whileHover={{ scale: 1.1 }} className="w-8 h-8 md:w-10 md:h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Our Offices */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">OUR OFFICES</h3>
            <div className="space-y-4 text-blue-200 text-sm md:text-base">
              <div>
                <p className="font-semibold text-white">USA Office</p>
                <p>833 Mahler Rd, Ste 9B</p>
                <p>Burlingame, CA 94010</p>
                <p>
                  Phone:{" "}
                  <a href="tel:+15123759999" className="hover:text-white">
                    (512) 375-9999
                  </a>
                </p>
              </div>
              <div>
                <p className="font-semibold text-white">UK Office</p>
                <p>66 Lawrence Road</p>
                <p>Leeds LS8 3HS, West Yorkshire</p>
                <p>
                  Phone:{" "}
                  <a href="tel:+447455139486" className="hover:text-white">
                    00447455139486
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-blue-200">
          <p className="text-sm md:text-base">&copy; Elanix Enterprise 2025. All Rights Reserved.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6 mt-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors text-sm md:text-base">
              Privacy Policy
            </Link>
            <Link href="/communication" className="hover:text-white transition-colors text-sm md:text-base">
              Communication Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
// import { redirect } from "next/navigation"