const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const User = require("../models/User");
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/api/oj/auth/google/callback",
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, done) {
      const defaultUser = {
        fullName: profile.name.givenName + " " + profile.name.familyName,
        email: profile.emails[0].value,
        googleId: profile.id,
      };
      const user = await User.findOrCreate({
        googleId: profile.id,
        fullName: profile.name.givenName + " " + profile.name.familyName,
        email: profile.emails[0].value,
      }).catch((err) => {
        console.log("Error signing in ", err);
        done(err, null);
      });
      console.log(user);
      // console.log(defaultUser);
      return done(null, profile);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
