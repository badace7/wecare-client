import * as React from "react";
import LoginForm from "./LoginForm";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';


export default function LoginPage() {

  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch()

  const handleClick = async () => { 
    
  };


  try {
    const reponse = await userServices.signIn({email,password})
    const user = response.data

    localStorage.setItem('access-token', user.access_token)
    dispatch(login(user))
    navigate('/login')

  } catch(error:any) {

    setError(true)
  }
}

    return (
    <LoginForm/>
  )
}
