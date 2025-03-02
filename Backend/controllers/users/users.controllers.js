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

export const updateJobseekerScores = async (req, res) => {
  const { userId, score } = req.body;
  try {
    const user = await UserModel.findByIdAndUpdate(userId, { score });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "User score updated successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
