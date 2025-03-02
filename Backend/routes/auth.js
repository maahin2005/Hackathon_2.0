// server/routes/auth.js
import express from "express";
import passport from "passport";
import googleCallback from "../controllers/google/googleCallback.js";
import githubCallback from "../controllers/github/githubCallback.js";
const router = express.Router();

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
    failureRedirect: "http://localhost:5173/login",
  }),
  githubCallback
);

// app.get("/logout", (req, res) => {
//   req.logout(() => {
//     res.redirect("http://localhost:3000");
//   });
// });

// Logout
router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.session.destroy(() => {
      res.redirect("http://localhost:5173/login"); // Redirect to homepage or login page
    });
  });
  res.clearCookie("token");
});

// Check if user is logged in
router.get("/auth/user", (req, res) => {
  res.send(req.user || null);
});

export default router;
