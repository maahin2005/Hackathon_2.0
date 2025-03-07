const verifyRecruiter = (req, res, next) => {
  if (req.user.userRole === "recruiter") {
    return next();
  }

  return res
    .status(403)
    .json({ message: "Unauthorized - You are not a recruiter, you are not allowed to access this." });
};

export default verifyRecruiter;
