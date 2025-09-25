import { Phone, Mail, MessageSquare, MapPin, Clock } from "lucide-react"

const contactMethods = [
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our support team",
    contact: "+977-1-4567890",
    action: "Call Now",
    available: "24/7 Available",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us your questions and concerns",
    contact: "support@esawari.com",
    action: "Send Email",
    available: "Response within 2 hours",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Get instant help through live chat",
    contact: "Available in app and website",
    action: "Start Chat",
    available: "24/7 Available",
  },
  {
    icon: MapPin,
    title: "Visit Our Office",
    description: "Meet us in person at our headquarters",
    contact: "Kathmandu, Nepal",
    action: "Get Directions",
    available: "Mon-Fri, 9 AM - 6 PM",
  },
]

export function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Choose the most convenient way to reach us. We're committed to providing quick and helpful responses.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="group cursor-pointer text-center"
            >
              {/* Icon */}
              <div className="bg-green-50 p-4 rounded-2xl mb-6 w-fit mx-auto group-hover:bg-green-100 transition-colors">
                <method.icon className="h-8 w-8 text-green-600" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{method.title}</h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-4">{method.description}</p>

              {/* Contact Info */}
              <p className="font-semibold text-gray-900 mb-4">{method.contact}</p>

              {/* Availability */}
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-6">
                <Clock className="h-4 w-4" />
                <span>{method.available}</span>
              </div>

              {/* Action Button */}
              <div className="flex items-center justify-center text-green-600 font-medium group-hover:gap-2 transition-all">
                {method.action}
                <span className="ml-1 group-hover:ml-0 transition-all">→</span>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  )
}
