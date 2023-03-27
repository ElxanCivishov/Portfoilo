import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../admin/sidebar/Sidebar";
import { useLoggedIn } from "../config/hooks";

const AdminLayout = () => {
  const isLoggedIn = useLoggedIn();
  console.log(isLoggedIn);
  if (isLoggedIn === null) {
    return <h2 style={{ color: "white" }}>loading...</h2>;
  } else if (isLoggedIn === false) {
    return <Navigate replace to="/" />;
  } else if (isLoggedIn === true) {
    return (
      <div
        style={{
          width: "calc(100vw - 240px)",
          marginLeft: "auto",
          padding: "20px",
          background: "#fff",
          minHeight: "100vh",
        }}
      >
        <Sidebar />
        <Outlet />
      </div>
    );
  }
};

export default AdminLayout;
