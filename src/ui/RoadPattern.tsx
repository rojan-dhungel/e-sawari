"use client";

import React from 'react';

const RoadPattern = () => {
    // Winding, looping paths - refined to be less cartoonish
    const paths = [
        // 1. Large Figure-8-ish Loop (Central)
        "M 500 100 C 800 100 800 400 500 400 C 200 400 200 700 500 700 C 800 700 900 900 900 1100",

        // 2. Wide Meandering Snake (Left to Right)
        "M -100 300 C 200 300 200 100 500 100 C 800 100 800 600 1100 600",

        // 3. Bottom Loop (Enters left, loops, exits bottom)
        "M -100 800 C 300 800 400 500 200 500 C 0 500 100 900 500 1100",
        
        // 4. Top Right Corner Curve
        "M 800 -100 Q 800 300 1100 300"
    ];

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
             {/* Define keyframes for movement */}
            <style jsx global>{`
                @keyframes moveAlongPath {
                    from { offset-distance: 0%; }
                    to { offset-distance: 100%; }
                }
            `}</style>
            
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 1000 1000"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* 1. Render Roads (Background Layer) - More subtle */}
                {paths.map((d, i) => (
                    <React.Fragment key={`road-${i}`}>
                        {/* Road Base - Wider but more transparent */}
                        <path 
                            d={d}
                            fill="none" 
                            stroke="#e2e8f0" // slate-200
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                            strokeOpacity="0.4" // Reduced from 0.6
                            strokeWidth="45"
                        />
                        {/* Lane Markings - Very subtle */}
                        <path 
                            d={d}
                            fill="none" 
                            stroke="#cbd5e1" // slate-300
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                            strokeOpacity="0.3" // Reduced from 0.5
                            strokeWidth="1.5" 
                            strokeDasharray="15 30"
                        />
                    </React.Fragment>
                ))}

                {/* 2. Render Vehicles (Subtle Primary Green) */}
                {paths.map((d, i) => (
                    <React.Fragment key={`traffic-${i}`}>
                        <Vehicle path={d} type="car" delay={i * 3} duration={25 + i * 4} />
                        {i % 2 === 0 && (
                             <Vehicle path={d} type="bike" delay={i * 3 + 12} duration={20 + i * 3} />
                        )}
                    </React.Fragment>
                ))}
            </svg>
        </div>
    );
};

interface VehicleProps {
    path: string;
    type: 'car' | 'bike';
    delay: number;
    duration: number;
}

const Vehicle = ({ path, type, delay, duration }: VehicleProps) => {
    const isCar = type === 'car';
    const width = isCar ? 16 : 10;
    const height = isCar ? 8 : 5;
    
    // Primary Green (#247c3f)
    const color = "#247c3f"; 
    
    // Very subtle opacity
    const opacity = isCar ? 0.2 : 0.25; 

    return (
        <g style={{
            offsetPath: `path('${path}')`,
            offsetRotate: "auto",
            animation: `moveAlongPath ${duration}s linear infinite`,
            animationDelay: `${delay}s`,
            opacity: 0
        }}>
             <style jsx>{`
                g {
                    animation-fill-mode: both;
                }
             `}</style>
            <rect 
                x={-width / 2} 
                y={-height / 2} 
                width={width} 
                height={height} 
                rx={isCar ? 2 : 1} 
                fill={color} 
                fillOpacity={opacity}
            />
        </g>
    );
};

export default RoadPattern;
