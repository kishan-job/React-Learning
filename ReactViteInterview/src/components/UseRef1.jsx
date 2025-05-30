// useRef is a React hook that allows you to store a reference to a value or a DOM element without triggering a re-render when the reference is updated. It is commonly used to access and modify DOM elements, store mutable values, or track previous values across renders.

// ref.current → Used when storing non-DOM values (like numbers, objects, or functions). It allows accessing or modifying data without triggering re-renders.

// ref.current.value → Used when useRef holds a DOM element (like an <input>). The .value property is needed to access or update the input’s text content.

import React, { useEffect, useRef, useState } from "react";

function UseRef1() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  // const [renderCount, setRenderCount] = useState(0)
  useEffect(() => {
    countRef.current += 1;
    //     The useEffect hook is triggered when the state of UseRef1 changes. Inside the effect, we update countRef, a mutable variable stored using useRef. However, this update does not trigger a re-render because useRef does not cause component updates.

    // If we were to use a state variable instead of useRef, it would continuously trigger useEffect, leading to an infinite loop since updating the state causes a re-render, which re-runs useEffect, and so on.

    // setRenderCount(renderCount+1)

    // if we use renderCont state variable infinete loop happen because this is state varaible
  });

  return (
    <>
      <h1>Rendered count {countRef.current}</h1>
      {/* <h1>Rendered count {setRenderCount(renderCount+1)}</h1> */}
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement by 1
      </button>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment by 1
      </button>
    </>
  );
}

export default UseRef1;
