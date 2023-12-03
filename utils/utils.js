/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 3
Description:
- This is the utils.js
In this file, Helper variables and functions are stored here
Diving Deeper Notes:
- Unable to figure out the Diving Deeper parts of Sprint 3
*/

//All packages needed for this file
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

/**
 * This function writes content to a file
 * @param {file} fileName
 * @param {string} content
 * returns N/A
 */
const writeToFile = (fileName, content) => {
  fs.writeFileSync(fileName, JSON.stringify(content), "utf-8", (error) => {
    if (error) console.log(error);
    console.log(`New Video has been saved to ${fileName}`);
  });
};

/**
 * This function uses the uuid package to generate a unique id
 * @returns uuidv4, which is a generated unique id
 */
const returnUniqueID = () => {
  return uuidv4();
};

/**
 * This function generates a duration for the video
 * @param {*} min
 * @param {*} max
 * @param {*} decimalPlaces
 * @returns result value in a string
 */
function generateDuration(min, max, decimalPlaces) {
  const rand = Math.random() * (max - min) + min;
  const power = Math.pow(10, decimalPlaces);
  const result = Math.floor(rand * power) / power;
  return result.toString();
}

//The upload Image URL
const uploadImageURL = "http://localhost:5050/images/Upload-video-preview.jpg";

//The video src
const videoSource = "https://project-2-api.herokuapp.com/stream";

/**
 *
 * @returns a time
 */
const getTimeStamp = () => {
  return new Date().getTime();
};

/**
 * This function returns a array of comments with filler data
 * @returns a comments array
 */
function generateComments() {
  const comment = [
    {
      id: returnUniqueID(),
      name: "Olivia Grace Anderson",
      comment:
        "Such an inspiring bicycle travel video! The open road, the freedom, and the adventure - you've captured the essence of exploration beautifully. 🚴‍♀️🌟 #Wanderlust",
      likes: 3,
      timestamp: getTimeStamp(),
    },
    {
      id: returnUniqueID(),
      name: "Eleanor Donovan Harper",
      comment:
        "Pedaling through picturesque landscapes and embracing the journey—this video is pure wanderlust fuel! 🚴‍♂️🌄 #BicycleAdventures #TravelGoals",
      likes: 0,
      timestamp: getTimeStamp(),
    },
  ];
  return comment;
}

//Exports all the helper variables and functions
module.exports = {
  writeToFile,
  returnUniqueID,
  uploadImageURL,
  generateDuration,
  videoSource,
  getTimeStamp,
  generateComments,
};
