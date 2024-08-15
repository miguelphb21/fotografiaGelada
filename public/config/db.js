const mysql = require("mysql2")

console.log(process.env.DB_HOST)
console.log(process.env.DB_USER)
console.log(process.env.DB_PASS)
console.log(process.env.DB_NAME)

const db = mysql.createConnection({
        host:process.env.DB_HOST,
        user:process.env.DB_USER,
        password:process.env.DB_PASS,
        database:process.env.DB_NAME
});

db.connect((err)=>{
    if(err){
        console.error('ERRO AO CONECTAR AO BANCO DE DADOS')
        return;
    }
    res.send('CONEXÃO BEM SUCEDIDA!')
})

module.exports = db