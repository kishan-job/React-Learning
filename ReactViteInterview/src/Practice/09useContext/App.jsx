import React from "react";
import HeaderContextChild from "./components/HeaderContextChild";
import { AppContextProvider } from "./context/AppContext1";
import HeaderContextChild2 from "./components/HeaderContextChild2";
function App() {
  const num = 905;
  const name = "Siii";
  return (
    <>
      <AppContextProvider value={{ num, name }}>
        <HeaderContextChild/>
        <HeaderContextChild2/>
      </AppContextProvider>
    </>
  );
}

export default App;
