const { dateTimeNowFormated, logger } = require("./utils");

// If not in production
if (
  process.env.NODE_ENV !== "production" ||
  process.env.CONTAINERIZED === "true"
) {
  require("dotenv").config(); // .env file variables -> process.env
}
logger.log(`In ${process.env.NODE_ENV} env !`);
console.log("process", process.env.DB_URL);

const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const explore = require("./routes/explore");
const user = require("./routes/user");
const http = require("http");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const hpp = require("hpp");
const rateLimit = require("express-rate-limit");
const { connectDB } = require("./DataBase/connectDB");
const { Socket } = require("./socketHandler");

connectDB();

// parse json request body
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Security
app.use(cors({ origin: true, credentials: true }));
app.use(mongoSanitize());
app.use(hpp());
app.use(helmet());
app.use(
  rateLimit({
    windowMs: 10 * 60 * 1000, // 10 Minutes
    max: 500,
  })
);

const server = http.createServer(app);

Socket.registerSocketServer(server);

const data = [
  {
    difficulty: "easy",
    name: "Utkarsh",
    description: "Hello",
    examples: [
      {
        input: "4",
        output: "10",
        explaination: "This is a explantation",
      },
    ],
    noOfSubm: 4,
    noOfSuccess: 3,
    testcase: "334",
  },
];
// Model.insertMany(data)
//   .then(() => {
//     console.log("Dummy data inserted successfully");
//   })
//   .catch((error) => {
//     console.error("Error inserting dummy data:", error);
//   });

// api route to get questions and verdicts
app.use("/api/explore", explore);

app.use("/api/user", user);

// app.use(express.static(path.join(__dirname, "client/build")));
// app.get("*", (req, res) =>
//   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
// );
// }

const port = process.env.PORT || 5000;
server.listen(port, () => {
  logger.log(`Server running on PORT ${port}`, dateTimeNowFormated());
});
