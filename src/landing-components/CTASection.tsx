"use client"

import React from 'react';
import { Smartphone, MapPin, Zap } from 'lucide-react';

const CTASection = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <section className="px-4 py-24 md:px-8 bg-roads">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden text-center transition-all duration-500"
          style={{
            backgroundColor: 'var(--primary-green)',
            boxShadow: isHovered
              ? '0 25px 50px rgba(35, 124, 63, 0.3)'
              : '0 15px 35px rgba(35, 124, 63, 0.2)',
            transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Animated Background Patterns */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div
              className="absolute top-0 right-0 w-96 h-96 rounded-full transition-transform duration-700"
              style={{
                background:
                  'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
                transform: isHovered ? 'scale(1.2)' : 'scale(1)',
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-80 h-80 rounded-full transition-transform duration-700"
              style={{
                background:
                  'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
                transform: isHovered ? 'scale(1.2)' : 'scale(1)',
              }}
            />
          </div>

          <div className="relative px-8 py-16 md:px-16 md:py-20 flex flex-col items-center justify-center space-y-8">


            {/* Heading */}
            <h3
              className="font-heading font-bold leading-tight text-light max-w-3xl text-4xl md:text-5xl transition-transform duration-300 tracking-tighter"
              style={{
                transform: isHovered ? 'scale(1.02)' : 'scale(1)',
              }}
            >
              Ready to Experience the Future of Transportation?
            </h3>

            {/* Description */}
            <p
              className="text-base md:text-lg max-w-2xl text-light/80 font-body font-light leading-relaxed transition-opacity duration-300"
              style={{
                opacity: isHovered ? 1 : 0.9,
              }}
            >
              Join thousands of satisfied customers who trust eSawari for their
              daily transportation needs across Nepal.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <FeaturePill icon={Zap} label="Fast & Reliable" delay={0} />
              <FeaturePill icon={MapPin} label="All Nepal Coverage" delay={100} />
              <FeaturePill icon={Smartphone} label="Easy to Use" delay={200} />
            </div>

            {/* CTA Button */}
            <button
              className="relative flex items-center gap-3 px-10 py-4 rounded-2xl font-body font-bold text-lg transition-all duration-300 mt-6 bg-white text-primary-green overflow-hidden shadow-2xl hover:scale-105"
            >
              <span className="relative z-10">Get Started Today</span>
              <svg
              className="w-4 h-4 relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
            </button>



          </div>


        </div>
      </div>
    </section>
  );
};

/* ✅ Feature Pill Component */
interface FeaturePillProps {
  icon: React.ElementType;
  label: string;
  delay?: number;
}

const FeaturePill: React.FC<FeaturePillProps> = ({ icon: Icon, label, delay = 0 }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 bg-white/20 hover:bg-white/30 backdrop-blur-sm hover:scale-105 cursor-default"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
      }}
    >
      <Icon size={16} className="text-light" />
      <span className="text-light text-sm font-medium font-body">{label}</span>
    </div>
  );
};

export default CTASection;