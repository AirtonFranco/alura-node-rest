//1 - npm init (criar o arquivo package.jason com o projeto node)
//2 - npm install express (cria o node-modules já com o express instalado)
//3 - configurar o servidor no index.js

const express = require('express')
const app = express()

//chamando o consign que acabamos de instalar
const consign = require('consign')

//incluindo tudo que esta em controllers no nosso app
consign()
    .include('controllers')
    .into(app)

app.get('/', (req, res) => {
  res.send('Olá mundo')
})


 
app.listen(8080, () => {console.log("Servidor rodando na porta 8080")})