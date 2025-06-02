// useRef is a React Hook that allows you to persist mutable values across renders without causing re-renders when the value changes. It's most commonly used for:
 * Accessing DOM elements directly: This is probably its most frequent use case. You can create a ref, attach it to a JSX element, and then access that element's properties or call its methods directly.
 * Storing mutable values that don't trigger re-renders: If you have a value that needs to change but its change shouldn't cause the component to re-render (e.g., a timer ID, a previous state value, or any instance variable), useRef is a good choice.
 * Integrating with third-party DOM libraries: When you need to interact with libraries that manipulate the DOM directly.

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
