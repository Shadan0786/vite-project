import { useState } from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import BrowseCars from "./pages/BrowseCars";
import MyRentals from "./pages/MyRentals";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<BrowseCars />} />
          <Route path="/my-rentals" element={<MyRentals />} />
          <Route path="*" element={<div className="text-center mt-10">Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

