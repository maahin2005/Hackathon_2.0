import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  score: 0, // Default score value
};

export const candidateSlice = createSlice({
  name: "candidate",
  initialState,
  reducers: {
    setScore: (state, action) => {
      state.score = action.payload;
    },
  },
});

export const { setScore } = candidateSlice.actions;
export default candidateSlice.reducer;
