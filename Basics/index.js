const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/about", (req, res) => {
  res.send("Software engineer");
});
app.get("/project", (req, res) => {
  res.send("working on them");
});

app.listen(3000);
