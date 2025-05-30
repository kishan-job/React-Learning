import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function TodoItems() {
  const todos = useSelector((state) => state.todo.todos);
  console.log(todos);
  const dispatch = useDispatch(removeTodo);

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.msg}{" "}
          <button onClick={() => dispatch(removeTodo(todo.id))}>remove</button>
        </div>
      ))}
    </div>
  );
}

export default TodoItems;
