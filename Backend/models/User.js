import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    bio: { type: String },
    experienceInYear: { type: Number },
    heading: { type: String },
    areasOfExpertise: { type: [String] },
    email: { type: String, required: true, unique: true },
    profileImage: { type: String, required: true },
    googleId: { type: String, default: null },
    githubId: { type: String, default: null },
    githubUsername: { type: String },
    topRepos: { type: [{ String }], default: [] },
    categoryType: { type: String },
    score: { type: Number, default: 0 },
    role: {
      type: String,
      enum: ["jobseeker", "recruiter"],
      required: true,
    },
  },
  { timestamps: true }
);
const UserModel = mongoose.model("User", userSchema);

export default UserModel;
