require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const { PORT, CORS_ORIGIN } = process.env;

console.log(PORT);
console.log(CORS_ORIGIN);

app.use(cors({ CORS_ORIGIN }));

app.use((req, res, next) => {
  console.log("Incoming request");
  next();
});

const videoRouter = require("./routes/videos");

app.get("/", (req, res) => {
  res.send("HELLO");
});

app.use("/videos", videoRouter);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
