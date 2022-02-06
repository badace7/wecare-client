import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router"
import Navbar from "./pages/partials/Navbar";
import Footer from "./pages/partials/Footer";
import { useEffect } from "react";
import http from "./services/config";


import "./App.css";

function App() {

  useEffect(() => {
    const access_token = localStorage.getItem('access_token');
    if(access_token) {
      const response = http.post(
        "http://localhost:3000/users/refresh-data",
        access_token 
      );
    
    console.log(`app useEffect response:`, response);
    }
    // const refresh_token = localStorage.getItem('refresh_token');

  });

  return (
  <BrowserRouter>
    <Navbar />
    <AppRouter />
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
