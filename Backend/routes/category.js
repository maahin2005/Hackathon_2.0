import express from "express";
import CategoryModel from "../models/Category.js";

const categoryRoutes = express.Router();

// Create a new category
categoryRoutes.post("/", async (req, res) => {
  try {
    const { name, commits } = req.body;
    const newCategory = new CategoryModel({ name, commits });
    await newCategory.save();
    res
      .status(201)
      .json({ success: true, message: "Category saved successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// Read all categories
categoryRoutes.get("/", async (req, res) => {
  try {
    const categories = await CategoryModel.find();
    res.status(200).json({ success: true, data: categories });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Read a single category by ID
categoryRoutes.get("/:id", async (req, res) => {
  try {
    const category = await CategoryModel.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json({ success: true, data: category });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Update a category by ID
categoryRoutes.put("/:id", async (req, res) => {
  try {
    const { name, commits } = req.body;
    const updatedCategory = await CategoryModel.findByIdAndUpdate(
      req.params.id,
      { name, commits },
      { new: true, runValidators: true }
    );
    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Category updated successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// Delete a category by ID
categoryRoutes.delete("/:id", async (req, res) => {
  try {
    const deletedCategory = await CategoryModel.findByIdAndDelete(
      req.params.id
    );
    if (!deletedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default categoryRoutes;
