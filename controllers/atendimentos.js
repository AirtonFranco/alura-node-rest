//O atendimentos.js é o arquivo que vai controlar nossa rota de atendimentos
//req - é o que nos estamos recebendo do user
//res - resposta que iremos passar
 module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        res.send('Você esta na rota de atendimentos, vc está fazendo um GET')
      })
    
      app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        res.send('Você esta na rota de atendimentos, vc está fazendo um POST')
      })
  }