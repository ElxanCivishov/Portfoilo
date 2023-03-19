import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";

export const useLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
  }, []);

  return isLoggedIn;
};
