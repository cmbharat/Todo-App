const express = require("express");

const router = express.Router();

const todoController = require("../controllers/todo_controller");

console.log("router loaded");

router.get("/", todoController.todoList);
router.get("/create-todo", todoController.create);
router.get("/delete-todo", todoController.delete);
module.exports = router;
