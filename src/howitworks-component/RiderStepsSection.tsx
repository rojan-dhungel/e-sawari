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
  const currentService = serviceButtons.find((s) => s.key === activeService);

  return (
    <section
      className="py-20 px-4 bg-light-background font-body relative overflow-hidden"
      ref={ref}
    >
      {/* Soft Gradient Background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div
          className="absolute top-10 left-10 w-80 h-80 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(35,124,63,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-10 right-10 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(35,124,63,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-dark-heading mb-4">
            How It Works for <span className="text-primary-green">Riders</span>
          </h2>
          <p className="text-base md:text-lg text-paragraph max-w-2xl mx-auto leading-relaxed">
            Start earning with eSawari in just a few simple steps. Choose a service to see how you can get started.
          </p>

          {/* Service Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {serviceButtons.map((service: ServiceButton) => {
              const Icon = service.icon;
              const isActive = activeService === service.key;
              return (
                <motion.button
                  key={service.key}
                  onClick={() => setActiveService(service.key)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all border-2 ${
                    isActive
                      ? "text-white shadow-lg"
                      : "text-dark-heading bg-white hover:bg-gray-50"
                  }`}
                  style={{
                    backgroundColor: isActive ? service.color : "transparent",
                    borderColor: service.color,
                  }}
                >
                  <Icon
                    className="w-5 h-5"
                    style={{
                      color: isActive ? "white" : service.color,
                    }}
                  />
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
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-center relative group"
            >
              <motion.div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 transition-transform duration-300"
                style={{
                  backgroundColor: `${currentService?.color}15`,
                  color: currentService?.color,
                }}
                whileHover={{ rotate: 8, scale: 1.1 }}
              >
                <step.icon className="w-8 h-8" />
              </motion.div>

              <h3
                className="text-xl font-semibold text-dark-heading mb-3 font-heading"
                style={{
                  transition: "color 0.3s ease",
                }}
              >
                {step.title}
              </h3>
              <p className="text-paragraph leading-relaxed font-body text-sm md:text-base">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}