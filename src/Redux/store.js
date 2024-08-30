import { configureStore } from "@reduxjs/toolkit";
import Auth_slice from "./Auth_slice";
import jobSlice from "./jobSlice";

const store = configureStore({
  reducer: {
    Auth_slice: Auth_slice,
    job: jobSlice,
  },
});

export default store;
