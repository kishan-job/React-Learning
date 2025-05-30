import React, { useContext } from "react";
import { useAppContext } from "../context/AppContext1";

function HeaderContextChild2() {
  const { num, name } = useAppContext();
  return (
    <div>
      <h1>Header Child</h1>
      contact:
      <p>name:{name}</p>
      <p> phn:{num}</p>
    </div>
  );
}

export default HeaderContextChild2;
