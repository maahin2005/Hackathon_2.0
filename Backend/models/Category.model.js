import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    enum: [
      "SD",
      "DSA",
      "Testing",
      "DA",
      "GENERAL",
      "MERN",
      "BACKEND",
      "FRONTEND",
    ],
    required: true,
    unique: true,
  },
  commits: { type: [String], default: [] },
});

const CategoryModel = mongoose.model("Category", categorySchema);

export default CategoryModel;
