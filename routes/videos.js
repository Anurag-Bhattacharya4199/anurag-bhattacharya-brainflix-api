const express = require("express");
const router = express.Router();
const path = require("node:path");

const videosJSONFile = path.join(__dirname, "../data/videos.json");
const videos = require(videosJSONFile);

router.get("/", (_req, res) => {
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

module.exports = router;
