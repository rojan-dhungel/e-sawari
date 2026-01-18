"use client"

import { Play } from "lucide-react"
import { motion } from "framer-motion"

export default function HowItWorksHeroSection() {
  return (
    <section className="relative px-4 pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-roads min-h-[60vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-green/5 text-primary-green text-xs font-bold tracking-widest uppercase mb-8 border border-primary-green/10"
        >
          <Play className="h-3 w-3 fill-primary-green" />
          The Guide to Sawari
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl font-bold font-heading text-dark-heading mb-6 leading-none tracking-tighter"
        >
          <span className="text-primary-green">Everything,</span><br />
          <span className="font-light italic opacity-60">explained.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-paragraph/60 max-w-xl mx-auto mb-12 font-light tracking-tight leading-relaxed"
        >
          Whether you&apos;re riding, ordering, or driving—discover how to get the most out of Nepal&apos;s first super app.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-primary-green text-white px-8 py-3 rounded-2xl font-bold transition-all shadow-xl hover:bg-primary-green/90 group border border-white/10"
          >
            <div className="text-left leading-none font-body">
              <p className="text-[10px] uppercase opacity-60">Download on</p>
              <p className="text-lg font-semibold mt-1">App Store</p>
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-white text-primary-green px-8 py-3 rounded-2xl font-bold transition-all shadow-xl hover:bg-gray-50 group border border-gray-100"
          >
            <div className="text-left leading-none font-body">
              <p className="text-[10px] uppercase opacity-60">Get it on</p>
              <p className="text-lg font-semibold mt-1">Google Play</p>
            </div>
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-green/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}