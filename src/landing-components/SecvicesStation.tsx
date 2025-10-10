import React from 'react';
import { Car, UtensilsCrossed, Package, Truck, ArrowRight, LucideIcon } from 'lucide-react';

const services = [
  {
    icon: Car,
    title: 'Ride-Hailing',
    description:
      "Quick and reliable rides across Kathmandu Valley and major cities. From bikes to cars, we've got you covered.",
    bgColor: '#EBF5FF',
    iconColor: '#1976D2',
  },
  {
    icon: UtensilsCrossed,
    title: 'Food Delivery',
    description:
      'Delicious meals from your favorite restaurants delivered hot and fresh to your doorstep.',
    bgColor: '#FFF4E6',
    iconColor: '#F57C00',
  },
  {
    icon: Package,
    title: 'Parcel Delivery',
    description:
      'Send documents, gifts, and packages anywhere in Nepal with real-time tracking and insurance.',
    bgColor: '#F3E5F5',
    iconColor: '#7B1FA2',
  },
  {
    icon: Truck,
    title: 'Vehicle Rentals',
    description:
      'Rent bikes, cars, and commercial vehicles for daily, weekly, or monthly needs at affordable rates.',
    bgColor: '#E8F5E9',
    iconColor: '#10B981',
  },
];

const ServicesSection = () => {
  return (
    <section className="px-4 py-20 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <h3 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Everything You Need in{' '}
            <span className="text-primary-green">One App</span>
          </h3>
          <p className="text-lg max-w-2xl mx-auto text-gray-600 leading-relaxed">
            From daily commutes to special occasions, eSawari provides
            comprehensive solutions for all your transportation and delivery
            needs across Nepal.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  bgColor,
  iconColor,
}: ServiceCardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="group relative rounded-2xl transition-all duration-300 cursor-pointer p-8 min-h-[340px] flex flex-col bg-white overflow-hidden"
      style={{
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered
          ? '0 20px 40px rgba(16, 185, 129, 0.15)'
          : '0 2px 8px rgba(0, 0, 0, 0.04)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="space-y-5 flex-1">
        {/* Icon */}
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300"
          style={{
            backgroundColor: bgColor,
            transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
          }}
        >
          <Icon className="w-8 h-8" style={{ color: iconColor }} />
        </div>

        {/* Title + Description */}
        <div className="space-y-3">
          <h4
            className="text-2xl font-semibold transition-colors duration-300"
            style={{
              color: isHovered ? 'var(--primary-green)' : 'var(--dark-heading)',
            }}
          >
            {title}
          </h4>
          <p className="text-base text-paragraph leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Learn More Link */}
      <div className="mt-6 flex items-center gap-2 text-base font-medium transition-all duration-300 font-body"
        style={{
          color: isHovered ? 'var(--primary-green)' : 'var(--text-color)',
          opacity: isHovered ? 1 : 0.7,
        }}
      >
        <span>Learn more</span>
        <ArrowRight 
          className="w-4 h-4 transition-transform duration-300" 
          style={{
            transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
          }}
        />
      </div>

      {/* Animated Accent Bar */}
      <div
        className="absolute bottom-0 left-0 h-1 rounded-b-2xl transition-all duration-300"
        style={{
          backgroundColor: 'var(--primary-green)',
          width: isHovered ? '100%' : '0%',
        }}
      />

      {/* Subtle Background Gradient on Hover */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-2xl"
        style={{
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.03) 0%, transparent 100%)',
          opacity: isHovered ? 1 : 0,
        }}
      />
    </div>
  );
};

export default ServicesSection;