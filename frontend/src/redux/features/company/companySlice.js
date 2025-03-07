import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

// Async thunk to fetch company details
export const fetchCompany = createAsyncThunk(
  "company/fetchCompany",
  async (recruiterId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/companies/recruiter/${recruiterId}`, {
        withCredentials: true, // Ensures cookies are sent with the request
      });
      // console.log("Company data:", response.data.data)
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error fetching company");
    }
  }
);

// Async thunk to add a new company
export const addCompany = createAsyncThunk(
  "company/addCompany",
  async (company, { rejectWithValue }) => {
    try {
      console.log("Sending company data:", company); // Debugging step

      const response = await axios.post(`${BASE_URL}/companies`, company, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json", // Ensure correct content type
        },
      });

      console.log("Response data:", response.data); // Debugging step
      if(response.data.success) return response.data.data;
    } catch (error) {
      console.error("Error adding company:", error.response?.data);
      return rejectWithValue(error.response?.data || "Error adding company");
    }
  }
);


const companySlice = createSlice({
  name: "company",
  initialState: {
    company: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearCompany: (state) => {
      state.company = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompany.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCompany.fulfilled, (state, action) => {
        state.loading = false;
        state.company = action.payload;
      })
      .addCase(fetchCompany.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addCompany.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCompany.fulfilled, (state, action) => {
        state.loading = false;
        state.company = action.payload;
      })
      .addCase(addCompany.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearCompany } = companySlice.actions;
export default companySlice.reducer;
