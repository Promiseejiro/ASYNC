const multer = require("multer");
const fs = require("fs");
var path = require("path");
const file = require("../models/recordedvideo");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "recordedVideo");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
var recordedvideo = multer({ storage: storage });
module.exports = recordedvideo;
