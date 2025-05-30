import { createContext, useContext } from "react";

const Appcontext = createContext();

export const useAppContext = useContext(Appcontext);

export const AppcontextProvivider = Appcontext.Provider