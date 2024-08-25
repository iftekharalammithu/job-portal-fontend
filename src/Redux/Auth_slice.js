import { createSlice } from "@reduxjs/toolkit";

const auth_slice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
  },
  reducers: {
    setloading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setloading } = auth_slice.actions;
export default auth_slice.reducer;
