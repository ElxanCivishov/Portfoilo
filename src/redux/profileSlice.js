import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { doc, updateDoc } from "firebase/firestore";

import { db } from "../config/Firebase";
import { toast } from "react-toastify";

export const updateProfile = createAsyncThunk(
  "profile/updateProfile",
  async ({ id, ...upatedData }) => {
    try {
      // Update the data in Firebase
      const profileRef = doc(db, "profile", id);
      await updateDoc(profileRef, {
        title: upatedData.title,
        content: upatedData.content,
        imageUrl: upatedData.imageUrl,
        modifiedAt: new Date().toLocaleString(),
      });

      // Return the updated data as the fulfilled value of the promise
      return { id, ...upatedData };
    } catch (error) {
      toast.error(error);
    }
  }
);

const initialState = {
  darftProfile: {
    imageUrl: "",
    fulname: "",
    position: "",
    email: "",
    phone: "",
    birthday: "",
    address: "",
  },
  profile: [],
  isLoading: false,
  status: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setDarfProfile: (state, action) => {
      state.Object.keys(action.payload)[0] = action.payload;
      console.log(Object.values(action.payload)[0]);
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(updateProfile.pending, (state) => {
        state.status = false;
        state.isLoading = true;
      })
      .addCase(updateProfile.rejected, (state) => {
        state.isLoading = false;
        state.status = false;
        toast.error("Something went wrong!");
      })
      .addCase(updateProfile.fulfilled, (state) => {
        state.isLoading = false;
        state.status = true;
        toast.success("updated from database successfuly!");
      });
  },
});

export const { setProfile, setDarfProfile } = profileSlice.actions;

export default profileSlice.reducer;
