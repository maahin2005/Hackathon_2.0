import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const googleCallback = (req, res) => {
  if (!req.user?.googleId) {
    return res.redirect(
      "http://localhost:5173/login?error=user%20already%20existed%20as%20jobseeker%20try%20with%20github"
    );
  }

  const token = jwt.sign(
    { id: req.user.id, googleId: req.user.googleId, userRole: req.user.role },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

  // Set token in HTTP-only cookie
  res.cookie("token", token, {
    httpOnly: process.env.COOKIE_HTTP_ONLY === "false" ? false : true,
    secure: process.env.COOKIE_SECURE === "false" ? false : true,
    sameSite: "Lax", // ✅ Allows cookie sharing between frontend and backend
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 day
  });
  res.redirect("http://localhost:5173/recruiter/dashboard");
};

export default googleCallback;
