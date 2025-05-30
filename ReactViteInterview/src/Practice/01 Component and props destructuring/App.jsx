// compoenents are functions which are reusable

import React from "react";
import Header from "./components/Header";

function App() {
  const user = { name: "kishan", age: 25 };
  const nick = { nick1: "sii", nick2: "siri" };
  const courses = {
    course1: { course: "react js", price: 25 },
    course2: { course: "Angular", price: 58 },
  };
  const computer = {
    com1: "win",
    com2: "mac",
  };

  return (
    <div>
      <Header
        user={user}
        charac={{ height: 5.8, weight: 70 }}
        movies={{ movie1: "PK", movie2: "MB" }}
        nick={nick}
        color={{ color1: "black", color2: "white" }}
        {...courses} // Pass courses using the spread operator
        {...computer} // Pass computer using the spread operator
      />
    </div>
  );
}

export default App;