"use client"

import { motion } from "framer-motion"
import { Calendar, CheckCircle } from "lucide-react"

const StoryTimeline = () => {
  const timeline = [
    {
      year: "2019",
      title: "The Beginning",
      description: "esawari was founded with a vision to revolutionize transportation in Nepal.",
    },
    {
      year: "2020",
      title: "Expansion",
      description: "Expanded to 3 major cities and launched food delivery services.",
    },
    {
      year: "2021",
      title: "Growth",
      description: "Reached 10,000 active users and introduced parcel delivery.",
    },
    {
      year: "2022",
      title: "Innovation",
      description: "Launched vehicle rental services and mobile app redesign.",
    },
    {
      year: "2023",
      title: "Scale",
      description: "Crossed 50,000+ users and expanded to 5 cities across Nepal.",
    },
  ]

  return (
    <section className="px-4 py-16 md:px-8 bg-light">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-dark-heading">
            Our <span className="text-primary-green">Journey</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-paragraph">
            From a simple idea to Nepal&apos;s leading multi-service platform, here&apos;s how we&apos;ve grown together with our
            community.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full rounded-full hidden md:block"
            style={{ background: "linear-gradient(to bottom, rgba(38, 212, 102, 0.3), var(--primary-green))" }}
          ></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`md:w-5/12 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="inline-block px-4 py-2 rounded-full text-white font-bold mb-4 bg-primary-green">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    {item.year}
                  </div>
                </div>

                <div className="md:w-2/12 flex justify-center relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-6 h-6 rounded-full bg-primary-green border-4 border-white shadow-lg"
                  ></motion.div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="md:w-5/12 bg-white p-8 rounded-2xl border hover:shadow-xl transition-all duration-300 group"
                  style={{ borderColor: "rgba(38, 212, 102, 0.2)" }}
                >
                  <div className="flex items-center mb-3">
                    <CheckCircle className="w-5 h-5 text-primary-green mr-2" />
                    <h3 className="text-xl font-bold text-dark-heading group-hover:text-primary-green transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-paragraph leading-relaxed">{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StoryTimeline
