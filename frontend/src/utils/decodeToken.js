import { jwtDecode } from "jwt-decode";

export const decodeToken = (token) => {
  if (!token) {
    console.log("No token provided");
    return;
  }

  try {
    // Decode the token
    const decodedToken = jwtDecode(token);

    // Check if the token is expired
    const currentTime = Date.now() / 1000; // Convert to seconds
    if (decodedToken.exp && decodedToken.exp < currentTime) {
      console.log("Token is expired");
      return false;
    }

    console.log("Token is valid");
    return { data: decodedToken, success: true };
  } catch (error) {
    console.error("Failed to decode token:", error);
    return false;
  }
};
