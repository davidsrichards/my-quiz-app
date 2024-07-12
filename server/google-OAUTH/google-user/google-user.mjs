import express from "express";
import passport from "passport";
import "../google-OAUTH.mjs";

const googleRout = express.Router();

///// URLS

const failureMessage = "https://my-quiz-app-1.onrender.com/login/error";
const successRedirect = "https://my-quiz-app-1.onrender.com/google/login/success";
const failureRedirect = "https://my-quiz-app-1.onrender.com/failure";

/// verification

googleRout.get(
  "/api/user/google/login",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

//// CALLBACK

googleRout.get(
  "/api/user/googleCallback",
  passport.authenticate("google", {
    failureMessage: failureMessage,
    successRedirect: successRedirect,
    failureRedirect: failureRedirect,
  }),
  (req, res) => {
    res.send("Thank you for signing in");
  }
);

googleRout.get("/api/user/google/status", (req, res) => {
  return req.user
    ? res.status(201).json(req.user)
    : res.status(401).send("Please log in first");
});

export default googleRout;
