import express from "express";
import passport from "passport";
import "../discord-OAUTH2/discord-OAUTH2.mjs";

const discordRout = express.Router();

////// sending request to discord
discordRout.get("/api/user/discord/login", passport.authenticate("discord"));
/////  getting respond from discord
const failureMessage = "http://localhost:5173/google/login/error";
const successRedirect = "http://localhost:5173/google/login/success";
const failureRedirect = "http://localhost:5173/google/login/failure";
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
