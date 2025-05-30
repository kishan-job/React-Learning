// import { useState } from "react";

// useState;
// function App() {
//   let [count, setCount] = useState(0);
  

//   return (
//     <>
//       <h1>The count is {count}</h1>
//       <button
//         onClick={() => {
//           setCount(count++);
//           console.log(count);
//           return count;
//         }}
//       >
//         Increment
//       </button>{" "}
      
//       <button onClick={() => {
//           setCount(count--);
//           console.log(count);
//           return count;
//         }}>Decrement</button>
//       <footer>The footer count {count}</footer>
//     </>
//   );
// }

// export default App;

import { useState } from "react";


function App() {
  
let count=0
  return (
    <>
      <h1>The count is {count}</h1>
      <button
        onClick={() => { count++; console.log(count);
        } }
      >
        Increment
      </button>{" "}
      
      
    </>
  );
}

export default App;

