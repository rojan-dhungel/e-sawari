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
      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full min-h-screen bg-light flex items-center justify-center">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-light to-white -z-10" />
        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-1.5 bg-primary-green/10 text-primary-green rounded-full text-xs font-semibold tracking-wider uppercase space-x-2"
            >
              <Zap className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>Nepal&apos;s First Integrated Lifestyle Platform</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-heading leading-tight mt-10 lg:leading-[60px] text-dark-heading"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Building a Smarter <span className="text-primary-green block sm:inline">Lifestyle for Nepal</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mt-4 sm:mt-6 px-2 text-paragraph"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Sawari Sewa Nepal Limited is a unified digital platform delivering essential daily services — including
              Ride-sharing, Hotel booking, Food delivery, Parcel delivery, Grocery delivery and E-commerce. With an
              emphasis on reliability and user experience, Sawari simplifies daily routine, saves time and provides a
              seamless, on-demand solution for all needs.
            </motion.p>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-primary-green mt-6 sm:mt-8 text-light rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Get Started
            </motion.button>
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
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug sm:leading-tight text-dark-heading"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Why Choose <span className="text-primary-green">Sawari</span>
            </h3>
            <p 
              className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mt-3 sm:mt-4 px-2 text-paragraph"
              style={{ fontFamily: "var(--font-body)" }}
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
                  className="text-lg sm:text-xl font-semibold text-dark-heading mb-2 relative z-10"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {feature.label}
                </h3>

                {/* Description */}
                <p 
                  className="text-paragraph text-sm sm:text-base leading-relaxed relative z-10"
                  style={{ fontFamily: "var(--font-body)" }}
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