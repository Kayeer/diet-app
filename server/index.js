require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const api = require("./api/router.js");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// const NAME = process.env.NAME;
// app.use(express.static('./public'));
app.use("/api", api);
app.set('view engine', 'pug');
app.set('views', './views');
app.get('/', function(req, res){
    // res.status(500).send('<h1>aboba</h1>')
    res.render('index')
});

app.get('/gleb',function(req,res){
    res.send(`<h2>${NAME}</h2>`)
});

app.listen(PORT);

