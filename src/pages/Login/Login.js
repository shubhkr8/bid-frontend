import React, { useState } from "react";
import "./Login.css";
import InputBox from "../../components/InputBox/InputBox";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../../loader/Loader";
import { useUserContext } from "../../App";

const intialLoginData = {
  usr_name: "",
  pswrd: "",
};

const Login = () => {
  const [loginData, setLoginData] = useState(intialLoginData);
  const { setIsLogin, setRole } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleInputChange = (fieldName, value) => {
    setLoginData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleLoginSubmit = async () => {
    console.log(loginData);
    setIsLoading(true);
    try {
      // const response = await axios.post(
      //   "http://localhost:5000/api/login",
      //   loginData
      // );
      const response = await axios.post(
        "https://giant-cyan-camel.cyclic.app/api/login",
        loginData
      );
      const { role } = response.data;
      setIsLogin(true);
      setRole(role);
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      console.log("Error submitting form:", error);
      setIsLoading(false);
      alert(error.response.data);
    }
    setIsLoading(false);
    setLoginData(intialLoginData);
  };

  return (
    <div className="Login">
      <div className="Login__container">
        <h1>Login</h1>
        {isLoading && <Loader />}
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
  );
};

export default Login;
