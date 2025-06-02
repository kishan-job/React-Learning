import React from 'react';
import Header from './Header';

function App() {
  const navData = 'This is the navigation bar';

  return (
    <div>
      <h1>My App</h1>
      <Header nav={navData} />
    </div>
  );
}

export default App;