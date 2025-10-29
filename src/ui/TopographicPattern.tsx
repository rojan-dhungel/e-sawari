import React from 'react';

interface TopographicPatternProps {
  opacity?: number;
  scale?: number;
  rotate?: number;
  color?: string;
  className?: string;
}

const TopographicPattern: React.FC<TopographicPatternProps> = ({
  opacity = 0.05,
  scale = 1,
  rotate = 0,
  color = '#247C3F',
  className = '',
}) => {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{
        opacity: opacity,
        transform: `scale(${scale}) rotate(${rotate}deg)`,
        transformOrigin: 'center',
      }}
    >
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="topographic-pattern"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            {/* Contour lines */}
            <path
              d="M 20 100 Q 50 80, 80 100 T 140 100 T 200 100"
              fill="none"
              stroke={color}
              strokeWidth="1"
            />
            <path
              d="M 0 120 Q 30 100, 60 120 T 120 120 T 180 120"
              fill="none"
              stroke={color}
              strokeWidth="1"
            />
            <path
              d="M 40 140 Q 70 120, 100 140 T 160 140 T 220 140"
              fill="none"
              stroke={color}
              strokeWidth="1"
            />
            <path
              d="M 10 80 Q 40 60, 70 80 T 130 80 T 190 80"
              fill="none"
              stroke={color}
              strokeWidth="1"
            />
            <path
              d="M 30 60 Q 60 40, 90 60 T 150 60 T 210 60"
              fill="none"
              stroke={color}
              strokeWidth="1"
            />
            <path
              d="M 50 40 Q 80 20, 110 40 T 170 40 T 230 40"
              fill="none"
              stroke={color}
              strokeWidth="1"
            />
            <path
              d="M 0 160 Q 30 140, 60 160 T 120 160 T 180 160"
              fill="none"
              stroke={color}
              strokeWidth="1"
            />
            <path
              d="M 20 180 Q 50 160, 80 180 T 140 180 T 200 180"
              fill="none"
              stroke={color}
              strokeWidth="1"
            />
            
            {/* Additional organic curves */}
            <path
              d="M 100 10 Q 120 30, 100 50 Q 80 70, 100 90"
              fill="none"
              stroke={color}
              strokeWidth="1"
            />
            <path
              d="M 150 20 Q 170 40, 150 60 Q 130 80, 150 100"
              fill="none"
              stroke={color}
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#topographic-pattern)" />
      </svg>
    </div>
  );
};

export default TopographicPattern;

// Usage Examples:
// 
// 1. Default (very subtle):
// <div className="relative bg-[#F5F9F6]">
//   <TopographicPattern />
//   <div className="relative z-10">{/* Your content */}</div>
// </div>
//
// 2. More visible in hero section:
// <div className="relative bg-[#F5F9F6]">
//   <TopographicPattern opacity={0.08} scale={1.2} />
//   <div className="relative z-10">{/* Your content */}</div>
// </div>
//
// 3. Rotated for variety:
// <div className="relative bg-[#F5F9F6]">
//   <TopographicPattern opacity={0.06} rotate={45} />
//   <div className="relative z-10">{/* Your content */}</div>
// </div>
//
// 4. On green background sections:
// <div className="relative bg-[#247C3F]">
//   <TopographicPattern opacity={0.1} color="#ffffff" />
//   <div className="relative z-10">{/* Your content */}</div>
// </div>
//
// 5. Custom styling:
// <div className="relative bg-[#F5F9F6] overflow-hidden">
//   <TopographicPattern opacity={0.07} scale={1.5} className="blur-[0.5px]" />
//   <div className="relative z-10">{/* Your content */}</div>
// </div>