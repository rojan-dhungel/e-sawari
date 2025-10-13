"use client"

import { motion } from "framer-motion"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { Linkedin, Mail, Award } from "lucide-react"
import { useCallback, useEffect, useState } from "react"

const TeamSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [Autoplay({ delay: 3500 })])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const team = [
    {
      name: "Rajesh Hamal",
      role: "CEO & Co-Founder",
      image: "👨‍💼",
      description: "10+ years in tech industry, passionate about sustainable transportation.",
    },
    {
      name: "Priya Sharma",
      role: "CTO & Co-Founder",
      image: "👩‍💻",
      description: "Expert in mobile development and scalable systems architecture.",
    },
    {
      name: "Amit Thapa",
      role: "Head of Operations",
      image: "👨‍🏭",
      description: "Logistics expert ensuring smooth operations across all cities.",
    },
    {
      name: "Sita Gurung",
      role: "Head of Marketing",
      image: "👩‍💼",
      description: "Brand strategist focused on customer experience and growth.",
    },
  ]

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on("select", onSelect)
    onSelect()
  }, [emblaApi])

  return (
    <section className="relative px-4 py-20 overflow-hidden max-w-7xl mx-auto bg-light">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold mb-4 text-dark-heading"
        >
          Meet Our <span className="text-primary-green">Team</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg max-w-2xl mx-auto text-paragraph"
        >
          The passionate people behind <span className="font-semibold text-primary-green">Esawari</span> who make sustainable mobility possible every day.
        </motion.p>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="flex-[0_0_80%] sm:flex-[0_0_45%] lg:flex-[0_0_25%] mx-4 bg-white border border-primary-green/10 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer relative group overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-primary-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="p-8 flex flex-col items-center text-center relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 8 }}
                  transition={{ duration: 0.3 }}
                  className="text-7xl mb-4"
                >
                  {member.image}
                </motion.div>
                <h4 className="text-xl font-bold mb-1 text-dark-heading">{member.name}</h4>
                <div className="text-sm font-medium mb-4 px-4 py-1 rounded-full bg-primary-green text-white flex items-center gap-1 justify-center">
                  <Award className="w-3 h-3" />
                  {member.role}
                </div>
                <p className="text-sm text-paragraph mb-6 leading-relaxed">{member.description}</p>

                <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="p-2 rounded-lg bg-primary-green text-white hover:bg-primary-green/80 transition-colors duration-200"
                  >
                    <Linkedin className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="p-2 rounded-lg bg-paragraph text-white hover:bg-paragraph/80 transition-colors duration-200"
                  >
                    <Mail className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center mt-8 gap-3">
        {team.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === selectedIndex ? "bg-primary-green scale-125" : "bg-gray-300 hover:bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  )
}

export default TeamSection
