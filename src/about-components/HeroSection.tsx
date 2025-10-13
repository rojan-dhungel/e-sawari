"use client"

import { motion } from "framer-motion"
import { Zap, Shield, DollarSign, Briefcase, Heart} from "lucide-react"

const HeroSection = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      label: "Electric Power Vehicle",
      description: "100% electric vehicles for sustainable transportation",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      label: "40% Cost-Effective",
      description: "Riders save 40% on operational costs",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
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
      label: "10 Lakhs Accidental Insurance",
      description: "Complete accident protection for riders & passengers",
    },
  ]

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="min-h-screen bg-gradient-to-br from-light-background flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#f0fdf4] -z-10" />

        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-[var(--primary-green)] opacity-5 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-32 left-0 w-96 h-96 bg-[var(--primary-green)] opacity-5 rounded-full blur-3xl -z-10" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-1.5 bg-primary-green/10 text-primary-green rounded-full text-xs font-semibold tracking-wider uppercase space-x-2"
          >
            <Zap className="w-4 h-4" />
            <span>Nepal&apos;s First Integrated Lifestyle Platform</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mt-6 leading-tight lg:leading-[80px] text-[var(--dark-heading)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Building a Smarter <span className="text-[var(--primary-green)]">Lifestyle for Nepal</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg max-w-3xl mx-auto text-paragraph leading-relaxed font-body mt-6"
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
            className="px-8 py-4 bg-[var(--primary-green)] mt-8 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Get Started
          </motion.button>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="relative px-6 md:px-12 py-20 bg-light border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h3
              className="text-4xl md:text-5xl font-heading font-semibold text-dark-heading leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Why Choose <span className="text-[var(--primary-green)]">Sawari</span>
            </h3>
            <p className="text-base md:text-lg max-w-2xl mx-auto text-paragraph leading-relaxed font-body mt-4">
              We&apos;re committed to providing the best experience for riders and drivers alike
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ translateY: -8 }}
                className="group relative bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-lg hover:border-[var(--primary-green)]/20 transition-all duration-300"
              >
                {/* Icon Container */}
                <div className="flex items-center justify-center mb-6">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-4 rounded-xl bg-[var(--primary-green)] text-white shadow-md"
                  >
                    {feature.icon}
                  </motion.div>
                </div>

                {/* Label */}
                <h3
                  className="text-xl font-semibold text-[var(--dark-heading)] mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {feature.label}
                </h3>

                {/* Description */}
                <p className="text-[var(--text-dark)] text-base" style={{ fontFamily: "var(--font-body)" }}>
                  {feature.description}
                </p>

                {/* Accent Line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-12 bg-[var(--primary-green)] rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
