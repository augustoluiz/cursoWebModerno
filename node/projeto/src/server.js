const express = require('express')
const server = express()
const bodyParser = require('body-parser')

// Server config
const server_port = 8080

// Banco
const bd = require('./bancoDeDados')

server.use(bodyParser.urlencoded())

server.get('/produtos', function(req, res){
    res.send(bd.getProdutos())
})

server.get('/produtos/:id', (req, res) => {
    const id = req.params.id
    res.send(bd.getProduto(id))
})

server.post('/produtos', (req, res) => {
    const produto = bd.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

server.put('/produtos/:id', (req, res) => {
    const produto = bd.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

server.delete('/produtos/:id', (req, res) => {
    const produto = bd.excluirProduto(req.params.id)
    res.send(produto)
})


server.listen(server_port, () => {
    console.log('Server is running')
})