import React from 'react';
import { ArrowRight, Smartphone, MapPin, Zap } from 'lucide-react';

const CTASection = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <section
      className="px-4 py-20 md:px-8"
      style={{ backgroundColor: 'var(--light-background)' }}
    >
      <div className="max-w-5xl mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden text-center transition-all duration-500"
          style={{
            background: 'var(--primary-green)',
            transform: isHovered ? 'scale(1.02)' : 'scale(1)',
            boxShadow: isHovered
              ? '0 25px 50px rgba(38, 212, 102, 0.3)'
              : '0 15px 35px rgba(38, 212, 102, 0.2)',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative px-8 py-16 md:px-16 md:py-20 flex flex-col items-center justify-center space-y-8">
            <h2
              className="font-bold leading-tight max-w-3xl"
              style={{
                color: '#FFFFFF',
                fontSize: '48px',
                lineHeight: '60px',
                fontFamily: 'Inter, system-ui, sans-serif',
              }}
            >
              Ready to Experience the Future of Transportation?
            </h2>

            <p
              className="text-lg leading-relaxed max-w-2xl"
              style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontFamily: 'Inter, system-ui, sans-serif',
              }}
            >
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
              className="group flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 mt-6"
              style={{
                backgroundColor: '#FFFFFF',
                color: 'var(--primary-green)',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
                fontFamily: 'Inter, system-ui, sans-serif',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow =
                  '0 8px 20px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow =
                  '0 4px 14px rgba(0, 0, 0, 0.1)';
              }}
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
  <div
    className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300"
    style={{
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
    }}
  >
    <Icon size={16} color="#FFFFFF" />
    <span className="text-white text-sm font-medium">{label}</span>
  </div>
);

export default CTASection;
