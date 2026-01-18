"use client"
import { Phone, MessageSquare, AlertTriangle, ArrowRight } from "lucide-react"

export function EmergencySection() {
  return (
    <section className="py-24 bg-red-50 relative overflow-hidden">
      {/* Background Pulse Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-200/20 rounded-full blur-3xl animate-pulse" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex justify-center mb-6">
            <div className="bg-red-100/80 p-5 rounded-full ring-8 ring-red-50 animate-bounce-slow">
              <AlertTriangle className="h-10 w-10 text-red-600" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            24/7 Emergency Support
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            In the rare event of an incident, our dedicated safety response team is available round-the-clock to assist you immediately.
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
            {/* 1. Hotline */}
          <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-red-100 hover:-translate-y-1">
            <div className="bg-red-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-colors duration-300">
              <Phone className="h-8 w-8 text-red-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Safety Hotline</h3>
            <p className="text-gray-500 mb-6">Call our dedicated line for immediate assistance.</p>
            <button className="text-red-600 font-bold flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
                Call Now <ArrowRight size={18} />
            </button>
          </div>

            {/* 2. In-App */}
          <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-red-100 hover:-translate-y-1">
            <div className="bg-red-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-colors duration-300">
              <MessageSquare className="h-8 w-8 text-red-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">In-App SOS</h3>
            <p className="text-gray-500 mb-6">Press the shield icon during trip to alert team.</p>
             <button className="text-red-600 font-bold flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight size={18} />
            </button>
          </div>

            {/* 3. Police */}
          <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-red-100 hover:-translate-y-1">
            <div className="bg-red-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-colors duration-300">
              <AlertTriangle className="h-8 w-8 text-red-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Quick Police Access</h3>
            <p className="text-gray-500 mb-6">One-tap connection to local law enforcement.</p>
             <button className="text-red-600 font-bold flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
                View Numbers <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center mt-16">
          <p className="text-gray-500 max-w-2xl mx-auto bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-red-100 inline-block font-medium">
            <span className="text-red-600 font-bold">❗ Important:</span> In case of immediate life-threatening danger, always call <span className="text-gray-900 font-bold">100 (Police)</span> or <span className="text-gray-900 font-bold">102 (Ambulance)</span> first.
          </p>
        </div>
      </div>
    </section>
  )
}

