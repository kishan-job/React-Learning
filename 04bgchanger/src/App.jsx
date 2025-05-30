import { useState } from "react";
import "./App.css";

function App() {
  const [color, setcolor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-5000"
        style={{ backgroundColor: color }}
      >
        <div className="flex flex-wrap justify-center fixed bottom-4 inset-x-0 ">
          <div className="flex flex-wrap justify-center px-4 py-2 bg-slate-300 gap-4 rounded-full">
            <button
              className="bg-red-500 px-4 py-2 rounded-full w-[80px]"
              onClick={() => setcolor("red")}
            >
              red
            </button>
            <button
              className="bg-blue-500 px-4 py-2 rounded-full w-[80px]"
              onClick={() => setcolor("blue")}
            >
              blue
            </button>
            <button
              className="bg-green-500 px-4 py-2 rounded-full w-[80px]"
              onClick={() => setcolor("green")}
            >
              green
            </button>
            <button
              className="bg-violet-500 px-4 py-2 rounded-full w-[80px]"
              onClick={() => setcolor("violet")}
            >
              violet
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
