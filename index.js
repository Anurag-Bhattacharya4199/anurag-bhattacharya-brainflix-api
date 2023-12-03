/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 3
Description:
- This is the index.js
In this file, the server routes are intialized
Diving Deeper Notes:
- Unable to figure out the Diving Deeper parts of Sprint 3
*/

//All the imported packages needed to maange this custom server
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

//The Ports for the client application and server application
const { PORT, CORS_ORIGIN } = process.env;

//Allow the use of CORS for the client application
app.use(cors({ origin: CORS_ORIGIN }));

//Middleware access to the Public folder
app.use(express.static("public"));

//Tells the user an incoming request to the customer server is occurring
app.use((req, res, next) => {
  console.log("Incoming request");
  next();
});

//Uses Middleware to connect to a series of requests for a specific need
const videoRouter = require("./routes/videos");
app.use("/videos", videoRouter);

//Tells the User, which port the server requests are listening to
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
