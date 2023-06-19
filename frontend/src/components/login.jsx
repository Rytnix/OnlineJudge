import React, { useState } from "react";
export const Login = (props) => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
      <button onClick={() => props.onFormSwitch("register")}>
        Don't have an account? Register Here!!
      </button>
    </>
  );
};
