import React, { useContext } from "react";
import { Appcontext } from "../context/AppContext";

function HeaderContextChild() {
  const{phone, name}= useContext(Appcontext);
  return (
    <div>
          <h1>Header Child</h1>
          contact: 
          <p>name:{name}</p>
         <p> phn:{phone}</p>

    </div>
  );
}

export default HeaderContextChild;
