const express = require("express")
const router = express.Router()
const upload = require("../utils/multer-setup.js")
const handlePost= require("../controllers/post.js")

router.post("/post",upload.single('file'),handlePost)

module.exports = router
