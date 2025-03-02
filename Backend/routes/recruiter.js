import express from "express";
import UserModel from "../models/User.js";

const recruiterRoutes = express.Router();

recruiterRoutes.get("/candidates", async (_, res) => {
  try {
    const candidates = await UserModel.find({ role: "jobseeker" }).sort({
      score: -1,
    });

    return res.status(200).json({
      success: true,
      message: "candidates fetched successfully.",
      data: candidates,
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
});

export default recruiterRoutes;
