import React from 'react';

const SectionCurve = () => {
  return (
    // You can adjust the height here with h-16, h-20, h-24 etc.
    <div className="relative w-full h-20 md:h-24 overflow-hidden -mb-1">
      <svg
        className="absolute bottom-0 left-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 100" 
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff" 
          fillOpacity="1"
          d="M0,100 C720,0 720,0 1440,100 L1440,100 L0,100 Z"
        ></path>
      </svg>
    </div>
  );
};

export default SectionCurve;