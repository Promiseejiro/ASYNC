const express = require("express");
const router = express.Router()
const {login, register,getUser,deleteUsers} = require("../controllers/users.js")
router.route("/login").post(login)
router.route("/register").post(register);
router.route("/delete").get(deleteUsers)
module.exports= router
 
 