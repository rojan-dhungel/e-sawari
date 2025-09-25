"use client"

import { motion } from "framer-motion"
import { Linkedin, Mail, Award } from "lucide-react"

const TeamSection = () => {
  const team = [
    {
      name: "Rajesh Hamal",
      role: "CEO & Co-Founder",
      image: "👨‍💼",
      description: "10+ years in tech industry, passionate about sustainable transportation.",
      color: "bg-primary-green",
    },
    {
      name: "Priya Sharma",
      role: "CTO & Co-Founder",
      image: "👩‍💻",
      description: "Expert in mobile development and scalable systems architecture.",
      color: "bg-primary-green",
    },
    {
      name: "Amit Thapa",
      role: "Head of Operations",
      image: "👨‍🏭",
      description: "Logistics expert ensuring smooth operations across all cities.",
      color: "bg-primary-green",
    },
    {
      name: "Sita Gurung",
      role: "Head of Marketing",
      image: "👩‍💼",
      description: "Brand strategist focused on customer experience and growth.",
      color: "bg-primary-green",
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
            Meet Our <span className="text-primary-green">Team</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-paragraph">
            The passionate people behind esawari who work every day to make transportation better for everyone.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group text-center bg-white p-8 rounded-2xl border border-primary-green/20 hover:border-primary-green/40 hover:shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="text-6xl mb-4 relative z-10"
              >
                {member.image}
              </motion.div>

              <h4 className="text-xl font-bold mb-2 text-dark-heading relative z-10">{member.name}</h4>

              <div
                className={`inline-block text-sm font-medium mb-4 px-3 py-1 rounded-full text-white ${member.color} relative z-10`}
              >
                <Award className="w-3 h-3 inline mr-1" />
                {member.role}
              </div>

              <p className="text-sm text-paragraph mb-6 leading-relaxed relative z-10">{member.description}</p>

              <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-primary-green text-white hover:bg-primary-green/80 transition-colors duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-paragraph text-white hover:bg-paragraph/80 transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
