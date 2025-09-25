import { Car, Utensils, Package, CreditCard, User, Settings } from "lucide-react"

const helpCategories = [
  {
    icon: Car,
    title: "Ride Booking",
    description: "Learn how to book rides, track drivers, and manage your trips",
    articles: 12,
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Utensils,
    title: "Food Delivery",
    description: "Order food, track deliveries, and resolve food-related issues",
    articles: 8,
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Package,
    title: "Parcel Service",
    description: "Send packages, track shipments, and understand pricing",
    articles: 6,
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: CreditCard,
    title: "Payments & Billing",
    description: "Manage payment methods, view receipts, and resolve billing issues",
    articles: 10,
    color: "bg-green-100 text-green-600",
  },
  {
    icon: User,
    title: "Account Management",
    description: "Update profile, change settings, and manage your account",
    articles: 7,
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Settings,
    title: "Technical Support",
    description: "App issues, troubleshooting, and technical assistance",
    articles: 9,
    color: "bg-gray-100 text-gray-600",
  },
]

export function HelpCenterSection() {
  return (
   <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Help Center
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions and learn how to make the most of esawari's services.
          </p>
        </div>

        {/* Help Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {helpCategories.map((category, index) => (
            <div 
              key={index} 
              className="group cursor-pointer"
            >
              <div className="bg-green-50 p-4 rounded-2xl mb-6 w-fit group-hover:bg-green-100 transition-colors">
                <category.icon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{category.description}</p>
              <div className="flex items-center text-green-600 font-medium group-hover:gap-2 transition-all">
                Browse {category.articles} Articles 
                <span className="ml-1 group-hover:ml-0 transition-all">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-500 mb-2">50K+</div>
            <div className="text-gray-600">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-500 mb-2">1000+</div>
            <div className="text-gray-600">Partners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-500 mb-2">4.8★</div>
            <div className="text-gray-600">App Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-500 mb-2">24/7</div>
            <div className="text-gray-600">Available</div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Can't find what you're looking for?</h3>
          <p className="text-green-100 mb-6 text-lg">
            Our support team is here to help you 24/7. Get personalized assistance for your queries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
              Contact Support Team
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Live Chat
            </button>
          </div>
        </div>

        {/* Download App CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="bg-green-500 p-3 rounded-xl">
              <Car className="h-8 w-8 text-white" />
            </div>
            <div className="text-left">
              <h4 className="font-bold text-gray-900 text-lg">Get the esawari App</h4>
              <p className="text-gray-600">Experience seamless services on the go</p>
            </div>
            <button className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors">
              Download App
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
