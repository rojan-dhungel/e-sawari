import React from 'react';
import { Car } from 'lucide-react';

const Header = () => {
  return (
<header className="px-4 py-6 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#26D466' }}>
              <Car className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold" style={{ color: '#20242C' }}>esawari</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm" style={{ color: '#6A7181' }}>Home</a>
            <a href="#" className="text-sm" style={{ color: '#6A7181' }}>Services</a>
            <a href="#" className="text-sm" style={{ color: '#6A7181' }}>About</a>
            <a href="#" className="text-sm" style={{ color: '#6A7181' }}>Contact</a>
          </nav>
          
          <button className="px-6 py-2 rounded-lg text-white text-sm font-medium" style={{ backgroundColor: '#26D466' }}>
            Get Started
          </button>
        </div>
      </header>
  );
};

export default Header;