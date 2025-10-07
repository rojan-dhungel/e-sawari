import React from 'react';
import { Car, UtensilsCrossed, Package, Truck, LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

const ServicesSection = () => {
  const services: Service[] = [
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
      iconColor: 'var(--primary-green)',
    },
  ];

  return (
    <section className="px-4 py-16 md:px-8" style={{ backgroundColor: 'var(--light-background)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center space-y-4 mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ color: 'var(--dark-heading)' }}
          >
            Everything You Need in{' '}
            <span style={{ color: 'var(--primary-green)' }}>One App</span>
          </h2>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: 'var(--text-color)' }}
          >
            From daily commutes to special occasions, eSawari provides comprehensive solutions for all your transportation and delivery needs across Nepal.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  bgColor,
  iconColor,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="relative rounded-2xl transition-all duration-300 cursor-pointer"
      style={{
        backgroundColor: '#FDFDFD',
        padding: '2.5rem',
        minHeight: '320px',
        display: 'flex',
        flexDirection: 'column',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered
          ? '0 12px 24px rgba(0, 0, 0, 0.1)'
          : '0 2px 8px rgba(0, 0, 0, 0.04)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="space-y-6" style={{ flex: 1 }}>
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300"
          style={{
            backgroundColor: bgColor,
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          }}
        >
          <Icon className="w-8 h-8" style={{ color: iconColor }} />
        </div>

        <div className="space-y-3">
          <h3
            className="transition-colors duration-300"
            style={{
              color: isHovered ? 'var(--primary-green)' : 'var(--dark-heading)',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '34px',
            }}
          >
            {title}
          </h3>
          <p
            style={{
              color: 'var(--text-color)',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '26px',
              minHeight: '80px',
            }}
          >
            {description}
          </p>
        </div>
      </div>

      {/* Animated bottom border */}
      <div
        className="absolute bottom-0 left-0 h-1 rounded-b-2xl transition-all duration-300"
        style={{
          backgroundColor: 'var(--primary-green)',
          width: isHovered ? '100%' : '0%',
        }}
      />
    </div>
  );
};

export default ServicesSection;
