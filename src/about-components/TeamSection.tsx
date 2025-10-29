"use client"

import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import Image from "next/image"

interface TeamMember {
  name: string
  role: string
  image: string
  email: string
  quote: string
}

interface TeamGroup {
  title: string
  members: TeamMember[]
}

const TeamSection = () => {
  const teams: TeamGroup[] = [
    {
      title: "Board of Directors",
      members: [
        {
          name: "Rajan Kumar Shrestha",
          role: "Chairman",
          image: "/Images/Directors/RajanKumar Shrestha.jpeg",
          email: "chairman@esawari.com",
          quote:
            "Leading Nepal towards a sustainable future with innovative electric mobility solutions.",
        },
        {
          name: "Ghanashyam Paudyal",
          role: "Director",
          image: "/Images/Directors/GhanashyamPaudyal.jpeg",
          email: "director1@esawari.com",
          quote:
            "Committed to making green transportation accessible to every Nepali citizen.",
        },
        {
          name: "Ashok Kumar Rai",
          role: "Director",
          image: "/Images/Directors/AshokKumarRai.jpeg",
          email: "director2@esawari.com",
          quote:
            "Building infrastructure that empowers communities through sustainable mobility.",
        },
        {
          name: "Ambika Pudasaini",
          role: "Director",
          image: "/Images/Directors/AmbikaPudasaini.jpeg",
          email: "director4@esawari.com",
          quote:
            "Passionate about creating inclusive and eco-friendly transportation for all.",
        },
        {
          name: "Bachchhu Narayan Shrestha",
          role: "Director",
          image: "/Images/Directors/BachchhuNarayan Shrestha.jpeg",
          email: "director5@esawari.com",
          quote:
            "Fostering innovation and excellence in Nepal's electric vehicle industry.",
        },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section className="px-4 py-20 md:px-8 bg-gradient-to-b from-light to-white relative overflow-hidden">
    

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-dark-heading mb-3 tracking-tight">
            Meet Our{" "}
            <span className="text-primary-green bg-gradient-to-r from-primary-green to-emerald-600 bg-clip-text text-transparent">
              Leadership
            </span>
          </h2>
          <p className="text-base md:text-lg text-paragraph max-w-2xl mx-auto leading-relaxed">
            Experienced professionals driving sustainable transportation
            solutions across Nepal.
          </p>
        </motion.div>

        {/* Teams */}
        <div className="space-y-16">
          {teams.map((team, teamIndex) => (
            <motion.div
              key={teamIndex}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6"
              >
                {team.members.map((member, memberIndex) => (
                  <motion.div key={memberIndex} variants={itemVariants} className="group">
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-400 hover:-translate-y-1.5">
                      {/* Image */}
                      <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
                        <motion.div
                          className="w-full h-full"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            width={250}
                            height={320}
                            className="w-full h-full object-cover transition-transform duration-700"
                          />
                        </motion.div>

                        {/* Quote Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3">
                          <p className="text-white text-xs md:text-sm leading-relaxed italic transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                            &quot;{member.quote}&quot;
                          </p>
                        </div>

                        {/* Email Icon */}
                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-400 transform -translate-y-1 group-hover:translate-y-0">
                          <motion.a
                            href={`mailto:${member.email}`}
                            whileHover={{ scale: 1.15, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md text-primary-green shadow-md hover:bg-primary-green hover:text-white transition-all duration-300"
                            aria-label={`Email ${member.name}`}
                          >
                            <Mail className="w-4 h-4" />
                          </motion.a>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="p-3 text-center">
                        <h4 className="text-sm md:text-base font-semibold text-dark-heading mb-0.5 group-hover:text-primary-green transition-colors duration-300">
                          {member.name}
                        </h4>
                        <p className="text-xs text-paragraph font-medium uppercase tracking-wide">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
