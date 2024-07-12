import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import { Google } from "./google-schema/google-schema.mjs";
import dotenv from "dotenv";
dotenv.config();

/////// defining a new strategy

passport.use(
  new Strategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,

      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, done) => {
      const defaultUser = {
        fullName: `${profile.name.givenName} ${profile.name.familyName}`,
        email: profile.emails[0].value,
        googleId: profile.id,
        picture: profile.photos[0].value,
      };
      /// finding user

      let findUser;
      try {
        findUser = await Google.findOne({ googleId: profile.id });
      } catch (error) {
        return done(error, null);
      }
      try {
        if (!findUser) {
          const newUser = new Google(defaultUser);
          const savedUser = await newUser.save();
          return done(null, savedUser);
        } else {
          return done(null, findUser);
        }
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

////////// serializing user

passport.serializeUser((user, done) => {
  console.log("Serializing User");
  console.log(user);
  done(null, user.id);
});

//////// Deserializing user

passport.deserializeUser(async (id, done) => {
  console.log(`Deserializing user`);
  console.log(id);
  ///// find user
  try {
    const findUser = await Google.findById(id);
    return findUser ? done(null, findUser) : done(null, null);
  } catch (error) {
    done(error, null);
  }
});
