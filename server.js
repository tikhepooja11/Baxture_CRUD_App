require("dotenv").config();
const db = require("./models/db"); // db connection/refused connection
const express = require("express");
const userRoute = require("./routes/user");

const router = express(); //ask for router to express
const port = process.env.PORT || 3000; // Use port from .env or default to 3000

router.listen(port, () => {
  console.log("Express server started on port : 3000");
});
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get("/", function (req, res) {
  res.send("api working");
});

router.use("/userRoute", userRoute);

//  Error handling if passed request doesnt matched with anything
router.use((req, res, next) => {
  const error = new Error(
    "EndPoint does not exist...Please check our requested URL"
  );
  console.log(error);
  return res.status(404).json({ message: error.message });
});
