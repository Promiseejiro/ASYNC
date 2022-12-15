const express = require("express")
const {sendMessage,getMessages }= require("../controllers/chat.js")
const router = express.Router()

router.route("/chat").post(sendMessage)
router.route("/getchats").post(getMessages)

module.exports = router
