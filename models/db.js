const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://pooja:pooja123@cluster0.sygdhbi.mongodb.net/UserDB_Baxture",
  (error) => {
    if (error) console.log(`Error in connection: ${error}`);
    else console.log(`Connected to DB`);
  }
);
