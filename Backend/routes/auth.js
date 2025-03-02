// server/routes/auth.js
import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

const router = express.Router();

// Google OAuth Login
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// GitHub Auth Routes
router.get("/github", passport.authenticate("github", { scope: ["user:email"] }));

// Callback Route
router.get("/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.redirect(`http://localhost:5173/dashboard?token=${token}`);
  }
);

router.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "http://localhost:5173/login" }),
  (req, res) => {
    res.redirect("http://localhost:5173");
  }
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
      res.redirect("http://localhost:5173"); // Redirect to homepage or login page
    });
  });
});

// Check if user is logged in
router.get("/auth/user", (req, res) => {
  res.send(req.user || null);
});

export default router;
