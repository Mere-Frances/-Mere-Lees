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
      <img src='../public/images/cat-icon.png'
        className={`jumping-icon`}
      />
    {isHovered && (
      <div className="message-container">
        <h3>Important Disclaimer!</h3>
        <p>The projects showcased on this portfolio are created purely for educational and demonstrative purposes. They represent fictional scenarios and are not intended for commercial use.</p>
        <h3 className='ignore-title'>Click the cat to ignore</h3>
      </div>
    )}
  </div>
  )
}

export default DisclaimerCat
