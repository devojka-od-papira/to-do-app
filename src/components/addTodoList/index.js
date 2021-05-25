import React, { useState } from "react";

function AddTodo() {
  const [taskValue, setTaskValue] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo..."
        value={taskValue}
        className="todo-input"
      />
      <button className="todo-btn">Add Todo</button>
    </form>
  );
}

export default AddTodo;
