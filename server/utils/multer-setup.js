const multer = require("multer");
const fs = require("fs");
var path = require("path");
const file = require("../models/file");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },

  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
var upload = multer({ storage: storage });
module.exports = upload;
