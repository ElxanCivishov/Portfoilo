import Contact from "./contact/Contact.jsx";
import Profile from "./profile/Profile.jsx";
import "./sidebar.css";
import { useState } from "react";

import { profile } from "../../data/data";

const Sidebar = () => {
  const [active, setActive] = useState(false);

  return (
    <aside className={active ? "active sidebar" : "sidebar"}>
      <Profile profile={profile} setActive={setActive} active={active} />
      <Contact profile={profile} />
    </aside>
  );
};

export default Sidebar;
