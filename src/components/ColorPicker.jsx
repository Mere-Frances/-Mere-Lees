import React, { useState } from 'react';
import { ChromePicker } from 'react-color'; // Importing the color picker component

const ColorPicker = () => {
  const [color, setColor] = useState('#ff0000'); // Default color

  // Handle color change from the picker
  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };

  // Convert hex to RGBA
  const hexToRgba = (hex) => {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, 1)`;
  };

  return (
    <div className="color-picker">
      {/* Color picker box */}
      <div className="picker-container">
        <ChromePicker color={color} onChangeComplete={handleColorChange} />
      </div>

      {/* Selected color and hex code */}
      <div className="color-display">
        <p>Selected Color: {color}</p>
      </div>

      {/* RGBA Output */}
      <div className="rgba-display">
        <p>RGBA: {hexToRgba(color)}</p>
      </div>
    </div>
  );
};

export default ColorPicker;
