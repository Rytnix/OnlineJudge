const express = require("express");
const userController = require("../controller/authenticationController");
const router = express.Router();
const db = require("../models/User");
//
router.get("/login", (req, res) => {
  userController.userLogin(req, res);
});

router.post("/register", (req, res) => {
  console.log("In route /register");
  userController.userRegister(req, res);
});

module.exports = router;
