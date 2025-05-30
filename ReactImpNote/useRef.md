# useRef hook is allowed to create a mutable variable, which is not allowed to rerender the component. In usestate component is rerender if there is any change to state variable.
# useRef is allowed to select the domElement.

# In useEffect will run the call back when the page is rendered. if we use the state varible there is any change in the state variable then it will be rerendered even we didn't use in the UI. so useEffect will run the call back when there is any change to the state variable. "Because of this we use useRef"

# useRef returns an object that contains a current property. This current property can hold any value, including a DOM element, an object, or a primitive value. 

import React, { useState, useRef, useEffect } from 'react';

function App() {
  const myRef = useRef(0);
  const [count, setCount] = useState(0);


  const handleClick = () => {
    myRef.current++;
    setCount(myRef.current);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default App;