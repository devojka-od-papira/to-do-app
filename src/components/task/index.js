import React from "react";
import Button from "../button";
import { doneTaskAction, editTaskAction, deleteTaskAction } from "../../action";
function Task() {
  return (
    <div>
      <h2>task</h2>
      <Button name="Done" onClick={doneTaskAction} />
      <Button name="Edit" onClick={editTaskAction} />
      <Button name="Delete" onClick={deleteTaskAction} />
    </div>
  );
}

export default Task;
