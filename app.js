const express = require('express');

var app = express();

var friends = [["Tom","Schneider"], ["Peter","Enis"]]

app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/cards", (req, res) => {
    res.render("card", {prompt: "Who is burried somewhere?", hint: "Think about whose tomb it is."});
});

//First name and Last name
app.get("/sandbox", (req, res) => {
    res.render("table", {friends: friends});
});



app.listen(3000, () => {
    console.log("The application is running on localhost:3000")
});