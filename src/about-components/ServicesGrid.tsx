"use client"

import { motion } from "framer-motion"
import { Car, UtensilsCrossed, Package, Key, ArrowRight, Star } from "lucide-react"

const ServicesGrid = () => {
  const services = [
    {
      icon: <Car className="w-12 h-12" />,
      title: "Ride-Hailing",
      description: "Safe, affordable, and convenient rides across Nepal with professional drivers.",
      color: "bg-primary-green",
      bgColor: "bg-light",
      features: ["24/7 Available", "GPS Tracking", "Safe Drivers"],
    },
    {
      icon: <UtensilsCrossed className="w-12 h-12" />,
      title: "Food Delivery",
      description: "Fresh food from your favorite restaurants delivered hot and fast to your doorstep.",
      color: "bg-primary-green",
      bgColor: "bg-light",
      features: ["Hot & Fresh", "Fast Delivery", "Wide Selection"],
    },
    {
      icon: <Package className="w-12 h-12" />,
      title: "Parcel Service",
      description: "Reliable and secure parcel delivery services for personal and business needs.",
      color: "bg-primary-green",
      bgColor: "bg-light",
      features: ["Secure Handling", "Real-time Tracking", "Same Day Delivery"],
    },
    {
      icon: <Key className="w-12 h-12" />,
      title: "Vehicle Rentals",
      description: "Rent cars and bikes for short-term or long-term use with flexible pricing.",
      color: "bg-primary-green",
      bgColor: "bg-light",
      features: ["Flexible Terms", "Well Maintained", "Affordable Rates"],
    },
  ]

  return (
    <section className="px-4 py-16 md:px-8 bg-light shadow-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-dark-heading">
            What We <span className="text-primary-green">Offer</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-paragraph">
            Comprehensive solutions for all your transportation, food, and delivery needs across Nepal.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={`group flex flex-col p-8 rounded-2xl ${service.bgColor} border border-opacity-20 hover:shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="flex items-start gap-6 mb-6 relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center text-white flex-shrink-0 ${service.color} shadow-lg`}
                >
                  {service.icon}
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-dark-heading group-hover:text-primary-green transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-paragraph leading-relaxed">{service.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                {service.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/80 text-paragraph border border-gray-200"
                  >
                    <Star className="w-3 h-3 mr-1 text-primary-green" />
                    {feature}
                  </span>
                ))}
              </div>

              <motion.div
                className="flex items-center text-primary-green font-medium mt-auto relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ x: 5 }}
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid
