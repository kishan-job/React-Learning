import React from "react";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import CustomContent from "./components/CustomContent";
import Card4 from "./components/Card4";
import Card5 from "./components/Card5";

function App() {
  return (
    <div>
      <Card1>
        <p>kishan</p>
      </Card1>
      <Card2 content={<CustomContent />} />
      <Card3 content={<CustomContent />} />
      <Card4 content={CustomContent} />
      <Card5 content={ CustomContent} />
    </div>
  );
}

export default App;
