import React, { useState } from "react";

export default function StudentCard({ name, age, className }) {
  const [show, setShow] = useState(false);

  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <h3>{name}</h3>
      <button onClick={() => setShow(!show)}>
        {show ? "Ẩn chi tiết" : "Xem chi tiết"}
      </button>
      {show && (
        <div>
          <p>Tuổi: {age}</p>
          <p>Lớp: {className}</p>
        </div>
      )}
    </div>
  );
}

