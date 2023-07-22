const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

const jwt = require("jsonwebtoken");
// const User = require("../models/User");
const User = require("../DataBase/Model/User")
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/api/oj/google/callback",
      passReqToCallback: true,
    },

    async function (request, accessToken, refreshToken, profile, done) {
      const defaultUser = {
        fullName: profile.name.givenName + " " + profile.name.familyName,
        email: profile.emails[0].value,
        googleId: profile.id,
      };
      const user = await User.findOrCreate({username: profile.emails[0].value},{
        name: profile.name.givenName + " " + profile.name.familyName,
        username:profile.emails[0].value,
        email: profile.emails[0].value,
        passwordHash: "utk",
        solvedQuestions: "0",
        totalSubmissions: 0

      }, (err,user,created) => {
         if(err) {
          console.log("error creating user",err);
         done(null,err);
         }
        else{
        console.log('User found/created successfully!');
        const token = jwt.sign(
      {
        user: user._id,
        username: user.username,
      },
      process.env.JWT_SECRET
    );

      return done(null, token);
        }

      });
      // console.log("this is google user",user._id);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
