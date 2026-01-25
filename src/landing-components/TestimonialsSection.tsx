"use client"

import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Rajesh Hamal',
    role: 'Brand Ambassador',
    avatar: '/Images/Avatars/man.webp',
    text: 'Sawari is not just an app; it is a movement to modernize Nepal. Their commitment to safety and reliability makes it my primary choice for every journey.'
  },
  {
    name: 'Ashok Kumar Rai',
    role: 'Chairman',
    avatar: '/Images/Directors/AshokKumarRai.webp',
    text: 'Our vision at eSawari is to create a seamless digital ecosystem that empowers every citizen. We are building the future of mobility in Nepal.'
  },
  {
    name: 'Sawari Tech Team',
    role: 'IT Department',
    avatar: '/Images/Avatars/man.webp',
    text: 'We leverage state-of-the-art technology to ensure your rides and deliveries are tracked in real-time with 99.9% uptime. Safety is coded into our DNA.'
  },
  {
    name: 'Sawari Growth Team',
    role: 'Marketing Department',
    avatar: '/Images/Avatars/woman.webp',
    text: "Connecting communities is what we do best. From local favorites to daily commutes, we're making Sawari a household name across Nepal."
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const goToSlide = (index: number) => setCurrentIndex(index);

  return (
    <section className="relative px-4 py-16 md:px-8 bg-transparent font-body overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-green/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-green/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center space-y-4 mb-12">
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-dark-heading leading-tight tracking-tighter">
            Voices of <span className="text-primary-green">Sawari.</span>
          </h3>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-paragraph/60 leading-relaxed font-light">
            From our leadership to our tech teams and community partners, hear the stories that drive our mission forward.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-primary-green group border border-gray-100"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-primary-green group-hover:text-white transition-colors" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-primary-green group border border-gray-100"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-primary-green group-hover:text-white transition-colors" />
          </button>

          {/* Testimonial Cards */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-6 md:p-8 border border-gray-100 relative overflow-hidden">
                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-green/10 to-transparent rounded-bl-full"></div>

                    {/* Quote Icon */}
                    <div className="mb-4 relative">
                      <Quote className="w-10 h-10 text-primary-green" />
                    </div>

                    {/* Stars */}
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current text-yellow-400 drop-shadow-sm" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-base md:text-lg leading-relaxed mb-6 text-paragraph font-body italic">
                      &quot;{testimonial.text}&quot;
                    </p>

                    {/* Avatar + Name */}
                    <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary-green rounded-full blur-md opacity-30"></div>
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={52}
                          height={52}
                          className="rounded-full object-cover relative z-10 ring-4 ring-white"
                        />
                      </div>
                      <div>
                        <div className="font-heading font-bold text-lg text-dark-heading">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-primary-green font-medium">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-3 mt-6 md:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-500 rounded-full ${
                  index === currentIndex
                    ? 'w-10 h-3 bg-primary-green shadow-lg'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 hover:scale-125'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
