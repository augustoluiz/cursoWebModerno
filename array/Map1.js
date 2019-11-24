const nums = [1, 2, 3, 4, 5]

//For com proposito
let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado)

//arrow function já tem o return implícito
const soma = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma).map(triplo).map(paraDinheiro)

console.log(resultado)