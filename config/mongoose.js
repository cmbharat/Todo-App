const mongoose = require("mongoose");

//connect to the mongodb server
mongoose.connect("mongodb://localhost/todo_list_db");

// once the connection with db server is done with mongoose
//  we make use of that connection to interact with mongodb
const db = mongoose.connection;

//if error occurs while connecting to db print error
db.on("error", console.error.bind(console, "connection error"));

//up and running then print message
db.once("open", function () {
  console.log("connection to db server started");
});
