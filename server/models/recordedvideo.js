var mongoose = require("mongoose");
var VideoRecordSchema = new mongoose.Schema(
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


module.exports = new mongoose.model("recordedvideo", VideoRecordSchema);
