const express = require("express");
const connectDB = require("../db");
const youtubeRouter = require("../route/router");
const app = express();
const cors = require("cors");

app.use(
    cors({
      origin: "*",
      method: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true,
    })
  );

app.use(express.json());

let isConnected = false;

app.use(async (req, res, next) => {
  if (!isConnected) {
    await connectDB();
    isConnected = true;
  }
  next();
});

app.use('/api/youtube', youtubeRouter);


// app.listen(3000, ()=>{
//      connectDB();
//     console.log("http://localhost:3000/api/youtube/connectedYoutube")
// })

module.exports = app;