const express = require("express")
const routes = express.Router()
const clienteController = require('./controllers/ClienteController')
const produtoController = require('./controllers/ProdutoController')

//rotas de cliente
routes.post('/cliente/cadastro', clienteController.cadastrar)
routes.get('/cliente/listar', clienteController.lister)