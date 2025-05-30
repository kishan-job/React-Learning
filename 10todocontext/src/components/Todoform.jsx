import React, { useState } from "react";
import { useTodoContext } from "../contexts/todoContext";
function Todoform() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodoContext();
  

  return (
    <form
      onSubmit={(e) => {
              e.preventDefault();
              if (todo) {
                  addTodo({ todo, completed: false });
                  setTodo("")
              }
              
      }}
    >
      <div>
        <label htmlFor="formINput">Enter Todo :</label>
        <input
          type="text"
          id="formINput"
          placeholder="Todo..."
          onChange={(e) => {
              setTodo(e.target.value);
          }}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export default Todoform;
