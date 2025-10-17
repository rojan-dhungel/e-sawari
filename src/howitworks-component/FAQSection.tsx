"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "How do I create an account?",
    answer:
      "Simply download the eSawari app and sign up using your phone number or email address. Verification takes just a few seconds.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, debit cards, digital wallets, and cash payments for most services.",
  },
  {
    question: "How can I track my ride or delivery?",
    answer:
      "All services include real-time tracking. You'll see your driver's location, estimated arrival time, and can contact them directly through the app.",
  },
  {
    question: "What if I need to cancel my booking?",
    answer:
      "You can cancel most bookings through the app. Cancellation policies vary by service type and timing.",
  },
  {
    question: "How do I become a driver or delivery partner?",
    answer:
      "Visit our Partner section in the app or website to apply. You'll need to meet basic requirements and complete a simple verification process.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Yes, we use industry-standard encryption and security measures to protect all user data and payment information.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggle = (index: number) => setOpenIndex(openIndex === index ? null : index)

  return (
    <section className="py-24 px-4 bg-light relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary-green/10 text-primary-green px-5 py-2 rounded-full font-semibold text-sm mb-4"
          >
            <HelpCircle className="w-4 h-4" />
            FAQs
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-semibold text-dark-heading mb-4">
            Frequently Asked <span className="text-primary-green">Questions</span>
          </h2>
          <p className="text-lg text-paragraph max-w-2xl mx-auto">
            Got questions? We’ve got answers to help you make the most of eSawari.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-primary-green/5 transition-colors"
              >
                <span className="font-semibold text-dark-heading text-base md:text-lg">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-primary-green flex-shrink-0"
                >
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden border-t border-primary-green/10 bg-primary-green/5"
                  >
                    <motion.div
                      initial={{ y: -5 }}
                      animate={{ y: 0 }}
                      exit={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 py-4"
                    >
                      <p className="text-paragraph leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-primary-green p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-semibold text-light mb-2">Still have questions?</h3>
          <p className="text-paragraph text-light mb-6">
            Our support team is available 24/7 to assist you anytime.
          </p>
         <div className="flex justify-center mt-6">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-6 py-3 bg-white font-semibold rounded-xl text-primary-green hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
  >
    <HelpCircle className="w-4 h-4 mr-2" />
    Contact Support
  </motion.button>
</div>


        </motion.div>
      </div>

      {/* Floating Accent Elements */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 left-10 w-16 h-16 bg-primary-green/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-10 w-24 h-24 bg-primary-green/5 rounded-full blur-xl"
      />
    </section>
  )
}
