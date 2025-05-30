import React, { useEffect, useState } from "react";

function UseEffect1() {
  const [count, setCount] = useState(0);
  useEffect(() =>
    console.log(
      "without depenency array this call back executes on every render"
    )
  );
  useEffect(() => {
    console.log(
      "with empty depenency array this call back executes only once at initial render"
    );
  }, []);
  useEffect(() => {
    console.log(
      "with  depenency array this call back executes when depencency changed"
    );
  }, [count]);
  return (
    <>
      <h1>UseEffect</h1>
      <h3>{count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </>
  );
}

export default UseEffect1;
