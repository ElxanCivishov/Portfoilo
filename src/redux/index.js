import { configureStore } from "@reduxjs/toolkit";

import auth from "./authSlice";
import about from "./aboutSlice";
import doing from "./aboutDoingSlice";
import profile from "./profileSlice";

export const store = configureStore({
  reducer: {
    auth,
    about,
    doing,
    profile,
  },

  // this problem solving this code -> A non-serializable value was detected in the state, in the path: `about.draftAbout.createdAt`. Value: Sun Apr 02 2023 07:50:28 GMT+0400 (Azerbaijan Standard Time) Take a look at the reducer(s) handling this action type: about/changeDarftAboutContent.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
