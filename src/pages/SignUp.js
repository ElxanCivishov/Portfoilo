import { useState } from "react";
import { toast } from "react-toastify";
import { signUp } from "../config/Firebase";

import "./../components/css/auth.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");

  const register = () => {
    signUp(fullname, email, password)
      .then(() => {
        toast.success("Successfully registered!");
      })
      .catch((err) => {
        toast.error(err.message);
        setEmail("");
        setPassword("");
        setFullname("");
      });
  };
  return (
    <div>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <div className="form">
        <h3>Admin</h3>
        <label htmlFor="fullName">Fullname</label>
        <input
          type="text"
          placeholder="Fullname"
          id="fullName"
          value={fullname}
          required
          onChange={(e) => setFullname(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>

        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-btn" onClick={() => register()}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
