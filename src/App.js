import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./common/Navbar/Navbar";
import Home from "./components/pages/Home";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
