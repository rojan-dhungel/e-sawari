import React from 'react';
import { ArrowRight } from 'lucide-react';

const NewsletterSection = () => {
  return (
    <section className="px-4 py-20 md:px-8 bg-light">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl p-10 md:p-16 text-center bg-primary-green shadow-lg font-body">
          <div className="space-y-6">
            {/* Icon */}
            <div className="w-16 h-16 mx-auto rounded-2xl bg-white bg-opacity-20 flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>

            {/* Heading */}
            <h3 className="text-4xl md:text-5xl font-semibold font-heading text-white leading-[1.2]">
              Never Miss a Deal!
            </h3>

            {/* Description */}
            <p className="text-base  max-w-2xl mx-auto text-paragraph font-body leading-relaxed text-light">
              Subscribe to get exclusive offers, weekly earnings summaries, and updates delivered straight to your inbox.
            </p>

            {/* Input & Button */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address here..."
                className="flex-1 px-4 py-3 rounded-lg border-0 outline-none text-gray-900 placeholder-gray-500 shadow-sm focus:ring-2 focus:ring-white font-body"
              />
              <button
                className="px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-dark-heading hover:text-white shadow-md font-body"
                style={{ backgroundColor: 'white', color: 'var(--primary-green)' }}
              >
                Subscribe
              </button>
            </div>

            {/* Privacy note */}
            <p className="text-xs text-white text-opacity-70 font-body">
              *We respect your privacy. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
