import type React from "react";


export const Logo = (props: React.ComponentProps<"svg">) => (
  <svg
    viewBox="0 0 180 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="CloudAGI"
    {...props}
  >
    <defs>
      {/* Gradient */}
      <linearGradient id="cloudagi-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="20%" stopColor="#60A5FA" />
        <stop offset="30%" stopColor="#818CF8" />
        <stop offset="80%" stopColor="#A78BFA" />
      </linearGradient>

      {/* Soft glow */}
      <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="1.5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Icon */}
    <g transform="translate(0,2)">
      
    </g>

    {/* Text */}
    <text
      x="34"
      y="20"
      fontSize="26"
      fontWeight="600"
      letterSpacing="0.6px"
      fill="url(#cloudagi-gradient)"
      filter="url(#soft-glow)"
      fontFamily="Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    >
      CloudAGI
    </text>
  </svg>
);
