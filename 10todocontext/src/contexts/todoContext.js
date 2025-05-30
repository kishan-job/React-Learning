import { createContext, useContext } from "react";

// With Placeholder or initial values
export const TodoContext = createContext({
  //   todo: [
  //     {
  //       id: 1,
  //       todo: "test",
  //       completed: false,
  //     },
  //   ],
  //we can provide the todo property and other properties like a place holder above todo property and below todo property are same data which we provide in createcontext is overwritten by the provider. Means properties key are taken by the provide and provider provide the values to this keys. the value provided by provider is used all over the react app
  todo: [],
  addTodo: () => {},
  deleteTodo: () => {},
  editTodo: () => {},
  tooogleTodo: () => {},
});

// Without placeholder or initial values
// export const TodoContext = createContext()

export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider = TodoContext.Provider;
