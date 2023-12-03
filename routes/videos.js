/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 3
Description:
- This is the video.js
In this file, all the server requests for video are created
Diving Deeper Notes:
- Unable to figure out the Diving Deeper parts of Sprint 3
*/

//All the packages and files needed are imported
const {
  writeToFile,
  returnUniqueID,
  uploadImageURL,
  generateDuration,
  videoSource,
  getTimeStamp,
  generateComments,
} = require("../utils/utils");
const express = require("express");
const app = express();
const router = express.Router();
const path = require("node:path");
const fs = require("fs");

//Used to get the videos.json file path in the server
const videosJSONFile = path.join(__dirname, "../data/videos.json");
const videos = require(videosJSONFile);

//Used to tell the request the body is JSON data
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

//Middleware to allow access to Public folder
app.use(express.static("public"));

//GET Request to get a list of videos from the JSON file
router.get("/", (req, res) => {
  try {
    res.status(200).json(videos);
  } catch (error) {
    console.log(error);
  }
});

//GET REQUEST with parameter, Gets specific information for a video with specific parameter id
router.get("/:id", (req, res) => {
  try {
    const found = videos.find((video) => video.id === req.params.id);
    res.status(200).json(found);
  } catch (error) {
    console.log(error);
  }
});

//POST REQUEST, adds a new video to the Videos array
router.post("/", jsonParser, (req, res) => {
  //Deconstructs the body passed in the POST REQUEST
  const { title, description } = req.body;

  //Creates a new video object
  const newVideo = {
    id: returnUniqueID(),
    title,
    channel: "anonymous",
    image: uploadImageURL,
    description,
    views: 0,
    likes: 0,
    duration: generateDuration(0, 10, 2),
    video: videoSource,
    timestamp: getTimeStamp(),
    comments: generateComments(),
  };

  //Pushing a new video object to the videos array
  videos.push(newVideo);
  //Writing the video array to the file
  writeToFile(videosJSONFile, videos);

  //JSON data of the new video
  res.status(201).json(newVideo);
});

//Exporting the router
module.exports = router;
