import React from 'react';

const CTASection = () => {
  return (
     <section className="px-4 py-16 md:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#20242C' }}>
              Ready to Experience the Future of
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#20242C' }}>
              Transportation?
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6A7181' }}>
              Join thousands of satisfied customers who trust esawari for their daily transportation needs.
            </p>
          </div>
          
          <button className="px-8 py-4 rounded-lg text-white font-medium text-lg" style={{ backgroundColor: '#26D466' }}>
            Get Started Today
          </button>
        </div>
      </section>
  );
};

export default CTASection;