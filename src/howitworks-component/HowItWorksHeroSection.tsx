"use client"

import { Play, Download, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

export default function HowItWorksHeroSection() {
  const [showQR, setShowQR] = useState(false)

  const handleDownload = () => {
    setShowQR(true)
  }

  return (
    <>
      <section className="relative w-full min-h-screen bg-light flex items-center justify-center">
        <div className="max-w-6xl mx-auto text-center px-4">
          {/* Restored Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary-green/10 text-primary-green text-sm font-semibold tracking-wide uppercase mb-6"
          >
            <Play className="h-4 w-4" />
            How It Works
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-semibold text-dark-heading mb-6 leading-tight"
          >
            Simple Steps to{" "}
            <motion.span
              className="text-primary-green"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Get Started
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-paragraph max-w-2xl mx-auto mb-10 text-balance"
          >
            Getting around, ordering food, sending packages, or renting vehicles has never been easier.
            Follow these simple steps to start using{" "}
            <span className="font-semibold text-primary-green">eSawari</span> today.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* Download App Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleDownload}
              className="bg-primary-green hover:bg-primary-green/90 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download App
            </motion.button>

            {/* Watch Demo Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center justify-center border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Floating Ambient Elements */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute top-16 left-12 w-16 h-16 bg-primary-green/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-16 right-12 w-20 h-20 bg-primary-green/5 rounded-full blur-xl"
          />
        </div>
      </section>

      {/* QR POPUP */}
      {showQR && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-[999] backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl relative overflow-hidden animate-in fade-in duration-300">
            {/* Close */}
            <button
              onClick={() => setShowQR(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 hover:bg-gray-100 w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 text-xl font-light"
            >
              &times;
            </button>

            {/* Logo */}
            <div className="flex justify-center mb-5">
              <div className="rounded-xl shadow-md">
                <Image
                  src="/Images/sawari.png"
                  alt="Sawari app logo"
                  width={110}
                  height={110}
                />
              </div>
            </div>

            <h2
              className="text-2xl font-semibold mb-2 leading-tight"
              style={{ color: 'var(--dark-heading)' }}
            >
              Download Sawari
            </h2>
            <p
              className="text-sm mb-5"
              style={{ color: 'var(--dark-heading)', opacity: 0.7 }}
            >
              Point your smartphone camera at the QR code
            </p>

            {/* QR Code */}
            <div className="flex justify-center my-5">
              <div className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/Images/qr-sawari.png"
                  alt="QR Code"
                  width={170}
                  height={170}
                  className="rounded-lg"
                />
              </div>
            </div>

            <p
              className="text-xs mt-4 tracking-wide uppercase font-medium"
              style={{ color: 'var(--dark-heading)', opacity: 0.6 }}
            >
              Scan with your phone camera
            </p>
          </div>
        </div>
      )}
    </>
  )
}