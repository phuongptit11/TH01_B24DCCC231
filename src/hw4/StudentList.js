import React from "react";
import StudentCard from "./StudentCard";

export default function StudentList() {
  const students = [
    { name: "Nguyễn Văn A", age: 20, className: "D24CQCC03-B" },
    { name: "Phạm Thị B", age: 21, className: "D24CQCC03-B" },
    { name: "Trần Minh C", age: 22, className: "D24CQCC03-B" },
  ];

  return (
    <div>
      <h2>Bài 5: Danh sách sinh viên</h2>
      {students.map((s, i) => (
        <StudentCard key={i} {...s} />
      ))}
    </div>
  );
}

