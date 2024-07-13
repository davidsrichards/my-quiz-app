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
import path from "path";
const dirname = path.dirname(new URL(import.meta.url).pathname);
const base = path.resolve("../client", "dist", "index.html");

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
//app.use(cors({ origin: "https://my-quiz-app-1.onrender.com", credentials: true }));
app.use(cookieParser("daverich"));

////////////////

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
   
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
app.use(express.static(path.resolve("../client", "dist")));

app.use(getRout);
app.use(regRout);
app.use(loginRout);
app.use(quizRouts);
app.use(googleRout);
app.use(discordRout);
app.use(adminRout);
app.use(adminLoginRout);

app.get("*", (req, res) => {
  res.sendFile(base);
});
///////////////

 app.listen(port, () => console.log(`start listening on port : ${port}`));

// database mongodb+srv://Dauda:<password>@quiz.cdpitay.mongodb.net/?retryWrites=true&w=majority&appName=Quiz
