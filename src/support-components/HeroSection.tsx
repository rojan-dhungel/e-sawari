import { Headphones, MessageCircle } from "lucide-react"

export function HeroSection() {
  return (
<section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="bg-green-50 p-6 rounded-2xl">
              <Headphones className="h-12 w-12 text-green-600" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            We're Here to <span className="text-green-600">Help</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Get instant support for all your questions and concerns. Our dedicated support team is available 24/7 to
            assist you with any issues.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="flex items-center justify-center px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl text-lg transition-colors">
              <MessageCircle className="mr-2 h-5 w-5" />
              Start Live Chat
            </button>
            <button className="px-8 py-3 border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold rounded-xl text-lg transition-colors">
              Browse Help Center
            </button>
          </div>

          {/* Footer text */}
          <div className="text-center">
            <p className="text-gray-600">
              Average response time: <span className="font-bold text-green-600">2 minutes</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
