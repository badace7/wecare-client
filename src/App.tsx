import React from "react";
import Navbar from "./pages/partials/Navbar";
import Footer from "./pages/partials/Footer";

import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router"
import http from "./services/config";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { userStore } from "./types/user.types";
import { useDispatch } from "react-redux";

import { getAuthenticatedUser } from "./store/actions/user.actions";

import { user } from "./types/user.types";


import "./App.css";

function App() {

  const dispatch = useDispatch();


  const state = useSelector(initialState => initialState);

  // const state = useSelector(initialState => initialState); // TODO: Test TS Redux debug

  
// if token exists in localStorage
// get user data from api
// set user data to redux

  useEffect(() => {
    const access_token = localStorage.getItem('access_token');
    console.log(`!! access_token`,access_token);
    if(access_token) {
      const response = http.post(
        "http://localhost:3000/users/refresh-data"
        // ,
        // access_token,
      ).then((result) => {
        const user: user = result.data;
        dispatch(getAuthenticatedUser(user));


      })



      // const {user} = state;
      // console.log(`!! initialState`, user);
      
 // log userData on app load
// user 

// TODO -> get userData from Redux store <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<





    // const reduxState = getState();
    // console.log(`redux store state: `, reduxState);
    // const userLoggedIn = state.currentUser.isLogged;



      // setUser
    
    // console.log(`!! app load setUser response:`, response);
    }
    // console.log(`@@ app load`);

    // const refresh_token = localStorage.getItem('refresh_token');

  }, []);

  return (
  <BrowserRouter>
    <Navbar />
    <AppRouter />
    <Footer/>
  </BrowserRouter>
  );
}

export default App;


