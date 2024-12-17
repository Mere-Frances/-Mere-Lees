import React, { useState } from 'react';

const DisclaimerCat = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    const handleClick = () => {
      setIsVisible(false);
    };
  return (
    <div
    className="icon-container"
    onClick={handleClick}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    style={{ display: isVisible ? 'flex' : 'none' }}
    >
      <img src='../images/cat-icon.png'
        className={`jumping-icon`}
      />
  </div>
  )
}

export default DisclaimerCat
