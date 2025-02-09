import React, { useState } from "react";
import TaskItem from "./TaskItem";
import "../styles/styles.css";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskSummary, setTaskSummary] = useState("");

  const addTask = () => {
    if (taskTitle.trim() && taskSummary.trim()) {
      setTasks([...tasks, { title: taskTitle, summary: taskSummary }]);
      setTaskTitle("");
      setTaskSummary("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h2>Daily To-Do List</h2>
      <input
        type="text"
        placeholder="Task Title"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <textarea
        placeholder="Task Summary"
        value={taskSummary}
        onChange={(e) => setTaskSummary(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      <div className="task-list">
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} onRemove={() => removeTask(index)} />
        ))}
      </div>
    </div>
  );
}
