//O atendimentos.js é o arquivo que vai controlar nossa rota de atendimentos

 module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        res.send('Você esta na rota de atendimentos, vc está fazendo um GET')
      })
  }