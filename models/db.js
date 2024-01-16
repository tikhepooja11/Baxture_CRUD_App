require("dotenv").config();
const mongoose = require("mongoose");
const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;

mongoose.connect(
  `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.sygdhbi.mongodb.net/UserDB_Baxture`,
  (error) => {
    if (error) console.log(`Error in connection: ${error}`);
    else console.log(`Connected to DB`);
  }
);
