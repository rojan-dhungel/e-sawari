"use client"

import { Car, Utensils, Package, CreditCard, User, Settings, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const helpCategories = [
  {
    icon: Car,
    title: "Ride Booking",
    description: "Learn how to book rides, track drivers, and manage your trips",
    articles: 12,
  },
  {
    icon: Utensils,
    title: "Food Delivery",
    description: "Order food, track deliveries, and resolve food-related issues",
    articles: 8,
  },
  {
    icon: Package,
    title: "Parcel Service",
    description: "Send packages, track shipments, and understand pricing",
    articles: 6,
  },
  {
    icon: CreditCard,
    title: "Payments & Billing",
    description: "Manage payment methods, view receipts, and resolve billing issues",
    articles: 10,
  },
  {
    icon: User,
    title: "Account Management",
    description: "Update profile, change settings, and manage your account",
    articles: 7,
  },
  {
    icon: Settings,
    title: "Technical Support",
    description: "App issues, troubleshooting, and technical assistance",
    articles: 9,
  },
]

export function HelpCenterSection() {
  return (
    <section className="py-20 bg-light">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-dark-heading mb-4">Help Center</h2>
          <p className="text-lg md:text-xl text-paragraph leading-relaxed">
            Find answers to common questions and learn how to make the most of esawari&apos;s services.
          </p>
        </motion.div>

        {/* Help Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {helpCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all"
            >
              <div className="mb-4 w-fit mx-auto p-4 rounded-2xl bg-primary-green/10 group-hover:bg-primary-green/20 transition-colors">
                <category.icon className="h-8 w-8 text-primary-green" />
              </div>
              <h3 className="text-2xl font-semibold text-dark-heading mb-2">{category.title}</h3>
              <p className="text-paragraph mb-4">{category.description}</p>
              <div className="flex items-center justify-center text-primary-green font-semibold gap-1 group-hover:gap-2 transition-all">
                Browse {category.articles} Articles
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center">
          {[
            { value: "50K+", label: "Active Users" },
            { value: "1000+", label: "Partners" },
            { value: "4.8★", label: "App Rating" },
            { value: "24/7", label: "Available" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="text-3xl font-bold text-primary-green mb-2">{stat.value}</div>
              <div className="text-paragraph">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        

        {/* Download App CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="bg-primary-green p-3 rounded-xl">
              <Car className="h-8 w-8 text-white" />
            </div>
            <div className="text-left">
              <h4 className="font-bold text-dark-heading text-lg">Get the esawari App</h4>
              <p className="text-paragraph">Experience seamless services on the go</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-green text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-all shadow-md hover:shadow-lg"
            >
              Download App
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
