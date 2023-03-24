import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const location = useLocation().pathname;
  const [activeLink, setActiveLink] = useState("about");
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item" onClick={() => setActiveLink("about")}>
          <Link
            to="/"
            className={
              activeLink === "about" ? "navbar-link  active" : "navbar-link"
            }
          >
            About
          </Link>
        </li>

        <li className="navbar-item" onClick={() => setActiveLink("resume")}>
          <Link
            to="/resume"
            className={
              activeLink === "resume" ? "navbar-link  active" : "navbar-link"
            }
          >
            Resume
          </Link>
        </li>

        <li className="navbar-item" onClick={() => setActiveLink("portfolio")}>
          <Link
            to="portfolio"
            className={
              activeLink === "portfolio" ? "navbar-link  active" : "navbar-link"
            }
          >
            Portfolio
          </Link>
        </li>

        <li className="navbar-item" onClick={() => setActiveLink("blog")}>
          <Link
            to="/blog"
            className={
              activeLink === "blog" ? "navbar-link  active" : "navbar-link"
            }
          >
            Blog
          </Link>
        </li>

        <li className="navbar-item" onClick={() => setActiveLink("contact")}>
          <Link
            to="contact"
            className={
              activeLink === "contact" ? "navbar-link  active" : "navbar-link"
            }
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
