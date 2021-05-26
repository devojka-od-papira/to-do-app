import React, { useState } from "react";
import Button from "../button";
import "./../addInput/style.css";

import { useSelector } from "react-redux";
import { addTaskAction } from "../../action";

import "../button/style.css";

function AddInput() {
  const [taskValue, setTaskValue] = useState("");
  const tasks = useSelector((state) => state.todos.tasks);
  const handleChange = (event) => {
    event.preventDefault();

    setTaskValue(event.target.value);
  };
  return (
    <div className="input-btn">
      <input
        onChange={handleChange}
        type="text"
        placeholder="Add a todo..."
        value={taskValue}
        className="input"
      />
      <Button name="Add" onClick={() => addTaskAction(taskValue, tasks)} />
    </div>
  );
}

export default AddInput;
