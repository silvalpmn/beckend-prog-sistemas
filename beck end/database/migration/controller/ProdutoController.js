const conexao = require('../database/connection')

module.exports = {

    async atualizar(request, reponse){
        const {id} = request.params
        const {
            nome,
            categoria,
            preco,
            estoque,
            unidade,
            marca,
            descricao,
            email,
            celular,
        } = request.body

        await conexao('cliente')
            .where('id, id')
            .update({
                nome:nome,
                categoria:

            })
        }
