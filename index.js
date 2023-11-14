require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const { PORT, CORS_ORIGIN } = process.env;

app.use(cors({ origin: CORS_ORIGIN }));

app.use(express.static("public"));

app.use((req, res, next) => {
  console.log("Incoming request");
  next();
});

const videoRouter = require("./routes/videos");

app.use("/videos", videoRouter);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
