// ColorChanger.js
import React, { useState } from "react";
import ColorBox from "./ColorBox";

function ColorChanger() {
  const colors = ["red", "green", "blue", "yellow"];
  const [color, setColor] = useState("white"); // màu mặc định

  return (
    <div>
      <h2>Bài 3: Ứng dụng đổi màu nền</h2>

      {/* Render nút cho từng màu */}
      {colors.map((c) => (
        <button
          key={c}
          onClick={() => setColor(c)}
          style={{ margin: "0 5px", padding: "5px 10px" }}
        >
          {c}
        </button>
      ))}

      <ColorBox color={color} />
    </div>
  );
}

export default ColorChanger;
