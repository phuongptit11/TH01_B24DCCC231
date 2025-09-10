// TaskList.js
import React, { useState } from "react";
import Task from "./Task";

function TaskList() {
  const [tasks, setTasks] = useState([]); // danh sách công việc
  const [input, setInput] = useState(""); // giá trị input

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input]); // thêm vào mảng
      setInput(""); // reset input
    }
  };

  return (
    <div>
      <h2>Bài 2: Danh sách công việc</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nhập công việc..."
      />
      <button onClick={addTask}>Thêm</button>

      <ul>
        {tasks.map((task, index) => (
          <Task key={index} name={task} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
