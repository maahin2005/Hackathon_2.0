import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  score: 0,
  githubId: "",
  githubUsername: "",
  githubProfile: "",
  candidateName: "",
  email: "",
  createdAt: "",
  updatedAt: "",
  _id: "",
};

export const candidateSlice = createSlice({
  name: "candidate",
  initialState,
  reducers: {
    setScore: (state, action) => {
      state.score = action.payload;
    },

    setGithubProfile: (state, action) => {
      const { githubId, githubUsername, profileImage } = action.payload;
      state.githubId = githubId;
      state.githubUsername = githubUsername;
      state.githubProfile = profileImage;
    },

    setCandidateData: (state, action) => {
      const { name, email, createdAt, updatedAt, _id } = action.payload;

      state.candidateName = name;
      state.email = email;
      state.createdAt = createdAt;
      state.updatedAt = updatedAt;
      state._id = _id;
    },

    removeProfile: (state) => {
      state.score = 0;
      state.githubId = "";
      state.githubUsername = "";
      state.githubProfile = "";
      state.candidateName = "";
      state.email = "";
    },
  },
});

export const { setScore, setGithubProfile, removeProfile, setCandidateData } =
  candidateSlice.actions;
export default candidateSlice.reducer;
