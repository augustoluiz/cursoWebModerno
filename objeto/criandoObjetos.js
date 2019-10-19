// usando a notação literal
const obj = {
    nome: "Augusto"
}
console.log(obj)

// Object em Js
const obj1 = new Object
obj1.nome = 'aaa'
console.log(obj1)

// Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getProcoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Notebook', 2999, 0.25)

console.log(p1.getProcoComDesconto())

// Função Factory
function criaObjFactory(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const objF = new criaObjFactory('Augusto', 1000, 2)

console.log(objF)
console.log(objF.getSalario())

// Object create
const filha = Object.create(null)
filha.nome = 'nome'
console.log(filha)