import { Phone, MessageSquare, AlertTriangle } from "lucide-react"

export function EmergencySection() {
  return (
    <section className="py-20 bg-red-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-red-100 p-4 rounded-full">
              <AlertTriangle className="h-12 w-12 text-red-600" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Emergency Support
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In case of emergency, we&apos;re here to help 24/7. Multiple ways to reach our safety team instantly.
          </p>
        </div>

        {/* Simple list */}
        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto text-center">
          <div>
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Emergency Hotline</h3>
            <p className="text-gray-600">Call our 24/7 emergency support line</p>
          </div>

          <div>
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">In-App Emergency</h3>
            <p className="text-gray-600">Use the emergency button in the app</p>
          </div>

          <div>
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Police Emergency</h3>
            <p className="text-gray-600">For immediate police assistance</p>
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center mt-12">
          <p className="text-gray-600 max-w-2xl mx-auto">
            <strong>Remember:</strong> In case of immediate danger, always call local emergency services first
            (100 for Police, 102 for Ambulance). Our safety team will coordinate with authorities to provide
            additional support.
          </p>
        </div>
      </div>
    </section>
  )
}
