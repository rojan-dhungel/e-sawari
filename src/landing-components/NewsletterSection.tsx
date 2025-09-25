
import React from 'react';
import { ArrowRight } from 'lucide-react';

const NewsletterSection = () => {
  return (
          <section className="px-4 py-16 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl p-8 md:p-12 text-center" style={{ backgroundColor: '#26D466' }}>
            <div className="space-y-6">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-white bg-opacity-20 flex items-center justify-center">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Never Miss a Deal!
              </h2>
              <p className="text-lg text-white text-opacity-90 max-w-2xl mx-auto">
                Subscribe to get exclusive offers, weekly earnings summaries, updates delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address here..." 
                  className="flex-1 px-4 py-3 rounded-lg border-0 text-gray-900 placeholder-gray-500"
                />
                <button className="px-6 py-3 bg-white rounded-lg font-medium" style={{ color: '#26D466' }}>
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-white text-opacity-70">
                *We respect your privacy. No spam, unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default NewsletterSection;