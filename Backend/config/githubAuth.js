// server/auth.js
import passport from "passport";
import GitHubStrategy from "passport-github2";
import dotenv from "dotenv";
dotenv.config();
import UserModel from "../models/User.js"; // Import User Schema
// Middleware

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:8080/auth/github/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        console.log("GitHub Profile => ", profile);

        // Check if the user already exists in the database
        let user = await UserModel.findOne({ githubId: profile.id });

        if (!user) {
          // Create a new user if not found
          user = new UserModel({
            name: profile.displayName || profile.username,
            email: profile.emails?.[0]?.value || "",
            profileImage: profile.photos?.[0]?.value || "",
            githubId: profile.id,
            githubUsername: profile.username,
            role: "jobseeker", // Default role for GitHub login
          });

          await user.save();
        }

        return done(null, user);
      } catch (error) {
        console.error("GitHub Auth Error:", error);
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});
