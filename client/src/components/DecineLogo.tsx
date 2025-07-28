import React from 'react';

const DecineLogo = ({ className = "", width = "200", height = "auto" }) => {
  return (
    <img 
      src="/decine-logo.png" 
      alt="DeCine" 
      className={className}
      style={{ 
        width: typeof width === 'string' && width.includes('px') ? width : `${width}px`, 
        height, 
        filter: 'brightness(0.7) contrast(1.2)',
        maxWidth: 'none'
      }}
    />
  );
};

export default DecineLogo;