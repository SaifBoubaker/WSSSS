import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getAllTodos } from "../Redux/TodoSlice";
import Todo from "./Todo";

function TodoList(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);
  const { todoList } = useSelector((state) => state.todos);
  const { loading } = useSelector((state) => state.todos);

  return (
    <div>
      {loading ? (
        <p>Loading......</p>
      ) : (
        todoList?.map((el) => <Todo todo={el} key={el.id} />)
      )}
    </div>
  );
}

export default TodoList;
