console.log(soma(1,2))
//function declaration
// posso chamaer a funcao antes mesmo de declarar ela
function soma (x, y) {
    return x + y
}

//function expression
//so posso chamar ela depois que declarar
const sub = function (x, y) {
    return x - y
}

console.log(sub(3,1))

//named function expression
//so posso chamar ela depois que declarar
//obs: é menos utilizada
const mult = function mult(x, y) {
    return x * y
}

console.log(mult(3,1))