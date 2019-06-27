//armazenando uma função na variável
const imprimirSoma = function (){
    console.log(2+3)
}

imprimirSoma()

//armazenando uma função arrow na variável
const soma = () =>{
    console.log(3+3)
}

soma()

//com parâmetro
const somaValores = (a, b) => {
    return a + b
}

console.log('Arrow Function com Parâmetro: '+somaValores(4,4))

//retorno implícito
const subtracao = (a, b) => a-b
console.log('Arrow Function com retorno implícito: '+subtracao(10, 1))