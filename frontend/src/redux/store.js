import { configureStore } from "@reduxjs/toolkit";
import candidateReducer from "./features/candidate/candidate";
import companyReducer from "./features/company/companySlice";
import authReducer from "./features/auth/auth.slice";

export const store = configureStore({
  reducer: {
    user: candidateReducer,
    auth: authReducer,
    company: companyReducer
  },
});
