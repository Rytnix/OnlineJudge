const express = require("express");
const userController = require("../controller/authenticationController");
const router = express.Router();
const passport = require("passport");
const db = require("../models/User");
require("../controller/auth");
//
function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}
const successLoginUrl = "http://localhost:3000/login/success";
const errorLoginUrl = "http://localhost:3000/login/error";
router.get("/", (req, res) => {
  res.send(
    '<a href="/api/oj/login/auth/google" >Authenticate using google</a>'
  );
});

router.get("/login", (req, res) => {
  userController.userLogin(req, res);
});

router.get(
  "/login/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureMessage: "Cannot login to Google, please try again later!",
    successRedirect: "/api/oj/protected",
    failureRedirect: "/api/oj/auth/google/failure",
  }),
  (req, res) => {
    console.log("User: ", req.user);
    res.send("Thank you for signing in!");
  }
);

router.get("/logout", (req, res) => {
  req.logout();
  req.session.destroy();
  res.send("Goodbye!");
});

router.get("/protected", isLoggedIn, (req, res) => {
  res.send(`Hello ${req.user.id}`);
});

router.post("/register", (req, res) => {
  console.log("In route /register");
  userController.userRegister(req, res);
});

router.get("/auth/google/failure", (req, res) => {
  res.send("Failed to authenticate..");
});
module.exports = router;
