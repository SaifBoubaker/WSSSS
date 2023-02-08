import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { EditTodo, updateTodo } from "../Redux/TodoSlice";
function UpdateForm({ todo }) {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");
  const ChangeHandler = (e) => {
    setNewTask(e.target.value);
  };
  const cancelHandler = (e) => {
    e.preventDefault();
    dispatch(EditTodo(todo._id));
  };

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updateTodo({ id: todo._id, task: newTask }));
    dispatch(EditTodo(todo._id));
  };
  return (
    <div>
      <form>
        <input defaultValue={todo.task} onChange={ChangeHandler} />
        <button onClick={updateHandler}>Update</button>
        <button onClick={cancelHandler}>Cancel</button>
      </form>
    </div>
  );
}

export default UpdateForm;
