const FileSchema =require("../models/file.js")
const handlePost = async(req, res, next) => { 
    const name = await req.body.name
    console.log(req.file)
   const file =new FileSchema({
      name :req.body.name,
      fileName:req.file.originalname,
      filePath:req.file.path,
      fileType:req.file.mimetype,
      fileSize:req.file.size
    });
    
  await file.save()
    res.status(200).json({msg:"successful uploaded"})
}

module.exports= handlePost
