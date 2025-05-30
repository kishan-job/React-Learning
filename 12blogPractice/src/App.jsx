import React, { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice.jsx";
import authService from "./appwrite/auth.js";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Checking current user status...");
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        console.log("Finished checking user status");
        setLoading(false);
      });
  }, [dispatch]);

  return loading ? null : (
    <div className="bg-red-700">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
