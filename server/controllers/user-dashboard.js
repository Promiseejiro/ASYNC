const User = require("../models/user.js");
const userDashboard =async(req,res)=>{
  const user =await User.find({});
  console.log(user)
  res.status(200).json(user)
}
module.exports = userDashboard;

