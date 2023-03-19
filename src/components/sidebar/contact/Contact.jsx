import { Link } from "react-router-dom";

import { MdEmail, MdDateRange, MdOutlineLocationOn } from "react-icons/md";
import { BsPhone } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = ({ profile }) => {
  return (
    <div class="sidebar-info_more">
      <div class="separator"></div>

      <ul class="contacts-list">
        <li class="contact-item">
          <div class="icon-box">
            <MdEmail />
          </div>

          <div class="contact-info">
            <p class="contact-title">Email</p>
            <a href={`mailto:${profile.email}`} class="contact-link">
              {profile.email}
            </a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <BsPhone />
          </div>
          <div class="contact-info">
            <p class="contact-title">Phone</p>

            <a href={`tel:${profile.phone}`} class="contact-link">
              {profile.phone}
            </a>
          </div>
        </li>
        <li class="contact-item">
          <div class="icon-box">
            <MdDateRange />
          </div>
          <div class="contact-info">
            <p class="contact-title">Birthday</p>
            <time dateTime={profile.date}>{profile.date}</time>
          </div>
        </li>
        <li class="contact-item">
          <div class="icon-box">
            <MdOutlineLocationOn />
          </div>
          <div class="contact-info">
            <p class="contact-title">Location</p>
            <address>{profile.location}</address>
          </div>
        </li>
      </ul>
      <div class="separator"></div>
      <ul class="social-list">
        <li class="social-item">
          <Link to="#" class="social-link">
            <FaFacebook />
          </Link>
        </li>
        <li class="social-item">
          <Link to="#" class="social-link">
            <FaTwitter />
          </Link>
        </li>
        <li class="social-item">
          <Link to="#" class="social-link">
            <FaInstagram />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
