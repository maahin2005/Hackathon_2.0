import UserModel from "../../models/User.js";

export const hireTalents = async (_, res) => {
  try {
    const candidates = await UserModel.find({
      role: "jobseeker",
      score: { $gte: 0.2 }, // Filter for scores >= 0.2
    }).sort({
      score: -1, // Sort in descending order
    });

    return res.status(200).json({
      success: true,
      message: "candidates fetched successfully.",
      data: candidates,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message, success: false, error: true });
  }
};

export const selectedCandidate = async (req, res) => {
  const githubId = req.params.githubId;
  try {
    const candidate = await UserModel.findOne({ githubId });

    return res.status(200).json({
      message: "candidate selected successfully",
      data: candidate,
      success: true,
      error: false,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message, success: false, error: true });
  }
};
