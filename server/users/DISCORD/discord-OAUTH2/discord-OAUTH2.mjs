import passport from "passport";
import Strategy from "passport-discord";
import { Discord } from "../discord-schema/discord-schema.mjs";
import dotenv from "dotenv";
dotenv.config();
///// creating new strategy

passport.use(
  new Strategy(
    {
      clientID: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      callbackURL: process.env.DISCORD_CALLBACK_URL,
      passReqToCallback: true,
      scope: ["identify"],
    },
    async (req, accessToken, refreshToken, profile, done) => {
      //// finding user from the database

      let findUser;
      try {
        findUser = await Discord.findOne({ discordId: profile.id });
      } catch (error) {
        return done(error, null);
      }

      ////// creating new user if the user is not found

      try {
        const newUser = new Discord({
          username: profile.username,
          discordId: profile.id,
        });

        const savedUser = await newUser.save();
        return done(null, savedUser);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

////// serializing user

passport.serializeUser((discordUser, done) => {
  console.log("Serializing user from the Discord");
  console.log(discordUser);
  done(null, discordUser.id);
});

passport.deserializeUser(async (id, done) => {
  console.log("Discord D");
  try {
    const findUser = await Discord.findById(id);
    return findUser ? done(null, findUser) : done(null, null);
  } catch (error) {
    return done(error, null);
  }
});

////// Deserializing user
