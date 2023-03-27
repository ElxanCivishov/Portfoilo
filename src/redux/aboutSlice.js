import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, deleteDoc } from "firebase/firestore";
import { aboutRef } from "../config/Firebase";

export const addAbout = createAsyncThunk(
  "about/addAbout",
  async (_, { getState }) => {
    addDoc(aboutRef, getState().about.draftAbout);


    
  }
);

const initialState = {
  draftAbout: {
    content: "",
  },

  abouts: [],
};
const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    changeDarftAboutContent: (state, action) => {
      state.draftAbout.content = action.payload;
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
});

export const {
  changeDarftAboutContent,
  clearDraftAbout,
  setDraftAbout,
  setAbout,
} = aboutSlice.actions;

export default aboutSlice.reducer;
