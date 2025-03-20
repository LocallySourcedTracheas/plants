import logo from './logo.svg';
import './App.css';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Home from "./pages/Home";
import About from "./pages/About";


function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<About />} /> */}
        <Route path="/" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
