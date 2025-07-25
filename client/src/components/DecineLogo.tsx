import React from 'react';

const DecineLogo = ({ className = "", width = "200", height = "auto" }) => {
  return (
    <img 
      src="/decine-logo.png" 
      alt="DeCine" 
      className={className}
      style={{ 
        width, 
        height, 
        filter: 'brightness(0.7) contrast(1.2)',
        transform: 'scale(1.2)'
      }}
    />
  );
};

export default DecineLogo;