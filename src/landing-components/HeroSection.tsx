import React from 'react';
import {  Star,  Download, Car } from 'lucide-react';
import Image from "next/image";

const MobileAppShowcase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--light-background)] flex items-center justify-center p-8">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[color-mix(in srgb,var(--primary-green)_10%,white)] text-[var(--primary-green)] px-4 py-2 rounded-full border border-[color-mix(in srgb,var(--primary-green)_20%,white)]">
            <Car className="h-4 w-4" />
            <span className="text-sm font-medium">Nepal&apos;s #1 Multi-Service App</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-[var(--dark-heading)] leading-tight">
              Move, Eat, Send & Rent
            </h1>
            <div className="w-16 h-1 bg-[var(--dark-heading)]"></div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--primary-green)] leading-tight">
              All in One App
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg text-[var(--text-color)] leading-relaxed max-w-lg">
            Experience seamless transportation, food delivery, parcel services, and vehicle rentals across Nepal. Your everyday needs, simplified.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-[var(--primary-green)] hover:bg-[color-mix(in srgb,var(--primary-green)_90%,black)] text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[color-mix(in srgb,var(--primary-green)_25%,transparent)]">
              <Download className="h-5 w-5" />
              Download App
            </button>

            <button className="text-[var(--primary-green)] border border-[var(--primary-green)] hover:text-[color-mix(in srgb,var(--primary-green)_90%,black)] hover:border-[color-mix(in srgb,var(--primary-green)_90%,black)] font-semibold text-lg transition-all duration-300 hover:scale-105 px-8 py-4 rounded-xl">
              Become a Partner
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--primary-green)] mb-2">50K+</div>
              <div className="text-[var(--text-color)] font-medium">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--primary-green)] mb-2">1000+</div>
              <div className="text-[var(--text-color)] font-medium">Partners</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                <span className="text-3xl font-bold text-[var(--primary-green)]">4.8</span>
                <Star className="h-6 w-6 text-[var(--primary-green)] fill-current" />
              </div>
              <div className="text-[var(--text-color)] font-medium">App Rating</div>
            </div>
          </div>
        </div>

        {/* Right - iPhone Mockup + Badges */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Live Tracking Badge */}
            <div className="absolute -top-10 -right-10 z-30 bg-white/90 backdrop-blur-md text-[var(--primary-green)] px-5 py-3 rounded-2xl text-sm font-semibold shadow-2xl border border-[color-mix(in srgb,var(--primary-green)_20%,white)] flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-[var(--primary-green)]"
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
            <div className="absolute -bottom-10 -left-10 z-30 bg-[var(--primary-green)] text-white px-5 py-3 rounded-2xl text-sm font-semibold shadow-2xl flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
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
            <div className="relative w-[320px] h-[660px] bg-gradient-to-br from-gray-900 to-gray-700 rounded-[3.2rem] p-2 shadow-2xl border-[3px] border-gray-600">
              {/* Metallic Frame */}
              <div className="absolute inset-0 rounded-[3.2rem] bg-gradient-to-br from-gray-300/30 to-gray-100/10 pointer-events-none"></div>

              {/* Dynamic Island */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-36 h-7 bg-black rounded-full z-20 shadow-inner"></div>

              {/* Screen */}
              <div className="relative w-full h-full bg-[var(--light-background)] rounded-[3rem] overflow-hidden flex flex-col justify-center items-center text-center shadow-inner">
                <div className="pt-32 pb-20 px-8 flex flex-col items-center justify-center text-center relative z-10">
                  {/* App Icon */}
                  <div className="mb-8">
  <div className="w-28 h-28 flex items-center justify-center overflow-hidden">
    <Image
      src="/Images/sawari.png"
      alt="eSawari Logo"
      width={112} // 28 * 4 = 112px
      height={112}
      className="object-contain w-full h-full"
      priority
    />
  </div>
</div>


                  {/* App Name */}
                  <div className="mb-12">
                    <h3 className="text-3xl font-bold text-[var(--dark-heading)] mb-2">eSawari</h3>
                    <p className="text-[var(--text-color)] text-lg">Your Travel Companion</p>
                  </div>

                  {/* Progress Bars */}
                  <div className="w-full max-w-xs space-y-3">
                    <div className="bg-gray-300 h-2 rounded-full overflow-hidden">
                      <div className="bg-[var(--primary-green)] h-full w-4/5 rounded-full"></div>
                    </div>
                    <div className="bg-gray-300 h-2 rounded-full overflow-hidden">
                      <div className="bg-[var(--primary-green)] h-full w-3/5 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Side Buttons */}
              <div className="absolute left-0 top-20 w-0.5 h-10 bg-gray-500 rounded-r-full"></div>
              <div className="absolute right-0 top-32 w-0.5 h-16 bg-gray-500 rounded-l-full"></div>

              {/* Home Indicator */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-36 h-1.5 bg-gray-700 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppShowcase;
