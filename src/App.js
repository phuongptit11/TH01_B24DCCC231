import React from "react";
import Counter from "./hw1/Counter";  // Import bài 1 Counter
import TaskList from "./hw2/TaskList"; // Import bài 2 TaskList  
import ColorChanger from "./hw3/ColorChanger"; // Import bài 3 colorChanger
import StudentList from "./hw4/StudentList";  // Import bài 4 StudentList
import Clock from "./hw5/Clock"; // Import bài 5 Clock  
function App() {
  return (
    <div >
      <h1>React Demo</h1>
      <Counter />   {/* Hiển thị bài 1 */}
      <TaskList />  {/* Hiển thị bài 2 */}
      <ColorChanger /> {/* Hiển thị bài 3 */}
      <StudentList />  {/* Hiển thị bài 4 */}
      <Clock /> {/* Hiển thị bài 5 */}
    </div>
  );
}

export default App;
