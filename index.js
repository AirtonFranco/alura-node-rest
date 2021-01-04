//1 - npm init (criar o arquivo package.jason com o projeto node)
//2 - npm install express (cria o node-modules já com o express instalado)
//3 - configurar o servidor no index.js

const customExpress = require('./config/customExpress')
const conexao = require('./infra/conexao')
const Tabelas = require('./infra/tabelas')

conexao.connect(erro => {
    if(erro) {
        console.log(erro)
    } else {
        const app = customExpress()
        Tabelas.init(conexao)

app.listen(8080, () => {console.log("Servidor rodando na porta 8080")})
        console.log("Conectado com sucesso")
    }
})

