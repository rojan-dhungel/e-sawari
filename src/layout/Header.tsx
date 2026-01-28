import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiX, SiTiktok } from "react-icons/si";
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  const [showHeader, setShowHeader] = useState(true);
  const [showHeader, setShowHeader] = useState(true);

  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Header visibility logic
      setShowHeader(currentScrollY < lastY || currentScrollY < 50);
      setIsScrolled(currentScrollY > 50);
      lastY = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        { name: 'Ride-Hailing', path: '/staytuned' },
        { name: 'Food Delivery', path: '/staytuned' },
        { name: 'Parcel Delivery', path: '/staytuned' },
        // { name: 'Vehicle Rentals', path: '/services/vehicle-rentals' },
        // { name: 'Helicopter Rental', path: '/services/helicopter-rental' },
        { name: 'Hotel Booking', path: '/staytuned' },
      ],
    },
    {
      title: 'Cities',
      items: [
        { name: 'Kathmandu', path: '/staytuned' },
        // { name: 'Pokhara', path: '/cities/pokhara' },
        { name: 'Lalitpur', path: '/staytuned' },
        { name: 'Bhaktapur', path: '/staytuned' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Facebook', url: '#', icon: 'facebook' },
    { name: 'Instagram', url: '#', icon: 'instagram' },
    { name: 'TikTok', url: '#', icon: 'tiktok' },
    { name: 'X', url: '#', icon: 'x' },
  ];

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`px-6 py-3 md:py-4 md:px-10 fixed top-0 w-full z-50 transform transition-all duration-300 ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled || !isHomePage
            ? 'bg-light shadow-sm text-dark-heading' 
            : 'bg-transparent shadow-none text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/Images/SawariLogo.webp"
                alt="Sawari logo"
                width={160}
                height={60}
                priority
                className="object-contain w-32 h-auto md:w-40 lg:w-44 transform transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </div>


          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-6">

            <Link
              href="/download"
              className="px-7 py-3 rounded-lg text-base font-semibold shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-[var(--dark-heading)] hover:text-[var(--light-background)]"
              style={{
                backgroundColor: 'var(--primary-green)',
                color: 'var(--light-background)',
              }}
            >
              <span className="text-base">Download The App</span>
            </Link>

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
              className="px-4 py-2.5 rounded-lg transition-all duration-300 bg-[var(--primary-green)] text-[var(--light-background)] flex items-center gap-2 font-medium"
            >
              {menuOpen ? (
                <>
                  <X className="w-5 h-5 " />
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
              <Link href="/">
                <Image
                  src="/Images/SawariLogo.webp"
                  alt="Sawari logo"
                  width={160}
                  height={60}
                  className="object-contain w-32 lg:w-36"
                />
              </Link>
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
                <h3 className="text-lg lg:text-2xl font-semibold text-[var(--dark-heading)] pb-2 border-b-2 border-[var(--primary-green)] inline-block">
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
                      {social.icon === 'instagram' && <FaInstagram className="w-6 h-6 lg:w-7 lg:h-7" />}
                      {social.icon === 'facebook' && <FaFacebookF className="w-6 h-6 lg:w-7 lg:h-7" />}
                      {social.icon === 'tiktok' && <SiTiktok className="w-6 h-6 lg:w-7 lg:h-7" />}
                      {social.icon === 'x' && <SiX className="w-6 h-6 lg:w-7 lg:h-7" />}
                    </a>
                  ))}
                </div>
              </div>

              {/* Bottom CTA - Desktop */}
              <div className="hidden lg:block mt-14 pt-10 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg lg:text-2xl font-semibold text-[var(--dark-heading)] pb-2 mb-5 border-b-2 border-[var(--primary-green)] inline-block">
                      Ready to get started?
                    </h4>

                    <p className="text-lg text-[var(--text-color)] font-body">
                      Download the app and experience seamless services
                    </p>
                  </div>
                  <Link
                    href="/download"
                    onClick={() => setMenuOpen(false)}
                    className="px-10 py-5 rounded-xl text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl whitespace-nowrap"
                    style={{
                      backgroundColor: 'var(--primary-green)',
                      color: 'var(--light-background)',
                    }}
                  >
                    <span className="text-base">Download The App</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA - Mobile */}
          <div className="lg:hidden p-7 border-t border-gray-200">
            <Link
              href="/download"
              onClick={() => setMenuOpen(false)}
              className="w-full px-4 py-4 rounded-xl text-base font-semibold shadow-lg transition-all duration-300 hover:shadow-xl block text-center"
              style={{
                backgroundColor: 'var(--primary-green)',
                color: 'var(--light-background)',
              }}
            >
              Download The App
            </Link>
          </div>
        </div>
      </div>

      {/* QR POPUP REMOVED */}
    </>
  );
};

export default Header;