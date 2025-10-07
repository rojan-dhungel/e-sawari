import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;

        if (currentScrollY < lastScrollY) {
          // Scrolling up → show header
          setShowHeader(true);
        } else if (currentScrollY > lastScrollY) {
          // Scrolling down → hide header
          setShowHeader(false);
        }

        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]); // ✅ perfectly safe, no ESLint warnings

  return (
    <header
      className={`px-4 py-6 md:px-8 shadow-sm sticky top-0 z-50 transform transition-transform duration-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{ backgroundColor: 'var(--light-background)' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Logo */}
        <div className="flex items-center">
          <Image
            src="/Images/SawariLogo.png"
            alt="esawari logo"
            width={120}
            height={40}
            className="object-contain"
            priority
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {['Home', 'About', 'Services', 'Contact'].map((link) => (
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

        {/* Action Button */}
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
