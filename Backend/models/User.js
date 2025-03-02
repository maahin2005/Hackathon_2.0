// server/models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    profileImage: { type: String, required: true },
    googleId: { type: String, default: null },
    githubId: { type: String, default: null },
    githubUsername: { type: String },
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
