import { configureStore } from "@reduxjs/toolkit";

// reducers
import authReducer from "./reducers/authSlice";

export const store = configureStore({
  reducer: { auth: authReducer }
});
