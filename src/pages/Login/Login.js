import React, { useState } from "react";
import "./Login.css";
import InputBox from "../../components/InputBox/InputBox";
import Header from "../../components/Header/Header";

const intialLoginData = {
  usr_name: "",
  pswrd: "",
};

const Login = () => {
  const [loginData, setLoginData] = useState(intialLoginData);
  const handleInputChange = (fieldName, value) => {
    setLoginData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleLoginSubmit = () => {
    console.log(loginData);
    setLoginData(intialLoginData);
  };

  return (
    <>
      <Header />
      <div className="Login">
        <div className="Login__container">
          <h1>Login</h1>
          <form className="Login__form">
            <InputBox
              label="USER NAME"
              id="usr_name"
              type="text"
              value={loginData.usr_name}
              onChange={(e) => handleInputChange("usr_name", e.target.value)}
            />
            <InputBox
              label="PASSWORD"
              id="pswrd"
              type="password"
              value={loginData.pswrd}
              onChange={(e) => handleInputChange("pswrd", e.target.value)}
            />
          </form>
          <button className="Login__button" onClick={() => handleLoginSubmit()}>
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
