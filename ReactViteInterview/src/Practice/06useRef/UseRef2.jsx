// ui selecting using useRef

import React, { useRef, useEffect } from "react";

function UseRef2() {
    const useRef2 = useRef();
  return (
    <div>
          <input type="text" ref={useRef2} />
          <button onClick={() => {
              console.log(useRef2.current);
              useRef2.current.style.background="blue"
          }}>Click</button>
    </div>
  );
}

export default UseRef2;
