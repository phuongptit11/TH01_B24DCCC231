// Clock.js
import React, { useState, useEffect } from "react";
import TimeDisplay from "./TimeDisplay";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // cleanup khi component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>Bài 5: Đồng hồ hiện tại</h2>
      <TimeDisplay time={time} />
    </div>
  );
}

export default Clock;
