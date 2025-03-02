import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const googleCallback = (req, res) => {
  const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });

  // Set token in HTTP-only cookie
  res.cookie("token", token, {
    httpOnly: true, // Prevents client-side access to cookie
    // secure: process.env.NODE_ENV === "production", // Use secure cookies in production
    sameSite: "Strict", // Prevent CSRF attacks
    maxAge: 24 * 60 * 60 * 1000,
  });

  // res.redirect("http://localhost:5173/dashboard");

  return res.json({ success: true, message: "User Signin Successfully" });
};

export default googleCallback;
