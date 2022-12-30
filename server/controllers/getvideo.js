const videoSchema = require("../models/videoschema");
const recordedVideoSchema = require("../models/recordedvideo");
const getVideo = async (req, res, next) => {
  const videos = await videoSchema.find({});
  res.json({ videos });
};

const getRecordedVideo = async (req, res, next) => {
  const videos = await recordedVideoSchema.find({});
  res.status(200).json({ videos });
};
module.exports = { getVideo, getRecordedVideo };
