import { Link } from "react-router-dom";

import { MdEmail, MdDateRange, MdOutlineLocationOn } from "react-icons/md";
import { BsPhone } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import "./contact.css";

const Contact = ({ profile }) => {
  return (
    <div className="sidebar-info_more">
      <div className="separator"></div>

      <ul className="contacts-list">
        <li className="contact-item">
          <div className="icon-box">
            <MdEmail />
          </div>

          <div className="contact-info">
            <p className="contact-title">Email</p>
            <a href={`mailto:${profile.email}`} className="contact-link">
              {profile.email}
            </a>
          </div>
        </li>

        <li className="contact-item">
          <div className="icon-box">
            <BsPhone />
          </div>
          <div className="contact-info">
            <p className="contact-title">Phone</p>

            <a href={`tel:${profile.phone}`} className="contact-link">
              {profile.phone}
            </a>
          </div>
        </li>
        <li className="contact-item">
          <div className="icon-box">
            <MdDateRange />
          </div>
          <div className="contact-info">
            <p className="contact-title">Birthday</p>
            <span className="date">{profile.date}</span>
          </div>
        </li>
        <li className="contact-item">
          <div className="icon-box">
            <MdOutlineLocationOn />
          </div>
          <div className="contact-info">
            <p className="contact-title">Location</p>
            <span>{profile.location}</span>
          </div>
        </li>
      </ul>
      <div className="separator"></div>
      <ul className="social-list">
        <li className="social-item">
          <Link to="#" className="social-link">
            <FaFacebook />
          </Link>
        </li>
        <li className="social-item">
          <Link to="#" className="social-link">
            <FaTwitter />
          </Link>
        </li>
        <li className="social-item">
          <Link to="#" className="social-link">
            <FaInstagram />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
