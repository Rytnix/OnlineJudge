require("dotenv").config();
const express = require("express");
const userRoute = require("./routes/userRouter");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/oj", userRoute);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Listening on port 4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
