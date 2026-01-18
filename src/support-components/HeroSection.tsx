"use client"

import { Headphones, MessageCircle, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-green/5 via-white to-white pt-32 pb-24 lg:pt-40 lg:pb-32">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-green/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 -z-0" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 -z-0" />

      <div className="max-w-6xl relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-10"
          >
            <div className="relative animate-float">
              <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
              `}</style>
              <div className="absolute inset-0 bg-primary-green/30 blur-2xl rounded-full scale-110" />
              <div className="relative bg-white shadow-2xl p-6 rounded-[2rem] border border-gray-100/50">
                <Headphones className="h-16 w-16 text-primary-green" />
              </div>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold font-heading text-dark-heading mb-8 tracking-tight leading-tight"
          >
            We&apos;re Here to <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-emerald-600">Help You</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl md:text-2xl text-paragraph/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Get instant support for all your questions. Our dedicated team is available 24/7 to assist you.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5 justify-center mb-16"
          >
            {/* Live Chat */}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center justify-center px-8 py-4 bg-primary-green text-white font-bold rounded-2xl text-lg transition-all shadow-lg hover:shadow-primary-green/30"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Start Live Chat
            </motion.button>

            {/* Browse Help */}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center justify-center px-8 py-4 bg-white border-2 border-gray-100 text-dark-heading hover:border-primary-green/30 hover:bg-gray-50 font-bold rounded-2xl text-lg transition-all"
            >
              View FAQs
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
            <p className="text-gray-500">
              Average response time: <span className="font-bold text-primary-green">2 minutes</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

