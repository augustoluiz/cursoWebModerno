//Uma função anônima é uma função sem nome
const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
//passando uma função anônima
imprimirResultado(4, 4, function(x, y){
    return x - y
})

//com arrow function
imprimirResultado(3, 4, (x, y) => x*y)

const pessoa = {
    falar: function (nome){
        console.log(`Olá, ${nome}!`)
    }
}

pessoa.falar('Augusto')