import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Links from "../routes/Links";


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
    <Link
      to='/graphics'
      className="icon-container"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ display: isVisible ? 'flex' : 'none' }}
      >
        <img src='../images/cat-icon.png'
          className={`jumping-icon`}
        />
    </Link>
  )
}

export default DisclaimerCat
