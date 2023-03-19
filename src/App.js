import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Index from "./components";
import Login from "./components/auth/Login";
import Admin from "./components/admin/Admin.jsx";

import "react-toastify/dist/ReactToastify.css";
import Register from "./components/auth/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={5000} theme="light" />
      <ToastContainer />
    </div>
  );
}

export default App;
