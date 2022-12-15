const mongoose = require("mongoose");
const chatSchema= new mongoose.Schema({
  msg:{
    type: String,
  },
  users:Array,
  sender:{
    type: String,
  },
  to:{
    type:String
  }
},
  {
    timestamps:true
  })

module.exports = mongoose.model("chats",chatSchema)
