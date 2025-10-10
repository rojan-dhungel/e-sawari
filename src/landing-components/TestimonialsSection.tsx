import React from 'react';
import { Star, Car, Bike } from 'lucide-react';
import Image from 'next/image';

const avatars = [
  'Images/Avatars/gamer.png',
  'Images/Avatars/woman.png',
  'Images/Avatars/man.png',
];

const rideIcons = [Car, Bike];

const TestimonialsSection = () => {
  return (
    <section
      className="relative px-4 py-20 md:px-8 bg-[var(--light-background)] font-body"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center space-y-5 mb-16">
          <h2
            className="text-4xl md:text-5xl font-heading font-semibold text-dark-heading leading-tight"
          >
            Read Reviews,{' '}
            <span className="text-primary-green font-semibold">Ride with Confidence</span>
          </h2>
          <p className="text-base max-w-3xl mx-auto text-paragraph leading-relaxed font-body">
            eSawari is the everyday choice for happy customers — trusted for seamless
            transportation, quick deliveries, and reliable daily services that make life easier.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[0, 1, 2].map((index) => {
            const Icon = rideIcons[index % rideIcons.length];
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 fill-current text-yellow-400"
                      />
                    ))}
                  </div>
                  <Icon className="w-6 h-6 text-primary-green" />
                </div>

                <p className="text-base leading-relaxed mb-6 text-paragraph font-body">
                  &quot;Using eSawari has made my daily commute effortless. The rides
                  are affordable, drivers are polite, and the tracking is spot on!&quot;
                </p>

                {/* Avatar + Name */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={avatars[index]}
                    alt="avatar"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <div className="font-heading font-medium text-lg text-dark-heading">
                      {index === 0
                        ? 'Raja Sharma'
                        : index === 1
                        ? 'Sita Koirala'
                        : 'Ram Thapa'}
                    </div>
                    <div className="text-sm text-paragraph">
                      {index === 0
                        ? 'Daily Rider'
                        : index === 1
                        ? 'Courier User'
                        : 'Frequent Commuter'}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button
            className="px-8 py-4 rounded-xl border-2 text-lg font-medium transition-all duration-300 font-body border-primary-green text-primary-green hover:bg-primary-green hover:text-light-background"
          >
            View All Customer Reviews →
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
