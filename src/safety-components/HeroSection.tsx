import { Shield, CheckCircle, Smartphone } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-green/20 blur-2xl rounded-full" />
              <div className="relative bg-white shadow-xl p-5 rounded-3xl border border-gray-100 italic">
                <Shield className="h-14 w-14 text-primary-green" />
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-dark-heading mb-6 tracking-tight">
            Your Safety is Our <span className="text-primary-green">First Priority</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-paragraph mb-10 max-w-2xl mx-auto font-body leading-relaxed">
            At Sawari, we leverage advanced technology and strict verification protocols to ensure every journey is secure, transparent, and reliable.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
            <button className="px-8 py-4 bg-primary-green hover:bg-primary-green/90 text-white font-semibold rounded-2xl text-lg transition-all shadow-lg shadow-primary-green/20">
              Safety Features
            </button>
            <button className="px-8 py-4 border-2 border-primary-green/30 text-primary-green hover:bg-primary-green/5 font-semibold rounded-2xl text-lg transition-all">
              Emergency Response
            </button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 border-t border-gray-100">
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-green/10 flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-primary-green" />
              </div>
              <span className="font-semibold text-dark-heading">24/7 Monitoring</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-green/10 flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-primary-green" />
              </div>
              <span className="font-semibold text-dark-heading">Verified Partners</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-green/10 flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-primary-green" />
              </div>
              <span className="font-semibold text-dark-heading">SOS Assistance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
