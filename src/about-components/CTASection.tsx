"use client"

import { motion } from "framer-motion"
import { Download, UserPlus, ArrowRight, Smartphone, Car } from "lucide-react"

const CTASection = () => {
  return (
    <section className="px-4 py-16 md:px-8 bg-light shadow-sm">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold mb-6 text-dark-heading"
        >
          Ready to Join the <span className="text-primary-green">esawari Family?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg mb-12 max-w-2xl mx-auto text-paragraph"
        >
          Whether you&apos;re a user looking for reliable services or a driver wanting to earn with flexible hours, we
          welcome you to be part of our growing community.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-6 bg-primary-green/5 rounded-2xl border border-primary-green/20"
          >
            <Smartphone className="w-12 h-12 text-primary-green mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-dark-heading">For Users</h3>
            <p className="text-paragraph mb-4">Download our app and enjoy seamless rides, food delivery, and more.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 text-white font-semibold rounded-xl bg-primary-green hover:bg-primary-green/80 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Download className="w-5 h-5 inline mr-2" />
              Download App
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="p-6 bg-primary-green/5 rounded-2xl border border-primary-green/20"
          >
            <Car className="w-12 h-12 text-primary-green mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-dark-heading">For Drivers</h3>
            <p className="text-paragraph mb-4">Join our partner network and start earning with flexible schedules.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 border-2 font-semibold rounded-xl text-primary-green border-primary-green hover:bg-primary-green/10 hover:border-primary-green/80 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <UserPlus className="w-5 h-5 inline mr-2" />
              Become a Partner
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ x: 5 }}
            className="flex items-center text-primary-green font-medium hover:text-primary-green/80 transition-colors duration-200"
          >
            Learn more about our services <ArrowRight className="w-4 h-4 ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
