const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();
const db_Url = process.env.MONGO_DB_URL;

const connectDB = async() =>{
    try{
        await mongoose.connect(db_Url);
        console.log("db Connected");
    }
    catch(err){
        console.log(err)
    }
}

module.exports = connectDB;
