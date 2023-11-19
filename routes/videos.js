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

const videosJSONFile = path.join(__dirname, "../data/videos.json");
const videos = require(videosJSONFile);

const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
app.use(express.static("public"));

router.get("/", (req, res) => {
  try {
    res.status(200).json(videos);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", (req, res) => {
  try {
    const found = videos.find((video) => video.id === req.params.id);
    res.status(200).json(found);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", jsonParser, (req, res) => {
  const { title, description } = req.body;

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
    comments: generateComments(), //Will fill with some generative comments related to video in an array of its own, another helper function
  };

  videos.push(newVideo);
  writeToFile(videosJSONFile, videos);

  res.status(201).json(newVideo);
});

module.exports = router;
