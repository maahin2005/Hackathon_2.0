import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const githubCallback = (req, res) => {
  if (!req.user?.githubId) {
    return res.redirect(
      `${process.env.CORS_ORIGIN}/login?error=user%20already%20existed%20as%20recruiter%20try%20with%20google`
    );
  }
  const token = jwt.sign(
    { id: req.user.id, githubId: req.user.githubId, userRole: req.user.role },
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

  res.redirect(`${process.env.CORS_ORIGIN}/jobseeker/dashboard`);
  // return res.json({ success: true, message: "User Signin Successfully" });
};

export default githubCallback;
