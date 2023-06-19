import React, { useState } from "react";
import "./App.css";
import { Login } from "./components/login";
import { Register } from "./components/register";

function App() {
  const [currform, setCurrFrom] = useState("login");
  const toggleForm = (formname) => {
    setCurrFrom(formname);
  };
  return (
    <div className="App">
      {currform === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default App;
