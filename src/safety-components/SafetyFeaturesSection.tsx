"use client"
import { Shield, MapPin, Phone, UserCheck, Camera, Star, ArrowRight } from "lucide-react"

const features = [
  {
    icon: UserCheck,
    title: "Driver Verification",
    description: "Multi-step background checks, document verification, and in-person interviews for every partner.",
    colSpan: "lg:col-span-2",
  },
  {
    icon: MapPin,
    title: "Real-time GPS Tracking",
    description: "Share your live location with friends and family instantly.",
    colSpan: "lg:col-span-1",
  },
  {
    icon: Phone,
    title: "SOS Emergency Button",
    description: "Direct line to local authorities and our 24/7 dedicated safety response team.",
    colSpan: "lg:col-span-1",
  },
  {
    icon: Camera,
    title: "Ride Monitoring",
    description: "AI-powered anomaly detection for unexpected stops or route changes.",
    colSpan: "lg:col-span-2",
  },
  {
    icon: Star,
    title: "Two-Way Ratings",
    description: "Maintaining a respectful community through mutual accountability.",
    colSpan: "lg:col-span-1",
  },
  {
    icon: Shield,
    title: "Insured Rides",
    description: "Every trip is insured to protect you and your belongings.",
    colSpan: "lg:col-span-2",
  },
]

export function SafetyFeaturesSection() {
  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
           <span className="text-primary-green font-bold tracking-wider uppercase text-sm mb-3 block">Technology</span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-heading mb-6 tracking-tight">
            Advanced Safety Features
          </h2>
          <p className="text-xl text-paragraph leading-relaxed">
            We&apos;ve built multiple layers of protection into the Sawari app, so you can travel with complete peace of mind.
          </p>
        </div>

        {/* Features Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.colSpan} group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-green/30 hover:-translate-y-1 overflow-hidden`}
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gray-50 group-hover:bg-white flex items-center justify-center transition-colors shadow-sm group-hover:scale-110 duration-300">
                        <feature.icon className="h-7 w-7 text-primary-green" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-300 group-hover:text-primary-green transform -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
                
                <h3 className="text-2xl font-bold text-dark-heading mb-3">{feature.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

