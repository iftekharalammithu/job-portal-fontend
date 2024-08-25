import { configureStore } from "@reduxjs/toolkit";
import Auth_slice from "./Auth_slice";

const store = configureStore({
  reducer: {
    Auth_slice: Auth_slice,
  },
});

export default store;
