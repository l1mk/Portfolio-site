import "./App.css";
import React from "react"
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import About from "./pages/about/About";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
    </div>
  );
}

export default App;
