import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { decodeToken } from "../../../utils/decodeToken";

// Helper function to check if token exists in cookies
const token = Cookies.get("token");
const decoded = decodeToken(token);

const checkAuth = () => {
  return !!token; // Returns true if token exists, false otherwise
};

const initialState = {
  isAuthenticated: checkAuth(),
  token: token || null,
  role: decoded?.success ? decoded.data.userRole : null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      Cookies.remove("token");
      state.isAuthenticated = false;
      state.token = null;
      state.role = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
