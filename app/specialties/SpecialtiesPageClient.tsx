"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const specialties = [
  {
    title: "Healthcare Technology Solutions",
    description:
      "Is your healthcare practice facing challenges with billing accuracy, claim processing, or revenue optimization? Many of our clients encounter similar issues. For instance, they often struggle with complex medical coding requirements, making it increasingly difficult to achieve optimal reimbursement rates. Others possess extensive patient data but rely heavily on manual processes to extract meaningful insights for practice improvement.",
    subDescription:
      "If you can relate to any of these scenarios, then it's time we had a conversation. We're already addressing these challenges for our existing clients with 99.5% claim accuracy and 98% credentialing success rates.",
    technologies: [
      { name: "Aetna", logo: "/credentialing/aetna.png" },
      { name: "Blue Cross Blue Shield", logo: "/credentialing/bcbs.png" },
      { name: "Cinga", logo: "/credentialing/cigna.png" },
      { name: "CMS", logo: "/credentialing/cms.png" },
      { name: "Humana", logo: "/credentialing/humana.png" },
      { name: "Medicaid", logo: "/credentialing/medicaid.png" },
      { name: "Medicare", logo: "/credentialing/medicare.png" },
      { name: "United Health Care", logo: "/credentialing/unitedhealthcare.png" },
    ],
  },
  {
    title: "AI & Automation Excellence",
    description:
      "Are you struggling with repetitive manual processes that consume valuable time and resources? Many businesses face similar challenges with data processing, customer service automation, and workflow optimization. Some organizations have vast amounts of data but lack the AI-powered tools to transform it into actionable business intelligence.",
    subDescription:
      "At Elanix Enterprise, we have a dedicated team focused on leveraging the power of Artificial Intelligence to enhance productivity and deliver innovative business solutions. We are actively helping our customers achieve 40% cost reduction through intelligent automation.",
    technologies: [
      { name: "OpenAI", logo: "/automation/openai.png" },
      { name: "TensorFlow", logo: "/automation/tensorflow.png" },
      { name: "PyTorch", logo: "/automation/pytorch.png" },
      { name: "FastAPI", logo: "/automation/fastapi.png" },
      { name: "LangChain", logo: "/automation/langchain.png" },
      { name: "N8N", logo: "/automation/n8n.png" },
      { name: "OpenCV", logo: "/automation/opencv.png" },
      { name: "Selenium", logo: "/automation/selenium.png" },
    ],
  },
  {
    title: "Web & Mobile Development",
    description:
      "Is your business struggling with outdated digital presence or inefficient mobile applications? Many companies encounter challenges with responsive design, user experience optimization, and cross-platform compatibility. Others need robust web applications that can scale with their growing business needs while maintaining peak performance.",
    subDescription:
      "Our development team specializes in creating custom, high-performance websites and mobile applications that drive business growth. We deliver solutions that are not only visually stunning but also technically superior and user-friendly.",
    technologies: [
      { name: "React", logo: "/web/react.png" },
      { name: "Next.js", logo: "/web/nextjs.png" },
      { name: "Node.js", logo: "/web/nodejs.png" },
      { name: "TypeScript", logo: "/web/Typescript.png" },
      { name: "Flutter", logo: "/web/flutter.jpg" },
      { name: "React Native", logo: "/web/react-native.png" },
      { name: "MongoDB", logo: "/web/mongodb.png" },
      { name: "PostgreSQL", logo: "/web/Postgresql.png" },
    ],
  },
  {
    title: "Business Process Automation",
    description:
      "Are you dealing with inefficient workflows, manual data entry, or disconnected business systems? Many organizations struggle with integrating various software solutions, automating repetitive tasks, and maintaining data consistency across different platforms. Some businesses have the right tools but lack the expertise to optimize their processes effectively.",
    subDescription:
      "We specialize in streamlining business operations through intelligent automation, system integration, and process optimization. Our solutions help businesses reduce operational costs while improving accuracy and efficiency.",
    technologies: [
      { name: "QuickBooks", logo: "/bussiness/quickbooks.png" },
      { name: "Odoo", logo: "/bussiness/odoo.png" },
      { name: "AutoCAD", logo: "/bussiness/autoCad.jpeg" },
      { name: "Zapier", logo: "/bussiness/zapier.png" },
      { name: "Blender", logo: "/bussiness/blender.png" },
      { name: "Jira", logo: "/bussiness/jira.png" },
      { name: "Click UP", logo: "/bussiness/clickup.png" },
      { name: "Figma", logo: "/bussiness/figma.png" },
    ],
  },
]

export default function SpecialtiesPageClient() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Specialties
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Cutting-edge technologies and proven methodologies that power our solutions
          </motion.p>
        </div>
      </div>

      {/* Specialties Sections */}
      <div className="container mx-auto px-4 py-16">
        {specialties.map((specialty, index) => (
          <motion.div
            key={index}
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">{specialty.title}</h2>

            {/* Description */}
            <div className="text-slate-600 text-lg leading-relaxed mb-6 max-w-5xl">
              <p className="mb-4">{specialty.description}</p>
              <p className="text-blue-700 font-medium">{specialty.subDescription}</p>
            </div>

            {/* Technology Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-8">
              {specialty.technologies.map((tech, techIndex) => (
                <motion.div
                  key={techIndex}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-300 group"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: techIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={tech.logo || "/placeholder.svg"}
                        alt={`${tech.name} logo`}
                        width={80}
                        height={50}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-sm font-semibold text-slate-700 text-center group-hover:text-blue-600 transition-colors duration-300">
                      {tech.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            {index < specialties.length - 1 && <div className="mt-16 border-b border-slate-200"></div>}
          </motion.div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how our specialized expertise can help solve your unique challenges
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Started Today
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
