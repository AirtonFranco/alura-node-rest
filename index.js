//1 - npm init (criar o arquivo package.jason com o projeto node)
//2 - npm install express (cria o node-modules já com o express instalado)
//3 - configurar o servidor no index.js

const express = require('express')
const app = express()
 
app.get('/', (req, res) => {
  res.send('Olá mundo')
})

app.get('/atendimentos', (req, res) => {
    res.send('Você esta na rota de atendimentos, vc está fazendo um GET')
  })
 
app.listen(8080, () => {console.log("Servidor rodando na porta 8080")})