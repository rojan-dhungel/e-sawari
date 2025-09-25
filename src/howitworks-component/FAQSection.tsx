"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "How do I create an account?",
    answer:
      "Simply download the esawari app and sign up using your phone number or email address. Verification takes just a few seconds.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, digital wallets, and cash payments for most services.",
  },
  {
    question: "How can I track my ride or delivery?",
    answer:
      "All services include real-time tracking. You'll see your driver's location, estimated arrival time, and can contact them directly through the app.",
  },
  {
    question: "What if I need to cancel my booking?",
    answer: "You can cancel most bookings through the app. Cancellation policies vary by service type and timing.",
  },
  {
    question: "How do I become a driver or delivery partner?",
    answer:
      "Visit our partner section in the app or website to apply. You'll need to meet basic requirements and complete a simple verification process.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Yes, we use industry-standard encryption and security measures to protect all user data and payment information.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-8 h-8 text-primary-green" />
            <h2 className="text-3xl md:text-4xl font-bold text-dark-heading">Frequently Asked Questions</h2>
          </div>
          <p className="text-lg text-paragraph">Got questions? We&apos;ve got answers.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-primary-green/30 transition-all duration-300 hover:shadow-lg"
            >
              <motion.div
                className="px-6 py-4 cursor-pointer bg-white hover:bg-primary-green/5 transition-colors"
                onClick={() => toggle(index)}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-dark-heading hover:text-primary-green transition-colors pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-primary-green flex-shrink-0"
                  >
                    {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </motion.div>
                </div>
              </motion.div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      exit={{ y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4 bg-primary-green/5"
                    >
                      <p className="text-paragraph leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact support section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center p-6 bg-primary-green/5 rounded-xl"
        >
          <h3 className="text-xl font-semibold text-dark-heading mb-2">Still have questions?</h3>
          <p className="text-paragraph mb-4">Our support team is here to help you 24/7</p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-green text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-green/90 transition-all shadow-lg hover:shadow-xl"
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
