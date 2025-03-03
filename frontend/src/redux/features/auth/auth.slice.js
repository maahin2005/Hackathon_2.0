import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

// Helper function to check if token exists in cookies
const checkAuth = () => {
  const token = Cookies.get("token");
  return !!token; // Returns true if token exists, false otherwise
};

const initialState = {
  isAuthenticated: checkAuth(),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      Cookies.remove("token"); // Remove token from cookies
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
