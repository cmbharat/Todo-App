const mongoose = require("mongoose");

//schema of todo
const todoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const todo = mongoose.model("Todo", todoSchema);

module.exports = todo;
