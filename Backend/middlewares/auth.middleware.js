import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const token = req.cookies.token; // Get token from cookies
  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized - No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Forbidden - Invalid token" });
  }
};
