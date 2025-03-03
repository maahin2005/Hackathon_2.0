import UserModel from "../../models/User.js";

export const updateJobseekerScores = async (req, res) => {
  const { userId, score } = req.body;
  try {
    const user = await UserModel.findByIdAndUpdate(userId, { score });

    if (!user) {
      return res.status(404).json({ message: "Jobseeker not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Jobseeker score updated successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const meJobseeker = async (req, res) => {
  const { githubId } = req.user;

  try {
    const user = await UserModel.findOne({ githubId });

    if (!user) {
      return res.status(404).json({ message: "Jobseeker not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Jobseeker data found successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
