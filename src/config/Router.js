import { Routes, Route } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import SignIn from "./../pages/SignIn";
import SignUp from "./../pages/SignUp";
import Resume from "../components/main/resume/Resume";
import MainLayout from "../layout/MainLayout";
import About from "../components/main/about/About";
import Portfolio from "../components/main/portfolio/Portfolio";
import Blog from "../components/main/blog/Blog";
import Contact from "../components/main/contact/Contact";
import AdminLayout from "../layout/AdminLayout";

import AboutAdmin from "../admin/pages/about/index";
import ResumeAdmin from "../admin/pages/Resume";
import Profile from "../admin/pages/Profile";
import Users from "../admin/pages/Users";
import PortfolioAdmin from "../admin/pages/Portfolio";
import BlogAdmin from "../admin/pages/Blog";
import ContactAdmin from "../admin/pages/Contact";

const Router = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/*" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
      </Route>

      {/* {isLoggedIn && ( */}
      <Route replace element={<AdminLayout />}>
        <Route path="/admin" element={<AboutAdmin />} />
        <Route path="/admin/Profile" element={<Profile />} />
        <Route path="/admin/resume" element={<ResumeAdmin />} />
        <Route path="/admin/portfolio" element={<PortfolioAdmin />} />
        <Route path="/admin/blog" element={<BlogAdmin />} />
        <Route path="/admin/contact" element={<ContactAdmin />} />
        <Route path="/admin/users" element={<Users />} />
      </Route>
      {/* )} */}
    </Routes>
  );
};

export default Router;
