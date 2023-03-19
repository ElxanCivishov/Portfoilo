import Contact from "./contact/Contact.jsx";
import Profile from "./profile/Profile.jsx";

const Sidebar = () => {
  const profile = {
    photo: "",
    fullName: "Richard hanrick",
    job: "Web Developer",
    email: "richard@example.com",
    phone: "0557655463",
    date: "1982-12-06",
    location: "Sacramento, California, USA",
  };
  return (
    <aside className="sidebar" data-sidebar>
      <Profile profile={profile} />
      <Contact profile={profile} />
    </aside>
  );
};

export default Sidebar;
