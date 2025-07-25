import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";

//components
import UserLogger from "./components/UserLogger.jsx";

//admin pages
import Login from "./admin/Login.jsx";
import Dahsboard from "./admin/Dahsboard.jsx";

function App() {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dahsboard />} />

        {/* Toast Container for notifications */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
