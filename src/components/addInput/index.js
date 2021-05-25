import React, { useState } from "react";
import Button from "../button";
import { useSelector } from "react-redux";
import { addTaskAction } from "../../action";
function AddInput() {
  const [taskValue, setTaskValue] = useState("");
  const tasks = useSelector((state) => state.todos.tasks);
  const handleChange = (event) => {
    event.preventDefault();

    setTaskValue(event.target.value);
  };
  return (
    <div>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Add a todo..."
        value={taskValue}
        className="todo-input"
      />
      <Button name="Add Task" onClick={() => addTaskAction(taskValue, tasks)} />
    </div>
  );
}

export default AddInput;
