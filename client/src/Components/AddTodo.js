import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../Redux/TodoSlice";
function AddTodo(props) {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const changeHandler = (e) => {
    setTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createTodo(task));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={changeHandler} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodo;
