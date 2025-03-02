import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    enum: ["SD", "DSA", "Testing", "DA"], // Enum values
    required: true,
    unique: true,
  },
});

const CategoryModel = mongoose.model("Category", categorySchema);

export default CategoryModel;
