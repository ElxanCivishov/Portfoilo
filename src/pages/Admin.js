import { signOut } from "firebase/auth";
import { auth } from "../config/Firebase";

const Admin = () => {
  const logout = () => {
    signOut(auth);
  };

  return (
    <button style={{ color: "red" }} onClick={() => logout()}>
      logout
    </button>
  );
};

export default Admin;
