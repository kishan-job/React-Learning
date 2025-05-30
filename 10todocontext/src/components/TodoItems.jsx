import React from "react";
import { useTodoContext } from "../contexts/todoContext";
import { useState } from "react";

function TodoItems({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todomsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, toggleComplete, deleteTodo } = useTodoContext();

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <input
        type="text"
        readOnly={!isTodoEditable}
        value={todomsg}
        onChange={(inp) => setTodoMsg(inp.target.value)}
      />
      <button
        onClick={() => {
          if (todo.completed) {
            return;
          }
          if (isTodoEditable) {
            updateTodo(todo.id, todomsg);
            setIsTodoEditable(false)
          } else {
            setIsTodoEditable((prev) => !prev);
            console.log(isTodoEditable);
          }
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "Save" : "✏️"}
      </button>

      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </div>
  );
}

export default TodoItems;
