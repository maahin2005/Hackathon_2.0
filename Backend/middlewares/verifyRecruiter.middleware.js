const verifyRecruiter = (req, res, next) => {
  if (req.user.role === "recruiter") {
    return next();
  }

  return res
    .status(403)
    .json({ message: "Unauthorized - You are not allowed to access this." });
};
