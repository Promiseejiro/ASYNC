const chatSchema = require("../models/chat.js");
const sendMessage =async(req,res,next)=>{
  const message =await chatSchema.create(
    {
      msg:req.body.msg,
      sender:req.body.sender,
      to:req.body.to
    }
  )
  
   console.log(message)
  if(!message){
res.status(500).json("user not registered")
  }
  res.status(200).send(req.body)
}

const getMessages =async(req,res,next)=>{
const messages = await chatSchema.find({
  sender:req.body.sender,
  to:req.body.to
});
//const messages = await chatSchema.find({});
//const messages = await chatSchema.deleteMany({user:[]});
 res.status(200).send(messages);
}



module.exports = {sendMessage,getMessages}