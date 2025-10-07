import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header
       className="px-4 py-6 md:px-8 shadow-sm sticky top-0 z-50"
      style={{ backgroundColor: 'var(--light-background)' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Logo Image */}
        <div className="flex items-center">
          <Image
            src="Images/SawariLogo.png" // place your logo in public/sawari.png
            alt="esawari logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Navigation */}
     <nav className="hidden md:flex items-center space-x-10">
  {['Home', 'Services', 'About', 'Contact'].map((link) => (
    <a
      key={link}
      href="#"
      className="text-base font-medium transition-colors duration-300"
      style={{ color: 'var(--dark-heading)' }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.color = 'var(--primary-green)')
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.color = 'var(--dark-heading)')
      }
    >
      {link}
    </a>
  ))}
</nav>




        {/* Action Button on the right */}
        <div className="flex items-center">
          <button
            className="px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-[var(--dark-heading)] hover:text-[var(--light-background)] shadow-md"
            style={{
              backgroundColor: 'var(--primary-green)',
              color: 'var(--light-background)',
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
