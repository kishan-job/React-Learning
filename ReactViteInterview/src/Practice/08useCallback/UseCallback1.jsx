import React, { useCallback, useState } from "react";
import HeaderCallBack1 from "./HeaderCallBack1";
function UseCallback1() {
    const [count, setCount] = useState(0);
    // const newFn = () => { }
    // when ever component rerender due to state change due to click count ++ btn then the newFn will redefined in the memory so reference is diffence means props we are passing is also changed so header will rerendered
    
    const newFn = useCallback(() => { }, [])
    // useCallback is used to memoize the newFn function, which means it won’t be redefined in memory on every render. Since there are no dependencies, a new reference will never be created — the function will remain the same across all renders.
  return (
    <div>
          <HeaderCallBack1 Fn={ newFn} />
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Count ++</button>
    </div>
  );
}

export default UseCallback1;
