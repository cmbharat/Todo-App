const Todo = require("../models/todo");

module.exports.todo = function (req, res) {
  Todo.find({}, function (err, todos) {
    if (err) {
      console.log("error in fetching contacts " + err);
      return;
    }
    return res.render("todo", { title: "Todo List", todo_list: todos });
  });
};

module.exports.delete = function (req, res) {
  let id = req.params.id;

  Todo.findByIdAndDelete(id, function (err) {
    if (err) {
      console.log("error in deleting an object from database");
      return;
    }
    return res.redirect("back");
  });
};

module.exports.add = function (req, res) {
  Todo.create(
    {
      description: req.body.description,
      category: req.body.category,
      date: req.body.date,
    },
    function (err, newTodo) {
      if (err) {
        console.log("error in creating a contact" + err);
        return;
      }

      return res.redirect("back");
    }
  );
};

// module.exports.edit = function (req, res) {
//   let id = req.query.id;
//   console.log("edit: " + id);
//   return res.render("todo", { title: "Todo List", todo_list: todoList });
//   // return res.render("todo");
// };
