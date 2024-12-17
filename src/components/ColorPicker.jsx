import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful'; // Importing HexColorPicker

const ColorPicker = () => {
  const [color, setColor] = useState('#ff0000'); // Default color

  // Convert hex to RGBA
  const hexToRgba = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, 1)`;
  };

  return (
    <div className="color-picker">
      {/* Color picker box */}
      <div className="picker-container">
        <HexColorPicker color={color} onChange={setColor} />
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
