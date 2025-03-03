import express from "express";
import {
  createCompany,
  deleteCompany,
  getAllCompanies,
  getCompanyById,
  updateCompany,
} from "../controllers/company/company.controllers.js";

const companyRoutes = express.Router();

companyRoutes.get("/", getAllCompanies);
companyRoutes.get("/:id", getCompanyById); // Get a single company by ID
companyRoutes.post("/", createCompany); // Create a new company
companyRoutes.put("/update/:id", updateCompany); // Update a company by ID
companyRoutes.delete("/delete/:id", deleteCompany);

export default companyRoutes;
