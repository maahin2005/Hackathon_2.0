import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import passport from "passport";
import session from "express-session";
import "./config/googleAuth.js"; // Google OAuth config
import "./config/githubAuth.js"; // GitHub OAuth config
import userRoute from "./routes/user.js";
import { auth } from "./middlewares/auth.middleware.js";
import githubRoute from "./routes/github.js";
import categoryRoutes from "./routes/category.route.js";
import recruiterRoutes from "./routes/recruiter.route.js";
import companyRoutes from "./routes/company.route.js";
import cookieParser from "cookie-parser";
import jobseekerRoute from "./routes/jobseeker.route.js";
import verifyJobseeker from "./middlewares/verifyJobseeker.middleware.js";
import verifyRecruiter from "./middlewares/verifyRecruiter.middleware.js";
dotenv.config();

const PORT = process.env.PORT || 8080;
const MongoDB = process.env.MONGODB_URL;

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.CORS_ORIGIN, // Frontend URL
    credentials: true, // Allow cookies
  })
);

app.use(
  session({ secret: "your_secret", resave: false, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/auth", authRoutes);
app.use("/users", userRoute);
app.use("/github", githubRoute);

app.use("/categories", auth, categoryRoutes);
app.use("/companies", auth, verifyRecruiter, companyRoutes);
app.use("/jobseekers", auth, verifyJobseeker, jobseekerRoute);
app.use("/recruiters", auth, verifyRecruiter, recruiterRoutes);
app.get("/", (_, res) => {
  res.status(200).json({ status: "Server is healthy! Enjoy............" });
});

app.listen(PORT, async () => {
  try {
    await connectDB(MongoDB);
    console.log(`Server is running at ${PORT} and database is connected`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
});
