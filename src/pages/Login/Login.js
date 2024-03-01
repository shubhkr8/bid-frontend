import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Login</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="user Name" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
      </div>
    </div>
  );
};

export default Login;
