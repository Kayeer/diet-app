const router = require('express').Router();

router.get("/",(req, res) => {
    console.log(req.query);
    res.send("Пришёл гет запрос");
    // res.send("<h1>API</h1>");
});

router.post("/", (req, res) => {
    // console.log(req.body);
    console.log(req.body);
    res.send("Пришёл пост запрос")
    
})

module.exports = router;