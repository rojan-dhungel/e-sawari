import { Users, Car, Package, Utensils } from "lucide-react"

const guidelines = [
  {
    icon: Car,
    title: "Ride Safety",
    tips: [
      "Always verify driver and vehicle details before getting in",
      "Share your trip details with trusted contacts",
      "Sit in the back seat and wear your seatbelt",
      "Trust your instincts - if something feels wrong, speak up",
    ],
  },
  {
    icon: Utensils,
    title: "Food Delivery",
    tips: [
      "Check food packaging for tampering before accepting",
      "Verify delivery person's identity and order details",
      "Report any food safety concerns immediately",
      "Keep delivery receipts for your records",
    ],
  },
  {
    icon: Package,
    title: "Parcel Service",
    tips: [
      "Package items securely and list contents accurately",
      "Take photos of items before sending",
      "Use proper packaging for fragile items",
      "Verify recipient details before dispatch",
    ],
  },
  {
    icon: Users,
    title: "General Safety",
    tips: [
      "Keep your personal information private",
      "Use in-app communication when possible",
      "Report suspicious behavior immediately",
      "Rate and review your experience honestly",
    ],
  },
]

export function GuidelinesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Safety Guidelines</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow these simple guidelines to ensure a safe experience across all our services.
          </p>
        </div>

        {/* Cards (plain divs now) */}
        <div className="grid md:grid-cols-2 gap-8">
          {guidelines.map((guideline, index) => (
            <div key={index} className="bg-white border-0 shadow-lg rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <guideline.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{guideline.title}</h3>
              </div>
              <ul className="space-y-3">
                {guideline.tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-600">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
