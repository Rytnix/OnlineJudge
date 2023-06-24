require("dotenv").config();
const express = require("express");
const userRoute = require("./routes/userRouter");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");
const compRoute = require("./routes/compilerRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: "session",
    keys: ["utkarshOJ"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/api/oj", userRoute);
app.use("/api", compRoute);
mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Listening on port 5000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
