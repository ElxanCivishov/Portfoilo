import { Navigate, Outlet } from "react-router-dom";
import { useLoggedIn } from "../config/hooks";

const AuthLayout = () => {
  const isLoggedIn = useLoggedIn();
  if (isLoggedIn === null) {
    return <h2 style={{ color: "white" }}>loading...</h2>;
  } else if (isLoggedIn === true) {
    return <Navigate replace to="/admin" />;
  }
  return <Outlet />;
};

export default AuthLayout;
