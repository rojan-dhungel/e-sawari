"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Bell, Mail, CheckCircle, Send } from "lucide-react"

const NewsletterSection = () => {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubscribe = async () => {
    if (email && !isLoading) {
      setIsLoading(true)
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSubscribed(true)
      setIsLoading(false)
      setEmail("")

      // Reset after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <section className="px-4 py-16 md:px-8 bg-light">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white p-8 md:p-12 rounded-3xl text-center bg-primary-green shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-96 h-96"></div>
            <div className="absolute inset-0 bg-white/5 rounded-full blur-2xl transform translate-x-1/3 translate-y-1/3 top-1/4 right-1/4 w-64 h-64"></div>
          </div>

          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className="relative z-10"
          >
            <Bell className="w-16 h-16 mx-auto mb-6 opacity-90" />
          </motion.div>

          <h3 className="text-2xl md:text-3xl font-extrabold mb-4 relative z-10 text-white">Stay Updated</h3>
          <p className="mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed relative z-10">
            Get the latest news, updates, and exclusive offers delivered directly to your inbox. Be the first to know
            about new features and services.
          </p>

          {!isSubscribed ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative z-10"
            >
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-paragraph/60" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl text-dark-heading placeholder-paragraph/60 focus:outline-none focus:ring-2 focus:ring-primary-green/30 transition-all duration-200"
                />
              </div>
              <motion.button
                onClick={handleSubscribe}
                disabled={isLoading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white font-semibold rounded-xl text-primary-green hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 flex items-center justify-center"
              >
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="w-5 h-5 border-2 border-primary-green border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Subscribe
                  </>
                )}
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 text-white relative z-10"
            >
              <CheckCircle className="w-6 h-6 text-white/80" />
              <span className="font-semibold">Thank you for subscribing!</span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default NewsletterSection
