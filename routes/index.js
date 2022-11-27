const express = require("express");

const router = express.Router();

const todoController = require("../controllers/todo_controller");

// console.log("router loaded");

//all the routers
router.get("/", todoController.todo);
router.get("/delete-todo/:id", todoController.delete);
// router.get("/edit-todo", todoController.edit);
router.post("/create-todo", todoController.add);
module.exports = router;
