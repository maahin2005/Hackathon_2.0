import express from "express";
import {
  getAllJobseekers,
  getAllRecruiters,
  updateJobseekerScores,
} from "../controllers/users/users.controllers.js";

const userRoute = express.Router();

userRoute.get("/jobseekers", getAllJobseekers);
userRoute.get("/recruiters", getAllRecruiters);
userRoute.patch("/update-score", updateJobseekerScores);

export default userRoute;
