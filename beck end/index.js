const { response } = require("express")
const express = require("express")

const app = express()
app.use(express.json())

//PUT: atualizar informações
//DELETE: apagar informações
//GET: buscar informaçôes
//POST: enviar informaçôes

//Query params: parametros de busca -> utilizar para fazer buscas, filtros, paginaçâo
//Poute params: parametros de rota -> utilizados para indentificacôes, busca especifica,apagar registro, etc
//Body params: parametros do corpo -> utilizados para passar dados para caderno, atualizasçâo, etc


app.get('/buscar/:id', (request, response) => {

    const params = request.params

    return response.json({
        "indetificador": params.id
    })
}) 

app.post('/cadastro'. (request, response)) => {

    const dadosCadastro = request.body

    return response.json({
        "nome": dadosCadastro.nome,
        "profissao": dadosCadastro.profissao
    })
})

app.listen(3333)

