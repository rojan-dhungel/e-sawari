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
    <section className="py-24 px-4 bg-roads relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary-green font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Help Center</span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-dark-heading mb-6 tracking-tighter">
            Common <span className="text-primary-green">Answers.</span>
          </h2>
          <p className="text-lg text-paragraph/60 max-w-xl mx-auto font-light leading-relaxed">
            Everything you need to know about navigating the Sawari ecosystem.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4 relative z-10">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`group border rounded-[2rem] transition-all duration-500 overflow-hidden ${
                openIndex === index 
                  ? 'bg-white border-primary-green/20 shadow-2xl shadow-primary-green/5' 
                  : 'bg-white/40 border-gray-100 hover:bg-white hover:border-primary-green/10'
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-8 py-6 flex items-center justify-between"
              >
                <span className={`font-bold transition-colors duration-300 ${
                  openIndex === index ? 'text-primary-green' : 'text-dark-heading opacity-70 group-hover:opacity-100'
                } text-lg md:text-xl font-heading tracking-tight`}>
                  {faq.question}
                </span>
                <div className={`p-2 rounded-xl transition-all duration-300 ${
                  openIndex === index ? 'bg-primary-green text-white rotate-0' : 'bg-gray-50 text-gray-400 rotate-90'
                }`}>
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-8 pb-8 pt-2">
                       <div className="h-px w-full bg-gray-50 mb-6" />
                       <p className="text-paragraph/60 leading-relaxed font-light text-base md:text-lg">
                         {faq.answer}
                       </p>
                    </div>
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
          viewport={{ once: true }}
          className="mt-20 p-1 bg-gradient-to-r from-primary-green/20 via-primary-green/5 to-primary-green/20 rounded-[3rem]"
        >
          <div className="bg-white rounded-[2.9rem] p-12 text-center border border-white">
            <h3 className="text-3xl font-bold text-dark-heading mb-4 font-heading tracking-tighter">Still have questions?</h3>
            <p className="text-paragraph/60 max-w-md mx-auto mb-10 font-light">
              Our support team is available 24/7 to assist you with any inquiries or issues.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-primary-green text-white font-bold rounded-2xl shadow-xl hover:bg-primary-green/90 transition-all flex items-center justify-center mx-auto gap-3 font-body"
            >
              <HelpCircle className="w-5 h-5 text-white" />
              Contact Support
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-green/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  )
}
