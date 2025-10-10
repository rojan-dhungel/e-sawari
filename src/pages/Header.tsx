import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showQR, setShowQR] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        setShowHeader(currentScrollY < lastScrollY || currentScrollY < 50);
        setLastScrollY(currentScrollY);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = ['Home', 'About', 'Services', 'Contact'];

  return (
    <>
      <header
        className={`px-4 py-4 md:px-8 shadow-sm sticky top-0 z-50 transform transition-transform duration-300 bg-[var(--light-background)] ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
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

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              className="px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-[var(--dark-heading)] hover:text-[var(--light-background)] shadow-md"
              style={{
                backgroundColor: 'var(--primary-green)',
                color: 'var(--light-background)',
              }}
            >
              Get Started
            </button>

            <button
              onClick={() => setShowQR(true)}
              className="px-6 py-2 rounded-lg text-sm font-semibold border transition-all duration-300 hover:bg-[var(--primary-green)] hover:text-[var(--light-background)]"
              style={{
                color: 'var(--primary-green)',
                borderColor: 'var(--primary-green)',
                backgroundColor: 'transparent',
              }}
            >
              Download App
            </button>
          </div>

          {/* Mobile & Tablet Hamburger */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg transition-all duration-300 hover:bg-[var(--primary-green)] group"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[var(--primary-green)] group-hover:text-[var(--light-background)] transition-colors duration-300" />
              ) : (
                <Menu className="w-6 h-6 text-[var(--primary-green)] group-hover:text-[var(--light-background)] transition-colors duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-[var(--light-background)] rounded-lg shadow-lg overflow-hidden animate-slide-down">
            <nav className="flex flex-col space-y-4 p-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-base font-medium transition-colors duration-300"
                  style={{ color: 'var(--dark-heading)' }}
                  onClick={() => setMobileMenuOpen(false)}
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
              <div className="flex flex-col space-y-2 mt-2">
                <button
                  className="w-full px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 hover:bg-[var(--dark-heading)] hover:text-[var(--light-background)] shadow-sm"
                  style={{
                    backgroundColor: 'var(--primary-green)',
                    color: 'var(--light-background)',
                  }}
                >
                  Get Started
                </button>
                <button
                  onClick={() => {
                    setShowQR(true);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full px-4 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-300 hover:bg-[var(--primary-green)] hover:text-[var(--light-background)]"
                  style={{
                    color: 'var(--primary-green)',
                    borderColor: 'var(--primary-green)',
                    backgroundColor: 'transparent',
                  }}
                >
                  Download App
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* QR Popup */}
      {showQR && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-[999] backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full text-center shadow-2xl relative overflow-hidden animate-in fade-in duration-300">
            {/* Close button */}
            <button
              onClick={() => setShowQR(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 hover:bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 text-xl font-light"
            >
              &times;
            </button>

            {/* Logo */}
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl shadow-md">
                <Image
                  src="/Images/sawari.png"
                  alt="Sawari app logo"
                  width={50}
                  height={50}
                />
              </div>
            </div>

            <h2
              className="text-2xl font-bold mb-2 leading-tight"
              style={{ color: 'var(--dark-heading)' }}
            >
              Download Sawari
            </h2>
            <p
              className="text-sm mb-4"
              style={{ color: 'var(--dark-heading)', opacity: 0.7 }}
            >
              Point your smartphone camera at the QR code
            </p>

            {/* QR Code */}
            <div className="flex justify-center my-4">
              <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/Images/qr-sawari.png"
                  alt="QR Code"
                  width={160}
                  height={160}
                  className="rounded-lg"
                />
              </div>
            </div>

            <p
              className="text-xs mt-4 tracking-wide uppercase font-medium"
              style={{ color: 'var(--dark-heading)', opacity: 0.6 }}
            >
              Scan with your phone camera
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;