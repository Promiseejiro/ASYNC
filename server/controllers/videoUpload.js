const FileSchema = require("../models/videoschema");
const VideoRecordSchema = require("../models/recordedvideo");

const HandleVideoUpload = async (req, res, next) => {
  console.log(req.file);
  const video = new FileSchema({
    fileName: req.file.filename,
    filePath: req.file.path,
    fileType: req.file.mimetype,
    fileSize: req.file.size,
    // mimetype: "video/mp4",
  });
  await video.save();
  res.json({ msg: "video uploaded succesfully" });
};
module.exports = HandleVideoUpload;

const HandleRecordVideoUpload = async (req, res, next) => {
  console.log(req.file);
  const video = new VideoRecordSchema({
    fileName: req.file.filename,
    filePath: req.file.path,
    fileType: req.file.mimetype,
    fileSize: req.file.size,
    mimetype: "video/mp4",
  });
  await video.save();
  res.json({ msg: "recordvideo uploaded succesfully" });
};
module.exports = { HandleVideoUpload, HandleRecordVideoUpload };
