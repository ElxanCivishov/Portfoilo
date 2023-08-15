import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const location = useLocation().pathname;

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link
            to="/"
            className={
              location === "/resume"
                ? "navbar-link"
                : location === "/blog"
                ? "navbar-link"
                : location === "/portfolio"
                ? "navbar-link"
                : location === "/contact"
                ? "navbar-link"
                : "navbar-link active"
            }
          >
            About
          </Link>
        </li>

        <li className="navbar-item">
          <Link
            to="/resume"
            className={
              location === "/resume" ? "navbar-link  active" : "navbar-link"
            }
          >
            Resume
          </Link>
        </li>

        <li className="navbar-item">
          <Link
            to="portfolio"
            className={
              location === "/portfolio" ? "navbar-link  active" : "navbar-link"
            }
          >
            Portfolio
          </Link>
        </li>

        {/* <li className="navbar-item">
          <Link
            to="/blog"
            className={
              location === "/blog" ? "navbar-link  active" : "navbar-link"
            }
          >
            Blog
          </Link>
        </li> */}

        <li className="navbar-item">
          <Link
            to="contact"
            className={
              location === "/contact" ? "navbar-link  active" : "navbar-link"
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
