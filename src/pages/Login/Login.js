import React, { useState } from 'react';
import './Login.css';
import InputBox from '../../components/InputBox/InputBox';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loader from '../../loader/Loader';
import { useUserContext } from '../../App';
import { renderApiLogin } from '../../utils/apiEndPoints';
import emailjs from '@emailjs/browser';

const intialLoginData = {
  usr_name: '',
  pswrd: '',
};
const serviceID = 'service_amiicyu';
const templateId = 'template_weylh1n';
const publicId = 'FOeBHDkgsZ4ZHObIp';

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
      const response = await axios.post(renderApiLogin, loginData);
      const { role } = response.data;
      setIsLogin(true);
      setRole(role);
      setIsLoading(false);
      emailjs
        .send(
          serviceID,
          templateId,
          {
            to_email: 'resooinc@gmail.com',
            from_name: loginData.usr_name,
          },
          publicId
        )
        .then((response) => {
          console.log('Email sent successfully', response);
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
      navigate('/');
    } catch (error) {
      console.log('Error submitting form:', error);
      setIsLoading(false);
      alert(error.response.data);
    }
    setIsLoading(false);
    setLoginData(intialLoginData);
  };

  return (
    <div className='Login'>
      <div className='Login__container'>
        <h1>Login</h1>
        {isLoading && <Loader />}
        <form className='Login__form'>
          <InputBox
            label='USER NAME'
            id='usr_name'
            type='text'
            value={loginData.usr_name}
            onChange={(e) => handleInputChange('usr_name', e.target.value)}
          />
          <InputBox
            label='PASSWORD'
            id='pswrd'
            type='password'
            value={loginData.pswrd}
            onChange={(e) => handleInputChange('pswrd', e.target.value)}
          />
        </form>
        <button className='Login__button' onClick={() => handleLoginSubmit()}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
