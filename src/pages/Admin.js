import { useDispatch } from "react-redux";
import { logout } from "./../redux/authSlice";

const Admin = () => {
  const dispatch = useDispatch();

  const handleBtn = () => {
    dispatch(logout());
  };

  return (
    <button style={{ color: "red" }} onClick={() => handleBtn()}>
      logout
    </button>
  );
};

export default Admin;
