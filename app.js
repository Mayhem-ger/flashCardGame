const express = require('express');
const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.urlencoded({extended: false}))

var friends = [["Tom","Schneider"], ["Peter","Enis"]]

app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/cards", (req, res) => {
    res.render("card", {prompt: "Who is burried somewhere?", hint: "Think about whose tomb it is."});
});

app.get("/hello", (req, res) => {
    res.render("hello");
});

app.post("/hello", (req, res) => {
    res.render("hello", {name: req.body.username})
});

//random challenge
app.get("/sandbox", (req, res) => {
    res.render("table", {friends: friends});
});


app.listen(3000, () => {
    console.log("The application is running on localhost:3000")
});