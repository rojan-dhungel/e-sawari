import React from 'react';
import { Car, UtensilsCrossed, Package } from 'lucide-react';

const ServicesSection = () => {
  return (
           <section className="px-4 py-16 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#20242C' }}>
              Everything You Need in <span style={{ color: '#26D466' }}>One App</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6A7181' }}>
              From transportation to food delivery, we provide comprehensive solutions for all your key operations in one streamlined, easily accessible application.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center" style={{ backgroundColor: '#E3F2FD' }}>
                <Car className="w-8 h-8" style={{ color: '#1976D2' }} />
              </div>
              <h3 className="text-xl font-bold" style={{ color: '#20242C' }}>Ride-Hailing</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6A7181' }}>
                Safe, reliable transportation with experienced local drivers. Real-time tracking and flexible payment options.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center" style={{ backgroundColor: '#FFF3E0' }}>
                <UtensilsCrossed className="w-8 h-8" style={{ color: '#F57C00' }} />
              </div>
              <h3 className="text-xl font-bold" style={{ color: '#20242C' }}>Food Delivery</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6A7181' }}>
                Discover local restaurants and cuisines. Fast delivery from your favorite spots with real-time tracking.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center" style={{ backgroundColor: '#F3E5F5' }}>
                <Package className="w-8 h-8" style={{ color: '#7B1FA2' }} />
              </div>
              <h3 className="text-xl font-bold" style={{ color: '#20242C' }}>Parcel Delivery</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6A7181' }}>
                Send packages anywhere in Nepal with confidence. Secure handling and real-time delivery updates.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center" style={{ backgroundColor: '#E8F5E8' }}>
                <Car className="w-8 h-8" style={{ color: '#26D466' }} />
              </div>
              <h3 className="text-xl font-bold" style={{ color: '#20242C' }}>Vehicle Rentals</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6A7181' }}>
                Rent bikes to cars for short trips or extended journeys. Flexible options at affordable rates.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ServicesSection;