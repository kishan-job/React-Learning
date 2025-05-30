import { createContext } from "react";

export const Appcontext = createContext();
// createContext method return an object there it have one of the propety which is Provider

export const ContextProvider = (props) => {
  const phone = 905228;
  const name = "kishan";
  return (
    <Appcontext.Provider value={{ phone, name }}>
      {/* In provider react accept only value prop  */}
      {props.children}
    </Appcontext.Provider>
  );
};
