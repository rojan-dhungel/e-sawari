"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, MapPin, Search, Calendar, ChevronRight, Play, Star } from 'lucide-react';

const appFeatures = [
  {
    id: 'bookings',
    title: 'Instant Bookings',
    description: 'Book a ride in seconds with our intuitive interface. Real-time driver matching ensures you are never kept waiting.',
    video: '/videos/video-1.mp4',
    icon: Calendar,
  },
  {
    id: 'tracking',
    title: 'Live Tracking',
    description: 'Track your ride in real-time. Share your trip status with friends and family for added safety and peace of mind.',
    video: '/videos/video-2.mp4',
    icon: MapPin,
  },
  {
    id: 'discovery',
    title: 'Easy Discovery',
    description: 'Find the best routes and vehicle options tailored to your needs. Transparent pricing before you even book.',
    video: '/videos/video-3.mp4',
    icon: Search,
  }
];

const RideHailingPreview = () => {
  const [activeFeature, setActiveFeature] = useState(appFeatures[0]);

  return (
    <section className="py-24 px-4 md:px-8 bg-roads overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* Left Side: Content */}
          <div className="space-y-12">
            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-primary-green font-bold tracking-[0.2em] uppercase text-sm"
              >
                App Experience
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-heading font-bold text-dark-heading leading-tight"
              >
                Technology That <br />
                <span className="text-primary-green">Empowers.</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-paragraph/60 max-w-xl leading-relaxed font-body font-light"
              >
                Experience the most seamless interface designed for the unique landscape of Nepal.
              </motion.p>
            </div>

            <div className="grid gap-4">
              {appFeatures.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  onMouseEnter={() => setActiveFeature(feature)}
                  className={`group cursor-pointer p-6 rounded-2xl transition-all duration-500 flex items-start gap-5 border ${
                    activeFeature.id === feature.id 
                      ? 'bg-white border-primary-green shadow-xl shadow-primary-green/5' 
                      : 'bg-white/40 border-transparent hover:bg-white/80'
                  }`}
                >
                  <div className={`p-3 rounded-xl transition-colors duration-500 ${
                    activeFeature.id === feature.id ? 'bg-primary-green text-white' : 'bg-white text-gray-400 border border-gray-100'
                  }`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className={`text-xl font-bold transition-colors font-heading tracking-tight ${
                      activeFeature.id === feature.id ? 'text-primary-green' : 'text-dark-heading opacity-60'
                    }`}>
                      {feature.title}
                    </h4>
                    <p className={`text-sm leading-relaxed transition-opacity font-body ${
                      activeFeature.id === feature.id ? 'opacity-100 text-paragraph/60' : 'opacity-40'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                  <div className={`ml-auto self-center transition-transform duration-500 ${
                    activeFeature.id === feature.id ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                  }`}>
                    <ChevronRight className="text-primary-green" />
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 pt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-primary-green text-white px-6 py-3 rounded-2xl font-bold transition-all shadow-lg hover:bg-primary-green/90 group border border-white/10"
              >
                <div className="text-left leading-none font-body">
                  <p className="text-[10px] uppercase opacity-60">Download on</p>
                  <p className="text-lg font-semibold mt-1">App Store</p>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-white text-primary-green px-6 py-3 rounded-2xl font-bold transition-all shadow-lg hover:bg-gray-50 group border border-gray-100"
              >
                <div className="text-left leading-none font-body">
                  <p className="text-[10px] uppercase opacity-60">Get it on</p>
                  <p className="text-lg font-semibold mt-1">Google Play</p>
                </div>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Side: Interactive Visualization */}
          <div className="relative h-[600px] flex items-center justify-center">
             {/* Background Glow */}
             <div className="absolute inset-0 bg-primary-green/5 rounded-full blur-[120px]" />
             
             <AnimatePresence mode="wait">
                {activeFeature.id === 'bookings' && (
                  <motion.div
                    key="bookings"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="relative w-full max-w-md aspect-square bg-white border border-gray-100 rounded-[3rem] shadow-2xl p-8 flex flex-col items-center justify-center overflow-hidden"
                  >
                     <div className="relative">
                        <motion.div 
                          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 bg-primary-green rounded-full blur-2xl" 
                        />
                        <div className="relative bg-primary-green p-6 rounded-full text-white shadow-xl">
                           <Calendar className="w-12 h-12" />
                        </div>
                     </div>
                     <h3 className="text-2xl font-bold text-dark-heading mt-8 font-heading tracking-tight">Booking Confirmed</h3>
                     <p className="text-paragraph/60 mt-2 font-body">Connecting with nearby drivers...</p>
                     
                     <div className="mt-8 grid grid-cols-3 gap-4 w-full">
                        {[1,2,3].map(i => (
                          <motion.div 
                            key={i}
                            animate={{ y: [0, -5, 0] }}
                            transition={{ delay: i * 0.2, duration: 2, repeat: Infinity }}
                            className="h-1 bg-gray-100 rounded-full" 
                          />
                        ))}
                     </div>
                  </motion.div>
                )}

                {activeFeature.id === 'tracking' && (
                  <motion.div
                    key="tracking"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="relative w-full max-w-md aspect-square bg-white border border-gray-100 rounded-[3rem] shadow-2xl p-8 overflow-hidden"
                  >
                    {/* Stylized Map View */}
                    <div className="absolute inset-0 bg-slate-50 opacity-50">
                       <svg className="w-full h-full opacity-20" viewBox="0 0 100 100">
                          <path d="M0 20 Q50 20 100 80" stroke="currentColor" fill="none" strokeWidth="2" />
                          <path d="M20 0 Q80 50 100 60" stroke="currentColor" fill="none" strokeWidth="1" />
                       </svg>
                    </div>
                    
                    <motion.div 
                      className="absolute left-1/4 top-1/4"
                      animate={{ 
                        offsetDistance: ["0%", "100%"] 
                      }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      style={{ 
                        offsetPath: "path('M 0 0 C 100 0 100 300 300 300')",
                      }}
                    >
                       <div className="p-3 bg-white shadow-lg rounded-2xl border border-primary-green/20">
                          <div className="bg-primary-green p-2 rounded-lg text-white">
                             <MapPin className="w-5 h-5" />
                          </div>
                       </div>
                    </motion.div>

                     <div className="absolute top-8 left-8 p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 font-body">Driver Status</p>
                        <p className="text-xl font-bold text-dark-heading font-heading tracking-tight">En Route</p>
                       <p className="text-sm text-primary-green font-medium">3 min away</p>
                    </div>
                  </motion.div>
                )}

                {activeFeature.id === 'discovery' && (
                  <motion.div
                    key="discovery"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="relative w-full max-w-md aspect-square bg-white border border-gray-100 rounded-[3rem] shadow-2xl p-8 flex flex-col justify-center gap-6"
                  >
                     {[
                       { label: 'Sawari Economy', price: 'Rs. 150', icon: '🚗' },
                       { label: 'Sawari Comfort', price: 'Rs. 250', icon: '🚙' },
                       { label: 'Sawari Moto', price: 'Rs. 80', icon: '🏍️' }
                     ].map((option, i) => (
                       <motion.div 
                         key={option.label}
                         initial={{ x: 20, opacity: 0 }}
                         animate={{ x: 0, opacity: 1 }}
                         transition={{ delay: i * 0.1 }}
                         className="flex items-center gap-4 p-4 rounded-2xl border border-gray-50 hover:border-primary-green/20 hover:shadow-lg transition-all"
                       >
                          <div className="text-3xl">{option.icon}</div>
                           <div className="flex-1">
                             <p className="font-bold text-dark-heading font-heading tracking-tight">{option.label}</p>
                             <p className="text-xs text-paragraph/40 font-body">Verified Partners Only</p>
                          </div>
                          <p className="font-bold text-primary-green text-lg font-body">{option.price}</p>
                       </motion.div>
                     ))}
                  </motion.div>
                )}
             </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RideHailingPreview;
