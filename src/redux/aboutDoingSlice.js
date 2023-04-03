import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";

import { aboutRef } from "../config/Firebase";
import { db } from "../config/Firebase";
import { toast } from "react-toastify";

export const addAboutDoing = createAsyncThunk(
  "doing/addAboutDoing",
  async (_, { getState }) => {
    await addDoc(aboutRef, getState().about.draftAbout);
  }
);

export const deleteAboutDoing = createAsyncThunk(
  "doing/deleteAboutDoing",
  async (id) => {
    await deleteDoc(doc(aboutRef, id));
  }
);

export const updateAbout = createAsyncThunk(
  "about/updateAbout",
  async ({ id, upatedData }) => {
    try {
      // Update the data in Firebase
      const updateAboutRef = doc(db, "abouts", id);
      await updateDoc(updateAboutRef, {
        content: upatedData,
        modifiedAt: new Date().toLocaleString(),
      });

      // Return the updated data as the fulfilled value of the promise
      return { id, upatedData };
    } catch (error) {
      toast.error(error);
    }
  }
);

const initialState = {
  draftAbout: {
    content: "",
    uid: "",
    createdAt: new Date().toLocaleString(),
    modifiedAt: "",
  },
  abouts: [],
  status: false,
};

const aboutSlice = createSlice({
  name: "doing",
  initialState,
  reducers: {
    changeDarftAboutContent: (state, action) => {
      state.draftAbout.content = action.payload.content;
      state.draftAbout.uid = action.payload.uid;
    },

    clearDraftAbout: (state) => {
      state.draftAbout = initialState.draftAbout;
    },

    setDraftAbout: (state, action) => {
      state.draftAbout = action.payload;
    },

    setAbout: (state, action) => {
      state.abouts = action.payload;
    },
  },
  // extraReducers: {
  //   [updateAbout.pending]: (state) => {
  //     state.status = "loading";
  //   },
  //   [updateAbout.fulfilled]: (state, action) => {
  //     toast.success("updated successfuly!");
  //     console.log(action.payload);
  //   },
  //   [updateAbout.rejected]: (state, action) => {
  //     state.status = "failed";
  //   },
  // },

  extraReducers: (builder) => {
    builder
      .addCase(addAbout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addAbout.rejected, (state) => {
        state.isLoading = false;
        toast.error("Something went wrong!");
      })
      .addCase(addAbout.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Added to database successfuly!");
      })
      .addCase(updateAbout.pending, (state) => {
        state.status = true;
      })
      .addCase(updateAbout.rejected, (state) => {
        state.isLoading = false;
        toast.error("Something went wrong!");
      })
      .addCase(updateAbout.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("updated from database successfuly!");
      })
      .addCase(deleteAbout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAbout.rejected, (state) => {
        state.isLoading = false;
        toast.error("Something went wrong!");
      })
      .addCase(deleteAbout.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Deleted from database successfuly!");
      });
  },
});

export const {
  changeDarftAboutContent,
  clearDraftAbout,
  setDraftAbout,
  setAbout,
} = aboutSlice.actions;

export default aboutSlice.reducer;
