const express = require("express");
const app = express();
const userModel = require("./models/user");
const mongoserver = require("./config/db");

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

//built-in middlewares
app.use(express());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = await userModel.create({
    username: username,
    email: email,
    password: password,
  });
  //console.log(req.body);
  res.send("registered");
});
app.get("/about", (req, res) => {
  res.send("Software engineer");
});
app.get("/project", (req, res) => {
  res.send("working on them");
});
app.post("/form-data", (req, res) => {
  console.log(req.body);

  res.send("logged in");
});

app.listen(3000);
