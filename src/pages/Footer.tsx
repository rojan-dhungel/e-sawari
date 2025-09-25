import React from 'react';
import { Car, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const footerSections = [
    {
      title: 'Quick Links',
      links: ['About Us', 'Our Services', 'Safety', 'Support']
    },
    {
      title: 'Services',
      links: ['Ride Hailing', 'Food Delivery', 'Parcel Service', 'Vehicle Rentals']
    },
    {
      title: 'Cities',
      links: ['Kathmandu', 'Pokhara', 'Chitwan', 'Biratnagar']
    }
  ];

  return (
          <footer className="bg-gray-900 text-white px-4 py-16 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
  <div
    className="w-8 h-8 rounded-lg flex items-center justify-center"
    style={{ backgroundColor: "#26D466" }}
  >
    <Car className="w-5 h-5 text-white" />
  </div>
  <span className="text-xl font-bold">esawari</span>
</Link>
              <p className="text-gray-300 text-sm leading-relaxed">
                Nepal&apos;s most trusted ride-sharing platform connecting communities with affordable, safe, and reliable transportation services.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-gray-300">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                 <Link href="/about" className="hover:text-white">
    About Us
  </Link>
                <li>
  <Link href="/howit" className="hover:text-white">
    How it works
  </Link>
</li>
                <li><Link href="/safety" className="hover:text-white">Safety</Link></li>
                <li><Link href="/support" className="hover:text-white">Support</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-gray-300">Services</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Ride Hailing</a></li>
                <li><a href="#" className="hover:text-white">Food Delivery</a></li>
                <li><a href="#" className="hover:text-white">Parcel Service</a></li>
                <li><a href="#" className="hover:text-white">Vehicle Rentals</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-gray-300">Cities</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Kathmandu</a></li>
                <li><a href="#" className="hover:text-white">Pokhara</a></li>
                <li><a href="#" className="hover:text-white">Chitwan</a></li>
                <li><a href="#" className="hover:text-white">Biratnagar</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 esawari. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">Terms of Service</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;