"use client"

import { MapPin, Shield, Users, TrendingUp, Clock, CheckCircle2, Sparkles, Award, Zap } from "lucide-react"
import { useState } from "react"

const DriverSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const benefits = [
    { icon: TrendingUp, title: "Earn More", description: "Competitive rates with surge pricing during peak hours" },
    { icon: Clock, title: "Flexible Hours", description: "Work when you want, as much as you want" },
    { icon: Shield, title: "Insurance Coverage", description: "Comprehensive insurance for drivers and vehicles" },
    { icon: Users, title: "Growing Network", description: "Join 1000+ partner drivers across Nepal" },
  ]

  const highlights = [
    { icon: CheckCircle2, text: "रु25,000+ Average Monthly Earnings" },
    { icon: Zap, text: "Instant Daily Payouts" },
    { icon: Award, text: "Performance Bonuses & Rewards" },
  ]

  const requirements = [
    "Valid Nepali driving license",
    "Vehicle registration documents",
    "Smartphone with internet connection",
    "Minimum age 21 years",
  ]

  return (
    <section className="relative px-4 py-20 overflow-hidden bg-roads">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-100/30 to-transparent rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-100/20 to-transparent rounded-full blur-3xl -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 bg-primary-green/10 text-primary-green rounded-full text-xs font-semibold tracking-wider uppercase space-x-2">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>Your Next Partnership Awaits</span>
          </div>

          {/* Heading */}
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-4xl md:text-6xl font-heading font-bold text-dark-heading leading-tight tracking-tighter">
              Drive with <span className="text-primary-green relative inline-block">esawari
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                  <path d="M0 4C50 2 150 2 200 4" stroke="var(--primary-green)" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
                </svg>
              </span>
            </h3>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-dark-heading tracking-tight">
              & Earn On Your Terms
            </h3>
            <p className="text-lg leading-relaxed text-paragraph/60 max-w-xl font-body font-light">
              Join Nepal&apos;s fastest-growing ride-hailing platform. Whether you own a bike, car, or truck, start earning today with flexible schedules and competitive rates.
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform bg-primary-green">
                  <highlight.icon className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium text-dark-heading font-body">{highlight.text}</span>
              </div>
            ))}
          </div>

          {/* Video Card */}
          <div className="relative h-[400px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group border border-gray-100">
             <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              >
                <source src="/videos/video-1.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                 <div className="flex items-center gap-4 mb-4">
                     <div className="w-12 h-12 rounded-full bg-primary-green flex items-center justify-center text-white shadow-lg">
                        <TrendingUp size={24} />
                     </div>
                     <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
                         <span className="text-white font-semibold font-body">Top Rated Driver</span>
                     </div>
                 </div>
                 <h4 className="text-3xl font-bold text-white mb-2 font-heading tracking-tight">Earn up to रु30k/mo</h4>
                 <p className="text-gray-200 font-body opacity-80">Join thousands of happy partners.</p>
              </div>
          </div>



          {/* CTA Buttons */}
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <button className="bg-primary-green hover:bg-primary-green/90 text-light px-6 sm:px-10 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 hover:scale-105 shadow-xl font-body">
              <span>Become a Driver</span>
            </button>
            <button className="group inline-flex items-center gap-2 px-10 py-4 bg-primary-green text-white font-bold rounded-2xl transition-all duration-300 hover:bg-primary-green/90 hover:scale-105 shadow-xl font-body">
            <span>View All Offers</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className={`relative bg-white p-8 rounded-3xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer group animate-fade-in-up ${hoveredCard === index ? "scale-105" : ""}`}
                  style={{ animationDelay: `${0.1 * index}s` }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}>
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 bg-primary-green/5">
                      <Icon className="w-7 h-7 text-primary-green" />
                    </div>
                    <h4 className="font-heading font-bold text-xl mb-2 text-dark-heading tracking-tight">{benefit.title}</h4>
                    <p className="text-sm leading-relaxed text-paragraph/60 font-body font-light">{benefit.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Requirements */}
          <div className="relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-lg border border-gray-100 overflow-hidden animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-100/30 to-transparent rounded-full blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm bg-primary-green/10">
                  <MapPin className="w-5 h-5 text-primary-green" />
                </div>
                <h4 className="font-heading font-bold text-2xl text-dark-heading tracking-tight">Requirements</h4>
              </div>
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform bg-green-50">
                      <CheckCircle2 className="w-4 h-4 text-primary-green" />
                    </div>
                    <span className="text-sm font-medium leading-relaxed text-text-color">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default DriverSection
