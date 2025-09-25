import React from 'react';
import { Smartphone, Star, Users, Store, Download, Car } from 'lucide-react';

const MobileAppShowcase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full border border-green-200">
            <Car className="h-4 w-4" />
            <span className="text-sm font-medium">Nepal&apos;s #1 Multi-Service App</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Move, Eat, Send & Rent
            </h1>
            <div className="w-16 h-1 bg-gray-900"></div>
            <h2 className="text-4xl lg:text-5xl font-bold text-green-500 leading-tight">
              All in One App
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
            Experience seamless transportation, food delivery, parcel services, and vehicle rentals across Nepal. Your everyday needs, simplified.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25">
              <Download className="h-5 w-5" />
              Download App
            </button>
            <button className="text-green-500 hover:text-green-600 font-semibold text-lg transition-colors duration-300 hover:scale-105">
              Become a Partner
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">50K+</div>
              <div className="text-gray-600 font-medium">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">1000+</div>
              <div className="text-gray-600 font-medium">Partners</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                <span className="text-3xl font-bold text-green-500">4.8</span>
                <Star className="h-6 w-6 text-green-500 fill-current" />
              </div>
              <div className="text-gray-600 font-medium">App Rating</div>
            </div>
          </div>
        </div>

        {/* Right - iPhone Mockup */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Live Tracking Badge */}
            <div className="absolute -top-4 right-8 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg z-10">
              Live Tracking
            </div>

            {/* Available 24/7 Badge */}
            <div className="absolute -bottom-4 left-8 bg-white text-green-600 px-4 py-2 rounded-full text-sm font-medium shadow-lg border border-green-200 z-10">
              Available 24/7
            </div>

            {/* iPhone Frame */}
            <div className="relative w-80 h-[640px] bg-gray-800 rounded-[3.5rem] p-3 shadow-2xl">
              {/* Screen */}
              <div className="w-full h-full bg-gray-100 rounded-[3rem] overflow-hidden relative">
                
                {/* Screen Content */}
                <div className="pt-32 pb-20 px-8 h-full flex flex-col items-center justify-center text-center">
                  {/* App Icon */}
                  <div className="mb-8">
                    <div className="w-24 h-24 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <Car className="h-12 w-12 text-white" />
                    </div>
                  </div>

                  {/* App Name */}
                  <div className="mb-12">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">esawari</h3>
                    <p className="text-gray-500 text-lg">Your Travel Companion</p>
                  </div>

                  {/* Progress Bars */}
                  <div className="w-full max-w-xs space-y-3">
                    <div className="bg-gray-300 h-2 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full w-4/5 rounded-full"></div>
                    </div>
                    <div className="bg-gray-300 h-2 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full w-3/5 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Home Indicator */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-36 h-1 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppShowcase;