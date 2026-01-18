"use client"

import { motion } from "framer-motion"

const MapSection = () => {
  return (
    <section className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 h-[500px] relative group"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155.08051794557993!2d85.3204844!3d27.6989199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1905e8b2172f%3A0x42faacc47e0eb3d!2seSawari%20Nepal!5e0!3m2!1sen!2snp!4v1705550000000!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale-[0.2] contrast-[1.1] transition-all duration-700 group-hover:grayscale-0"
          ></iframe>
          
          <div className="absolute top-8 left-8 p-6 bg-white/90 backdrop-blur-md rounded-[2rem] shadow-xl border border-white/20 max-w-xs transition-transform duration-500 group-hover:scale-105">
            <h3 className="text-xl font-bold font-heading text-dark-heading mb-2">Our Headquarters</h3>
            <p className="text-sm text-paragraph/60 font-body mb-4">
              eSawari Nepal, Singhdurbar, Kathmandu Central
            </p>
            <div className="flex items-center gap-2 text-primary-green font-bold text-sm">
                <div className="w-2 h-2 rounded-full bg-primary-green animate-ping" />
                Active Hub
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MapSection
