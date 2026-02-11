import React from "react";
import Header from "./Header";

function App() {
  const navItems = ["Home", "About", "Contact"];

  return (
    <div>
      <Header nav={navItems} />
    </div>
  );
}

export default App;