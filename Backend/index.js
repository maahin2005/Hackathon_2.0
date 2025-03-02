import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import passport from "passport";
import session from "express-session";
import "./config/googleAuth.js"; // Google OAuth config
import "./config/githubAuth.js"; // GitHub OAuth config
import userRoute from "./routes/user.js";
// import { auth } from "./middlewares/auth.middleware.js";
import githubRoute from "./routes/github.js";
import categoryRoutes from "./routes/category.js";
dotenv.config();

const PORT = process.env.PORT || 8080;
const MongoDB = process.env.MONGODB_URL;
const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;

const app = express();
app.use(express.json());
app.use(cors());
// app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(
  session({ secret: "your_secret", resave: false, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/auth", authRoutes);
app.use("/categories", categoryRoutes);
app.use("/users", userRoute);
// app.use("/users", auth, userRoute);
app.use("/github", githubRoute);
app.get("/", (_, res) => {
  res.status(200).json({ status: "Server is healthy! Enjoy............" });
});

app.get("/github/:username", async (req, res) => {
  try {
    const username = req.params.username;

    // Fetch user profile
    const userResponse = await axios.get(
      `https://api.github.com/users/${username}`,
      {
        headers: { Authorization: `token ${GITHUB_ACCESS_TOKEN}` },
      }
    );

    // Fetch repos
    const reposResponse = await axios.get(
      `https://api.github.com/users/${username}/repos`,
      {
        headers: { Authorization: `token ${GITHUB_ACCESS_TOKEN}` },
      }
    );

    res.json({
      profile: userResponse.data,
      repos: reposResponse.data,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error fetching GitHub data", msg: error.message });
  }
});

app.listen(PORT, async () => {
  try {
    await connectDB(MongoDB);
    console.log(`Server is running at ${PORT} and database is connected`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
});
