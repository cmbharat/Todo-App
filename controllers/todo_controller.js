todoList = [
  {
    description: "description",
    category: "work",
    date: "12/1/2022",
  },
];

// app.use(express.urlencoded());
module.exports.todo = function (req, res) {
  return res.render("todo", { title: "Todo List", todo_list: todoList });
  // return res.render("todo");
};

module.exports.delete = function (req, res) {
  return res.render("todo", { title: "Todo List", todo_list: todoList });
  // return res.render("todo");
};

module.exports.add = function (req, res) {
  return res.render("todo", { title: "Todo List", todo_list: todoList });
  // return res.render("todo");
};
