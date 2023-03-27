import { configureStore } from "@reduxjs/toolkit";

import auth from "./authSlice";
import about from "./aboutSlice";

export const store = configureStore({
  reducer: {
    auth,
    about,
  },
});
