import { configureStore } from "@reduxjs/toolkit";
import candidateReducer from "./features/candidate/candidate";
import authReducer from "./features/auth/auth.slice";

export const store = configureStore({
  reducer: {
    candidate: candidateReducer,
    auth: authReducer,
  },
});
