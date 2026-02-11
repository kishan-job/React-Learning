import { PropPassing } from "./components/PropPassing";
import LastProp from "./components/LastProp";
import { useState } from "react";

function App() {
  const myArray = [1, 2, 3, 4, 5, 6, 7];
  const keyData = [
    {
      keyType: "Unique Data ID (e.g., item.id)",
      useSafe:
        "Always the best practice. Use when data source provides a stable, unique ID.",
      useUnsafe: "Never unsafe. This is the preferred method.",
      warning: "No",
    },
    {
      keyType: "Element Value (e.g., 'e')",
      useSafe:
        "When the list is static AND the values are guaranteed to be unique.",
      useUnsafe: "When the list is dynamic OR the values are repeated.",
      warning: "Yes (if values are repeated)",
    },
    {
      keyType: "Array Index (e.g., 'index')",
      useSafe:
        "Only when the list is perfectly static and has no components with internal state.",
      useUnsafe:
        "When the list is dynamic, can be filtered, sorted, or reordered.",
      warning: "No (but leads to bugs)",
    },
    {
      keyType: "Math.random() or Timestamp",
      useSafe: "Never use.",
      useUnsafe:
        "Always, as the key changes on every render, destroying/recreating the component.",
      warning: "No (but causes major performance issues)",
    },
  ];

  const [count, setCount] = useState(0);
  return (
    <>
      <h1>kishan</h1>
      <ul>
        {myArray.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
      <table>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              keyType
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              useSafe
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              useUnsafe
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              warning
            </th>
          </tr>
        </thead>
        <tbody>
          {keyData.map((keyProp, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {keyProp.keyType}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {keyProp.useSafe}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {keyProp.useUnsafe}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {keyProp.warning}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <PropPassing comp={<LastProp />} />

      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment by 1
        </button>
        <button
          onClick={() => {
           setCount(prevCount => prevCount + 1);
          setCount(prevCount => prevCount + 1);
          setCount(prevCount => prevCount + 1);
          }}
        >
          Increment by 3
        </button>
      </div>

      
    </>
  );
}
export default App;
