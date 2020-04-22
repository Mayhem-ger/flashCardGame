const express = require("express")
const router = express.Router();

router.get("/", (req, res) => {
    res.render("card", {prompt: "Who is burried somewhere?", hint: "Think about whose tomb it is."});
});

module.exports = router;