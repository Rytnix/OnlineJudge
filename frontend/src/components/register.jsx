import React, { useState } from "react";

export const Register = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [fullname, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
  };
  return (
    <div className="auth-form-container">
      <h1>ONLINE JUDGE</h1>
      <h2>REGISTER</h2>
      <form onSubmit={handleSubmit} className="registerform">
        <label htmlFor="Username">Username</label>
        <input
          type="text"
          placeholder="utkarsh_y"
          id="Username"
          name="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="fullname">Full Name</label>
        <input
          type="text"
          placeholder="Utkarsh Yadav"
          id="fullname"
          name="fullname"
          value={fullname}
          onChange={(e) => setFullName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="abc@gmail.com"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          Register
        </button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login Here!!
      </button>
    </div>
  );
};
