import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router"
import Navbar from "./pages/partials/Navbar";


import "./App.css";

function App() {
  return (
  <BrowserRouter>
    <Navbar />
    <AppRouter />
  </BrowserRouter>
  );
}

export default App;
