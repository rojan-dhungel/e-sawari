"use client"

import React from 'react';
import { Star, Download, Car } from 'lucide-react';
import Image from "next/image";


const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light-background flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-6 lg:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 bg-primary-green/10 text-primary-green rounded-full text-xs font-semibold tracking-wider uppercase space-x-2">
            <Car className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>Your Go-To App for Daily Needs</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-heading leading-tight  lg:leading-[60px] text-dark-heading">
              Move. <span className="text-primary-green">Eat.</span> Send. <br />
              <span className="text-primary-green">Rent.</span>
            </h3>

            <h6 className="text-xl sm:text-2xl lg:text-3xl font-medium font-heading text-dark-heading">
              All your services, in one app
            </h6>

            <p className="text-sm sm:text-base text-text-color leading-relaxed max-w-xl text-justify font-body">
              Experience seamless transportation across the city. Get food delivered to your
              doorstep and parcels sent with ease. Rent vehicles anytime, anywhere—
              your everyday needs, simplified.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <button className="bg-primary-green hover:bg-[color-mix(in_srgb,primary-green_90%,black)] text-light px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium text-base sm:text-lg flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[color-mix(in_srgb,primary-green_25%,transparent)] font-body">
              <Download className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-base">Get E Sawari</span>
            </button>

            <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium border-2 border-primary-green text-primary-green shadow-sm hover:scale-105 transition-transform duration-300 font-body text-base sm:text-lg">
              Partner & Drive
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 lg:pt-8">
            <div className="text-center font-body">
              <div className="text-2xl sm:text-3xl font-semibold text-primary-green mb-1 sm:mb-2 font-heading">50K+</div>
              <div className="text-text-color font-medium text-xs sm:text-sm lg:text-base">Active Users</div>
            </div>
            <div className="text-center font-body">
              <div className="text-2xl sm:text-3xl font-semibold text-primary-green mb-1 sm:mb-2 font-heading">1000+</div>
              <div className="text-text-color font-medium text-xs sm:text-sm lg:text-base">Partners</div>
            </div>
            <div className="text-center font-body">
              <div className="flex items-center justify-center gap-1 mb-1 sm:mb-2">
                <span className="text-2xl sm:text-3xl font-semibold text-primary-green font-heading">4.8</span>
                <Star className="h-5 w-5 sm:h-6 sm:w-6 text-primary-green fill-current" />
              </div>
              <div className="text-text-color font-medium text-xs sm:text-sm lg:text-base">App Rating</div>
            </div>
          </div>
        </div>

        {/* Right - iPhone Mockup + Badges */}
        <div className="flex justify-center lg:justify-end mt-4 lg:mt-0">
          <div className="relative">
            {/* Live Tracking Badge */}
            <div className="absolute -top-6 sm:-top-10 -right-6 sm:-right-10 z-30 bg-white/90 backdrop-blur-md text-primary-green px-3 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold shadow-2xl border border-[color-mix(in_srgb,primary-green_20%,white)] flex items-center gap-2 font-body">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 sm:h-4 sm:w-4 text-primary-green"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path d="M12 6v6l3 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Live Tracking</span>
            </div>

            {/* Available 24/7 Badge */}
            <div className="absolute -bottom-6 sm:-bottom-10 -left-6 sm:-left-10 z-30 bg-primary-green text-white px-3 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold shadow-2xl flex items-center gap-2 font-body">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 sm:h-4 sm:w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Available 24/7</span>
            </div>

            {/* iPhone Mockup */}
            <div className="relative w-[280px] sm:w-[320px] h-[580px] sm:h-[660px] bg-gradient-to-br from-gray-900 to-gray-700 rounded-[2.8rem] sm:rounded-[3.2rem] p-2 shadow-2xl border-[3px] border-gray-600">
              {/* Metallic Frame */}
              <div className="absolute inset-0 rounded-[2.8rem] sm:rounded-[3.2rem] bg-gradient-to-br from-gray-300/30 to-gray-100/10 pointer-events-none"></div>

              {/* Dynamic Island */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 sm:w-36 h-6 sm:h-7 bg-black rounded-full z-20 shadow-inner"></div>

              {/* Screen */}
              <div className="relative w-full h-full bg-light-background rounded-[2.6rem] sm:rounded-[3rem] overflow-hidden flex flex-col justify-center items-center text-center shadow-inner">
                <div className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-6 sm:px-8 flex flex-col items-center justify-center text-center relative z-10">
                  <div className="mb-3 sm:mb-4 w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/Images/sawari.png"
                      alt="eSawari Logo"
                      width={112}
                      height={112}
                      className="object-contain w-full h-full"
                      priority
                    />
                  </div>

                  <div className="mb-8 sm:mb-12 font-body text-center">
                    <span className="text-2xl sm:text-3xl font-heading text-primary-green font-semibold leading-tight sm:leading-[60px]">E Sawari</span>
                    <p className="text-base sm:text-lg text-dark-heading">Move. <span className="text-primary-green">Eat.</span>  Send. <span className="text-primary-green">Rent.</span></p>
                  </div>

                  <div className="w-full max-w-xs space-y-2 sm:space-y-3">
                    <div className="bg-gray-300 h-2 rounded-full overflow-hidden">
                      <div className="bg-primary-green h-full w-4/5 rounded-full"></div>
                    </div>
                    <div className="bg-gray-300 h-2 rounded-full overflow-hidden">
                      <div className="bg-primary-green h-full w-3/5 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;