const express = require('express') //chamando o express que instalamos
const consign = require('consign') //chamando o consign que acabamos de instalar
const bodyParser = require('body-parser') //importando o bady parse que acabamos de instalar


//incluindo tudo que esta em controllers no nosso app
module.exports = () => {
    const app = express()

    app.use(bodyParser.urlencoded({extended: true})) //formato do postman
    app.use(bodyParser.json()) //informando que quero converter as req em json
    
    consign()
    .include('controllers')
    .into(app)

    return app

}

