import React from 'react';
import { ArrowRight, Smartphone, MapPin, Zap } from 'lucide-react';

const CTASection = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <section className="px-4 py-20 md:px-8 bg-light">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden text-center transition-all duration-500"
          style={{
            backgroundColor: 'var(--primary-green)',
            transform: isHovered ? 'scale(1.02)' : 'scale(1)',
            boxShadow: isHovered
              ? '0 25px 50px rgba(35, 124, 63, 0.3)'
              : '0 15px 35px rgba(35, 124, 63, 0.2)',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative px-8 py-16 md:px-16 md:py-20 flex flex-col items-center justify-center space-y-8">
            {/* Heading */}
            <h3 className="font-heading font-semibold leading-tight text-light max-w-3xl text-4xl md:text-5xl">
              Ready to Experience the Future of Transportation?
            </h3>

            {/* Description */}
            <p className="text-base max-w-2xl text-light font-body leading-relaxed opacity-90">
              Join thousands of satisfied customers who trust eSawari for their
              daily transportation needs across Nepal.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <FeaturePill icon={Zap} label="Fast & Reliable" />
              <FeaturePill icon={MapPin} label="All Nepal Coverage" />
              <FeaturePill icon={Smartphone} label="Easy to Use" />
            </div>

            {/* CTA Button */}
            <button
              className="group flex items-center gap-3 px-8 py-4 rounded-xl font-body font-medium text-lg transition-all duration-300 mt-6 bg-white text-primary-green shadow-lg hover:scale-105 hover:shadow-xl"
            >
              Get Started Today
              <ArrowRight
                className="transition-transform duration-300 group-hover:translate-x-1"
                size={20}
              />
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
}

const FeaturePill: React.FC<FeaturePillProps> = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 bg-white/20 hover:bg-white/30 backdrop-blur-sm">
    <Icon size={16} className="text-light" />
    <span className="text-light text-sm font-medium font-body">{label}</span>
  </div>
);

export default CTASection;
