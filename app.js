const express = require('express');
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())

app.set("view engine", "pug");

app.use((req,res,next) => {
    console.log("hello")
    next();
})

app.use((req,res,next) => {
    console.log("world")
    next();
})






app.get("/", (req, res) => {
    const name = req.cookies.username
    if (name) {
        res.render("index", {name});
    }
    else {
        res.redirect("/hello");
    }
});

app.get("/cards", (req, res) => {
    res.render("card", {prompt: "Who is burried somewhere?", hint: "Think about whose tomb it is."});
});

app.get("/hello", (req, res) => {
    const name = req.cookies.username
    if (name) {
        res.redirect("/");
    } else {
        res.render("hello");
    }
});

app.post("/hello", (req, res) => {
    res.cookie("username", req.body.username)
    res.redirect("/")
});



app.post("/goodbye", (req, res) => {
    res.clearCookie("username")
    res.redirect("/hello")
});

//random challenge
var friends = [["Tom","Schneider"], ["Peter","Enis"]]
app.get("/sandbox", (req, res) => {
    res.render("table", {friends: friends});
});


app.listen(3000, () => {
    console.log("The application is running on localhost:3000")
});