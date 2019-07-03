//recurso introduzido no ES2015
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

//retira os atributos nome e idade de pessoa
const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

//tentando um atributo que não existe, retorna undefined
const {sobrenome: s, idade: id} = pessoa
console.log(s, id)

//retirando atributo de atributo
const {endereco:{logradouro: l, numero: num}} = pessoa
console.log(l, num)