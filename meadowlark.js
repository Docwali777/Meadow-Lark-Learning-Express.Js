const express = require("express");
const fs = require("fs");
const app = express();
const hbs = require("hbs").create({defauitLayout: "main"});

app.use(express.static(__dirname + "/public"))

app.set("port", process.env.PORT || 3000)
app.set("view engine", "hbs")

app.get("/", function(req, res){
var fortunes = [
"Conquer your fears or they will conquer you.", "Rivers need springs.",
"Do not fear what you don't know.",
"You will have a pleasant surprise.", "Whenever possible, keep it simple.",
];
var i = Math.floor(Math.random() * fortunes.length);
  res.render("home", {
    fortunes: fortunes[i],
  })
});

app.get("/about", function(req, res){
  res.render("about", {
    aboutMsg: "This is who we are"
  });
})

app.use(function(req, res){
  res.type("text/html");
  res.status(404);
  res.send("<h1>404 - Not Found </h1>");

});

app.set(function(req, res){
  res.type("text/html");
  res.status(500);
  res.send("500 - Server Not Found" + req.url);
})
app.listen(app.get("port"), function(){
  console.log("The server is set to port: " + app.get("port"))
})
