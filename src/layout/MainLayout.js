import { Outlet } from "react-router-dom";
import Navbar from "../components/main/navbar/Navbar";

import Sidebar from "../components/sidebar/Sidebar";

const MainLayout = () => {
  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <Outlet />
      </div>
    </main>
  );
};

export default MainLayout;
