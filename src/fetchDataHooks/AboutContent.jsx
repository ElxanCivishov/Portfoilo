import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { onSnapshot } from "firebase/firestore";

import { aboutRef, doingRef, storage } from "../config/Firebase";

import { setAbout, setSkillsLogo } from "../redux/aboutSlice";
import { setDoingItems } from "../redux/aboutDoingSlice";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { toast } from "react-toastify";

// get fetch all about contexts
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

// get fetch all doing items
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

// get fetch all skills logo
export const useAboutSkillsListener = () => {
  const imageListRef = ref(storage, "Skills/");
  const dispatch = useDispatch();

  useEffect(() => {
    listAll(imageListRef)
      .then((response) => {
        response.items.map((item) => {
          getDownloadURL(item).then((url) => {
            dispatch(setSkillsLogo(url));
          });
        });
      })
      .catch((err) => toast.error(err));
  }, [dispatch]);
};
