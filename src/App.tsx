import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router"
import Navbar from "./pages/partials/Navbar";
import Footer from "./pages/partials/Footer";


import "./App.css";

function App() {
  return (
  <BrowserRouter>
    <Navbar />
    <AppRouter />
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
