import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => {
    state.auth.status;
  });
  const navigate = useNavigate();

  const navItems = [
    {
      path: "/",
      name: "Home",
      status: true,
    },
    {
      path: "/login",
      name: "Login",
      status: !authStatus,
    },
    {
      path: "/signup",
      name: "Signup",
      status: !authStatus,
    },
    {
      path: "/allposts",
      name: "All Posts",
      status: authStatus,
    },
    {
      path: "/addpost",
      name: "Add Post",
      status: authStatus,
    },
  ];

  return (
    <header className="bg-orange-400 py-3 ">
      <nav className="container mx-auto px-2 flex">
        <div className="mr-6">logo</div>
        <ul className="flex  ml-auto">
          {navItems.map((item) =>
            item.status ? (
              <li key={item.name}>
                <button
                  className=" px-6 py-2 hover:bg-orange-100 rounded-full"
                  onClick={() => {
                    navigate(item.path);
                  }}
                >
                  {item.name}
                </button>
              </li>
            ) : null
          )}

          {authStatus && (
            <li>
              <LogOutBtn />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

// import React from 'react'

// function Header() {
//   return (
//     <div>
//       head
//     </div>
//   )
// }

// export default Header
