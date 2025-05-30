// The useMemo hook in React returns a memoized value (i.e., it caches the result). This hook helps improve the performance of a React application. The memoized function is only executed when its dependencies change.

// What is useMemo in React?
// useMemo is a React hook that returns a memoized (cached) value, which means:

// It remembers the result of a computation.

// It recomputes that result only when dependencies change.

import React, { useState, useMemo } from "react";

function UseMemo1() {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);
  const calCub = (nuber) => {
    console.log("calculation done!");
    return Math.pow(nuber, 3);
  };
  //   const restult = calCub(number);
  // The calCub(number) function will be executed every time the component re-renders — not only when we input a number in the input field, but also when we click the increment button. To avoid unnecessary calculations, we use the useMemo hook. By using useMemo, when the state changes due to setCount (after clicking the button), the component re-renders, but calCub is not called again.
  const result = useMemo(() => {
    return calCub(number);
  }, [number]);
  return (
    <div>
      <input value={number} onChange={(e) => setNumber(e.target.value)} />
      <h1>Cube of the nuber is{result}</h1>
      <button onClick={() => setCount(count + 1)}>Increment is {count}</button>
    </div>
  );
}

export default UseMemo1;
