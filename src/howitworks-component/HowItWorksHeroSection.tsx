"use client"

import { Play, Download, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function HowItWorksHeroSection() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = () => {
    setIsDownloading(true)
    setTimeout(() => setIsDownloading(false), 2000)
  }

  return (
    <section className="bg-light py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block bg-primary-green/10 text-primary-green px-4 py-2 rounded-full text-sm font-medium mb-6"
        >
          How It Works
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-dark-heading mb-6 text-balance"
        >
          Simple Steps to
          <motion.span
            className="text-primary-green"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {" "}
            Get Started
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-paragraph max-w-3xl mx-auto mb-8 text-pretty"
        >
          Getting around, ordering food, sending packages, or renting vehicles has never been easier. Follow these
          simple steps to start using esawari today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* Primary button */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            disabled={isDownloading}
            className="bg-primary-green hover:bg-primary-green/90 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
          >
            {isDownloading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
              />
            ) : (
              <>
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                Download App
              </>
            )}
          </motion.button>

          {/* Outline button with icon */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center border border-primary-green text-primary-green hover:bg-primary-green hover:text-white px-8 py-3 rounded-lg font-medium bg-transparent transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            Watch Demo
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Floating elements for visual interest */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-16 h-16 bg-primary-green/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 right-10 w-20 h-20 bg-primary-green/5 rounded-full blur-xl"
        />
      </div>
    </section>
  )
}
