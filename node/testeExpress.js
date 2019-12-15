const express = require('express')
const server = express()

const obj = require('./arquivo.json')

server.get('/', function(req, res) {
    res.send(obj)
})

server.listen(3000, () => {console.log('rodando')})
