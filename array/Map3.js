//Criando um novo Map para alterar o array original
Array.prototype.map2 = function(callback){
    for(let i = 0; i < this.length; i++){
        this[i] = callback(this[i])
    }
    return this
}

//Criando um novo Map para enviar um novo array, sem alterar o original
Array.prototype.map3 = function(callback){
    novoArray = []
    for(let i = 0; i < this.length; i++){
        novoArray.push(callback(this[i]))
    }
    return novoArray
}

const carrinho = [ '{"nome": "Borracha", "preco": 3.45}',
                   '{"nome": "Caderno", "preco": 13.90}',
                   '{"nome": "Kit de Lápis", "preco": 41.22}',
                   '{"nome": "Caneta", "preco": 7.50}'
]

//Retornar um array apenas com os preços

const retorna_preco = e => JSON.parse(e).preco.toFixed(2)

//altera o array original
//const carrinho_precos = carrinho.map2(retorna_preco)

//cria um novo array, sem modificar o array original
const carrinho_precos = carrinho.map3(retorna_preco)

console.log(carrinho_precos)
console.log(carrinho)