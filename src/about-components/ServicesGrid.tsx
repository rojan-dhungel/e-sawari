"use client"

import React from 'react';
import { Car, UtensilsCrossed, Package, Hotel, Star } from "lucide-react"

const ServicesGrid = () => {
  const services = [
    {
      icon: Car,
      title: "Ride-Hailing",
      description:
        "Safe, affordable, and convenient rides across Nepal with professional drivers. Location-based ride requests with GPS tracking and real-time updates.",
      bgColor: "#EBF5FF",
      iconColor: "#1976D2",
      features: ["40% Cost-Effective", "GPS Tracking", "SOS Emergency", "Insurance Coverage"],
    },
    {
      icon: UtensilsCrossed,
      title: "Food & Grocery Delivery",
      description:
        "Fresh food from your favorite restaurants and groceries delivered hot and fast to your doorstep with real-time tracking.",
      bgColor: "#FFF4E6",
      iconColor: "#F57C00",
      features: ["Hot & Fresh", "Fast Delivery", "Wide Selection", "Live Tracking"],
    },
    {
      icon: Package,
      title: "Parcel Delivery",
      description:
        "Reliable and secure parcel delivery services for personal and business needs with real-time tracking and proof of delivery.",
      bgColor: "#F3E5F5",
      iconColor: "#7B1FA2",
      features: ["Secure Handling", "Real-time Tracking", "Same Day Delivery", "Proof of Delivery"],
    },
    {
      icon: Hotel,
      title: "Hotel Booking",
      description:
        "Find and book the perfect accommodation from budget to luxury hotels across Nepal with exclusive deals and flexible options.",
      bgColor: "#FEFCE8",
      iconColor: "#CA8A04",
      features: ["Special Offers", "Flexible Check-in", "Wide Selection", "Best Prices"],
    },
  ]

  return (
    <section className="px-4 py-16 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-dark-heading leading-tight">
            Our <span className="text-primary-green">Services</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-paragraph leading-relaxed font-body">
            Comprehensive solutions for all your transportation, food, and delivery needs across Nepal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
  features: string[];
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  bgColor,
  iconColor,
  features,
}: ServiceCardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="group relative rounded-2xl transition-all duration-300 cursor-pointer p-8 flex flex-col bg-white overflow-hidden"
      style={{
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered
          ? '0 20px 40px rgba(16, 185, 129, 0.15)'
          : '0 2px 8px rgba(0, 0, 0, 0.04)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start gap-6 mb-6 relative z-10">
        {/* Icon */}
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300 flex-shrink-0"
          style={{
            backgroundColor: bgColor,
            transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
          }}
        >
          <Icon className="w-10 h-10" style={{ color: iconColor }} />
        </div>

        {/* Title + Description */}
        <div className="flex-1 space-y-3">
          <h3
            className="text-2xl font-semibold transition-colors duration-300"
            style={{
              color: isHovered ? '#10B981' : 'var(--dark-heading)',
            }}
          >
            {title}
          </h3>
          <p className="text-base text-paragraph leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="flex flex-wrap gap-2 mb-4 relative z-10">
        {features.map((feature, featureIndex) => (
          <span
            key={featureIndex}
            className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-gray-50 text-paragraph border border-gray-200 transition-all duration-300"
            style={{
              backgroundColor: isHovered ? 'rgba(16, 185, 129, 0.1)' : undefined,
              borderColor: isHovered ? 'rgba(16, 185, 129, 0.3)' : undefined,
            }}
          >
            <Star className="w-3 h-3 mr-1.5 text-primary-green" />
            {feature}
          </span>
        ))}
      </div>

      {/* Learn More Link */}
      <div
        className="mt-auto flex items-center gap-2 text-base font-medium transition-all duration-300 font-body"
        style={{
          color: isHovered ? '#10B981' : 'var(--text-color)',
          opacity: isHovered ? 1 : 0.7,
        }}
      >
        <span>Learn more</span>
        <svg
          className="w-4 h-4 transition-transform duration-300"
          style={{
            transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
          }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>

      {/* Animated Accent Bar */}
      <div
        className="absolute bottom-0 left-0 h-1 rounded-b-2xl transition-all duration-300"
        style={{
          backgroundColor: '#10B981',
          width: isHovered ? '100%' : '0%',
        }}
      />

      {/* Subtle Background Gradient on Hover */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-2xl"
        style={{
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.03) 0%, transparent 100%)',
          opacity: isHovered ? 1 : 0,
        }}
      />
    </div>
  )
}

export default ServicesGrid