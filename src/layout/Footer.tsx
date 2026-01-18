import { Phone, Mail, MapPin } from "lucide-react";
import {FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiX, SiTiktok } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-[#2C3340] text-white px-6 py-16 md:px-12 lg:px-16 font-body">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/">
              <Image
                src="/Images/sawari.png"
                alt="esawari logo"
                width={600}
                height={180}
                priority
                className="w-auto h-32 md:h-36 lg:h-40 transform transition-transform duration-300 hover:scale-105"
              />
            </Link>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xs">
              Nepal&apos;s most trusted multi-service platform connecting you to transportation, food delivery, parcel
              services, and vehicle rentals across the country.
            </p>

            {/* Contact Info */}
            <div className="space-y-3.5 pt-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-green flex-shrink-0" />
                <span className="text-sm md:text-base text-gray-300">{"+977-01-4567890"}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-green flex-shrink-0" />
                <span className="text-sm md:text-base text-gray-300">support@esawari.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary-green flex-shrink-0" />
                <span className="text-sm md:text-base text-gray-300">Kathmandu, Nepal</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-5 text-white">Company</h4>
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
                    className="text-gray-300 hover:text-primary-green transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-5 text-white">Services</h4>
            <ul className="space-y-3 text-sm md:text-base">
              {[
                { label: "Ride-Hailing", href: "/staytuned" },
                { label: "Food Delivery", href: "/staytuned" },
                { label: "Parcel Delivery", href: "/staytuned" },
                { label: "Hotel Booking", href: "/staytuned" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-green transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-5 text-white">Cities</h4>
            <ul className="space-y-3 text-sm md:text-base">
              {[
                { label: "Kathmandu", href: "/staytuned_ktm" },
                { label: "Lalitpur", href: "/staytuned_ltp" },
                { label: "Bhaktapur", href: "/staytuned_bkt" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={'/staytuned'}
                    className="text-gray-300 hover:text-primary-green transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media + App Downloads */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          {/* Social Media */}
          <div className="flex items-center gap-5">
            <span className="text-sm md:text-base text-gray-300 font-body">Follow us:</span>
            <div className="flex gap-3">

              {/* Facebook */}
              <a
                href="https://facebook.com/esawari"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-primary-green flex items-center justify-center hover:bg-green-700 transition-transform transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-5 h-5 text-white" />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/esawari"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-primary-green flex items-center justify-center hover:bg-green-700 transition-transform transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5 text-white" />
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com/@esawari"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-primary-green flex items-center justify-center hover:bg-green-700 transition-transform transform hover:scale-110"
                aria-label="TikTok"
              >
                <SiTiktok className="w-5 h-5 text-white" />
              </a>
              {/* X */}
              <a
                href="https://x.com/esawari"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-primary-green flex items-center justify-center hover:bg-green-700 transition-transform transform hover:scale-110"
                aria-label="X"
              >
                <SiX className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* App Download Buttons */}
          <div className="flex gap-4 flex-wrap">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center px-5 py-2.5 bg-transparent border border-gray-600 rounded-lg hover:border-gray-500 transition-colors min-w-[140px]"
            >
              <span className="text-xs text-gray-400 font-body">Download on</span>
              <span className="text-sm font-semibold text-white mt-0.5 font-body">Google Play</span>
            </a>
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center px-5 py-2.5 bg-transparent border border-gray-600 rounded-lg hover:border-gray-500 transition-colors min-w-[140px]"
            >
              <span className="text-xs text-gray-400 font-body">Download on</span>
              <span className="text-sm font-semibold text-white mt-0.5 font-body">App Store</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8"></div>

        {/* Copyright and Legal Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm md:text-base">
          <p className="text-gray-400 font-body">© 2025 esawari. All rights reserved.</p>
          <div className="flex gap-6">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-primary-green transition-colors font-body"
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