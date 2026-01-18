"use client"
import { Users, Car, Package, Utensils, Info } from "lucide-react"
import { useState } from "react"

const categories = [
  { id: 'ride', label: 'For Riders', icon: Car },
  { id: 'delivery', label: 'Food & Parcel', icon: Utensils },
  { id: 'general', label: 'General', icon: Info },
]

const guidelines = {
  ride: [
      { title: "Verify Your Ride", desc: "Check the license plate number, car model, and driver photo match what's in the app." },
      { title: "Share Trip Details", desc: "Use the 'Share Status' function to send your live location to a friend or family member." },
      { title: "Buckle Up", desc: "Always wear your seatbelt, even on short trips. It's the law and saves lives." },
      { title: "Respect Privacy", desc: "Keep personal questions to a minimum and never share your contact info directly." }
  ],
  delivery: [
      { title: "Contactless Delivery", desc: "Opt for 'Leave at Door' to minimize physical contact when possible." },
      { title: "Check Packaging", desc: "Ensure food seals are intact and parcels haven't been tampered with." },
      { title: "Verify Recipient", desc: "If sending a parcel, double-check the receiver's phone number." },
      { title: "Secure Fragile Items", desc: "Use bubble wrap or sturdy boxes for sending delicate items." }
  ],
  general: [
      { title: "Trust Your Instincts", desc: "If you ever feel unsafe, end the ride or report the issue immediately." },
      { title: "Rate Honestly", desc: "Your feedback helps us remove bad actors from the platform." },
      { title: "Protect Data", desc: "Never share your OTP or password with anyone, even support staff." },
      { title: "Be Kind", desc: "Treat drivers and support staff with respect to build a better community." }
  ]
}

export function GuidelinesSection() {
    const [activeTab, setActiveTab] = useState<'ride' | 'delivery' | 'general'>('ride')

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Safety Guidelines</h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Simple steps you can take to ensure a secure experience for the entire community.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
                <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id as any)}
                    className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                        activeTab === cat.id 
                        ? 'bg-primary-green text-white shadow-lg scale-105' 
                        : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                >
                    <cat.icon size={20} />
                    {cat.label}
                </button>
            ))}
        </div>

        {/* Content Area */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto animate-fade-in-up">
            {guidelines[activeTab].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-6 rounded-2xl border border-gray-100 hover:border-primary-green/30 hover:shadow-lg transition-all bg-white group hover:-translate-y-1">
                    <div className="w-10 h-10 rounded-full bg-primary-green/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-green transition-colors duration-300">
                         <span className="font-bold text-primary-green group-hover:text-white transition-colors">{idx + 1}</span>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

