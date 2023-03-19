import "./profile.css";

import { BiChevronDown } from "react-icons/bi";
import logo from "../../../images/my-avatar.png";

const Profile = ({ profile }) => {
  return (
    <>
      <div class="sidebar-info">
        <div class="avatar-box">
          <img src={logo} alt={profile.fullName} width="80" />
        </div>
        <div class="info-content">
          <h1 class="name" title={profile.fullName}>
            {profile.fullName}
          </h1>
          <p class="title">{profile.job}</p>
        </div>
        <button class="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>
          <BiChevronDown />
        </button>
      </div>
    </>
  );
};

export default Profile;
