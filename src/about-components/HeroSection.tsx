"use client"

import { motion } from "framer-motion"
import { Car, MapPin, Users, TrendingUp } from "lucide-react"

const HeroSection = () => {
  const stats = [
    { number: "2025", label: "Founded", suffix: "", icon: <TrendingUp className="w-5 h-5" /> },
    { number: "50K", label: "Active Users", suffix: "+", icon: <Users className="w-5 h-5" /> },
    { number: "1000", label: "Partner Drivers", suffix: "+", icon: <Car className="w-5 h-5" /> },
    { number: "5", label: "Cities Served", suffix: "", icon: <MapPin className="w-5 h-5" /> },
  ]

  return (
    <>
      {/* Hero Section */}
      <section
        className="px-4 py-20 md:px-8 bg-light relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--light-background) 0%, #f0fdf4 50%, white 100%)" }}
      >
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute top-10 left-10 w-2 h-2 rounded-full"
            style={{ backgroundColor: "var(--primary-green)" }}
          ></div>
          <div
            className="absolute top-20 right-20 w-1 h-1 rounded-full"
            style={{ backgroundColor: "var(--primary-green)" }}
          ></div>
          <div
            className="absolute bottom-20 left-20 w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: "var(--primary-green)" }}
          ></div>
          <div
            className="absolute bottom-10 right-10 w-2 h-2 rounded-full"
            style={{ backgroundColor: "var(--primary-green)" }}
          ></div>
          <div
            className="absolute top-1/3 left-1/4 w-1 h-1 rounded-full"
            style={{ backgroundColor: "var(--primary-green)" }}
          ></div>
          <div
            className="absolute top-2/3 right-1/3 w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: "var(--primary-green)" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full"
            style={{ backgroundColor: "var(--primary-green)" }}
          ></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium text-white mb-8 bg-primary-green shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <Car className="w-4 h-4 mr-2" />
            About esawari
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 text-dark-heading leading-tight"
          >
            Connecting Nepal Through <span className="text-primary-green">Smart Mobility</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl leading-relaxed max-w-3xl mx-auto text-paragraph"
          >
            We&apos;re on a mission to make transportation accessible, affordable, and sustainable for everyone in Nepal.
            Since 2025, we&apos;ve been building the future of mobility, one ride at a time.
          </motion.p>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="px-4 py-16 md:px-8 bg-white shadow-sm relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 text-center bg-light rounded-2xl border hover:shadow-lg transition-all duration-300 cursor-pointer"
                style={{
                  borderColor: "rgba(38, 212, 102, 0.2)",
                  background: "linear-gradient(135deg, var(--light-background) 0%, #f0fdf4 100%)",
                }}
              >
                <div className="flex items-center justify-center mb-3">
                  <div className="p-2 rounded-lg bg-primary-green text-white transition-colors duration-300">
                    {stat.icon}
                  </div>
                </div>
                <motion.div
                  className="text-4xl font-extrabold mb-2 text-primary-green"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.number}
                  {stat.suffix}
                </motion.div>
                <div className="text-lg font-medium text-paragraph">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
