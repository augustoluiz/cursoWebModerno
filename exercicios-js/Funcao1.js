imprimirSoma(4, 3)

//resultado: 5
console.log(soma(2,3))
//resultado: 2
console.log(soma(2))

//função sem retorno
function imprimirSoma(a, b){
    console.log(a+b)
}

//função com retorno. O 'b=0' define o valor padrão de 0 para b. Quando não passar valores para b, ele
//assume o valor de 0
function soma(a, b=0){
    return a+b
}