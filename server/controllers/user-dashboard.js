const User = require("../models/user.js");
const FileSchema = require(".././models/file.js");
const userDashboard =async(req,res)=>{
  const user =await User.find({});
  console.log(user)
  res.status(200).json(user)
}

const getPost =  async (req, res) => {
  try {
    const files = await FileSchema.find();
    res.status(201).send(files);
    console.log(files);
  } catch (erro) {
    console.log(erro);
  }
};

module.exports = {userDashboard,getPost};

