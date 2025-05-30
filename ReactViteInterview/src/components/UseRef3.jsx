// Not preffered way

import React, { useRef, useEffect, useState } from "react";

function UseRef3() {
  const inputRef = useRef();
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const handleInput = () => {
      setDisplayText(inputRef.current.value);
    };

    const inputElement = inputRef.current;
      inputElement.addEventListener("input", handleInput);
    //   addEventListener call the handleInput

    // Cleanup listener on unmount
    return () => {
      inputElement.removeEventListener("input", handleInput);
      //removeEventListener tells the browser:

      // "Hey, remove that function (handleInput) you were using to respond to input events on the input field."
    };
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Type something..." />
      <h1>{displayText}</h1>
    </div>
  );
}

export default UseRef3;
