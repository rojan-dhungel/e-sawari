import React from 'react';
import { ArrowRight } from 'lucide-react';

const NewsletterSection = () => {
  return (
    <section className="px-4 py-20 md:px-8 bg-light">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl p-10 md:p-16 text-center bg-primary-green shadow-lg font-inter">
          <div className="space-y-6">
            {/* Icon */}
            <div className="w-16 h-16 mx-auto rounded-2xl bg-white bg-opacity-20 flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Never Miss a Deal!
            </h2>

            {/* Description */}
            <p className="text-lg text-white text-opacity-90 max-w-2xl mx-auto">
              Subscribe to get exclusive offers, weekly earnings summaries, and updates delivered straight to your inbox.
            </p>

            {/* Input & Button */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address here..."
                className="flex-1 px-4 py-3 rounded-lg border-0 outline-none text-gray-900 placeholder-gray-500 shadow-sm focus:ring-2 focus:ring-white"
              />
              <button
                className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-dark-heading hover:text-white shadow-md"
                style={{ backgroundColor: 'white', color: '#237C3F' }}
              >
                Subscribe
              </button>
            </div>

            {/* Privacy note */}
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
