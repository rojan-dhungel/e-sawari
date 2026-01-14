"use client"

import { Phone, Mail, MessageSquare, MapPin, Clock, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const contactMethods = [
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our support team.",
    contact: "+977-1-4567890",
    action: "Call Now",
    available: "24/7 Available",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us your questions and concerns.",
    contact: "support@esawari.com",
    action: "Send Email",
    available: "Response within 2 hours",
  },
  {
    icon: MapPin,
    title: "Visit Our Office",
    description: "Meet us in person at our headquarters.",
    contact: "Kathmandu, Nepal",
    action: "Get Directions",
    available: "Mon-Fri, 9 AM - 6 PM",
  },
]

export function ContactSection() {
  return (
    <section className="py-20 px-4 bg-light">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-heading mb-4">Get in <span className="text-primary-green">Touch</span></h2>
          <p className="text-lg text-paragraph max-w-2xl mx-auto">
            Choose the most convenient way to reach us. We&apos;re committed to providing quick and helpful responses.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg hover:border-primary-green/40 transition-all duration-300"
            >
              <div className="bg-primary-green/10 w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-2xl group-hover:bg-primary-green/20 transition-all duration-300">
                <method.icon className="w-7 h-7 text-primary-green" />
              </div>

              <h3 className="text-xl font-semibold text-dark-heading mb-2">{method.title}</h3>
              <p className="text-paragraph mb-3">{method.description}</p>
              <p className="font-semibold text-dark-heading mb-3">{method.contact}</p>

              <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-4">
                <Clock className="w-4 h-4" />
                <span>{method.available}</span>
              </div>

              <motion.button
                whileHover={{ x: 4 }}
                className="text-primary-green font-medium flex items-center justify-center gap-1 hover:underline transition-all"
              >
                {method.action} <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>


        
      </div>
    </section>
  )
}
