import { createContext, useContext } from "react";

const AppContext = createContext(); // createContext() function from the react create app context and returns an object containing the Provider compoent.

export const useAppContext = () => useContext(AppContext); //useContext is a React Hook.AppContext is the Context object that was created using createContext().  useContext(AppContext) retrieves the current value of that Context.  The component calling useContext must be a descendant of a Provider for AppContext.

//*** we are calling useContext() outside the component using the context values.

export const AppContextProvider = AppContext.Provider;
