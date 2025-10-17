"use client"

import React from 'react';
import { Car, UtensilsCrossed, Package, Truck,Hotel } from 'lucide-react';
import { FaHelicopter } from "react-icons/fa";

const services = [
  {
    icon: Car,
    title: 'Ride-Hailing',
    description:
      "Quick and reliable rides across Kathmandu Valley and major cities. From bikes to cars, we've got you covered.",
    bgColor: '#EBF5FF',
    iconColor: '#1976D2',
  },
  {
    icon: UtensilsCrossed,
    title: 'Food Delivery',
    description:
      'Delicious meals from your favorite restaurants delivered hot and fresh to your doorstep.',
    bgColor: '#FFF4E6',
    iconColor: '#F57C00',
  },
  {
    icon: Package,
    title: 'Parcel Delivery',
    description:
      'Send documents, gifts, and packages anywhere in Nepal with real-time tracking and insurance.',
    bgColor: '#F3E5F5',
    iconColor: '#7B1FA2',
  },
  {
    icon: Hotel,
    title: 'Hotel Booking',
    description:
      'Find and book the perfect accommodation from budget to luxury hotels across Nepal with exclusive deals.',
    bgColor: '#FEFCE8',
    iconColor: '#CA8A04',
  },
  {
    icon: Truck,
    title: 'Vehicle Rentals',
    description:
      'Rent bikes, cars, and commercial vehicles for daily, weekly, or monthly needs at affordable rates.',
    bgColor: '#E8F5E9',
    iconColor: '#10B981',
    comingSoon: true,
  },
  {
    icon: FaHelicopter,
    title: 'Helicopter Rental',
    description:
      'Experience premium aerial transportation for business travel, tourism, and special events across Nepal.',
    bgColor: '#FCE7F3',
    iconColor: '#DB2777',
    comingSoon: true,
  },
];

const ServicesSection = () => {
  return (
    <section className="px-4 py-12 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-12">
          <h3 className="text-4xl md:text-5xl font-heading font-semibold text-dark-heading leading-tight">
            Everything You Need in{' '}
            <span className="text-primary-green">One App</span>
          </h3>
          
          <p className="text-base md:text-lg max-w-2xl mx-auto text-paragraph leading-relaxed font-body">
            From daily commutes to special occasions, eSawari provides
            comprehensive solutions for all your transportation and delivery
            needs across Nepal.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
  comingSoon?: boolean;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  bgColor,
  iconColor,
  comingSoon = false,
}: ServiceCardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="group relative rounded-2xl transition-all duration-300 cursor-pointer p-6 min-h-[300px] flex flex-col bg-white overflow-hidden"
      style={{
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered
          ? '0 20px 40px rgba(16, 185, 129, 0.15)'
          : '0 2px 8px rgba(0, 0, 0, 0.04)',
        opacity: comingSoon ? 0.7 : 1,
      }}
      onMouseEnter={() => !comingSoon && setIsHovered(true)}
      onMouseLeave={() => !comingSoon && setIsHovered(false)}
    >
      {/* Coming Soon Badge */}
      {comingSoon && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center px-4 py-1.5 bg-primary-green/10 text-primary-green rounded-full text-xs font-semibold tracking-wider uppercase space-x-2">
            Coming Soon
          </span>
        </div>
      )}

      <div className="space-y-5 flex-1">
        {/* Icon */}
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300"
          style={{
            backgroundColor: bgColor,
            transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
            filter: comingSoon ? 'grayscale(100%)' : 'grayscale(0%)',
          }}
        >
          <Icon className="w-8 h-8" style={{ color: iconColor }} />
        </div>

        {/* Title + Description */}
        <div className="space-y-3">
          <h4
            className="text-2xl font-semibold transition-colors duration-300"
            style={{
              color: isHovered && !comingSoon ? 'var(--primary-green)' : 'var(--dark-heading)',
            }}
          >
            {title}
          </h4>
          <p className="text-base text-paragraph leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Learn More Link */}
      {!comingSoon && (
        <div className="mt-6 flex items-center gap-2 text-base font-medium transition-all duration-300 font-body"
          style={{
            color: isHovered ? 'var(--primary-green)' : 'var(--text-color)',
            opacity: isHovered ? 1 : 0.7,
          }}
        >
          <span>Learn more</span>
          <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
        </div>
      )}

      {/* Animated Accent Bar */}
      {!comingSoon && (
        <div
          className="absolute bottom-0 left-0 h-1 rounded-b-2xl transition-all duration-300"
          style={{
            backgroundColor: 'var(--primary-green)',
            width: isHovered ? '100%' : '0%',
          }}
        />
      )}

      {/* Subtle Background Gradient on Hover */}
      {!comingSoon && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.03) 0%, transparent 100%)',
            opacity: isHovered ? 1 : 0,
          }}
        />
      )}
    </div>
  );
};

export default ServicesSection;