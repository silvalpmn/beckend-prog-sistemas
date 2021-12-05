const conexao = require('../database/connection');

module.exports = {

    async cadastrar(request, response){
        const {id_cliente, id_produto} = request.body;

        
        await conexao('vendas').insert({
            id_cliente: id_cliente
            id_produto: id_produto
        })
    
        return response.status(204)
}