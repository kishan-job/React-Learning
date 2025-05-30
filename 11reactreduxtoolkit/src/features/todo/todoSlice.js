import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    // reducers object contains reducer function.
    //reducer a pure function that takes the current state and an action, and then returns a new state.
    // addTodo and removeTodo are two reducers
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        msg: action.payload,
      };
      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
    state.todos = state.todos.filter((todo)=>(todo.id !== action.payload))
  }
  },
});

export const { addTodo, removeTodo } = todoSlice.actions; // todoSlice is an object containing an 'actions' object. This 'actions' object holds the automatically generated action creator functions corresponding to each reducer defined in the todoSlice.

//Action creators create an action object.

export default todoSlice.reducer  // todoSlice is an object contain combined reducer function that Redux uses to update the store.
