import express from "express";
import {
  getAllJobseekers,
  getAllRecruiters,
  updateUser,
} from "../controllers/users/users.controllers.js";

const userRoute = express.Router();

userRoute.get("/jobseekers", getAllJobseekers);
userRoute.get("/recruiters", getAllRecruiters);
userRoute.patch("/update/:userId", updateUser);

export default userRoute;
