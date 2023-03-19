import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSmSlnz35NJvfDac_NGC_HeOzSH3GdXLw",
  authDomain: "portfoilodb.firebaseapp.com",
  databaseURL: "https://portfoilodb-default-rtdb.firebaseio.com",
  projectId: "portfoilodb",
  storageBucket: "portfoilodb.appspot.com",
  messagingSenderId: "242125248960",
  appId: "1:242125248960:web:1b9f88283622b227405025",
  measurementId: "G-0HFM1H0WFC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const signIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};
