var mongoose = require("mongoose");
var VideoSchema = new mongoose.Schema(
  {
    name: String,
    fileName: {
      type: String,
    },
    filePath: {
      type: String,
    },
    fileType: {
      type: String,
    },
    fileSize: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("video", VideoSchema);
