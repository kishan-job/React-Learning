// useState hook in react is a function which is used to manage the state in the fucnitonal component. By using the useState hook we can update the compoent conent dynamically. useState hook returns an array which have state variable and updating funtion.
// 1. when the state is changed then the component get rerendered.

import React, { useState } from "react";
function State1() {
  const [count, setCount] = useState(0);
  const [car, setCar] = useState({
    brand: "BMW",
    model: "X6",
    mfdYear: "2025",
    color: "red",
  });
  return (
    <div>
      {/* ***ex1*** */}
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {/* ***ex2*** */}
      <h1>
        Car brand is {car.brand}, model is {car.model}, MfdYear is {car.mfdYear}
        , color is {car.color}
      </h1>
      <button onClick={() => setCar({ ...car, color: "blue" })}>
        {" "}
        Change to blue
      </button>
      {/* In the setCar method, if we need to update the color, we must spread the object and then update the specific key. If we instead use setCar({ color: "blue" }), the entire previous object is removed, and a new object with only the color property is created.*/}
      {/* ***ex3*** */}
      <hr />
      {/* here increment by 3 didn't work In React, state updates are not applied
      immediately. Instead, they are queued and executed at the end of the event
      loop(asynchronously). Let's assume count = 0 before clicking the button: setCount(0 + 1);
      → Schedules count = 1 setCount(0 + 1); → Again schedules count = 1
      setCount(0 + 1); → Again schedules count = 1 */}
      {/* <button
        onClick={() => {
          setCount(count + 1);
          setCount(count + 1);
          setCount(count + 1);
        }}
      >
        Increment by 3
      </button> */}

      <button
        onClick={() => {
          setCount((count) => count + 1);
          setCount((count) => count + 1);
          setCount((count) => count + 1);
        }}
      >
        Incrment by 3
      </button>
    </div>
  );
}

export default State1;
