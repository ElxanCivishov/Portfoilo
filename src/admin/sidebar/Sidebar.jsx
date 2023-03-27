import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";
import { AiOutlineUser } from "react-icons/ai";
import { GrProjects, GrBlog } from "react-icons/gr";
import { MdContactMail, MdLogout } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { GoInfo } from "react-icons/go";
import { BsFileRuled } from "react-icons/bs";

import { useLocation } from "react-router-dom";

import "./sidebar.css";

import myAvatar from "../../images/my-avatar.png";
const Sidebar = () => {
  const dispatch = useDispatch();

  const location = useLocation().pathname;

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="sidebar-container">
      <div className="sidebar-wrapper">
        <div className="top">
          <div className="title">
            <p>
              P<span>O</span>rtf<span>O</span>li<span>O</span>
            </p>
          </div>
          <div className="logo">
            <div className="logo-wrapper">
              <img src={myAvatar} alt="logo" />
            </div>
          </div>
        </div>
        <hr />

        <ul className="menu-inner">
          <li
            className={
              location === "/admin/profile" ? "menu-item active" : "menu-item"
            }
          >
            <Link to="/admin/profile">
              <span>
                <AiOutlineUser />
              </span>
              <h3>Profile</h3>
            </Link>
          </li>
          <li
            className={location === "/admin" ? "menu-item active" : "menu-item"}
          >
            <Link to="/admin">
              <span>
                <GoInfo />
              </span>
              <h3>About</h3>
            </Link>
          </li>
          <li
            className={
              location === "/admin/resume" ? "menu-item active" : "menu-item"
            }
          >
            <Link to="/admin/resume">
              <span>
                <BsFileRuled />
              </span>
              <h3>Resume</h3>
            </Link>
          </li>
          <li
            className={
              location === "/admin/portfolio" ? "menu-item active" : "menu-item"
            }
          >
            <Link to="/admin/portfolio">
              <span>
                <GrProjects />
              </span>
              <h3>Portfolio</h3>
            </Link>
          </li>
          <li
            className={
              location === "/admin/blog" ? "menu-item active" : "menu-item"
            }
          >
            <Link to="/admin/blog">
              <span>
                <GrBlog />
              </span>
              <h3>Blog</h3>
            </Link>
          </li>
          <li
            className={
              location === "/admin/contact" ? "menu-item active" : "menu-item"
            }
          >
            <Link to="/admin/contact">
              <span>
                <MdContactMail />
              </span>
              <h3>Contact</h3>
            </Link>
          </li>
          <li
            className={
              location === "/admin/users" ? "menu-item active" : "menu-item"
            }
          >
            <Link to="/admin/users">
              <span>
                <FaUsers />
              </span>
              <h3>Users</h3>
            </Link>
          </li>
          <li className="menu-item" onClick={() => handleLogout()}>
            <Link to="/">
              <span>
                <MdLogout />
              </span>
              <h3>Logout</h3>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
