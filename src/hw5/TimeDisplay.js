// TimeDisplay.js
import React from "react";

function TimeDisplay({ time }) {
  return (
    <div
      style={{
        fontSize: "24px",
        fontWeight: "bold",
        padding: "10px",
        border: "1px solid #333",
        borderRadius: "8px",
        width: "150px",
        textAlign: "center",
        margin: "10px 0",
      }}
    >
      {time}
    </div>
  );
}

export default TimeDisplay;
