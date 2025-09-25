import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  return (
          <section className="px-4 py-16 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#20242C' }}>
              What Our <span style={{ color: '#26D466' }}>Customers Say</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6A7181' }}>
              Join thousands of happy customers who trust esawari for their daily transportation, food delivery needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: '#26D466' }}>4.8</div>
              <div className="text-sm" style={{ color: '#6A7181' }}>App Store Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: '#26D466' }}>50K+</div>
              <div className="text-sm" style={{ color: '#6A7181' }}>Active Drivers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: '#26D466' }}>100K+</div>
              <div className="text-sm" style={{ color: '#6A7181' }}>Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: '#26D466' }}>1000+</div>
              <div className="text-sm" style={{ color: '#6A7181' }}>Restaurant Partners</div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-current text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#6A7181' }}>
                  &quot;Excellent service! The drivers are professional and the wait time is minimal. The app interface is user-friendly.&quot;
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full" style={{ backgroundColor: '#26D466' }}></div>
                  <div>
                    <div className="font-medium" style={{ color: '#20242C' }}>Raja Sharma</div>
                    <div className="text-xs" style={{ color: '#6A7181' }}>Regular Customer</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="px-6 py-3 rounded-lg border-2 font-medium" style={{ borderColor: '#26D466', color: '#26D466' }}>
              View All Customer Reviews →
            </button>
          </div>
        </div>
      </section>
  );
};

export default TestimonialsSection;