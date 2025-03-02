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
      scope: ["user:email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value || null;

        // Check if the user already exists in the database
        let user = await UserModel.findOne({ githubId: profile.id });

        if (!user) {
          user = new UserModel({
            name: profile.displayName || profile.username,
            email: email, // Might be null if GitHub doesn't provide it
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
