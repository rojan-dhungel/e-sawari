"use client"

import { Car, UtensilsCrossed, Package, Truck } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: Car,
    title: "Ride-Hailing",
    description: "Book a ride in seconds",
    steps: [
      "Set your pickup location",
      "Choose your destination", 
      "Select vehicle type",
      "Track your driver in real-time",
    ],
   image: "/Images/person-using-ride-hailing-app-on-phone.jpg",
  },
  {
    icon: UtensilsCrossed,
    title: "Food Delivery",
    description: "Order from your favorite restaurants",
    steps: ["Browse nearby restaurants", "Add items to your cart", "Choose delivery time", "Track your order live"],
  image: "/Images/food-delivery-person-with-thermal-bag.jpg"
  },
  {
    icon: Package,
    title: "Parcel Delivery",
    description: "Send packages anywhere in the city",
    steps: [
      "Enter pickup & drop locations",
      "Select package size",
      "Schedule pickup time",
      "Get delivery confirmation",
    ],
   image: "/Images/delivery-person-handling-packages.jpg"
  },
  {
    icon: Truck,
    title: "Vehicle Rentals",
    description: "Rent vehicles for any duration",
    steps: ["Choose vehicle type", "Select rental duration", "Verify your documents", "Pick up your vehicle"],
    image: "/Images/person-receiving-car-keys-for-rental.jpg"
  },
]

export default function ServicesSection() {
  return (
    <section className="bg-gradient-to-b from-light to-gray-50">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-heading mb-6">
            How Our <span className="text-primary-green">Services</span> Work
          </h2>
          <p className="text-xl text-paragraph max-w-3xl mx-auto leading-relaxed">
            Discover the simple steps to access our comprehensive range of on-demand services
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className={`w-full relative overflow-hidden ${
              index % 2 === 0 
                ? "bg-white" 
                : "bg-gradient-to-br from-primary-green to-green-500"
            }`}
          >


            <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
              <div
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Content Section */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-6 mb-8">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${
                      index % 2 === 0 
                        ? "bg-primary-green" 
                        : "bg-white"
                    }`}>
                      <service.icon className={`w-8 h-8 ${
                        index % 2 === 0 
                          ? "text-white" 
                          : "text-primary-green"
                      }`} />
                    </div>
                    <div>
                      <h3 className={`text-3xl md:text-4xl font-bold mb-2 ${
                        index % 2 === 0 
                          ? "text-dark-heading" 
                          : "text-white"
                      }`}>
                        {service.title}
                      </h3>
                      <p className={`text-lg font-medium ${
                        index % 2 === 0 
                          ? "text-primary-green" 
                          : "text-white/90"
                      }`}>
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {service.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center gap-6 group">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold shadow-md transition-all duration-300 group-hover:scale-110 ${
                          index % 2 === 0 
                            ? "bg-primary-green/10 text-primary-green group-hover:bg-primary-green group-hover:text-white" 
                            : "bg-white/20 text-white group-hover:bg-white group-hover:text-primary-green"
                        }`}>
                          {stepIndex + 1}
                        </div>
                        <p className={`text-lg leading-relaxed transition-colors duration-300 ${
                          index % 2 === 0 
                            ? "text-paragraph group-hover:text-dark-heading" 
                            : "text-white/90 group-hover:text-white"
                        }`}>
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Section */}
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className={`relative group ${
                    index % 2 === 0 
                      ? "bg-gradient-to-br from-gray-50 to-gray-100" 
                      : "bg-white/10 backdrop-blur-sm"
                  } rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2`}>
                    
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={500}
                      height={350}
                      className="w-full h-80 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}