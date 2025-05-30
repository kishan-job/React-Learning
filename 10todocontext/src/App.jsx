import React, { useState, useEffect } from "react";
import { TodoProvider } from "./contexts/todoContext";
import Todoform from "./components/Todoform";
import TodoItems from "./components/TodoItems";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    return setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, newTodo) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, todo: newTodo } : prevTodo
      )
    );
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  
  const deleteTodo = (id) => {
    setTodos((prev)=>prev.filter((todo)=>(todo.id!=id)))
  }
// issue if we are not using the condition lenght
  // useEffect(() => {
  //   const todos = JSON.parse(localStorage.getItem("todos")); // Load from local storage
  //   if (todos ) {
  //     setTodos(todos ); // Set todos if they exist
  //     console.log("Retrieved todos:", todos);
  //   }
  // }, []);

  

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log("Retrieved todos1:", todos);
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo ,toggleComplete,deleteTodo}}>
      <Todoform />
      <div>
        {todos.map((todo) => (
          <TodoItems key={todo.id} todo={todo} />
        ))}
      </div>
    </TodoProvider>
  );
}

export default App;
