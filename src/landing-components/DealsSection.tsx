import React from 'react';
import { Car, UtensilsCrossed, Package } from 'lucide-react';

const DealsSection = () => {
  return (
          <section className="px-4 py-16 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#26D466', color: 'white' }}>
              💰 Limited Time Offers
            </div>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#20242C' }}>
              Exclusive <span style={{ color: '#26D466' }}>Deals & Offers</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6A7181' }}>
              Save more on every ride, meal, and delivery with our special promotional codes. New offers added every week!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#FFE5E5' }}>
                <Car className="w-6 h-6" style={{ color: '#FF4444' }} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#20242C' }}>Welcome Bonus</h3>
              <p className="text-sm mb-4" style={{ color: '#6A7181' }}>Get ₹100 off on your first 5 rides</p>
              <div className="text-xs font-medium mb-4" style={{ color: '#6A7181' }}>WELCOME100</div>
              <button className="w-full py-2 rounded-lg text-white text-sm font-medium" style={{ backgroundColor: '#26D466' }}>
                Use Code
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#FFF3E0' }}>
                <UtensilsCrossed className="w-6 h-6" style={{ color: '#F57C00' }} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#20242C' }}>Food Friday</h3>
              <p className="text-sm mb-4" style={{ color: '#6A7181' }}>50% Off on food orders every Friday</p>
              <div className="text-xs font-medium mb-4" style={{ color: '#6A7181' }}>FRIDAY50</div>
              <button className="w-full py-2 rounded-lg text-white text-sm font-medium" style={{ backgroundColor: '#26D466' }}>
                Use Code
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#F3E5F5' }}>
                <Package className="w-6 h-6" style={{ color: '#7B1FA2' }} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#20242C' }}>Weekend Special</h3>
              <p className="text-sm mb-4" style={{ color: '#6A7181' }}>Free delivery on parcels above ₹500</p>
              <div className="text-xs font-medium mb-4" style={{ color: '#6A7181' }}>WEEKEND</div>
              <button className="w-full py-2 rounded-lg text-white text-sm font-medium" style={{ backgroundColor: '#26D466' }}>
                Use Code
              </button>
            </div>
          </div>
        </div>
      </section>
  );
};

export default DealsSection;