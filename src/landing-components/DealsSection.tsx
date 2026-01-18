"use client"

import React, { useEffect, useState } from 'react';
import { Gift, UtensilsCrossed, Package, Copy, Check } from 'lucide-react';

interface Deal {
  id: string;
  name: string;
  sub_title: string;
  code: string;
  is_active: boolean;
  color: string;
  discount_type: string;
  discount_value: number;
  max_discount: number | null;
  min_order_amount: number | null;
  button_name: string;
}

const DealsSection: React.FC = () => {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [copiedDealId, setCopiedDealId] = useState<string | null>(null);
  const [hoveredDealId, setHoveredDealId] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://api.esawari.com/coupon/coupons')
      .then((res) => res.json())
      .then((data: Deal[]) => {
        const activeDeals = data.filter((deal) => deal.is_active);
        setDeals(activeDeals);
      })
      .catch((err) => console.error('Failed to fetch deals:', err));
  }, []);

  const icons = [Gift, UtensilsCrossed, Package];

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedDealId(id);
    setTimeout(() => setCopiedDealId(null), 3000);
  };

  return (
    <section className="relative px-4 py-20 md:px-8 bg-transparent font-body overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-14">


          <h3 className="text-4xl md:text-6xl font-heading font-bold text-dark-heading leading-tight tracking-tighter">
            Exclusive <span className="text-primary-green">Deals & Offers</span>
          </h3>

          <p className="text-lg md:text-xl max-w-2xl mx-auto text-paragraph/60 leading-relaxed font-body font-light">
            Save more on every ride, meal, and delivery with our special promotional
            codes. New offers added every week!
          </p>
          
        </div>

        {/* Deal Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {deals.map((deal, index) => {
            const Icon = icons[index % icons.length];
            const isCopied = copiedDealId === deal.id;
            const isHovered = hoveredDealId === deal.id;

            return (
              <div
                key={deal.id}
                onMouseEnter={() => setHoveredDealId(deal.id)}
                onMouseLeave={() => setHoveredDealId(null)}
                className={`relative bg-white border border-gray-100 rounded-[2.5rem] shadow-sm overflow-hidden group transition-all duration-500 ${isHovered ? 'shadow-2xl shadow-primary-green/5 -translate-y-2' : ''
                  }`}
              >
                {/* Top Accent */}
                <div
                  className="h-1.5 w-full transition-all duration-300"
                  style={{ backgroundColor: deal.color, opacity: isHovered ? 1 : 0.8 }}
                ></div>

                <div className="p-8">
                  {/* Icon */}
                  <div className="relative mb-6 inline-block">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300"
                      style={{
                        backgroundColor: deal.color,
                        transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
                      }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div
                      className="absolute inset-0 rounded-xl blur-xl transition-opacity duration-300"
                      style={{
                        backgroundColor: deal.color,
                        opacity: isHovered ? 0.3 : 0,
                      }}
                    ></div>
                  </div>

                  {/* Title & Description */}
                  <h3
                    className="text-2xl font-heading font-bold mb-3 transition-colors duration-300 tracking-tight"
                    style={{ color: isHovered ? deal.color : 'var(--dark-heading)' }}
                  >
                    {deal.name}
                  </h3>
                  <p className="text-base mb-6 text-paragraph/60 font-body font-light leading-relaxed">
                    {deal.sub_title}
                  </p>

                  {/* Promo Code */}
                  <div className="flex items-center justify-between gap-3 pt-4 border-t border-gray-100">
                    <div
                      className="flex-1 font-menlo text-dark-heading text-sm px-4 py-3 rounded-lg transition-all duration-300"
                      style={{
                        backgroundColor: isHovered ? `${deal.color}15` : '#f3f4f6',
                        border: isHovered ? `2px solid ${deal.color}25` : '2px solid transparent',
                      }}
                    >
                      {deal.code}
                    </div>
                    <button
                      onClick={() => handleCopy(deal.code, deal.id)}
                      className="flex items-center gap-2 text-sm font-medium px-4 py-3 rounded-lg transition-all duration-300 font-body whitespace-nowrap focus:outline-none"
                      style={{
                        color: isCopied ? '#10B981' : deal.color,
                        backgroundColor: isHovered ? `${deal.color}10` : 'transparent',
                      }}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="group inline-flex items-center gap-2 px-10 py-4 bg-primary-green text-white font-bold rounded-2xl transition-all duration-300 hover:bg-primary-green/90 hover:scale-105 shadow-xl font-body">
            <span>View All Offers</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
