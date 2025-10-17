"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Target, Eye, Heart, Shield, Globe, Users } from "lucide-react"
import Image from "next/image";

const MissionVisionValues = () => {
  const [activeTab, setActiveTab] = useState("mission")

  const missionImage = "" // ✅ Update these paths
  const visionImage = "/Images/vision.jpg"

  const tabs = [
    { id: "mission", label: "Mission" },
    { id: "vision", label: "Vision" },
  ]

  const values = [
    {
      icon: <Heart className="w-7 h-7" />,
      title: "Customer First",
      description: "Every decision we make puts our customers and their needs at the center.",
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Safety & Trust",
      description: "We prioritize the safety and security of all our users and partners.",
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: "Innovation",
      description: "We constantly innovate to provide better, smarter solutions for everyday life.",
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Community",
      description: "Building strong communities through accessible and reliable services.",
    },
  ]

  return (
    <section className="relative px-4 py-20 overflow-hidden max-w-7xl mx-auto bg-light">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-[var(--dark-heading)]">
            Smart & <span className="text-[var(--primary-green)]">Eco-Friendly Mobility</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-paragraph leading-relaxed font-body">
            Driving Nepal toward a cleaner, greener future with smarter, sustainable transportation solutions.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-white rounded-2xl shadow-md border border-gray-200 p-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-10 md:px-12 py-3 md:py-4 rounded-xl text-base font-semibold transition-all duration-300 ${activeTab === tab.id
                    ? "text-white"
                    : "text-gray-600 hover:text-[var(--dark-heading)]"
                  }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[var(--primary-green)] rounded-xl shadow-lg"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "mission" && (
            <motion.div
              key="mission"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10 md:p-16 mb-20"
            >
              <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Text */}
                <div className="order-2 md:order-1 space-y-6">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[var(--primary-green)] text-white shadow-md">
                      <Target className="w-9 h-9" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-semibold text-[var(--dark-heading)]">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-base leading-relaxed text-paragraph">
                    To provide accessible, affordable, and reliable services that connect communities across Nepal while creating opportunities for local entrepreneurs. We simplify daily routines, save time, and deliver seamless, on-demand solutions for every need — from ride-sharing to food delivery, groceries, and e-commerce.
                  </p>
                </div>
                {/* Image */}
                <div className="order-1 md:order-2">
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={missionImage}
                      alt="Our Mission"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover aspect-[4/3]"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "vision" && (
            <motion.div
              key="vision"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10 md:p-16 mb-20"
            >
              <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Image */}
                <div>
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={visionImage}
                      alt="Our Vision"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover aspect-[4/3]"
                    />
                  </div>
                </div>
                {/* Text */}
                <div className="space-y-6">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[var(--primary-green)] text-white shadow-md">
                      <Eye className="w-9 h-9" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-semibold text-[var(--dark-heading)]">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-base leading-relaxed text-paragraph">
                    To be Nepal`s first truly integrated lifestyle platform — meeting the growing demand for convenience, speed, and reliability. By bringing multiple essential services into one app, we aim to revolutionize urban living while empowering both users and local partners.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Values Section */}
        <div className="mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-[var(--dark-heading)]">
              Our <span className="text-[var(--primary-green)]">Values</span>
            </h2>
            <p className="text-base md:text-xl text-paragraph max-w-3xl mx-auto">
              The principles that guide everything we do — creating trust, innovation, and positive impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-100 p-10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-[var(--primary-green)] text-white shadow-md">
                  {value.icon}
                </div>
                <h4 className="text-2xl font-semibold mb-3 text-[var(--dark-heading)]">{value.title}</h4>
                <p className="text-paragraph text-base leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVisionValues