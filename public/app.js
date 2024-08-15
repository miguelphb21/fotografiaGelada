const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const db = require('./config/db.js')

app.get('/', (req, res)=>{
    res.send(`<h1 style="font-size: 100px;">GABRIEL AMOSTRADIHO</h1>`)
});

const port = 3000;

app.listen(port, ()=>{
    console.log('http://localhost:'+port)
});