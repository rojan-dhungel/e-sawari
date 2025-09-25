import React from 'react';
import { MapPin, Shield, Users, CreditCard } from 'lucide-react';

const DriverSection = () => {
  const benefits = [
    {
      icon: <MapPin className="w-8 h-8 text-primary-green" />,
      title: 'Easy Rides',
      description: 'Get rides near your location with smart matching technology'
    },
    {
      icon: <Shield className="w-8 h-8 text-primary-green" />,
      title: 'Insurance Coverage',
      description: 'Comprehensive insurance protection for peace of mind'
    },
    {
      icon: <Users className="w-8 h-8 text-primary-green" />,
      title: 'Growing Network',
      description: 'Join thousands of drivers earning daily across Nepal'
    },
    {
      icon: <CreditCard className="w-8 h-8 text-primary-green" />,
      title: 'Quick Payments',
      description: 'Get paid instantly after every completed ride'
    }
  ];

  const driverInfo = [
    {
      title: 'Requirements',
      items: ['• Valid driving license', '• Vehicle registration papers', '• Insurance documents', '• Clean driving record']
    },
    {
      title: 'Vehicle Types',
      items: ['• Motorcycles', '• Cars (Sedan/Hatchback)', '• SUVs', '• Commercial vehicles']
    },
    {
      title: 'Benefits',
      items: ['• Flexible schedule', '• Weekly bonuses', '• Performance incentives', '• 24/7 support']
    },
    {
      title: 'Support',
      items: ['• Driver training', '• Technical support', '• Community forums', '• Regular workshops']
    }
  ];

  return (
      <section className="px-4 py-16 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#20242C' }}>
                  Drive with <span style={{ color: '#26D466' }}>esawari</span>
                </h2>
                <h3 className="text-2xl font-bold" style={{ color: '#20242C' }}>
                  & Earn On Your Terms
                </h3>
                <p className="text-lg leading-relaxed" style={{ color: '#6A7181' }}>
                  Join our community of professional drivers. Set your own schedule, work on your terms, and earn money while serving your community.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#26D466' }}>
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span style={{ color: '#20242C' }}>₹25,000+ Average Monthly Earnings</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#26D466' }}>
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span style={{ color: '#20242C' }}>Flexible Working Hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#26D466' }}>
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span style={{ color: '#20242C' }}>Weekly Instant Payouts</span>
                </div>
              </div>
              
              <button className="px-8 py-4 rounded-lg text-white font-medium" style={{ backgroundColor: '#26D466' }}>
                Become a Driver
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <MapPin className="w-8 h-8 mb-4" style={{ color: '#26D466' }} />
                  <h4 className="font-bold mb-2" style={{ color: '#20242C' }}>Easy Rides</h4>
                  <p className="text-sm" style={{ color: '#6A7181' }}>Get rides near your location with smart matching technology</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Shield className="w-8 h-8 mb-4" style={{ color: '#26D466' }} />
                  <h4 className="font-bold mb-2" style={{ color: '#20242C' }}>Insurance Coverage</h4>
                  <p className="text-sm" style={{ color: '#6A7181' }}>Comprehensive insurance protection for peace of mind</p>
                </div>
              </div>
              
              <div className="space-y-6 pt-12">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Users className="w-8 h-8 mb-4" style={{ color: '#26D466' }} />
                  <h4 className="font-bold mb-2" style={{ color: '#20242C' }}>Growing Network</h4>
                  <p className="text-sm" style={{ color: '#6A7181' }}>Join thousands of drivers earning daily across Nepal</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <CreditCard className="w-8 h-8 mb-4" style={{ color: '#26D466' }} />
                  <h4 className="font-bold mb-2" style={{ color: '#20242C' }}>Quick Payments</h4>
                  <p className="text-sm" style={{ color: '#6A7181' }}>Get paid instantly after every completed ride</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="font-bold mb-2" style={{ color: '#20242C' }}>Requirements</h4>
              <ul className="space-y-1 text-sm" style={{ color: '#6A7181' }}>
                <li>• Valid driving license</li>
                <li>• Vehicle registration papers</li>
                <li>• Insurance documents</li>
                <li>• Clean driving record</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2" style={{ color: '#20242C' }}>Vehicle Types</h4>
              <ul className="space-y-1 text-sm" style={{ color: '#6A7181' }}>
                <li>• Motorcycles</li>
                <li>• Cars (Sedan/Hatchback)</li>
                <li>• SUVs</li>
                <li>• Commercial vehicles</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2" style={{ color: '#20242C' }}>Benefits</h4>
              <ul className="space-y-1 text-sm" style={{ color: '#6A7181' }}>
                <li>• Flexible schedule</li>
                <li>• Weekly bonuses</li>
                <li>• Performance incentives</li>
                <li>• 24/7 support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2" style={{ color: '#20242C' }}>Support</h4>
              <ul className="space-y-1 text-sm" style={{ color: '#6A7181' }}>
                <li>• Driver training</li>
                <li>• Technical support</li>
                <li>• Community forums</li>
                <li>• Regular workshops</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  );
};

export default DriverSection;