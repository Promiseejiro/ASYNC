var mongoose = require('mongoose'); 


var FileSchema = new mongoose.Schema({ 
    name: String, 
    fileName:{
      type: String
    },
    filePath:{
      type: String
    },
    fileType:{
      type: String
    },
    fileSize:{
      type: String
    }
    
},{timestamps:true}); 
module.exports = new mongoose.model('conical', FileSchema);