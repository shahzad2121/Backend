const express = require("express");
const app = express();

//this is  view engine usage method
app.set("view engine", "ejs");

//Middle-Wares
//there are three types of middlwares:
// 1:custom;
// 2:express prebuilt
// 3:third-party

//this is custom middle-ware
// app.use((req, res, next) => {
//   console.log("this is middware");
//   var a = 10.17;
//   var b = 20.6;
//   console.log(a + b);
//   return next();
// });


app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.send("Software engineer");
});
app.get("/project", (req, res) => {
  res.send("working on them");
});
app.get("/form-data", (req, res) => {
  console.log(req.query);

  res.send('logged in')
  
});

app.listen(3000);
