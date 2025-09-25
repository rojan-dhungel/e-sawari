"use client"

import { Smartphone, MapPin, CreditCard, Star } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    step: "01",
    icon: Smartphone,
    title: "Download & Sign Up",
    description:
      "Download the esawari app from App Store or Google Play. Create your account in seconds with your phone number or email.",
  },
  {
    step: "02",
    icon: MapPin,
    title: "Choose Your Service",
    description:
      "Select from ride-hailing, food delivery, parcel service, or vehicle rental. Set your pickup location and destination.",
  },
  {
    step: "03",
    icon: CreditCard,
    title: "Book & Pay",
    description:
      "Confirm your booking and pay securely through the app using your preferred payment method. Track your service in real-time.",
  },
  {
    step: "04",
    icon: Star,
    title: "Rate & Review",
    description:
      "After your service is complete, rate your experience and help us maintain the highest quality standards.",
  },
]

export default function StepsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 px-4 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-heading mb-4">How esawari Works</h2>
          <p className="text-lg text-paragraph max-w-2xl mx-auto">Four simple steps to access all our services</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="text-center relative group cursor-pointer"
            >
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: (index + 1) * 0.3 }}
                  className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary-green/20 -translate-x-1/2 z-0 origin-left"
                />
              )}

              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-6 relative shadow-lg group-hover:shadow-xl transition-shadow"
                >
                  <step.icon className="w-8 h-8 text-white" />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.5 }}
                    className="absolute -top-2 -right-2 w-8 h-8 bg-dark-heading text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md"
                  >
                    {step.step}
                  </motion.div>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  className="text-xl font-semibold text-dark-heading mb-4 group-hover:text-primary-green transition-colors"
                >
                  {step.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  className="text-paragraph text-pretty"
                >
                  {step.description}
                </motion.p>
              </div>

              {/* Hover effect background */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-primary-green/5 rounded-xl -z-10 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
