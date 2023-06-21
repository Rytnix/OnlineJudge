import React, { useState, useEffect } from "react";
import "./App.css";
import { Login } from "./components/login";
import { Register } from "./components/register";
import Home from "./Home";
import axios from "axios";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/index";

function App() {
  const [user, setUser] = useState(null);
  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/api/oj/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      setUser(data.user._json);
    } catch (err) {
      console.log(err);
    }
  };
  const [currform, setCurrFrom] = useState("login");
  const toggleForm = (formname) => {
    setCurrFrom(formname);
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="App">
      {/* {currform === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )} */}
      <Routes>
        <Route
          exact
          path="/"
          element={user ? <Home user={user} /> : <Navigate to="/login" />}
        />
        <Route
          exact
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
    </div>
  );
}

export default App;
