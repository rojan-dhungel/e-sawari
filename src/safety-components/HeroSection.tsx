import { Shield, CheckCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-light py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-primary-green/10 p-4 rounded-full">
              <Shield className="h-12 w-12 text-primary-green" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-dark-heading mb-6">
            Your Safety is Our <span className="text-primary-green">Priority</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-paragraph mb-8 max-w-3xl mx-auto">
            At esawari, we&apos;ve implemented comprehensive safety measures across all our services to ensure you have a
            secure and reliable experience every time.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary-green hover:bg-primary-green/90 text-white font-medium rounded-lg text-lg transition">
              View Safety Features
            </button>
            <button className="px-6 py-3 border border-primary-green text-primary-green hover:bg-primary-green/10 font-medium rounded-lg text-lg transition">
              Emergency Support
            </button>
          </div>

          {/* Features */}
          <div className="flex items-center justify-center gap-8 mt-12 text-sm text-paragraph">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary-green" />
              <span>24/7 Monitoring</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary-green" />
              <span>Verified Drivers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary-green" />
              <span>Real-time Tracking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
