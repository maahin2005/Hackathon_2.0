import express from "express";
import {
  getAllJobseekers,
  getAllRecruiters,
} from "../controllers/users/users.controllers.js";

const userRoute = express.Router();

userRoute.get("/jobseekers", getAllJobseekers);
userRoute.get("/recruiters", getAllRecruiters);

export default userRoute;
