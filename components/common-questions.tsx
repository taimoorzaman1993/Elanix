"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

interface Question {
  question: string
  answer: string
}

interface CommonQuestionsProps {
  title: string
  questions: Question[]
  serviceName: string
}

export default function CommonQuestions({ title, questions, serviceName }: CommonQuestionsProps) {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index)
  }

  const handleContactUs = () => {
    window.open("https://wa.me/15123759999", "_blank")
  }

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12">{title}</h2>

          <div className="space-y-4 mb-8">
            {questions.map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full p-4 md:p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-800 pr-4">{item.question}</span>
                    {openQuestion === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>

                  <AnimatePresence>
                    {openQuestion === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 md:p-6 pt-0 text-gray-600 leading-relaxed">{item.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Section */}
          <div className="bg-blue-50 rounded-lg p-6 md:p-8 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-4">
              Need more information about our {serviceName} service?
            </h3>
            <p className="text-gray-600 mb-6">
              Our experts are ready to answer your questions and provide a customized solution for your practice.
            </p>
            <Button onClick={handleContactUs} className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
