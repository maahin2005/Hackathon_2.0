import express from "express";
import {
  hireTalents,
  selectedCandidate,
} from "../controllers/recruiters/recruiters.controllers.js";

const recruiterRoutes = express.Router();

recruiterRoutes.get("/hire-talents", hireTalents);
recruiterRoutes.get("/candidate/:githubId", selectedCandidate);

export default recruiterRoutes;
