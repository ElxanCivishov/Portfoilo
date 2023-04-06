import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, deleteDoc, doc, setDoc, updateDoc } from "firebase/firestore";

import { db, doingRef, storage } from "../config/Firebase";
import { toast } from "react-toastify";
import { deleteObject, ref } from "firebase/storage";

export const addAboutDoing = createAsyncThunk(
  "doing/addAboutDoing",
  async (_, { getState }) => {
    await setDoc(doc(doingRef, `${Date.now()}`), getState().doing.draftDoing, {
      merge: true,
    });
  }
);

export const deleteDoing = createAsyncThunk(
  "doing/deleteDoing",
  async ({ id, imageUrl }) => {
    const deleteRef = ref(storage, imageUrl);
    await deleteDoc(doc(doingRef, id)).then(() => {
      deleteObject(deleteRef).then(() => {});
    });
  }
);

export const updateAboutDoing = createAsyncThunk(
  "about/updateAboutDoing",
  async ({ id, ...upatedData }) => {
    try {
      // Update the data in Firebase
      const updateAboutRef = doc(db, "doingItems", id);
      await updateDoc(updateAboutRef, {
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
  draftDoing: {
    id: `${Date.now()}`,
    imageUrl: "",
    title: "",
    content: "",
    uid: "",
    createdAt: new Date().toLocaleString(),
    modifiedAt: "",
  },
  doingItems: [],
  status: false,
};

const aboutDoingSlice = createSlice({
  name: "doing",
  initialState,
  reducers: {
    changeDarftDoingImageUrl: (state, action) => {
      state.draftDoing.imageUrl = action.payload.imageUrl;
      state.draftDoing.uid = action.payload.uid;
    },
    changeDarftDoingTitle: (state, action) => {
      state.draftDoing.title = action.payload;
      console.log(action.payload);
    },
    changeDarftDoingContent: (state, action) => {
      state.draftDoing.content = action.payload;
      console.log(action.payload);
    },

    // clearDraftAbout: (state) => {
    //   state.draftAbout = initialState.draftAbout;
    // },

    // setDraftAbout: (state, action) => {
    //   state.draftAbout = action.payload;
    // },

    setDoingItems: (state, action) => {
      state.doingItems = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(addAboutDoing.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addAboutDoing.rejected, (state) => {
        state.isLoading = false;
        toast.error("Something went wrong!");
      })
      .addCase(addAboutDoing.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Added to database successfuly!");
      })
      // .addCase(updateAbout.pending, (state) => {
      //   state.status = true;
      // })
      // .addCase(updateAbout.rejected, (state) => {
      //   state.isLoading = false;
      //   toast.error("Something went wrong!");
      // })
      // .addCase(updateAbout.fulfilled, (state) => {
      //   state.isLoading = false;
      //   toast.success("updated from database successfuly!");
      // })
      .addCase(deleteDoing.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteDoing.rejected, (state) => {
        state.isLoading = false;
        toast.error("Something went wrong!");
      })
      .addCase(deleteDoing.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Deleted from database successfuly!");
      });
  },
});

export const {
  changeDarftDoingTitle,
  changeDarftDoingImageUrl,
  changeDarftDoingContent,
  setDoingItems,
} = aboutDoingSlice.actions;

export default aboutDoingSlice.reducer;
