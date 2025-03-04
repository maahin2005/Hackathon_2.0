import UserModel from "../../models/User.js";

export const getAllJobseekers = async (req, res) => {
  try {
    const jobseekers = await UserModel.find({ role: "jobseeker" });

    return res.status(200).json({
      success: true,
      message: "Jobseekers get successfully",
      data: jobseekers,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
export const getAllRecruiters = async (req, res) => {
  try {
    const recruiters = await UserModel.find({ role: "recruiter" });

    return res.status(200).json({
      success: true,
      message: "Recruiters get successfully",
      data: recruiters,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Controller to update user data
export const updateUser = async (req, res) => {
  const { userId } = req.params; // Get userId from URL params
  const updateData = req.body; // Get updated data from request body

  try {
    // Find the user by ID and update their data
    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      updateData,
      { new: true, runValidators: true } // Return the updated document and run schema validators
    );

    // If user not found
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return the updated user data
    return res.status(200).json({
      message: "User updated successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error updating user:", error);

    // Handle validation errors
    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: "Validation error",
        errors: error.errors,
      });
    }

    // Handle other errors
    return res.status(500).json({ message: "Internal server error" });
  }
};
