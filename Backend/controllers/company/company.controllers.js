import CompanyModel from "../../models/Company.model.js";
import UserModel from "../../models/User.js";

// Get all companies
export const getAllCompanies = async (req, res) => {
  try {
    const companies = await CompanyModel.find();
    res.status(200).json({
      success: true,
      data: companies,
      message: "companies data retrieved successfully!",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get a single company by ID
export const getCompanyById = async (req, res) => {
  try {
    const company = await CompanyModel.findById(req.params.id);
    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }
    res.status(200).json({
      success: true,
      data: company,
      message: "Company data found successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create a new company
export const createCompany = async (req, res) => {
  const { googleId } = req.user;

  try {
    // Find the recruiter by googleId
    const recruiter = await UserModel.findOne({ googleId });
    if (!recruiter) {
      return res
        .status(404)
        .json({ success: false, message: "Recruiter not found" });
    }

    // Create a new company with the recruiter's _id as registeredBy
    const newCompany = new CompanyModel({
      ...req.body, // Spread the request body
      registeredBy: recruiter._id, // Add the registeredBy field
    });

    // Save the new company
    await newCompany.save();

    // Update the recruiter's document to reference the new company
    await UserModel.findByIdAndUpdate(recruiter._id, {
      company: newCompany._id,
    });

    // Send success response
    res
      .status(201)
      .json({ success: true, message: "Company saved successfully" });
  } catch (error) {
    // Handle errors
    res.status(400).json({ success: false, message: error.message });
  }
};

// Update a company by ID
export const updateCompany = async (req, res) => {
  try {
    const updatedCompany = await CompanyModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedCompany) {
      return res
        .status(404)
        .json({ success: false, message: "Company not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Company updated successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete a company by ID
export const deleteCompany = async (req, res) => {
  try {
    const deletedCompany = await CompanyModel.findByIdAndDelete(req.params.id);
    if (!deletedCompany) {
      return res
        .status(404)
        .json({ success: false, message: "Company not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Company deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
