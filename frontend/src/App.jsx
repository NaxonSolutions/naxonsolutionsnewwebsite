import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Getstarted from "./Pages/Getstarted";
const App = () => {
  return (
    <div className="bg-gray-200">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getstarted" element={<Getstarted />} />
      </Routes>
    </div>
  );
};

export default App;
