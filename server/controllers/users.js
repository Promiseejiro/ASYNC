const User = require("../models/user.js");
const jwtdecode = require("jwt-decode")
const register = async (req, res) => {
  console.log(req.body)
 const user = await User.create({ ...req.body })
  const token =await user.createJWT()
  console.log(token)
  const decodeToken= jwtdecode(token)
  await res.status(200).json({ user: { name: user.name }, token });
}
  const login = async(req,res)=>{
  const {name, password} = await req.body
  console.log(name,password)
 const user = await User.findOne({name:name})
 console.log(user)
 if(!user){
   res.status(200).json({msg:'no users '})
 }
   const isPasswordCorrect = await user.comparePassword(password)
  const token = await user.createJWT()
   if(!isPasswordCorrect){
   res.status(401).json({msg:"password not correct"})
  }
   res.json({name:user.name,token}
  )
}


//for deleting users
const deleteUsers=async (req,res)=>{
  const deletedUsere =await User.deleteMany({
    name: ``
  });
  
  res.status(200).send({msg:deletedUsere})
}
module.exports = {login, register,deleteUsers}