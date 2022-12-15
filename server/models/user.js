const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const UserSchema= new mongoose.Schema({
  name:{
    type: String,
   required:[true,"please input name filed"]
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide a valid email',
    ],
    unique: true,
  },
  password:{
    type: String,
   required:[true,"please input password filed"]
  },
  password:{
    type: String,
   required:[true,"please input password filed"]
  }
},{ timestamps: true });
UserSchema.pre("save",async function (){
  var salt = bcrypt.genSaltSync(10);
this.password = await bcrypt.hash(this.password,salt)
});
UserSchema.methods.createJWT =async function(){
 return jwt.sign(
   {
   userId:this._id,name:this.name
 },"jwtSecrete",{
   expiresIn:"30d"
 })
};

UserSchema.methods.comparePassword = async function(candidatePassword){
  const isMatch = await bcrypt.compare(candidatePassword,this.password)
  return isMatch
}


module.exports =mongoose.model("async-users",UserSchema);