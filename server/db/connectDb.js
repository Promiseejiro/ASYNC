const mongoose  = require("mongoose");
const connectionstr ="mongodb+srv://promise:4128@cluster0.zbdblxn.mongodb.net/?retryWrites=true&w=majority"

const connectDb =()=>{
   return (mongoose.connect(connectionstr,{
   useNewUrlParser: true ,
  useUnifiedTopology: true
   }))
}

  module.exports = connectDb

