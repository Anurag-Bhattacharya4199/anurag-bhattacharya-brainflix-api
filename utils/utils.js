const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const writeToFile = (fileName, content) => {
  fs.writeFileSync(fileName, JSON.stringify(content), "utf-8", (error) => {
    if (error) console.log(error);
    console.log(`New Video has been saved to ${fileName}`);
  });
};

const returnUniqueID = () => {
  return uuidv4();
};

function generateDuration(min, max, decimalPlaces) {
  const rand = Math.random() * (max - min) + min;
  const power = Math.pow(10, decimalPlaces);
  const result = Math.floor(rand * power) / power;
  return result.toString();
}

const uploadImageURL = "http://localhost:5050/images/Upload-video-preview.jpg";

const videoSource = "https://project-2-api.herokuapp.com/stream";

const getTimeStamp = () => {
  return new Date().getTime();
};

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

module.exports = {
  writeToFile,
  returnUniqueID,
  uploadImageURL,
  generateDuration,
  videoSource,
  getTimeStamp,
  generateComments,
};
