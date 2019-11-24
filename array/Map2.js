const carrinho = [ '{"nome": "Borracha", "preco": 3.45}',
                   '{"nome": "Caderno", "preco": 13.90}',
                   '{"nome": "Kit de Lápis", "preco": 41.22}',
                   '{"nome": "Caneta", "preco": 7.50}'
]

//Retornar um array apenas com os preços

const retorna_preco = e => JSON.parse(e).preco.toFixed(2)

const carrinho_precos = carrinho.map(retorna_preco)

console.log(carrinho_precos)