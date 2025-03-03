import express from "express";
import {
  meJobseeker,
  updateJobseekerScores,
} from "../controllers/jobseeker/jobseeker.controllers.js";

const jobseekerRoute = express.Router();

jobseekerRoute.patch("/update-score", updateJobseekerScores);
jobseekerRoute.get("/me", meJobseeker);

export default jobseekerRoute;
