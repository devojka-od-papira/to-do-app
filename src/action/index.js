import { ADD_TASK, EDIT_TASK, DONE_TASK, DELETE_TASK } from "../actionTypes";

export const addTaskAction = (taskName, tasks) => {
  const task = {
    taskName,
    id: 2,
  };

  console.log("task", task);

  const newTasks = tasks.push(task);

  return (dispatch) => {
    dispatch({ type: ADD_TASK, payload: { tasks: newTasks } });
  };
};

export const doneTaskAction = (id, tasks) => {
  return (dispatch) => {
    dispatch({ type: DONE_TASK });
  };
};

export const editTaskAction = (id, tasks, newValue) => {
  return (dispatch) => {
    dispatch({ type: EDIT_TASK });
  };
};

export const deleteTaskAction = (id, tasks) => {
  return (dispatch) => {
    dispatch({ type: DELETE_TASK });
  };
};
