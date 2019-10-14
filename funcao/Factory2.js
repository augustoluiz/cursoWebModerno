function criarProduto (nome, preco) {
    return {
        nome: nome,
        preco: preco - (preco * 0.10)
    }
}

const prod1 = new criarProduto('Celular', 899.99)
const prod2 = new criarProduto('Notebook', 4999.99)
const prod3 = new criarProduto('Tablet', 2099.99)

console.log(`Nome do prod1: ${prod1.nome} \nPreco do prod1: R$ ${(prod1.preco).toFixed(2)}\n\n`)
console.log(`Nome do prod2: ${prod2.nome} \nPreco do prod2: R$ ${(prod2.preco).toFixed(2)}\n\n`)
console.log(`Nome do prod3: ${prod3.nome} \nPreco do prod3: R$ ${prod3.preco.toFixed(2)}\n\n`)
