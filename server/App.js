const express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
const ejs = require("ejs");
const { Server } = require("socket.io");
const http = require("http");
//app init
const app = express();
const auth = require("./routes/users");
const userDashboardRoute = require("./routes/user-dashboard");
const chatRoute = require("./routes/chat");
const post = require("./routes/post");
const chat = require("./routes/chat");
const videoUploadRoute = require('./routes/uploadvideo')
app.set("view engine", "ejs");
const fs = require("fs");
var path = require("path");
//middlewares
const notFound = require("./middewares/not-found.js");
const authentication = require("./middewares/auth.js");
//database
const connectDb = require("./db/connectDb.js");
const port = 5000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
const server = http.createServer(app);
app.use("/uploads", express.static("./uploads"));
app.use("/uploadvideo", express.static("./uploadvideo"));

const io = new Server(server);
io.on("connection", (socket) => {
  console.log("a user connected");
});

app.use("/", auth, post, chatRoute,videoUploadRoute);
app.use("/user", userDashboardRoute);
app.use(notFound);
const start = async () => {
  try {
    await connectDb();
    server.listen(port, console.log(`app is listening at port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();