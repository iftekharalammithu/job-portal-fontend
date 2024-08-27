import { createSlice } from "@reduxjs/toolkit";

const auth_slice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user: null,
  },
  reducers: {
    setloading: (state, action) => {
      state.loading = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setloading, setUser } = auth_slice.actions;

export default auth_slice.reducer;
