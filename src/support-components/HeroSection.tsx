"use client"

import { Headphones, MessageCircle, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="py-20 bg-light">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="bg-primary-green/10 p-6 rounded-2xl">
              <Headphones className="h-12 w-12 text-primary-green" />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-5xl font-semibold text-dark-heading mb-6"
          >
            We&apos;re Here to <span className="text-primary-green">Help</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg text-paragraph mb-12 max-w-3xl mx-auto leading-relaxed text-balance"
          >
            Get instant support for all your questions and concerns. Our dedicated support team is available 24/7 to
            assist you with any issues.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            {/* Live Chat */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center justify-center px-8 py-3 bg-primary-green text-white font-semibold rounded-xl text-lg transition-all shadow-md hover:shadow-lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Start Live Chat
            </motion.button>

            {/* Help Center */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center justify-center px-8 py-3 border-2 border-primary-green text-primary-green font-semibold rounded-xl text-lg transition-all shadow-md hover:shadow-lg hover:bg-primary-green/10"
            >
              Browse Help Center
              <ArrowRight className="ml-2 w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Footer text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <p className="text-gray-600">
              Average response time: <span className="font-semibold text-primary-green">2 minutes</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
