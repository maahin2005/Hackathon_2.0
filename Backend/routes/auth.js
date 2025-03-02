// server/routes/auth.js
import express from "express";
import passport from "passport";
import googleCallback from "../controllers/google/googleCallback.js";
import githubCallback from "../controllers/github/githubCallback.js";
const router = express.Router();
import dotenv from "dotenv";
dotenv.config();

// Google OAuth Login
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// GitHub Auth Routes
router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

// Callback Route
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  googleCallback
);

router.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: process.env.FAILED_REDIRECTION,
  }),
  githubCallback
);

// app.get("/logout", (req, res) => {
//   req.logout(() => {
//     res.redirect("http://localhost:3000");
//   });
// });

// Logout
router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err); // Properly handle error
    }

    // Destroy the session
    req.session.destroy(() => {
      // Clear JWT token cookie
      res.clearCookie("token");

      // Redirect to the login page or home page
      res.redirect(process.env.FAILED_REDIRECTION);
    });
  });
});

// Check if user is logged in
router.get("/auth/user", (req, res) => {
  res.send(req.user || null);
});

export default router;
