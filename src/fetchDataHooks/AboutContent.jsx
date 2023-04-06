import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { onSnapshot, orderBy } from "firebase/firestore";

import { aboutRef, doingRef } from "../config/Firebase";

import { setAbout } from "../redux/aboutSlice";
import { setDoingItems } from "../redux/aboutDoingSlice";

export const useAboutListener = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    return onSnapshot(aboutRef, (snapshot) => {
      const docs = snapshot.docs.map((doc) => {
        const data = doc.data();
        return { id: doc.id, ...data };
      });
      dispatch(setAbout(docs));
    });
  }, [dispatch]);
};

export const useAboutDoingListener = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    return onSnapshot(doingRef, (snapshot) => {
      const docs = snapshot.docs.map((doc) => {
        const data = doc.data();
        return { ...data, docId: doc.id };
      });
      dispatch(setDoingItems(docs));
    });
  }, [dispatch]);
};

// const items = await getDocs(
//   query(collection(db, "doingItems"), orderBy("id", "desc"))
// );
// return items.docs.map((doc) => doc.data());
