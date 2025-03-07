import express from "express";
import {
  createCompany,
  deleteCompany,
  getAllCompanies,
  getCompanyById,
  getRecruitersCompany,
  updateCompany,
} from "../controllers/company/company.controllers.js";
import verifyRecruiter from "../middlewares/verifyRecruiter.middleware.js";

const companyRoutes = express.Router();

companyRoutes.get("/", getAllCompanies);
companyRoutes.get("/recruiter/:recruiterId", getRecruitersCompany); // Get a single company by ID
companyRoutes.get("/:id", getCompanyById); // Get a single company by ID
companyRoutes.post("/", verifyRecruiter, createCompany); // Create a new company
companyRoutes.put("/update/:id", verifyRecruiter, updateCompany); // Update a company by ID
companyRoutes.delete("/delete/:id", verifyRecruiter, deleteCompany);

export default companyRoutes;
