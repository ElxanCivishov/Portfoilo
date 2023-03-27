import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, onSnapshot, collection } from "firebase/firestore";

import { setAbout } from "../redux/aboutSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
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
export const db = getFirestore(app);

export const aboutRef = collection(db, "abouts");

export const useAboutListener = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    return onSnapshot(aboutRef, (snapshot) => {
      const docs = snapshot.docs.map((doc) => {
        const data = doc.data();
        return { id: doc.id, ...data, createDate: data.createDate?.toDate() };
      });
      dispatch(setAbout(docs));
    });
  }, []);
};
