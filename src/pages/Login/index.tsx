import * as React from "react";
import LoginForm from "./LoginForm";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { userServices } from "../../services";
import { login } from "../../store/actions/user.actions";


// : JSX.Element
const LoginPage = () => {
//                        ^ Function should return this (component type)
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error , setError] = useState(false);


  const dispatch = useDispatch()

  const handleClick = async () => { 
    try {
    
      const response = await userServices.signIn({email, password});
      const user = response.data;
      
      localStorage.setItem('access-token', user.access_token);
      dispatch(login(user));
  
      navigate('/login');
  
  
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
