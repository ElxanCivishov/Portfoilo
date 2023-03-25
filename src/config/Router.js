import { Routes, Route } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import { useLoggedIn } from "./hooks";
import Admin from "./../pages/Admin";
import SignIn from "./../pages/SignIn";
import SignUp from "./../pages/SignUp";
import Resume from "../components/main/resume/Resume";
import MainLayout from "../layout/MainLayout";
import About from "../components/main/about/About";
import Portfolio from "../components/main/portfolio/Portfolio";
import Blog from "../components/main/blog/Blog";

const Router = () => {
  const isLoggedIn = useLoggedIn();

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/*" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
        </Route>
        {isLoggedIn && <Route path="/admin" element={<Admin />} />}
      </Routes>
    </>
  );
};

export default Router;
