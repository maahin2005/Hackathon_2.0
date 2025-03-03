import CompanyModel from "../../models/Company.model.js";

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
  try {
    const newCompany = new CompanyModel(req.body);
    await newCompany.save();
    res
      .status(201)
      .json({ success: true, message: "Company saved successfully" });
  } catch (error) {
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
