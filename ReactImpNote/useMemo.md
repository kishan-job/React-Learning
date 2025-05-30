# useMemo hook returns the memoized value. useMemo hook run when the dependencies of the hook changes


usememo hook reduces the execution of function call inside the fucntional component if there is no change in the dependences, when there is new render occurs.

# Yes, that's correct. The useMemo hook in React is a powerful tool for optimizing performance by memoizing the result of a function. It helps avoid unnecessary re-calculations of expensive computations within functional components.

usecallback hook reduces the function creation when we pass the fucntion as the prop to the funcitonal component.


Show drafts


# That's correct. useCallback prevents unnecessary function re-creation when passing functions as props to components. This is especially useful when dealing with functions that are expensive to create or are frequently passed as props.

import { useState,useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  const power = (num) => {
    console.log("This function is called only when num changes");
    return Math.pow(num, 3);
  };

  const callPower = useMemo(() => { return power(num) },[num]); // Calculate power on each render

  const handleCountIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />
      <h1>power is {callPower}</h1>
      <h1>count {count}</h1>
      <button onClick={handleCountIncrement}>Increment Count</button>
    </div>
  );
}

export default App;
