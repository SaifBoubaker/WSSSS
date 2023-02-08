import React from "react";
import { useDispatch } from "react-redux";
import { EditTodo } from "../Redux/TodoSlice";
import UpdateForm from "./UpdateForm";

function Todo({ todo }) {
  const dispatch = useDispatch();
  const editHandler = (e) => {
    e.preventDefault();
    dispatch(EditTodo(todo._id));
  };
  console.log(todo);
  return (
    <div>
      {todo.task}
      {todo.isEdited && <UpdateForm todo={todo} />}
      {!todo.isEdited && <button onClick={editHandler}>Edit</button>}
    </div>
  );
}

export default Todo;
