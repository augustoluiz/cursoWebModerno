//em Js a herança é baseada em prototype
const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

//o __proto__ acessa o objeto pai na herança
console.log(ferrari.__proto__)
//true
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)

//o Objeto Object não tem prototype acima dele, é o pai dos demais
console.log(Object.prototype.__proto__)

function meuObjeto() {}
//ambas são funções
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype)
console.log(meuObjeto.prototype)