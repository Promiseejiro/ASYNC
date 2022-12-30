const express = require("express");
const router = express.Router();
const uploadVideo = require("../utils/videoUploads");
const recordedvideo = require("../utils/recordedVideo");
const {
  HandleVideoUpload,
  HandleRecordVideoUpload,
} = require("../controllers/videoUpload");
const {getVideo,getRecordedVideo} = require("../controllers/getvideo");

router.post("/videoupload", uploadVideo.single("file"), HandleVideoUpload);
router.get("/getvideo", getVideo);

router.post(
  "/videorecords",
  recordedvideo.single("file"),
  HandleRecordVideoUpload
);
router.get('/getrecordedvideo',getRecordedVideo)
module.exports = router;