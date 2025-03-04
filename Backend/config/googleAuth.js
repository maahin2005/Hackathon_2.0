// server/auth.js
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";
import UserModel from "../models/User.js";

dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value || ""; // Safely get email
        let user = await UserModel.findOne({ googleId: profile.id });

        if (!user && email) {
          user = await UserModel.findOne({ email });
        }
        if (!user) {
          user = new UserModel({
            name: profile.displayName,
            email: email || null, // Avoid empty email strings
            profileImage: profile.photos?.[0]?.value || "", // Avoid undefined photo errors
            googleId: profile.id,
            role: "recruiter",
          });

          await user.save();
        }

        return done(null, user);
      } catch (err) {
        console.error("Error in Google OAuth:", err);
        return done(err, null);
      }
    }
  )
);

// Serialize & Deserialize User
passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
  try {
    const user = await UserModel.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});
