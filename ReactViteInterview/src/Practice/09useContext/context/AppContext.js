// this is use in app.jsx


import { createContext, useContext } from "react";

const AppContext = createContext(); // usecontext return an object

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = AppContext.Provider; // retrun object have .Provider property which is component which provides contect to the APP
 