import React, { useCallback, useState } from "react";
import HeaderCallBack2 from "./HeaderCallBack2";

function UseCallback2() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Memoized function that depends on 'text'
  const newFn = useCallback(() => {
    return `Text is: ${text}`;
  }, [text]);

  return (
    <div>
      <HeaderCallBack2 Fn={newFn} />

      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
    </div>
  );
}

export default UseCallback2;
