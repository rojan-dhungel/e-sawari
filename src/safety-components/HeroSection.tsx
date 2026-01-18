"use client"
import { Shield, CheckCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-green/5 via-white to-white pt-32 pb-24 lg:pt-40 lg:pb-32">
        {/* Background Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-green/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 -z-0" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 -z-0" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Icon */}
          <div className="flex justify-center mb-10">
            <div className="relative animate-float">
               <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
               `}</style>
              <div className="absolute inset-0 bg-primary-green/30 blur-2xl rounded-full scale-110" />
              <div className="relative bg-white shadow-2xl p-6 rounded-[2rem] border border-gray-100/50 backdrop-blur-sm">
                <Shield className="h-16 w-16 text-primary-green fill-primary-green/10" />
              </div>
              {/* Decorative dots */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-400 rounded-full border-2 border-white" />
            </div>
          </div>

          {/* Badge */}
           <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 rounded-full shadow-sm mb-6 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-600">Secure & Reliable Transportation</span>
           </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold font-heading text-dark-heading mb-8 tracking-tight leading-tight animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Your Safety is Our <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-emerald-600">First Priority</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-paragraph/80 mb-12 max-w-2xl mx-auto font-body leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            We utilize advanced technology, strict verification, and 24/7 monitoring to ensure every journey is secure.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <button className="px-8 py-4 bg-primary-green hover:bg-primary-green/90 text-white font-bold rounded-2xl text-lg transition-all shadow-lg hover:shadow-primary-green/30 hover:-translate-y-1">
              Explore Safety Features
            </button>
            <button className="px-8 py-4 bg-white border-2 border-gray-100 text-dark-heading hover:border-primary-green/30 hover:bg-gray-50 font-bold rounded-2xl text-lg transition-all hover:-translate-y-1">
              Emergency Response
            </button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-gray-100 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
             {[ 
               {label: "24/7 Monitoring", desc: "Real-time trip tracking"},
               {label: "Verified Partners", desc: "Background checked drivers"},
               {label: "SOS Assistance", desc: "Instant emergency support"}
             ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-50">
                   <div className="w-10 h-10 rounded-full bg-primary-green/10 flex items-center justify-center mb-2">
                     <CheckCircle className="h-5 w-5 text-primary-green" />
                   </div>
                   <span className="font-bold text-dark-heading text-lg">{item.label}</span>
                   <span className="text-sm text-gray-500">{item.desc}</span>
                </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  )
}

