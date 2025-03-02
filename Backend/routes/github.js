import express from "express";
import { fetchRepos } from "../controllers/github/fetchRepos.js";

const githubRoute = express.Router();

githubRoute.get("/repos", fetchRepos);
// githubRoute.get("/categories", fetchCategories);

export default githubRoute;
