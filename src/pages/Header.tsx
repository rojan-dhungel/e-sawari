import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showQR, setShowQR] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'unset';
  }, [menuOpen]);

  const navItems = [

    {
      title: 'Company',
      items: ['About us', 'How it works', 'Safety', 'Contact']
    },
    {
      title: 'Services',
      items: ['Ride-Hailing', 'Food Delivery', 'Parcel Delivery', 'Vehicle Rentals']
    },

    
    {
      title: 'Cities',
      items: ['Kathmandu', 'Pokhara', 'Lalitpur', 'Bhaktapur']
    }
  ];

  return (
    <>
      <header
        className={`px-5 py-5 md:px-8 shadow-sm sticky top-0 z-50 transform transition-transform duration-300 bg-[var(--light-background)] ${showHeader ? 'translate-y-0' : '-translate-y-full'
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

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => setShowQR(true)}
              className="px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-[var(--dark-heading)] hover:text-[var(--light-background)] shadow-md"
              style={{
                backgroundColor: 'var(--primary-green)',
                color: 'var(--light-background)',
              }}
            >
              Download the app
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="px-4 py-2 rounded-lg transition-all duration-300 bg-[var(--primary-green)]  text-[var(--light-background)] flex items-center gap-2 font-medium"
            >
              {menuOpen ? (
                <>
                  <X className="w-5 h-5" />
                  <span className="text-sm">Close</span>
                </>
              ) : (
                <>
                  <Menu className="w-5 h-5" />
                  <span className="text-sm">Menu</span>
                </>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="px-4 py-2 rounded-lg transition-all duration-300 bg-[var(--primary-green)] text-[var(--light-background)] flex items-center gap-2 font-medium"
            >
              {menuOpen ? (
                <>
                  <X className="w-5 h-5" />
                  <span className="text-sm">Close</span>
                </>
              ) : (
                <>
                  <Menu className="w-5 h-5" />
                  <span className="text-sm">Menu</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Side Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-full lg:w-full bg-white z-50 shadow-2xl transform transition-transform duration-500 ${menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Header Section with Logo and Close */}
          <div className="flex items-center justify-between p-6 lg:px-12 lg:py-8 border-b border-gray-200">
            <div className="flex items-center">
              <Image
                src="/Images/SawariLogo.png"
                alt="esawari logo"
                width={100}
                height={35}
                className="object-contain lg:w-32"
              />
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <X className="w-6 h-6 text-[var(--dark-heading)] lg:w-8 lg:h-8" />
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex-1 overflow-y-auto p-6 lg:p-12">
            <div className="max-w-6xl mx-auto">
              {/* Menu Items Grid */}
              <nav className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
                {navItems.map((section, idx) => (
                  <div key={idx} className="space-y-3">
                    <h3 className="text-lg lg:text-xl font-semibold text-[var(--dark-heading)] pb-2 border-b-2 border-[var(--primary-green)]">
                      {section.title}
                    </h3>
                    <div className="flex flex-col space-y-2">
                      {section.items.map((item, itemIdx) => (
                        <a
                          key={itemIdx}
                          href="#"
                          className="text-base lg:text-lg text-[var(--dark-heading)] hover:text-[var(--primary-green)] transition-colors py-1"
                          onClick={() => setMenuOpen(false)}
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </nav>

              {/* Bottom CTA - Desktop */}
              <div className="hidden lg:block mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-2xl font-semibold text-[var(--dark-heading)] mb-2">
                      Ready to get started?
                    </h4>
                    <p className="text-base text-[var(--text-color)] font-body">
                      Download the app and experience seamless services
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setShowQR(true);
                      setMenuOpen(false);
                    }}
                    className="px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl whitespace-nowrap"
                    style={{
                      backgroundColor: 'var(--primary-green)',
                      color: 'var(--light-background)',
                    }}
                  >
                    Download the app
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA - Mobile */}
          <div className="lg:hidden p-6 border-t border-gray-200">
            <button
              onClick={() => {
                setShowQR(true);
                setMenuOpen(false);
              }}
              className="w-full px-6 py-3 rounded-xl text-base font-semibold shadow-lg transition-all duration-300 hover:shadow-xl"
              style={{
                backgroundColor: 'var(--primary-green)',
                color: 'var(--light-background)',
              }}
            >
              Download the app
            </button>
          </div>
        </div>
      </div>

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
              <div className="rounded-xl shadow-md">
                <Image
                  src="/Images/sawari.png"
                  alt="Sawari app logo"
                  width={100}
                  height={100}
                />
              </div>
            </div>

            <h2
              className="text-2xl font-semibold mb-2 leading-tight"
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