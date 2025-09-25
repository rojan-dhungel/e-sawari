import { Shield, MapPin, Phone, UserCheck, Camera, Star } from "lucide-react"

const features = [
  {
    icon: UserCheck,
    title: "Driver Verification",
    description:
      "All drivers undergo thorough background checks and document verification before joining our platform.",
  },
  {
    icon: MapPin,
    title: "Real-time Tracking",
    description: "Track your ride, delivery, or service in real-time with GPS monitoring and live location sharing.",
  },
  {
    icon: Phone,
    title: "Emergency Button",
    description: "One-tap emergency button connects you instantly to our safety team and local authorities.",
  },
  {
    icon: Camera,
    title: "Trip Recording",
    description: "All trips are recorded with driver photos, vehicle details, and route information for your safety.",
  },
  {
    icon: Star,
    title: "Rating System",
    description: "Two-way rating system helps maintain service quality and identifies trusted service providers.",
  },
  {
    icon: Shield,
    title: "Insurance Coverage",
    description: "Comprehensive insurance coverage for all rides and deliveries to protect you and your belongings.",
  },
]

export function SafetyFeaturesSection() {
  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-heading mb-4">
            Advanced Safety Features
          </h2>
          <p className="text-xl text-paragraph max-w-3xl mx-auto">
            We&apos;ve built multiple layers of safety into every aspect of our platform to protect you at every step.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-primary-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="h-8 w-8 text-primary-green" />
              </div>
              <h3 className="text-xl font-semibold text-dark-heading mb-4">{feature.title}</h3>
              <p className="text-paragraph leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
