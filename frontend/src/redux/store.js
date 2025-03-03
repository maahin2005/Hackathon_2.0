import { configureStore } from "@reduxjs/toolkit";
import candidateReducer from "./features/candidate/candidate";

export const store = configureStore({
  reducer: {
    candidate: candidateReducer,
  },
});
