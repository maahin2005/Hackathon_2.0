import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategoryById,
  updateCategory,
} from "../controllers/category/category.controllers.js";

const categoryRoutes = express.Router();

// Create a new category
categoryRoutes.post("/", createCategory);

// Read all categories
categoryRoutes.get("/", getCategories);

// Read a single category by ID
categoryRoutes.get("/:id", getCategoryById);

// Update a category by ID
categoryRoutes.put("/update/:id", updateCategory);

// Delete a category by ID
categoryRoutes.delete("/delete/:id", deleteCategory);

export default categoryRoutes;
