//Em js, um objeto é uma coleção de chave-valor
const prod1 = {}
prod1.nome = 'Novo produto'
prod1.preco = 599.99

//outra forma de atribuir um par chave-valor
prod1['desconto'] = 0.40

console.log(prod1)

//outra forma de criar objeto
const prod2 = {
    nome: 'teste',
    valor: 79.90,
    objeto2: {
        teste: 'teste'
    }
}

console.log(prod2)