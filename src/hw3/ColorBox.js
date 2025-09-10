// ColorBox.js
import React from "react";

function ColorBox({ color }) {
  return (
    <div
      style={{
        width: "200px",
        height: "100px",
        backgroundColor: color,
        margin: "10px 0",
        
        borderRadius: "8px",
      }}
    ></div>
  );
}

export default ColorBox;

