"use client"

import { motion } from "framer-motion"
import { Users, Globe, Rocket, Sparkles } from "lucide-react"

const ValuesSection = () => {
  const values = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "People",
      description:
        "Empowering every rider and driver through connection, respect, and shared growth.",
      color: "bg-primary-green",
      bgColor: "bg-light",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Planet",
      description:
        "Driving towards a greener tomorrow with sustainable and eco-friendly rides.",
      color: "bg-primary-green",
      bgColor: "bg-light",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Progress",
      description:
        "Innovating mobility to move faster, safer, and smarter every single day.",
      color: "bg-primary-green",
      bgColor: "bg-light",
    },
  ]

  return (
    <section className="px-4 py-16 md:px-8 bg-light">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-dark-heading">
            The <span className="text-primary-green">3Ps</span> that drive us
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-paragraph">
            Our purpose goes beyond rides — we move people, protect the planet, and push progress forward.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`group text-center p-8 ${value.bgColor} rounded-2xl border border-opacity-20 hover:shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto ${value.color} shadow-lg relative z-10`}
              >
                {value.icon}
              </motion.div>

              <h4 className="text-xl font-bold mb-4 text-dark-heading relative z-10">{value.title}</h4>
              <p className="text-paragraph leading-relaxed relative z-10">{value.description}</p>

              <motion.div
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Sparkles className="w-5 h-5 text-primary-green" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValuesSection
