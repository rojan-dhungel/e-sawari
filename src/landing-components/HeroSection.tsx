"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative min-h-[100dvh] overflow-hidden bg-dark-heading">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero-bg.webm" type="video/webm" />
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay - Gradient for better readability and premium feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />

      <div className="relative z-20 w-full min-h-[100dvh] flex items-end justify-end p-8 md:p-16">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-row gap-4">
            <motion.button
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-primary-green text-white px-6 py-3 rounded-2xl font-bold transition-all shadow-2xl group border border-white/10"
            >
              <div className="text-left leading-none font-body">
                <p className="text-[10px] uppercase opacity-60">Download on</p>
                <p className="text-lg font-semibold mt-1">App Store</p>
              </div>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-white text-primary-green px-6 py-3 rounded-2xl font-bold transition-all shadow-2xl group border border-gray-100"
            >
              <div className="text-left leading-none font-body">
                <p className="text-[10px] uppercase opacity-60">Get it on</p>
                <p className="text-lg font-semibold mt-1">Google Play</p>
              </div>
            </motion.button>
          </div>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            whileHover={{ scale: 1.05, opacity: 1 }}
            whileTap={{ scale: 0.95 }}
            className="text-white/80 hover:text-white font-medium flex items-center gap-2 group transition-all font-body"
          >
            Become a Partner <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform text-primary-green" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
