"use client"

import { motion } from "framer-motion"
import { Mail, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

interface TeamMember {
  name: string
  role: string
  image: string
  email: string
  linkedin?: string
}

export default function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const members: TeamMember[] = [
    {
      name: "Rajan Kumar Shrestha",
      role: "Chairman",
      image: "/Images/Directors/RajanKumar Shrestha.webp",
      email: "chairman@esawari.com",
    },
        {
      name: "Ashok Kumar Rai",
      role: "Director",
      image: "/Images/Directors/AshokKumarRai.webp",
      email: "director2@esawari.com",
    },
        {
      name: "Bachchhu Narayan Shrestha",
      role: "Director",
      image: "/Images/Directors/BachchhuNarayan Shrestha.webp",
      email: "director5@esawari.com",
    },
    {
      name: "Ghanashyam Paudyal",
      role: "Director",
      image: "/Images/Directors/GhanashyamPaudyal.webp",
      email: "director1@esawari.com",
    },
    {
      name: "Ambika Pudasaini",
      role: "Director",
      image: "/Images/Directors/AmbikaPudasaini.webp",
      email: "director4@esawari.com",
    },

  ]

  const itemsPerView = 4
  const maxIndex = Math.max(0, members.length - itemsPerView)

  const handlePrevious = () => setCurrentIndex(prev => Math.max(0, prev - 1))
  const handleNext = () => setCurrentIndex(prev => Math.min(maxIndex, prev + 1))

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1))
    }, 3000)

    return () => clearInterval(interval)
  }, [maxIndex])

  return (
    <section className="relative px-4 py-20 overflow-hidden max-w-7xl mx-auto bg-roads">

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4 text-[var(--dark-heading)] tracking-tighter">
            Driving Innovation in{" "}
            <span className="text-[var(--primary-green)]">
              Sustainable Mobility
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-paragraph/60 max-w-3xl mx-auto leading-relaxed font-body font-light">
            Meet the visionary leaders steering Nepal&apos;s transition to eco-friendly, efficient ride-sharing solutions
          </p>
        </motion.div>

        <div className="relative px-12">
          {/* Navigation Buttons */}
          <motion.button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-xl hover:shadow-2xl border border-slate-200 hover:border-[var(--primary-green)] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-slate-200 transition-all duration-300 group"
          >
            <ChevronLeft className="w-5 h-5 text-slate-700 group-hover:text-[var(--primary-green)] transition-colors" />
          </motion.button>

          <motion.button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-xl hover:shadow-2xl border border-slate-200 hover:border-[var(--primary-green)] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-slate-200 transition-all duration-300 group"
          >
            <ChevronRight className="w-5 h-5 text-slate-700 group-hover:text-[var(--primary-green)] transition-colors" />
          </motion.button>

          {/* Carousel */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {members.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-[calc(25%-18px)] group"
                >
                  <div className="relative rounded-[2rem] overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-[var(--primary-green)]">
                    {/* Image Container */}
                    <div className="relative w-full aspect-[3/4] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={400}
                        height={500}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-500"></div>

                      {/* Social Links */}
                      <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <a
                          href={`mailto:${member.email}`}
                          className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/95 backdrop-blur-sm text-slate-700 hover:bg-[var(--primary-green)] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Info Section */}
                    <div className="p-6">
                      <h4 className="text-lg font-heading font-bold text-slate-900 mb-1 group-hover:text-[var(--primary-green)] transition-colors duration-300">
                        {member.name}
                      </h4>
                      <p className="text-sm font-body font-light text-paragraph/60 uppercase tracking-wide">
                        {member.role}
                      </p>
                      
                      {/* Decorative Line */}
                      <div className="mt-4 h-1 w-12 bg-[var(--primary-green)] rounded-full transform origin-left transition-transform duration-500 group-hover:scale-x-150"></div>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-[var(--primary-green)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[var(--primary-green)] w-12 shadow-lg"
                    : "bg-slate-300 w-2 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}