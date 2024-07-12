// importing modules
import express from "express";
import mongoose from "mongoose";
import passport from "passport";
import session from "express-session";
import regRout from "./users/users.mjs";
import quizRouts from "./QUIZ/endPoints/endPoints.mjs";
import loginRout from "./LOGIN/user/user.mjs";
import getRout from "./getUser-endpoint/getUser-endpoint.mjs";
import adminRout from "./AdminRegistration/AdminEndPoints/admin-endpoint.mjs";
import adminLoginRout from "./AdminLogin/admin-login-endpoint.mjs";
import MongoStore from "connect-mongo";
import cookieParser from "cookie-parser";
import googleRout from "./google-OAUTH/google-user/google-user.mjs";
import discordRout from "./users/DISCORD/discord-user/discord-user.mjs";
import cors from "cors";

const PORT = 5000;
const app = express();
app.use(express.json());
app.use(cors({ origin: " http://localhost:5173", credentials: true }));
app.use(cookieParser("daverich"));

////////////////

mongoose
  .connect(
    "mongodb+srv://Dauda:323395ppP@quiz.cdpitay.mongodb.net/?retryWrites=true&w=majority&appName=Quiz"
  )
  .then(() => {
    app.listen(PORT, () => console.log(`start listening on port : ${PORT}`));
    console.log("Connected to data base");
  })
  .catch((err) => console.log(err));

///////////////

app.use(
  session({
    saveUninitialized: false,
    resave: true,
    cookie: {
      maxAge: 60000 * 60,
    },
    store: MongoStore.create({
      client: mongoose.connection.getClient(),
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(getRout);
app.use(regRout);
app.use(loginRout);
app.use(quizRouts);
app.use(googleRout);
app.use(discordRout);
app.use(adminRout);
app.use(adminLoginRout);
///////////////

/* app.get("/api/user", async (req, res) => {
  const allUser = await User.find();
  return res.status(200).json(allUser);
}); */

//////// listening to server

/* clientID:
"23132053156-ghvrhpcj2bi4k4gk5pbb6fju1u3i4oqi.apps.googleusercontent.com",
clientSecret: "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",
callbackURL: "http://localhost:5000/api/user/googleCallback",
passReqToCallback: true,
},
async (req, accessToken, refreshToken, profile, done) => {
const defaultUser = {
fullName: `${profile.name.givenName} ${profile.name.familyName}`,
email: profile.emails[0].value,
picture: profile.photos[0].value,
googleId: profile.id,
}; */

// database mongodb+srv://Dauda:<password>@quiz.cdpitay.mongodb.net/?retryWrites=true&w=majority&appName=Quiz
