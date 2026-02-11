import { createContext } from "react";

export const appContext = createContext();

export function AppContextProvider({children}) {
  const name = "kishan";
  const age = 25;
  return (
    <appContext.Provider value={{ name, age }}>
      {children}
    </appContext.Provider>
  );
}
