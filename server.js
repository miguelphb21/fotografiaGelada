const dotenv = require("dotenv");
dotenv.config();

const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

const db = require('./config/db.js')

const app = express();

app.use(cors())
app.use(bodyParser.json())

const rotasfg = require('./router/routersfg.js')
app.use('/api/usuarios', rotasfg)

app.get('/', (req, res)=>{
    res.send(`<h1 style="font-size: 100px;">GABRIEL AMOSTRADIHO</h1>`)
});

const port = 3000;

app.listen(port, ()=>{
    console.log('http://localhost:'+port)
});