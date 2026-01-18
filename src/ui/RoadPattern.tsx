/**
 * RoadPattern Component for Ridesharing App
 * 
 * Features:
 * - Smooth curved roads with realistic intersections
 * - Animated vehicles traveling along paths
 * - Route markers and destination pins
 * - Modern, clean design optimized for ridesharing UX
 */

import React from 'react';

const RoadPattern = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100" />
      
      {/* SVG Road Network */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-40" 
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Symmetric, balanced road network */}
          <path id="road1" d="M -100 250 Q 250 100 500 250 T 1100 250" />
          <path id="road2" d="M 250 -100 Q 400 250 250 500 T 250 1100" />
          <path id="road3" d="M -100 750 Q 250 900 500 750 T 1100 750" />
          <path id="road4" d="M 750 -100 Q 600 250 750 500 T 750 1100" />
          
          {/* Gradient for roads */}
          <linearGradient id="roadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#94a3b8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.2" />
          </linearGradient>
          
          {/* Car icon - Centered at 0,0 for perfect rotation */}
          <g id="car">
            {/* Car body - Centered */}
            <rect x="-12" y="-5.5" width="24" height="11" rx="2.5" fill="var(--primary-green)" opacity="0.6" />
            {/* Windshield */}
            <path d="M-4,-5.5 L4,-5.5 L2,-1.5 L-2,-1.5 Z" fill="#1e293b" opacity="0.4" />
            {/* Windows */}
            <rect x="-8" y="-3.5" width="4" height="5" rx="1" fill="#e2e8f0" opacity="0.3" />
            <rect x="4" y="-3.5" width="4" height="5" rx="1" fill="#e2e8f0" opacity="0.3" />
            {/* Wheels */}
            <circle cx="-6" cy="5.5" r="2.5" fill="#1e293b" opacity="0.8" />
            <circle cx="6" cy="5.5" r="2.5" fill="#1e293b" opacity="0.8" />
            <circle cx="-6" cy="5.5" r="1.2" fill="#475569" opacity="0.6" />
            <circle cx="6" cy="5.5" r="1.2" fill="#475569" opacity="0.6" />
            {/* Headlight (facing +X) */}
            <circle cx="10" cy="-2.5" r="1" fill="#fbbf24" opacity="0.5" />
          </g>
          
          {/* Location pin */}
          <g id="pin">
            <path d="M0,-8 C-2.2,-8 -4,-6.2 -4,-4 C-4,-1 0,2 0,2 C0,2 4,-1 4,-4 C4,-6.2 2.2,-8 0,-8 Z" fill="#10b981" opacity="0.4" />
            <circle cx="0" cy="-4" r="1.5" fill="white" opacity="0.8" />
          </g>
        </defs>
        
        {/* Road base layer */}
        <g strokeLinecap="round">
          <use href="#road1" stroke="url(#roadGrad)" strokeWidth="32" fill="none" />
          <use href="#road2" stroke="url(#roadGrad)" strokeWidth="32" fill="none" />
          <use href="#road3" stroke="url(#roadGrad)" strokeWidth="28" fill="none" />
          <use href="#road4" stroke="url(#roadGrad)" strokeWidth="28" fill="none" />
        </g>
        
        {/* Lane dividers */}
        <g stroke="#f1f5f9" strokeWidth="1.5" strokeDasharray="15 25" strokeLinecap="round" fill="none" opacity="0.4">
          <use href="#road1" />
          <use href="#road2" />
          <use href="#road3" />
          <use href="#road4" />
        </g>
        
        {/* Animated vehicles - Aligned to curves */}
        <g>
          {/* Car 1 - Road 1 */}
          <use href="#car">
            <animateMotion dur="25s" repeatCount="indefinite" rotate="auto">
              <mpath href="#road1" />
            </animateMotion>
          </use>
          
          {/* Car 3 - Road 2 */}
          <use href="#car">
            <animateMotion dur="28s" repeatCount="indefinite" begin="10s" rotate="auto">
              <mpath href="#road2" />
            </animateMotion>
          </use>
          
          {/* Car 5 - Road 4 */}
          <use href="#car">
            <animateMotion dur="32s" repeatCount="indefinite" begin="5s" rotate="auto">
              <mpath href="#road4" />
            </animateMotion>
          </use>
        </g>
        
        {/* Location pins/markers at intersections */}
        <use href="#pin" x="250" y="250" />
        <use href="#pin" x="750" y="250" />
        <use href="#pin" x="250" y="750" />
        <use href="#pin" x="750" y="750" />

        
        {/* Intersection circles */}
        <g fill="#e2e8f0" opacity="0.15">
          <circle cx="500" cy="350" r="40" />
          <circle cx="400" cy="500" r="35" />
          <circle cx="650" cy="650" r="30" />
        </g>
        
        {/* Intersection markers */}
        <g fill="none" stroke="#94a3b8" strokeWidth="2" opacity="0.2">
          <circle cx="500" cy="350" r="45" strokeDasharray="5 5" />
          <circle cx="400" cy="500" r="40" strokeDasharray="5 5" />
        </g>
      </svg>
      

    </div>
  );
};

export default RoadPattern;