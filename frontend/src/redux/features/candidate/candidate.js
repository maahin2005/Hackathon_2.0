import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  name: "",
  email: "",
  profileImage: "",
  bio: "",
  experienceInYear: 0,
  heading: "",
  areasOfExpertise: [],
  githubId: "",
  githubUsername: "",
  score: 0,
  role: "", // "jobseeker" or "recruiter"
  company: null, // Only for recruiters
  createdAt: "",
  updatedAt: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setScore: (state, action) => {
      state.score = action.payload;
    },
    setUserData: (state, action) => {
      const {
        _id,
        name,
        email,
        profileImage,
        bio,
        experienceInYear,
        heading,
        areasOfExpertise,
        githubId,
        githubUsername,
        role,
        company,
        createdAt,
        updatedAt,
      } = action.payload;

      state._id = _id;
      state.name = name;
      state.email = email;
      state.profileImage = profileImage;
      state.bio = bio;
      state.experienceInYear = experienceInYear;
      state.heading = heading;
      state.areasOfExpertise = areasOfExpertise;
      state.githubId = githubId;
      state.githubUsername = githubUsername;
      state.role = role;
      state.company = company;
      state.createdAt = createdAt;
      state.updatedAt = updatedAt;
    },

    removeProfile: (state) => {
      Object.assign(state, initialState); // Reset to initial state
    },
  },
});

export const { setScore, setUserData, removeProfile } = userSlice.actions;
export default userSlice.reducer;
