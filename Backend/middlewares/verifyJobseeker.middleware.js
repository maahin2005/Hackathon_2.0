const verifyJobseeker = async (req, res, next) => {
  if (req.user.userRole === "jobseeker") {
    return next();
  }

  return res
    .status(403)
    .json({ message: "Unauthorized - You are not allowed to access this." });
};

export default verifyJobseeker;
