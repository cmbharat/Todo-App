const express = require("express");
const port = 8000;

const app = express();
const db = require("./config/mongoose");

//setting up view engine
app.set("view engine", "ejs");

//setting up  views path
app.set("views", "./views");
app.use(express.urlencoded());
app.use(express.static("assets"));
app.get("delete-todo/:id", function (req, res) {
  console.log(req.params.id);
});

app.use("/", require("./routes/index"));

app.listen(port, function (err) {
  if (err) {
    console.log(`error found as ${err}`);
    return;
  }
  console.log("server started ");
});
