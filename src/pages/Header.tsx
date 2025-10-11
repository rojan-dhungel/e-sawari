"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Instagram, Facebook } from 'lucide-react';

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
      items: [
        { name: 'About', path: '/about' },
        { name: 'How it works', path: '/howit' },
        { name: 'Safety', path: '/safety' },
        { name: 'Contact', path: '/contact' },
      ],
    },
    {
      title: 'Services',
      items: [
        { name: 'Ride-Hailing', path: '/services/ride-hailing' },
        { name: 'Food Delivery', path: '/services/food-delivery' },
        { name: 'Parcel Delivery', path: '/services/parcel-delivery' },
        { name: 'Vehicle Rentals', path: '/services/vehicle-rentals' },
      ],
    },
    {
      title: 'Cities',
      items: [
        { name: 'Kathmandu', path: '/cities/kathmandu' },
        { name: 'Pokhara', path: '/cities/pokhara' },
        { name: 'Lalitpur', path: '/cities/lalitpur' },
        { name: 'Bhaktapur', path: '/cities/bhaktapur' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'TikTok', url: '#', icon: 'tiktok' },
    { name: 'Instagram', url: '#', icon: 'instagram' },
    { name: 'Facebook', url: '#', icon: 'facebook' },
  ];

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`px-6 py-6 md:px-10 shadow-sm sticky top-0 z-50 transform transition-transform duration-300 bg-[var(--light-background)] ${showHeader ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/Images/SawariLogo.png"
                alt="Sawari logo"
                width={140}
                height={50}
                className="object-contain transform transition-transform duration-300 hover:scale-105"
                priority
              />
            </Link>
          </div>


          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-6">

            <button
              onClick={() => setShowQR(true)}
              className="px-7 py-3 rounded-lg text-base font-semibold shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-[var(--dark-heading)] hover:text-[var(--light-background)]"
              style={{
                backgroundColor: 'var(--primary-green)',
                color: 'var(--light-background)',
              }}
            >
              <span className="text-base">Download The App</span>
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="px-5 py-3 rounded-lg flex items-center gap-2 font-medium bg-[var(--primary-green)] text-[var(--light-background)] transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              {menuOpen ? (
                <>
                  <X className="w-5 h-5" />
                  <span className="text-base">Close</span>
                </>
              ) : (
                <>
                  <Menu className="w-5 h-5" />
                  <span className="text-base">Menu</span>
                </>
              )}
            </button>

          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="px-5 py-3 rounded-lg transition-all duration-300 bg-[var(--primary-green)] text-[var(--light-background)] flex items-center gap-2 font-medium"
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

      {/* SIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-full lg:w-full bg-white z-50 shadow-2xl transform transition-transform duration-500 ${menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Header Section */}
          <div className="flex items-center justify-between p-6 lg:px-12 lg:py-8 border-b border-gray-200">
            <div className="flex items-center">
              <Image
                src="/Images/SawariLogo.png"
                alt="Sawari logo"
                width={120}
                height={40}
                className="object-contain lg:w-36"
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
          <div className="flex-1 overflow-y-auto p-7 lg:p-14">
            <div className="max-w-6xl mx-auto">
              <nav className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-10">
                {navItems.map((section, idx) => (
                  <div key={idx} className="space-y-3">
                    <h3 className="text-lg lg:text-2xl font-semibold text-[var(--dark-heading)] pb-2 border-b-2 border-[var(--primary-green)]">
                      {section.title}
                    </h3>
                    <div className="flex flex-col space-y-2">
                      {section.items.map((item, itemIdx) => (
                        <Link
                          key={itemIdx}
                          href={item.path}
                          onClick={() => setMenuOpen(false)}
                          className="group flex items-center justify-between text-base lg:text-lg text-[var(--dark-heading)] hover:text-[var(--primary-green)] transition-colors py-1"
                        >
                          <span>{item.name}</span>
                          <svg
                            className="w-4 h-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </nav>

              {/* Social Media Section */}
              <div className="mt-5 pt-8 border-t border-gray-200">
                <h3 className="text-lg lg:text-2xl font-semibold text-[var(--dark-heading)] pb-2 mb-5 border-b-2 border-[var(--primary-green)] inline-block">
                  Follow Us
                </h3>
                <div className="flex gap-4 lg:gap-6 mt-4">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-full transition-all duration-300 hover:shadow-lg"
                      style={{
                        backgroundColor: 'var(--primary-green)',
                        color: 'var(--light-background)',
                      }}
                      title={social.name}
                    >
                      {social.icon === 'instagram' && <Instagram className="w-6 h-6 lg:w-7 lg:h-7" />}
                      {social.icon === 'facebook' && <Facebook className="w-6 h-6 lg:w-7 lg:h-7" />}
                      {social.icon === 'tiktok' && (
                        <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v12.7a2.85 2.85 0 1 1-5.92-2.86 2.88 2.88 0 0 1 2.31 1.39V9.58a6.53 6.53 0 1 0 5.94 6.48v-3.78a8.38 8.38 0 0 0 3.12-1.61v-3.98z" />
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              </div>

              {/* Bottom CTA - Desktop */}
              <div className="hidden lg:block mt-14 pt-10 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-3xl font-semibold text-[var(--dark-heading)] mb-3">
                      Ready to get started?
                    </h4>
                    <p className="text-lg text-[var(--text-color)] font-body">
                      Download the app and experience seamless services
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setShowQR(true);
                      setMenuOpen(false);
                    }}
                    className="px-10 py-5 rounded-xl text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl whitespace-nowrap"
                    style={{
                      backgroundColor: 'var(--primary-green)',
                      color: 'var(--light-background)',
                    }}
                  >
                    <span className="text-base">Download The App</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA - Mobile */}
          <div className="lg:hidden p-7 border-t border-gray-200">
            <button
              onClick={() => {
                setShowQR(true);
                setMenuOpen(false);
              }}
              className="w-full px-6 py-4 rounded-xl text-base font-semibold shadow-lg transition-all duration-300 hover:shadow-xl"
              style={{
                backgroundColor: 'var(--primary-green)',
                color: 'var(--light-background)',
              }}
            >
              Download The App
            </button>
          </div>
        </div>
      </div>

      {/* QR POPUP */}
      {showQR && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-[999] backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl relative overflow-hidden animate-in fade-in duration-300">
            {/* Close */}
            <button
              onClick={() => setShowQR(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 hover:bg-gray-100 w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 text-xl font-light"
            >
              &times;
            </button>

            {/* Logo */}
            <div className="flex justify-center mb-5">
              <div className="rounded-xl shadow-md">
                <Image
                  src="/Images/sawari.png"
                  alt="Sawari app logo"
                  width={110}
                  height={110}
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
              className="text-sm mb-5"
              style={{ color: 'var(--dark-heading)', opacity: 0.7 }}
            >
              Point your smartphone camera at the QR code
            </p>

            {/* QR Code */}
            <div className="flex justify-center my-5">
              <div className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/Images/qr-sawari.png"
                  alt="QR Code"
                  width={170}
                  height={170}
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
