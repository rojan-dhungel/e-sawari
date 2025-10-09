import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#2C3340] text-white px-6 py-16 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/">
              <Image
                src="/Images/sawari.png"
                alt="esawari logo"
                width={400}
                height={160}
                className="w-auto h-20 md:h-24 lg:h-28"
              />
            </Link>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xs">
              Nepal&apos;s most trusted multi-service platform connecting you to transportation, food delivery, parcel
              services, and vehicle rentals across the country.
            </p>

            {/* Contact Info */}
            <div className="space-y-3.5 pt-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#237C3F] flex-shrink-0" />
                <span className="text-sm md:text-base text-gray-300">+977-01-4567890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#237C3F] flex-shrink-0" />
                <span className="text-sm md:text-base text-gray-300">support@esawari.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#237C3F] flex-shrink-0" />
                <span className="text-sm md:text-base text-gray-300">Kathmandu, Nepal</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-5 text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm md:text-base">
              {[
                { label: "About Us", href: "/about" },
                { label: "How it Works", href: "/howit" },
                { label: "Safety", href: "/safety" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#237C3F] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-5 text-white">Services</h4>
            <ul className="space-y-3 text-sm md:text-base">
              {[
                { label: "Ride-Hailing", href: "/ride-hailing" },
                { label: "Food Delivery", href: "/food-delivery" },
                { label: "Parcel Delivery", href: "/parcel-delivery" },
                { label: "Vehicle Rentals", href: "/vehicle-rentals" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#237C3F] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="font-semibold text-lg mb-5 text-white">Cities</h4>
            <ul className="space-y-3 text-sm md:text-base">
              {[
                { label: "Kathmandu", href: "/cities/kathmandu" },
                { label: "Pokhara", href: "/cities/pokhara" },
                { label: "Lalitpur", href: "/cities/lalitpur" },
                { label: "Bhaktapur", href: "/cities/bhaktapur" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#237C3F] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          {/* Social Media */}
          <div className="flex items-center gap-5">
            <span className="text-sm md:text-base text-gray-300">Follow us:</span>
            <div className="flex gap-3">
              <a
                href="https://wa.me/9779014567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#237C3F] flex items-center justify-center hover:bg-[#1d6332] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://facebook.com/esawari"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#237C3F] flex items-center justify-center hover:bg-[#1d6332] transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/esawari"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#237C3F] flex items-center justify-center hover:bg-[#1d6332] transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-4.358-.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.149 4.354 2.618 6.78 6.979 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* App Download Buttons */}
          <div className="flex gap-4">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center px-5 py-2.5 bg-transparent border border-gray-600 rounded-lg hover:border-gray-500 transition-colors min-w-[140px]"
            >
              <span className="text-xs text-gray-400">Download on</span>
              <span className="text-sm font-semibold text-white mt-0.5">Google Play</span>
            </a>
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center px-5 py-2.5 bg-transparent border border-gray-600 rounded-lg hover:border-gray-500 transition-colors min-w-[140px]"
            >
              <span className="text-xs text-gray-400">Download on</span>
              <span className="text-sm font-semibold text-white mt-0.5">App Store</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8"></div>

        {/* Copyright and Legal Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm md:text-base">
          <p className="text-gray-400">© 2025 esawari. All rights reserved.</p>
          <div className="flex gap-6">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
              { label: "Cookie Policy", href: "/cookies" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-[#237C3F] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
