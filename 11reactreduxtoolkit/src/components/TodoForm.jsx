import React, { useState } from "react";
import { addTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";
function TodoForm() {
  const [todoMsg, setTodoMsg] = useState("");
  const dispatch = useDispatch();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTodo(todoMsg)); // addTodo is the actioncreator function which return action object and we dispatching to store and TodoSlice.reducer handles 'todo/addTodo'
        //  action object {
        //   type: "todo/addTodo",
        //   payload: todoMsg
        // }
        
        setTodoMsg(""); // Clear input after submission
      }}
    >
      <input
        type="text"
        placeholder="Enter Todo..."
        value={todoMsg}
        onChange={(inp) => setTodoMsg(inp.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
