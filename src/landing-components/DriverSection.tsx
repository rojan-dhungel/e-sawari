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
    { icon: CheckCircle2, text: "₹25,000+ Average Monthly Earnings" },
    { icon: Zap, text: "Instant Daily Payouts" },
    { icon: Award, text: "Performance Bonuses & Rewards" },
  ]

  const requirements = [
    "Valid Nepali driving license",
    "Vehicle registration documents",
    "Smartphone with internet connection",
    "Minimum age 21 years",
  ]

  const stats = [
    { value: "1000+", label: "Active Drivers" },
    { value: "50K+", label: "Rides Completed" },
    { value: "4.8★", label: "Average Rating" },
  ]

  return (
    <section className="relative px-4 py-20 overflow-hidden max-w-7xl mx-auto bg-light font-body">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-100/30 to-transparent rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-100/20 to-transparent rounded-full blur-3xl -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#DCFCE7] text-[#237C3F] px-4 py-2 rounded-full border border-[#C6F6D5] font-medium text-sm">
            <Sparkles className="h-4 w-4" /> Your Next Partnership Awaits
          </div>

          {/* Heading */}
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-5xl md:text-5xl font-heading font-semibold leading-tight text-dark-heading">
              Drive with <span className="text-primary-green relative inline-block">esawari
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                  <path d="M0 4C50 2 150 2 200 4" stroke="var(--primary-green)" strokeWidth="3" strokeLinecap="round" opacity="0.3"/>
                </svg>
              </span>
            </h3>
            <h3 className="text-3xl md:text-4xl font-heading font-semibold text-dark-heading">
              & Earn On Your Terms
            </h3>
            <p className="text-lg leading-relaxed text-text-color max-w-xl">
              Join Nepal&apos;s fastest-growing ride-hailing platform. Whether you own a bike, car, or truck, start earning today with flexible schedules and competitive rates.
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform bg-primary-green">
                  <highlight.icon className="w-4 h-4 text-white"/>
                </div>
                <span className="font-medium text-dark-heading">{highlight.text}</span>
              </div>
            ))}
          </div>

          {/* Earnings Card */}
          <div className="relative bg-gradient-to-br from-white to-green-50/30 p-8 rounded-3xl shadow-lg border border-green-100 overflow-hidden group hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-200/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
            <div className="relative flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md group-hover:rotate-6 transition-transform bg-primary-green">
                <TrendingUp className="w-8 h-8 text-white"/>
              </div>
              <div>
                <div className="text-3xl font-heading font-semibold text-primary-green mb-1">₹25,000+</div>
                <div className="text-sm font-medium text-text-color">Average monthly earnings</div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="text-2xl font-heading font-semibold text-primary-green mb-1">{stat.value}</div>
                <div className="text-xs font-medium text-text-color">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-8 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <button className="px-8 py-4 rounded-xl text-white font-body font-medium shadow-lg hover:scale-105 transition-transform duration-300 bg-primary-green">
              Become a Driver
            </button>
            <button className="px-8 py-4 rounded-xl font-body font-medium border-2 text-primary-green shadow-sm hover:scale-105 transition-transform duration-300 border-primary-green text-primary-green">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className={`relative bg-white p-6 rounded-3xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer group animate-fade-in-up ${hoveredCard === index ? "scale-105" : ""}`}
                     style={{ animationDelay: `${0.1 * index}s` }}
                     onMouseEnter={() => setHoveredCard(index)}
                     onMouseLeave={() => setHoveredCard(null)}>
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 bg-green-50">
                      <Icon className="w-7 h-7 text-primary-green"/>
                    </div>
                    <h4 className="font-heading font-semibold text-lg mb-2 text-dark-heading">{benefit.title}</h4>
                    <p className="text-sm leading-relaxed text-text-color">{benefit.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Requirements */}
          <div className="relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-lg border border-gray-100 overflow-hidden animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-100/30 to-transparent rounded-full blur-3xl"/>
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm bg-primary-green">
                  <MapPin className="w-5 h-5 text-white"/>
                </div>
                <h4 className="font-heading font-semibold text-xl text-dark-heading">Requirements</h4>
              </div>
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform bg-green-50">
                      <CheckCircle2 className="w-4 h-4 text-primary-green"/>
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
 