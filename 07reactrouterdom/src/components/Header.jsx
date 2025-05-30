import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>header</h1>
      <nav>
        <div>
          <Link to="/">Home</Link>
          {/* <Route index element={<Home />} />  we can also use index here in home*/}
          <Link to="/about">About</Link>
          <Link to="/git">Git</Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
