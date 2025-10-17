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
          className="text-4xl md:text-5xl font-heading font-semibold text-dark-heading leading-tight"
        >
          Ready to Join the <span className="text-primary-green">esawari Family?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base md:text-lg max-w-2xl mx-auto text-paragraph leading-relaxed font-body my-10"
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
            <h3 className="text-xl font-semibold mb-2 text-dark-heading">For Users</h3>
            <p className="text-paragraph  text-base mb-4">Download our app and enjoy seamless rides, food delivery, and more.</p>
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
            <h3 className="text-xl font-semibold mb-2 text-dark-heading">For Drivers</h3>
            <p className="text-paragraph text-base mb-4">Join our partner network and start earning with flexible schedules.</p>
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
  <motion.a
    whileHover={{ x: 5 }}
    href="#"
    className="relative flex items-center text-primary-green font-medium transition-colors duration-200 group 
               select-none no-underline outline-none border-none focus:outline-none focus:ring-0"
  >
    Learn more about our services
    <ArrowRight className="w-4 h-4 ml-2" />

    {/* Smooth underline animation */}
    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary-green transition-all duration-300 ease-in-out group-hover:w-full"></span>
  </motion.a>
</motion.div>



      </div>
    </section>
  )
}

export default CTASection
 