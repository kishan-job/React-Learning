import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <div>Header</div>
      <Link to="/">Home</Link>    {/* <Route index element={<Home />} />  we can also use index here in home*/}
      <Link to="/git">Git</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Header;
