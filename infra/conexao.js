//configurações de banco de dados

const mysql = require('mysql')

const conexao = mysql.createConnection(
    {
        host: 'localhost',
        port: 3307,
        user: 'admin',
        password: 'admin',
        database: 'agenda-petshop'
    }
) 

module.exports = conexao