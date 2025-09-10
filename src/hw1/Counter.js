import React, { useState } from "react";
import Display from "./Display";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "left" }}>
      <h2>Bài 1: Counter</h2>
      <Display value={count} />
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter;
