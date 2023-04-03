import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { onSnapshot } from "firebase/firestore";

import { aboutRef } from "../config/Firebase";

import { setAbout } from "../redux/aboutSlice";

export const useAboutListener = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    return onSnapshot(aboutRef, (snapshot) => {
      const docs = snapshot.docs
        .sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1))
        .map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
      dispatch(
        setAbout(
          docs.sort((a, b) => {
            return a - b;
          })
        )
      );
    });
  }, [dispatch]);
};
