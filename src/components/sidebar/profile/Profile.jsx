import "./profile.css";

import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import logo from "../../../images/my-avatar.png";

const Profile = ({ profile, setActive, active }) => {
  return (
    <>
      <div className="sidebar-info">
        <div className="avatar-box">
          <img src={logo} alt={profile.fullName} width="80" />
        </div>
        <div className="info-content">
          <h1 className="name" title={profile.fullName}>
            {profile.fullName}
          </h1>
          <p className="title">{profile.job}</p>
        </div>
        <button className="info_more-btn" onClick={() => setActive(!active)}>
          {active ? (
            <>
              <span>Hide Contacts</span>
              <BiChevronUp />
            </>
          ) : (
            <>
              <span>Show Contacts</span>
              <BiChevronDown />
            </>
          )}
        </button>
      </div>
    </>
  );
};

export default Profile;
