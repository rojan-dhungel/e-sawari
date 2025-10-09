import React, { useEffect, useState } from 'react';
import { Gift, UtensilsCrossed, Package, Tag, Copy, Check } from 'lucide-react';

// Define the type for a deal
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

  useEffect(() => {
    fetch('http://api.esawari.com/coupon/coupons')
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

    setTimeout(() => {
      setCopiedDealId(null);
    }, 3000); // reset after 3 seconds
  };

  return (
    <section className="px-4 py-20 md:px-8 bg-light font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Top Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-[#DCFCE7] text-[#237C3F] px-4 py-2 rounded-full border border-[#C6F6D5]">
            <Tag className="h-4 w-4" />
            <span className="text-sm font-medium">Exclusive Deals to Make Your Day Easier & Cheaper</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-heading font-inter">
            Exclusive <span className="text-primary-green">Deals & Offers</span>
          </h2>
          <p className="text-base max-w-2xl mx-auto text-paragraph font-inter">
            Save more on every ride, meal, and delivery with our special promotional codes. New offers added every week!
          </p>
        </div>

        {/* Deal Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {deals.map((deal, index) => {
            const Icon = icons[index % icons.length]; // Cycle through icons
            const isCopied = copiedDealId === deal.id;

            return (
              <div
                key={deal.id}
                className="bg-white p-8 rounded-2xl shadow-md border hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: deal.color }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold mb-3 text-dark-heading font-inter">{deal.name}</h3>
                <p className="text-base mb-6 text-paragraph font-inter">{deal.sub_title}</p>

                {/* Promo Code & Copy */}
                <div className="flex items-center justify-between">
                  <span className="font-menlo text-dark-heading text-sm bg-gray-100 p-3 rounded-lg">{deal.code}</span>
                  <button
                    className="flex items-center space-x-1 text-sm font-medium text-primary-green hover:text-dark-heading font-inter focus:outline-none"
                    onClick={() => handleCopy(deal.code, deal.id)}
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Code</span>
                      </>
                    )}
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
