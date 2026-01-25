"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Target, Eye } from "lucide-react"
import Image from "next/image"

type FlippedCards = Record<number, boolean>

const MissionVisionValues = () => {
  const [activeTab, setActiveTab] = useState<"mission" | "vision">("mission")
  const [flippedCards, setFlippedCards] = useState<FlippedCards>({})

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  const missionImage = "/Images/mission.webp" 
  const visionImage = "/Images/vision.webp"

  const tabs = [
    { id: "mission" as const, label: "Mission" },
    { id: "vision" as const, label: "Vision" },
  ]

  const threePValues = [
    {
      title: "People",
      description:
        "Empowering riders and drivers through fairness, opportunity, and connection.",
      detailedContent:
        "We believe in putting people first. Our platform creates meaningful opportunities for drivers to earn a sustainable income while providing riders with reliable, safe transportation. We foster a community built on mutual respect, fair compensation, and shared success. Every feature we build, every policy we create, is designed with the wellbeing of our community at its core.",
      image: "/Images/Values/people.webp",
    },
    {
      title: "Planet",
      description:
        "Driving towards a sustainable future with eco-friendly and shared mobility.",
      detailedContent:
        "Environmental responsibility drives our innovation. We're committed to reducing carbon emissions through shared rides, supporting electric vehicle adoption, and optimizing routes for efficiency. Our vision is a Nepal where mobility and sustainability go hand in hand, creating cleaner cities and a healthier planet for future generations.",
      image: "/Images/Values/planets.webp",

    },
    {
      title: "Progress",
      description:
        "Innovating to move Nepal faster, safer, and smarter — every single day.",
      detailedContent:
        "Progress is in our DNA. We continuously innovate to solve transportation challenges, improve safety standards, and enhance user experience. Through technology and collaboration, we're building the infrastructure that will power Nepal's mobility future, making every journey more efficient, secure, and seamless.",
      image: "/Images/Values/progress.webp",
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
                      className="w-full h-full object-contain aspect-[4/3]"
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
                    To be Nepal&apos;s first truly integrated lifestyle platform — meeting the growing demand for convenience, speed, and reliability. By bringing multiple essential services into one app, we aim to revolutionize urban living while empowering both users and local partners.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>


        {/* Values Section - Flip Cards */}
        <div className="mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-[var(--dark-heading)]">
              The values that <span className="text-[var(--primary-green)]">drive our journey</span>
            </h2>
            <p className="text-base md:text-xl text-paragraph max-w-3xl mx-auto">
              These three pillars shape every ride, every partnership, and every innovation we create.
            </p>
          </motion.div>

          {/* 3P Flip Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {threePValues.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-[500px]"
                style={{ perspective: '1000px' }}
              >
                <div
                  className={`relative w-full h-full transition-all duration-700`}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: flippedCards[index] ? 'rotateY(180deg)' : 'rotateY(0)'
                  }}
                >
                  {/* Front of Card */}
                  <div
                    className="absolute w-full h-full rounded-3xl overflow-hidden shadow-lg"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    {/* Background Image */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

                    {/* Text Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
                      <h3 className="text-3xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-base opacity-90 mb-5">{item.description}</p>
                      <button
                        onClick={() => toggleFlip(index)}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[var(--primary-green)] text-light font-medium hover:bg-[var(--primary-green)]/90 transition-all duration-300"
                      >
                        Learn more
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div
                    className="absolute w-full h-full rounded-3xl overflow-hidden shadow-lg bg-[var(--primary-green)] cursor-pointer"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                    onClick={() => toggleFlip(index)}
                  >
                    <div className="w-full h-full p-8 flex flex-col justify-center">
                      <div>
                        <h3 className="text-3xl font-bold mb-6 text-light">{item.title}</h3>
                        <p className="text-light leading-relaxed text-base">
                          {item.detailedContent}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default MissionVisionValues