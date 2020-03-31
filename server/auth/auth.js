require('dotenv').config();
const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:4000/auth/google/callback"
  },
  function(accessToken, profile, done) {
    var userData = {
        email: profile.emails[0].value,
        name: profile.displayName,
        token: accessToken
       };
       done(null, userData);
    }
));
