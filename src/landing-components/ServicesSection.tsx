"use client"

import React from 'react';
import { Car, UtensilsCrossed, Package, Truck, Hotel, Shield, Clock, MapPin } from 'lucide-react';
import { FaHelicopter } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: Car,
    title: 'Ride-Hailing',
    description:
      "Quick and reliable rides across Kathmandu Valley and major cities. From bikes to cars, we've got you covered.",
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    accentColor: 'border-blue-500',
  },
  {
    icon: UtensilsCrossed,
    title: 'Food Delivery',
    description:
      'Delicious meals from your favorite restaurants delivered hot and fresh to your doorstep.',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
    accentColor: 'border-orange-500',
  },
  {
    icon: Package,
    title: 'Parcel Delivery',
    description:
      'Send documents, gifts, and packages anywhere in Nepal with real-time tracking and insurance.',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
    accentColor: 'border-purple-500',
  },
  {
    icon: Hotel,
    title: 'Hotel Booking',
    description:
      'Find and book the perfect accommodation from budget to luxury hotels across Nepal with exclusive deals.',
    bgColor: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
    accentColor: 'border-yellow-500',
  },
  {
    icon: Truck,
    title: 'Vehicle Rentals',
    description:
      'Rent bikes, cars, and commercial vehicles for daily, weekly, or monthly needs at affordable rates.',
    bgColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    accentColor: 'border-emerald-500',
    comingSoon: true,
  },
  {
    icon: FaHelicopter,
    title: 'Helicopter Rental',
    description:
      'Experience premium aerial transportation for business travel, tourism, and special events across Nepal.',
    bgColor: 'bg-pink-50',
    iconColor: 'text-pink-600',
    accentColor: 'border-pink-500',
    comingSoon: true,
  },
];

const ServicesSection = () => {
  return (
    <section className="relative px-4 py-24 md:px-8 overflow-hidden bg-transparent">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-20 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary-green/10 text-primary-green text-sm font-bold uppercase tracking-widest"
          >
            Our Services
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-dark-heading leading-tight tracking-tighter">
            Comprehensive <span className="text-primary-green">Mobility Solutions</span>
          </h2>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-paragraph/60 leading-relaxed font-light font-body">
            Everything you need for your daily commute, dining, and logistics—all in a single, powerful platform.
          </p>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary-green/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>

        {/* Features Minimal Bar */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-primary-green">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-dark-heading font-heading tracking-tight">Safe & Secure</h4>
              <p className="text-sm text-paragraph/60 font-body">Verified partners and 24/7 support.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-primary-green">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-dark-heading font-heading tracking-tight">Fast Response</h4>
              <p className="text-sm text-paragraph/60 font-body">Average pickup time under 5 minutes.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-primary-green">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-dark-heading font-heading tracking-tight">Local Expertise</h4>
              <p className="text-sm text-paragraph/60 font-body">Operating across major cities in Nepal.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
  comingSoon?: boolean;
  index: number;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  bgColor,
  iconColor,
  comingSoon = false,
  index,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className={`group relative p-8 rounded-3xl bg-white border border-gray-100 shadow-sm transition-all duration-300 ${comingSoon ? 'opacity-75 grayscale-[0.5]' : 'hover:shadow-2xl hover:shadow-primary-green/10'}`}
    >
      <div className="relative z-10 space-y-6">
        {/* Icon with animated background */}
        <div className={`w-16 h-16 rounded-2xl ${bgColor} ${iconColor} flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
          <Icon className="w-8 h-8" />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-dark-heading group-hover:text-primary-green transition-colors font-heading tracking-tight">
              {title}
            </h3>
            {comingSoon && (
              <span className="text-[10px] font-bold uppercase tracking-tighter px-2 py-1 rounded bg-gray-100 text-gray-500">
                Soon
              </span>
            )}
          </div>
          <p className="text-paragraph/60 leading-relaxed min-h-[80px] font-body text-sm md:text-base">
            {description}
          </p>
        </div>

        {!comingSoon && (
          <div className="pt-4 flex items-center gap-2 text-primary-green font-bold group-hover:gap-4 transition-all font-body">
            <span>Learn More</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        )}
      </div>

      {/* Decorative accent */}
      <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-gray-50 rounded-br-3xl -z-0 opacity-0 group-hover:opacity-100 transition-opacity`} />
    </motion.div>
  );
};

export default ServicesSection;
