import React, { useState } from "react";
import logo from "../googlelogo.png";
import axios from "axios";

export const Login = (props) => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
  };
  const helperfunc = async () => {
    console.log("button clicked");
    await axios
      .get("http://localhost:5000/api/oj/login/auth/google")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="auth-form-container">
      <h1>ONLINE JUDGE</h1>
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit} className="loginform">
        <label htmlFor="Username">Username</label>
        <input
          type="text"
          placeholder="utkarsh_y"
          id="Username"
          name="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="pass">Password</label>
        <input
          type="password"
          placeholder="*******"
          id="pass"
          name="pass"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <button className="submitbtn" type="submit">
          Login
        </button>
      </form>
      <button onClick={helperfunc} className="submitbtn2" type="submit">
        <img className="googleimg" src={logo}></img>
        Google
      </button>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register Here!!
      </button>
    </div>
  );
};
