import React from "react";

export const NepaliRupee = ({ size = 60, color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <text
      x="50%"
      y="90%"
      textAnchor="middle"
      fontSize="30"
      fontFamily="Noto Sans Devanagari, Arial, sans-serif"
    fontWeight="50"        // <-- light
      fill={color}
    >
      रु
    </text>
  </svg>
);
