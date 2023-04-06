import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { db } from "./Firebase";

// Saving new item
export const saveItem = async (data) => {
  await setDoc(doc(db, "doingItems", `${Date.now()}`), data, { merge: true });
};

// getall food items
export const getAllDoingItems = async (data) => {
  const items = await getDocs(
    query(collection(db, "doingItems"), orderBy("id", "desc"))
  );
  return items.docs.map((doc) => doc.data());
};
