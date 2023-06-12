import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import MySkills from "./pages/MySkills";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import "./Style/style.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
      <Route path="/skills" element={<MySkills />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
