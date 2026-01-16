const express = require("express");
const connectDB = require("./db");
const youtubeRouter = require("./route/router");
const app = express();
const cors = require("cors");
const serverless = require("serverless-http");
const router = require("./route/linkedInRouter");


app.use(
    cors({
      origin: "*",
      method: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true,
    })
  );

app.use(express.json());

// let isConnected = false;

// app.use(async (req, res, next) => {
//   if (!isConnected) {
//     await connectDB();
//     isConnected = true;
//     console.log("Database connected");
//   }
//   next();
// });

app.use('/api/youtube', youtubeRouter);
app.use('/api/linkedIn', router);


app.listen(3000, ()=>{
    connectDB();
    console.log("Server is running on port 3000 http://localhost:3000/api/linkedIn/callback")
})


module.exports = app;
module.exports.handler = serverless(app);