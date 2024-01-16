const express = require("express");
const UserController = require("../controllers/user");
const router = express.Router();

router.post("/user", UserController.CreateUser);
router.get("/users", UserController.ListAllUsers);
router.get("/users/:userId", UserController.ListUserById);
router.patch("/users/:userId", UserController.UpdateUserById);
router.delete("/users/:userId", UserController.deleteUser);
// router.delete(
//   "/deleteEmployee/:employeeFullName",
//   EmployeeController.deleteEmployee
// );

module.exports = router;
