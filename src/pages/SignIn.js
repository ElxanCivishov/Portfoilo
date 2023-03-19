import { useState } from "react";
import { toast } from "react-toastify";
import { signIn } from "../config/Firebase";

import "./../components/css/auth.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    signIn(email, password)
      .then(() => {
        toast.success("Successfully logged");
      })
      .catch((err) => {
        toast.error("User not found");
        setEmail("");
        setPassword("");
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
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>

        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-btn" onClick={(e) => login(e)}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
