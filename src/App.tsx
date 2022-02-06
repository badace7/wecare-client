import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router"
import Navbar from "./pages/partials/Navbar";
import Footer from "./pages/partials/Footer";
import { useEffect } from "react";
import http from "./services/config";
import { useSelector } from "react-redux";
import { userStore } from "./types/user.types";


import "./App.css";

function App() {


  const state = useSelector(initialState => initialState);

  // const state = useSelector(initialState => initialState); // TODO: Test TS Redux debug

  

  useEffect(() => {
    const access_token = localStorage.getItem('access_token');
    console.log(`!! access_token`,access_token);
    if(access_token) {
      const response = http.post(
        "http://localhost:3000/users/refresh-data"
        // ,
        // access_token,
      ).then((result) => {
        console.log(`!! set User: `, result);
      })
console.log(`@@! state`, state);

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


