import express from "express";
import passport from "passport";
import "../discord-OAUTH2/discord-OAUTH2.mjs";

const discordRout = express.Router();

////// sending request to discord
discordRout.get("/api/user/discord/login", passport.authenticate("discord"));
/////  getting respond from discord
const failureMessage = "https://my-quiz-app-1.onrender.com/google/login/error";
const successRedirect = "https://my-quiz-app-1.onrender.com/google/login/success";
const failureRedirect = "https://my-quiz-app-1.onrender.com/google/login/failure";
discordRout.get(
  "/api/discord/redirect",
  passport.authenticate("discord", {
    failureRedirect: failureRedirect,
    successRedirect: successRedirect,
  }),
  (req, res) => {
    return res.status(201).send("You have Successfully loged in to Discord");
  }
);
////// getting the user status

discordRout.get("/api/user/discord/status", (req, res) => {
  return req.discordUser
    ? res.status(201).json(req.discordUser)
    : res.status(401).send("Please log in to discord");
});
export default discordRout;
