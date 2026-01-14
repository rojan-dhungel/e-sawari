"use client"

import { motion } from "framer-motion"
import { Zap, Shield,Briefcase, Heart } from "lucide-react"
import { NepaliRupee } from "@/ui/NepaliRupee"

const HeroSection = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      label: "Electric Power Vehicle",
      description: "100% electric vehicles for sustainable transportation",
    },
    {
      icon: <NepaliRupee size={24} color="#FFFFFF" />,
      label: "40% Cost-Effective",
      description: "Riders save 40% on operational costs",
    },
    {
      icon: <NepaliRupee size={24} color="#FFFFFF" />,
      label: "25% Cost-Saving",
      description: "Passengers enjoy 25% lower fares",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      label: "1 Lakh+ Work Opportunities",
      description: "Creating employment for thousands of drivers",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      label: "5 Lakhs Medical Insurance",
      description: "Comprehensive health coverage for riders & passengers",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      label: "25 Lakhs Accidental Insurance",
      description: "Complete accident protection for riders & passengers",
    },
  ]

  return (
    <>
      <section className="relative w-full min-h-screen pt-28 overflow-hidden bg-roads">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Tech Content */}
            <div className="text-left space-y-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center px-4 py-1.5 bg-primary-green/10 text-primary-green rounded-full text-xs font-bold tracking-wider uppercase gap-2"
              >
                <Zap className="h-4 w-4" />
                <span>The Future of Mobility in Nepal</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-8xl font-bold font-heading text-dark-heading leading-[0.9] tracking-tighter"
              >
                Nepal&apos;s First <br />
                <span className="text-primary-green">Super App.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-paragraph/60 leading-relaxed font-body font-light max-w-xl"
              >
                Sawari is more than just a ride-sharing app. It&apos;s a unified ecosystem designed to empower millions of users and local entrepreneurs through technology, efficiency, and reliability.
              </motion.p>

              {/* App Store Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <button className="flex items-center gap-3 bg-primary-green text-white px-8 py-3 rounded-2xl hover:scale-105 transition-all group shadow-xl">
                   <div className="text-left font-body">
                    <p className="text-[10px] uppercase opacity-70 leading-none font-bold">Download on</p>
                    <p className="text-lg font-bold leading-none mt-1">App Store</p>
                  </div>
                </button>
                <button className="flex items-center gap-3 bg-white border-2 border-primary-green text-primary-green px-8 py-3 rounded-2xl hover:scale-105 transition-all group shadow-sm">
                  <div className="text-left font-body">
                    <p className="text-[10px] uppercase opacity-70 leading-none font-bold">Get it on</p>
                    <p className="text-lg font-bold leading-none mt-1">Google Play</p>
                  </div>
                </button>
              </motion.div>
            </div>

            {/* Right Column: App Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex justify-center lg:justify-end"
            >
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-green/5 blur-3xl rounded-full -z-10" />
              
              {/* Phone Mockup Frame */}
              <div className="relative w-[300px] h-[600px] bg-dark-heading rounded-[3rem] border-[8px] border-dark-heading shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden">
                {/* Screen Content Simulation */}
                <div className="w-full h-full bg-light p-6 space-y-6 overflow-hidden">
                  <div className="flex justify-between items-center mb-8">
                    <div className="w-10 h-10 rounded-full bg-gray-200" />
                    <div className="w-20 h-4 bg-gray-200 rounded-full" />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="w-full h-32 bg-primary-green/10 rounded-2xl" />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-24 bg-white shadow-sm rounded-2xl border border-gray-100 flex flex-col items-center justify-center p-4">
                         <div className="w-8 h-8 rounded-lg bg-primary-green/20 mb-2" />
                         <div className="w-12 h-2 bg-gray-200 rounded-full" />
                      </div>
                      <div className="h-24 bg-white shadow-sm rounded-2xl border border-gray-100 flex flex-col items-center justify-center p-4">
                         <div className="w-8 h-8 rounded-lg bg-orange-100 mb-2" />
                         <div className="w-12 h-2 bg-gray-200 rounded-full" />
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-40 bg-gray-100 rounded-2xl" />
                </div>
                
                {/* Dynamic Island / Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-dark-heading rounded-b-2xl" />
              </div>

              {/* Floating Feature Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-12 top-1/4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-green/10 rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary-green" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-dark-heading">Fast Pickup</p>
                    <p className="text-[10px] text-paragraph">Arriving in 3 min</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-28 bg-light border-t border-gray-100">
        
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20"
          >
            <h3 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold font-heading leading-snug sm:leading-tight text-dark-heading tracking-tighter"
            >
              Why Choose <span className="text-primary-green">Sawari</span>
            </h3>
            <p 
              className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mt-3 sm:mt-4 px-2 text-paragraph/60 font-body font-light"
            >
              We&apos;re committed to providing the best experience for riders and drivers alike
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ translateY: -8, scale: 1.02 }}
                className="group relative bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 md:p-8 shadow-sm hover:shadow-lg hover:border-primary-green/20 transition-all duration-300"
              >
                {/* Background Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-green/3 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon Container */}
                <div className="flex items-center justify-center mb-5 sm:mb-6 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-3 sm:p-4 rounded-xl bg-primary-green text-light shadow-md"
                  >
                    {feature.icon}
                  </motion.div>
                </div>

                {/* Label */}
                <h3 
                  className="text-lg sm:text-xl font-bold font-heading text-dark-heading mb-2 relative z-10 tracking-tight"
                >
                  {feature.label}
                </h3>

                {/* Description */}
                <p 
                  className="text-paragraph/60 text-sm sm:text-base leading-relaxed relative z-10 font-body font-light"
                >
                  {feature.description}
                </p>

                {/* Accent Line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-12 bg-primary-green rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection