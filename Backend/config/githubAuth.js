// server/auth.js
import passport from "passport";
import GitHubStrategy from "passport-github2";
import dotenv from "dotenv";
import UserModel from "../models/User.js"; // Import User Schema

dotenv.config();

// Configure GitHub Strategy
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL,
      scope: ["user:email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value || null;

        // Check if user already exists
        let user = await UserModel.findOne({ githubId: profile.id });
        if (!user && email) {
          user = await UserModel.findOne({ email });
        }
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

// Serialize User (Store User ID in Session)
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize User (Fetch Full User From DB)
passport.deserializeUser(async (id, done) => {
  try {
    const user = await UserModel.findById(id);
    if (!user) {
      return done(new Error("User not found"), null);
    }
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});
