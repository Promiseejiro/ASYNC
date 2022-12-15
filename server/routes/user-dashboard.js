const express = require("express")
const router = express.Router()
const userDashboard =require("../controllers/user-dashboard")
router.route("/dashboard").get(userDashboard)
module.exports  = router