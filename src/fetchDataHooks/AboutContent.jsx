import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { doc, getDoc, onSnapshot } from "firebase/firestore";

import { aboutRef, profileRef, doingRef, storage } from "../config/Firebase";

import { setAbout, setSkillsLogo } from "../redux/aboutSlice";
import { setDoingItems } from "../redux/aboutDoingSlice";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { toast } from "react-toastify";
import { setProfile } from "../redux/profileSlice";

// get fetch all profile
export const useProfileListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function check() {
      const docRef = doc(profileRef, "Xlg5upufdggVi2tyxBFy");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        let allData = { ...docSnap.data(), id: docSnap.id };
        // console.log("Document data:", docSnap.data(), id);
        dispatch(setProfile(allData));
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    check();
  }, [dispatch]);
};

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
