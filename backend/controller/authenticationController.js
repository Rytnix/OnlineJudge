const express = require("express");
const userModel = require("../models/User");

const userRegister = async (req, res) => {
  const { full_name, email, password, username } = req.body;
  const isuseralreadyexits = await userModel.findOne({ username: username });
  if (isuseralreadyexits == null) {
    try {
      const userRes = await userModel.create({
        full_name,
        email,
        password,
        username,
      });
      res.status(200).json(userRes);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(400).json({ Warn: "user already exits, Please login!!!" });
  }
};

const userLogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDetail = await userModel.findOne({
      username: username,
    });
    if (userDetail != null && userDetail.password == password) {
      console.log("user login successfully");
      res.status(200).json({ success: "user login successfully" });
    } else if (userDetail != null) {
      console.log("wrong password");
      res.status(400).json({ error: "wrong password" });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = { userRegister, userLogin };
