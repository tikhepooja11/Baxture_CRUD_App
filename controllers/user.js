const { error } = require("@hapi/joi/lib/base");
const userModel = require("../models/user");
const mongoose = require("mongoose");

const CreateUser = async (request, response) => {
  console.log("inside createUser() method");
  const { username, age, hobbies } = request.body;
  const newUser = new userModel({
    username,
    age,
    hobbies,
  });

  try {
    const savedUser = await newUser.save();
    response.status(201).send(savedUser);
  } catch (error) {
    const errorMessage = `User cannot be created. ${error.message}`;
    response.status(400).json({ message: errorMessage });
  }
};

const ListAllUsers = async (req, res) => {
  console.log("inside ListAllUsers() : ");
  try {
    const userList = await userModel.find();
    res.status(200).send(userList);
  } catch (error) {
    console.error("Error in ListAllUsers:", error);
    if (!error.status || error.status === 500) {
      res.status(500).json({
        message:
          "Oops! Something went wrong on our end. Our team has been notified, and we're working to fix it. Please try again later or contact support if the issue persists.",
      });
    }
  }
};

const ListUserById = async (req, res) => {
  console.log("inside ListUserById() : ", req.params.userId);
  try {
    const userId = req.params.userId;

    // Check if userId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      throw { status: 400, message: "Error in getting user" };
    }
    const user = await userModel.findById(userId);
    if (!user) {
      throw { status: 404, message: "Error in getting user" };
    }
    res.status(200).send(user);
  } catch (error) {
    console.error("Error in ListUserById:", error);
    if (error.status === 400) {
      res.status(400).json({
        message: "Invalid userId format :  Please enter valid userId",
      });
    } else if (error.status === 404) {
      res.status(404).json({
        message: "User with this id does not exist",
      });
    }
  }
};

const UpdateUserById = async (req, res) => {
  console.log("inside UpdateUserById()", req.body);

  const userId = req.params.userId;
  const update = req.body;
  console.log("User Id whose records to be updated : " + userId);
  console.log("Details to be updated : " + JSON.stringify(update));

  try {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      throw { status: 400, message: "Error in updating user" };
    }
    const updatedUser = await userModel.findByIdAndUpdate(userId, update, {
      new: true,
    });
    if (!updatedUser) {
      throw { status: 404, message: "Error in updating user" };
    }
    res.status(200).send(updatedUser);
  } catch (error) {
    console.error("Error in UpdateUserById:", error);
    if (error.status === 400) {
      res.status(400).json({
        message: "Invalid userId format :  Please enter valid userId",
      });
    } else if (error.status === 404) {
      res.status(404).json({
        message: "User with this id does not exist",
      });
    }
  }
};

const deleteUser = async (req, res) => {
  console.log(`inside deleteUser()`);
  const userId = req.params.userId;
  console.log("User Id whose records to be deleted : " + userId);
  try {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      throw { status: 400, message: "Error in deleting user" };
    }
    const deleteUser = await userModel.findByIdAndDelete(userId);
    if (!deleteUser) {
      throw { status: 404, message: "Error in deleting user" };
    }
    res.status(204).end(); //  204 = No content is typically used for successful deletions without a response body.
  } catch (error) {
    console.error("Error in deleteUser:", error);
    if (error.status === 400) {
      res.status(400).json({
        message: "Invalid userId format :  Please enter valid userId",
      });
    } else if (error.status === 404) {
      res.status(404).json({
        message: "User with this id does not exist",
      });
    }
  }
};
module.exports = {
  CreateUser,
  ListAllUsers,
  ListUserById,
  UpdateUserById,
  deleteUser,
};
