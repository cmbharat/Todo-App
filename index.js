const express = require("express");
const port = 8000;

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded());
app.use(express.static("assets"));

app.use("/", require("./routes/index"));
app.use("/delete-todo", require("./routes/index"));

app.listen(port, function (err) {
  if (err) {
    console.log(`error found as ${err}`);
    return;
  }
  console.log("server started ");
});
