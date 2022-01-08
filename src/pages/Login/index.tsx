import * as React from "react";
import LoginForm from "./LoginForm";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { userServices } from "../../services";
import { login } from "../../store/actions/user.actions";
  import jwt_decode from "jwt-decode";
  import { userToken } from "../../types/user.types";
  import { useEffect } from "react";

// : JSX.Element
const LoginPage = () => {
//                        ^ Function should return this (component type)
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error , setError] = useState(false);

useEffect(() => {
console.log(`loginForm:`,email, password);


  return () => {
  }
}, [email, password])


  const dispatch = useDispatch()

  const handleClick = async () => { 
    try {
    
      const response = await userServices.signIn({email, password});
      // console.log(`response`, response);
      
      const user = response.data;
      // console.log(`USER DATA SERVICE`, user);
      
      
      // localStorage.setItem('access-token', user.access_token);

      
      dispatch(login(user));
      // console.log('dispatch(login ->) localStorage access token: ', localStorage.getItem('access-token'));

      // console.log('localStorage refresh token: ', localStorage.getItem('refresh-token'));
      // const decodedToken: userToken = jwt_decode(user.access_token);
      // console.log(`decodedToken ROLE >>>>>>> :`, decodedToken.role);
      navigate('/');
  
  
    } catch(error:any) {
      
      setError(true);

    }
  };


  
  return (
    <>
    <LoginForm
      error={error}
      setError={setError} 
      setEmail={setEmail} 
      setPassword={setPassword} 
      handleClick={handleClick} 
    />
    </>
    )
  }

export default LoginPage;
