"use client";

import {
  Smartphone,
  MapPin,
  CreditCard,
  Star,
  Package,
  Utensils,
  Car,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

interface Step {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface ServiceButton {
  key: string;
  label: string;
  icon: React.ElementType;
  color: string;
}

const services: Record<string, Step[]> = {
  ride: [
    {
      icon: Smartphone,
      title: "Go Online",
      description:
        "Open the eSawari Rider app and toggle online to start receiving ride requests in your area.",
    },
    {
      icon: MapPin,
      title: "Accept Ride Request",
      description:
        "View passenger details, pickup location, and estimated fare. Accept the ride and navigate to pickup point.",
    },
    {
      icon: Car,
      title: "Pick Up & Drive",
      description:
        "Meet the passenger at the pickup location, verify their identity, and start the trip safely to destination.",
    },
    {
      icon: Star,
      title: "Complete & Earn",
      description:
        "End the trip, collect payment through the app, and receive your earnings instantly to your wallet.",
    },
  ],
  food: [
    {
      icon: Smartphone,
      title: "Go Online",
      description:
        "Open the app and go online to start receiving food delivery orders from nearby restaurants.",
    },
    {
      icon: Utensils,
      title: "Accept Order",
      description:
        "Review order details, restaurant location, and delivery address. Accept and head to the restaurant.",
    },
    {
      icon: MapPin,
      title: "Pick Up Food",
      description:
        "Arrive at restaurant, confirm order details, collect the food package, and ensure it's properly secured.",
    },
    {
      icon: Star,
      title: "Deliver & Earn",
      description:
        "Deliver food to customer safely, confirm delivery in app, and receive instant payment to your wallet.",
    },
  ],
  parcel: [
    {
      icon: Package,
      title: "Go Online",
      description:
        "Start your shift by going online. You'll receive parcel pickup requests based on your location.",
    },
    {
      icon: MapPin,
      title: "Accept Delivery",
      description:
        "View parcel size, pickup location, and delivery distance. Accept the request and navigate to sender.",
    },
    {
      icon: CreditCard,
      title: "Pick Up Parcel",
      description:
        "Verify sender details, check package condition, and confirm pickup in the app before heading to destination.",
    },
    {
      icon: Star,
      title: "Complete Delivery",
      description:
        "Deliver to receiver, get digital signature confirmation, and receive instant payment for your service.",
    },
  ],
};

const serviceButtons: ServiceButton[] = [
  { key: "ride", label: "Ride Hailing", icon: Car, color: "#1976D2" },
  { key: "food", label: "Food Delivery", icon: Utensils, color: "#F97316" },
  { key: "parcel", label: "Parcel Delivery", icon: Package, color: "#7B1FA2" },
];

export default function RiderStepsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeService, setActiveService] = useState<string>("ride");

  const steps = services[activeService];

  return (
    <section
      className="relative px-4 py-24 overflow-hidden bg-roads"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          className="text-center mb-20"
        >
          <span className="text-primary-green font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Rider Experience</span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-dark-heading mb-6 tracking-tighter">
            Your journey, <span className="text-primary-green">Mastered.</span>
          </h2>
          <p className="text-lg text-paragraph/60 max-w-2xl mx-auto font-light leading-relaxed">
            Discover how easy it is to move, eat, and live better with the Sawari app.
          </p>

          {/* Service Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {serviceButtons.map((service: ServiceButton) => {
              const Icon = service.icon;
              const isActive = activeService === service.key;
              return (
                <motion.button
                  key={service.key}
                  onClick={() => setActiveService(service.key)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-3 px-8 py-3 rounded-2xl font-bold transition-all border font-body ${
                    isActive
                      ? "bg-primary-green text-white border-primary-green shadow-xl"
                      : "bg-white text-dark-heading border-gray-100 hover:border-primary-green/30"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-gray-400"}`} />
                  {service.label}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step: Step, index: number) => (
            <motion.div
              key={`${activeService}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-primary-green/5 transition-all duration-500 group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary-green/5 flex items-center justify-center mb-8 group-hover:bg-primary-green group-hover:text-white transition-colors duration-500">
                <step.icon className="w-8 h-8" />
              </div>

              <div className="space-y-4">
                <span className="text-primary-green/40 font-mono text-sm font-bold">Step 0{index + 1}</span>
                <h3 className="text-2xl font-bold text-dark-heading font-heading tracking-tight">
                  {step.title}
                </h3>
                <p className="text-paragraph/60 leading-relaxed font-light text-sm md:text-base">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}