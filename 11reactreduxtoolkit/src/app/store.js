import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "../features/todo/todoSlice"
export const store = configureStore({
    reducer: {
        todo:todoReducer // todo is the name of the slice and todoReducer is the fucntion.
    }
})