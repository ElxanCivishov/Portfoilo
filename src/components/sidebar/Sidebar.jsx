import Contact from "./contact/Contact.jsx";
import Profile from "./profile/Profile.jsx";
import "./sidebar.css";
import { useState } from "react";

const Sidebar = () => {
  const [active, setActive] = useState(false);

  const profile = {
    photo: "",
    fullName: "Richard hanrick",
    job: "Web Developer",
    email: "elseveraassca@gmail.com",
    phone: "0557655463",
    date: "1982-12-06",
    location: "Sacramento, California, USA",
  };
  return (
    <aside className={active ? "active sidebar" : "sidebar"}>
      <Profile profile={profile} setActive={setActive} active={active} />
      <Contact profile={profile} />
    </aside>
  );
};

export default Sidebar;
