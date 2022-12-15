const User = require("../models/user.js");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  // check header
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    res.status(400).json({msg:"no token provided"})
  }
  const token = authHeader.split(' ')[1]
  try {
    const payload = jwt.verify(token,"jwtSecrete")
console.log(payload)
  // req.user = { userId: payload.userId, name: payload.name }
    next()
  } catch (error) {
    res.status(400).json({msg:"invalid token"})
  }
}

module.exports = auth
