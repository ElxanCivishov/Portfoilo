import { Routes, Route } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import { useLoggedIn } from "./hooks";
import Home from "./../pages/Home";
import Admin from "./../pages/Admin";
import SignIn from "./../pages/SignIn";
import SignUp from "./../pages/SignUp";

const Router = () => {
  const isLoggedIn = useLoggedIn();

  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
      </Route>
      {isLoggedIn && <Route path="/admin" element={<Admin />} />}
    </Routes>
  );
};

export default Router;
