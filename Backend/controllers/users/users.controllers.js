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
