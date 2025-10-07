import React from 'react';
import { Gift, UtensilsCrossed, Package, DollarSign, Copy } from 'lucide-react';

const DealsSection = () => {
  const deals = [
    {
      icon: Gift,
      iconBg: '#FFE5E5',
      iconColor: '#FF4444',
      title: 'Welcome Bonus',
      desc: 'Get ₹100 off on your first 5 rides',
      code: 'WELCOME100',
    },
    {
      icon: UtensilsCrossed,
      iconBg: '#FFF3E0',
      iconColor: '#F57C00',
      title: 'Food Friday',
      desc: '50% Off on food orders every Friday',
      code: 'FRIDAY50',
    },
    {
      icon: Package,
      iconBg: '#F3E5F5',
      iconColor: '#7B1FA2',
      title: 'Weekend Special',
      desc: 'Free delivery on parcels above ₹500',
      code: 'WEEKEND',
    },
  ];

  return (
    <section className="px-4 py-20 md:px-8 bg-light font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Top Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-primary-green text-white font-semibold text-xs">
            <DollarSign className="w-4 h-4" />
            <span>Limited Time Offers</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-heading font-inter">
            Exclusive <span className="text-primary-green">Deals & Offers</span>
          </h2>
          <p className="text-base max-w-2xl mx-auto text-paragraph font-inter">
            Save more on every ride, meal, and delivery with our special promotional codes. New offers added every week!
          </p>
        </div>

        {/* Deal Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {deals.map((deal, index) => {
            const Icon = deal.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md border hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: deal.iconBg }}
                >
                  <Icon className="w-7 h-7" style={{ color: deal.iconColor }} />
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold mb-3 text-dark-heading font-inter">{deal.title}</h3>
                <p className="text-base mb-6 text-paragraph font-inter">{deal.desc}</p>

                {/* Promo Code & Copy */}
                <div className="flex items-center justify-between">
                  <span className="font-menlo text-dark-heading text-sm  bg-gray-100 p-3 rounded-lg">{deal.code}</span>
                  <button className="flex items-center space-x-1 text-sm font-medium text-primary-green hover:text-dark-heading font-inter">
                    <Copy className="w-4 h-4" />
                    <span>Copy Code</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
