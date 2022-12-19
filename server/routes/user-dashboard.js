const express = require("express")
const router = express.Router()
const {userDashboard,getPost} =require("../controllers/user-dashboard")
router.route("/dashboard").get(userDashboard)
router.route("/getimage").get(getPost)
module.exports  = router