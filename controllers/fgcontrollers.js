const db = require('../config/db.js');

const revisarDb = (req, res)=>{
  db.query()
}

const adicionarInfo = (req, res) => {
    const {nome,nick_name,email,telefone,senha} = req.body;
   
  db.query(
      'INSERT INTO usuarios (nome, nick_name,email,telefone,senha) values (?,?,?,?,?)',
      [nome, nick_name,email,telefone,senha],
      (err, results) => {
        if (err) {
          console.error('Erro erro ao criar usuario:', err);
          res.status(500).send('Erro ao Criar usuario');
          return;
        }
        if (results.length > 0) {
          res.status(201).send('Usuario Criado');
          return;
        }
        }
    )
}

module.exports = {
    adicionarInfo
}