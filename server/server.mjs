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
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors({ origin: "https://my-quiz-app-1.onrender.com", credentials: true }));
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

// database mongodb+srv://Dauda:<password>@quiz.cdpitay.mongodb.net/?retryWrites=true&w=majority&appName=Quiz
