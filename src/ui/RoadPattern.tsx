"use client";

import React from 'react';

const RoadPattern = () => {
    // Reduced to 3 distinct, cleaner paths for a minimalistic look
    const paths = [
        // 1. Gentle Main Highway (TopLeft to BottomRight)
        "M-100 200 C 500 200 700 900 1100 900", 
        
        // 2. Vertical S-Curve (Connects top to bottom)
        "M 200 -100 C 200 500 800 500 800 1100", 
        
        // 3. Wide Arch/Loop (Spans horizontally)
        "M 0 600 Q 500 100 1000 600",
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
                {/* 1. Render Roads (Background Layer) */}
                {paths.map((d, i) => (
                    <React.Fragment key={`road-${i}`}>
                        {/* Road Base - Very Subtle Gray */}
                        <path 
                            d={d}
                            fill="none" 
                            stroke="#e2e8f0" // slate-200
                            strokeLinecap="round" 
                            strokeOpacity="0.5" 
                            strokeWidth="24"
                        />
                        {/* Lane Markings - Dashed */}
                        <path 
                            d={d}
                            fill="none" 
                            stroke="#cbd5e1" // slate-300
                            strokeLinecap="round" 
                            strokeOpacity="0.4" 
                            strokeWidth="1.5" 
                            strokeDasharray="15 30"
                        />
                    </React.Fragment>
                ))}

                {/* 2. Render Vehicles (Low Density, Green Tint) */}
                {paths.map((d, i) => (
                    <React.Fragment key={`traffic-${i}`}>
                        {/* Reduced traffic: Just 1-2 vehicles per path */}
                        <Vehicle path={d} type="car" delay={i * 3} duration={25 + i * 4} />
                        {i % 2 === 0 && (
                             <Vehicle path={d} type="bike" delay={i * 3 + 12} duration={20 + i * 2} />
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
    // Config based on type
    const isCar = type === 'car';
    const width = isCar ? 16 : 10;
    const height = isCar ? 8 : 4;
    
    // Subtle Primary Green (#247C3F)
    const color = "#247C3F"; 
    
    // Low opacity for subtlety
    const opacity = isCar ? 0.25 : 0.35; 

    return (
        <g style={{
            offsetPath: `path('${path}')`,
            offsetRotate: "auto",
            animation: `moveAlongPath ${duration}s linear infinite`,
            animationDelay: `${delay}s`,
            opacity: 0 // Hidden initially until animation starts (optional, but handled by keyframes usually)
        }}>
           {/* Note: In Safari/Some browsers, offset-path needs the element to be visible/block-ish. 
             SVG G elements support it. */}
             {/* To avoid flash of unstyled content or initial position issue: */}
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
