import React from "react";

export default function TaskItem({ task, onRemove }) {
  return (
    <div className="task-item">
      <div>
        <h3>{task.title}</h3>
        <p>{task.summary}</p>
      </div>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
}
