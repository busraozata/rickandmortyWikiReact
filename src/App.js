import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import { Routes, Route } from "react-router-dom";
import Location from "./Pages/Location";
import Episodes from "./Pages/Episodes";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </>
  );
}

export default App;
