const mongoose = require("../config/mongoose");
const Todo = require("../models/todo");
let todoList = [
  {
    id: 1,
    description: "description",
    category: "work",
    date: "12/1/2022",
  },
  {
    id: 2,
    description: "description two",
    category: "home",
    date: "12/1/2012",
  },
  {
    id: 3,
    description: "description three",
    category: "school",
    date: "12/1/2013",
  },
];

// app.use(express.urlencoded());
module.exports.todo = function (req, res) {
  Todo.find({}, function (err, todos) {
    if (err) {
      console.log("error in fetching contacts " + err);
      return;
    }
    return res.render("todo", { title: "Todo List", todo_list: todos });
  });
  // return res.render("todo");
};

module.exports.delete = function (req, res) {
  let id = req.params.id;

  // let todoIndex = todoList.findIndex((todo) => todo.id == id);

  // if (todoIndex != -1) {
  //   todoList.splice(todoIndex, 1);
  // }
  Todo.findByIdAndDelete(id, function (err) {
    if (err) {
      console.log("error in deleting an object from database");
      return;
    }
    return res.redirect("back");
  });

  // return res.render("todo", { title: "Todo List", todo_list: todoList });
};

module.exports.add = function (req, res) {
  // let id = todoList.length + 1;
  // req.body.id = id;
  Todo.create(
    {
      // id: req.body.id,
      description: req.body.description,
      category: req.body.category,
      date: req.body.date,
    },
    function (err, newTodo) {
      if (err) {
        console.log("error in creating a contact" + err);
        return;
      }
      console.log("******" + newTodo);
      return res.redirect("back");
    }
  );
  // todoList.push(req.body);
  // return res.render("todo", { title: "Todo List", todo_list: todoList });
  // return res.redirect("back");
};

module.exports.edit = function (req, res) {
  let id = req.query.id;
  console.log("edit: " + id);
  return res.render("todo", { title: "Todo List", todo_list: todoList });
  // return res.render("todo");
};
