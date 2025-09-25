"use client"

import { motion } from "framer-motion"
import { Target, Eye, Lightbulb, Compass } from "lucide-react"

const MissionVision = () => {
  return (
    <section className="px-4 py-16 md:px-8 bg-light shadow-sm">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left group"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto md:mx-0 bg-primary-green shadow-lg group-hover:shadow-xl transition-all duration-300"
            >
              <Target className="w-10 h-10" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-dark-heading flex items-center justify-center md:justify-start">
              <Compass className="w-6 h-6 mr-2 text-primary-green" />
              Our Mission
            </h3>
            <p className="text-lg leading-relaxed text-paragraph">
              To provide accessible, affordable, and reliable transportation and delivery services that connect
              communities across Nepal while creating economic opportunities for local entrepreneurs and drivers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-left group"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto md:mx-0 bg-primary-green shadow-lg group-hover:shadow-xl transition-all duration-300"
            >
              <Eye className="w-10 h-10" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-dark-heading flex items-center justify-center md:justify-start">
              <Lightbulb className="w-6 h-6 mr-2 text-primary-green" />
              Our Vision
            </h3>
            <p className="text-lg leading-relaxed text-paragraph">
              To be Nepal&apos;s most trusted and innovative mobility platform, transforming how people move, eat, send, and
              rent by leveraging technology to build stronger, more connected communities.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision
