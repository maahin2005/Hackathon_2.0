// server/auth.js
import passport from "passport";
import GitHubStrategy from "passport-github2";
import dotenv from "dotenv";
dotenv.config();

// Middleware

// 1️⃣ Ensure GitHub Strategy is Registered BEFORE Calling It
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:8080/auth/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});