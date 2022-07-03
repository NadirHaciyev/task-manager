import { createSlice } from "@reduxjs/toolkit";

const hasMe = localStorage.me ? JSON.parse(localStorage.me) : false;
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    me: hasMe
  },
  reducers: {
    addMe: (state, action) => {
      state.me = action.payload;
      localStorage.me = JSON.stringify(action.payload);
    },
    removeMe: (state, action) => {
      state.me = false;
      localStorage.removeItem("me");
    }
  }
});

export const { addMe, removeMe } = authSlice.actions;

export default authSlice.reducer;
